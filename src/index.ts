import { config } from "dotenv";
import express from "express";

config();

const app = express();

app.listen(process.env.SERVER_PORT, function () {
  console.log("Server is running on port ", process.env.SERVER_PORT);
});

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple HTML</title>
        </head>
        <body>
            <h1>Welcome to my Express server!</h1>
            <p>This is a simple HTML page.</p>
        </body>
        </html>
    `);
});
