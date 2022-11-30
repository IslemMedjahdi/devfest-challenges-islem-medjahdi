import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const proxy = "http://my.proxy.com:3001";
const username = "gdg_algiers";
const password = "devfest2022";

(async () => {
  let launchOptions = { headless: false, args: ["--start-maximized"] };
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.authenticate({ username: username, password: password });
  await page.goto("https://devfest22-recipes-heaven.gdgalgiers.com");
  await page.goto(
    "https://devfest22-recipes-heaven.gdgalgiers.com/api/recipes"
  );
  await page.content();
  const innerText = await page.evaluate(() => {
    return JSON.parse(document.querySelector("body").innerText);
  });
  console.log(innerText);
  await fs.promises.writeFile(
    path.join(".", "recepies.json"),
    JSON.stringify({ recepies: innerText }),
    "utf-8"
  );
  await browser.close();
  console.log("I'm scraping information for you lazy stackoverflow-er ...");
})();
