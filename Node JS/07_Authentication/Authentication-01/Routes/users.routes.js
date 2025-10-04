import express from "express";
import db from "../DB/index.js"
import {usersTable} from "../DB/schema.js"
import {eq} from "drizzle-orm"
import { createHmac, randomBytes } from "crypto";
// Removed unused imports: import { error, table } from "console";

const router = express.Router();


// -----------------------------------------------------------------------------------
// Login Route (GET /user) - Checking user credentials
// -----------------------------------------------------------------------------------
router.get("/", async (req , res) => {
    // 1. Destructure email and password from the request body (Login usually uses POST, but matching your GET structure for now)
    const { email , password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required for login." });
    }

    // 2. Query the user, ensuring we select all necessary columns (email, salt, and password)
    const [existinguser] = await db.
    select({
        email: usersTable.email,
        salt: usersTable.salt,
        passwordHash: usersTable.password // Assuming 'password' column holds the stored hash
    })
    .from(usersTable)
    .where(eq(usersTable.email, email)); // Simplified where clause


    // 3. Check if the user exists
    if(!existinguser){
        return res.status(400).json({error : `User with email ${email} does not exist`})
    } 
    
    // 4. User exists, proceed to verify password
    const salt = existinguser.salt;
    const existingHash = existinguser.passwordHash; // Use the property selected from the DB

    // 5. Calculate the hash of the provided password using the retrieved salt
    // NOTE: The 'secret' variable used previously for signup is now 'salt'
    const newhash = createHmac("sha256" , salt).update(password).digest("hex");

    // 6. Compare the new hash with the hash stored in the database
    if(newhash !== existingHash){
        return res.status(404).json({error : "Incorrect password"})
    } else {
        // 7. Successful login
        return res.status(200).json({message : "Login successful!", user: { email: existinguser.email }});
    }

    // NOTE: The 'if/else' block that followed the router.get was removed because it was outside the function scope.
});


// ---------------------------------------------------------------------------------------
// SignUp Route (POST /user/signup)
// ---------------------------------------------------------------------------------------
router.post("/signup" , async(req, res) => {
    // 1. Destructure the request body from req.body
    const { name , email , password } = req.body;

    // Basic input validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required for signup." });
    }

    // 2. DEFINE and INITIALIZE variables before they are used
    const secret = randomBytes(32).toString("hex")
    const hasdedpassword = createHmac("sha256" , secret).update(password).digest("hex")

    // 3. Check for existing user
    const [existinguser] = await db.select()
    .from(usersTable)
    .where(eq(usersTable.email, email)); // Simplified where clause

    if(existinguser) {
        // Use 'return' to stop execution after sending response
        return res.status(400).json({
            message: "User Already Exists"
        })
    } else {
        // 4. Insert new user
       const [user] = await db.insert(usersTable).values({
            name,
            email,            
            salt: secret, 
            password: hasdedpassword
        }).returning({id: usersTable.id , email: usersTable.email});
        
        // Use 'return' to stop execution after sending response
        return res.status(201).json({
            message: "User Created Successfully", 
            user: { 
                id: user.id,
                email: user.email
            },
        });
    }    
})

export default router;
