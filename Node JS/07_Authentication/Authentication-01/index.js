import express from "express";
import Router from "./Routes/users.routes.js";

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

app.use("/user", Router );

app.get("/", (req, res) => {
    return res.json({
        message: "Server is UP and RUNNING"
    });
});