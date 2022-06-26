import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

// server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Temperature conversion app is listening on port " + listener.address().port
  );
});
