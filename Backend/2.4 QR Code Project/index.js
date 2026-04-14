/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from "@inquirer/prompts";
import fs from "fs";
import qr from "qr-image";

const answer = await input({
  message: "Type or paste the url you want to convert to QR",
});

fs.writeFile("user_url.txt", answer, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File was created successfully.");
  }
});

let qr_png = qr.image(answer, { type: "png" });
qr_png.pipe(fs.createWriteStream("user_url_qr.png"));
