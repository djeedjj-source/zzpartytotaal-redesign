const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3600); // preloader

  await page.screenshot({ path: "/tmp/shots/01-hero.png" });

  // scroll through the page so in-view animations fire
  const height = await page.evaluate(() => document.body.scrollHeight);
  const steps = Math.ceil(height / 900);
  for (let i = 1; i <= steps; i++) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), i * 900);
    await page.waitForTimeout(700);
  }

  const ids = ["diensten", "assortiment", "catering", "werkwijze", "werkgebied", "contact"];
  for (const id of ids) {
    const el = page.locator(`#${id}`);
    try {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1200);
      await el.screenshot({ path: `/tmp/shots/sec-${id}.png` });
    } catch (e) {
      console.log("skip", id, e.message);
    }
  }

  await page.evaluate(() => window.scrollTo({ top: 950, behavior: "instant" }));
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "/tmp/shots/02-intro.png" });

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "/tmp/shots/09-footer.png" });

  await browser.close();
  console.log("done");
})();
