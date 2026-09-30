const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3600); // preloader

  // Navigate to shop via header nav "Verhuur"
  await page.click('a[href="/assortiment"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "/tmp/shots3/20-listing-top.png" });

  await page.evaluate(() => window.scrollTo({ top: 500, behavior: "instant" }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "/tmp/shots3/21-listing-grid.png" });

  // click a category in sidebar
  const catLink = page.locator('a[href="/assortiment/drinks"]').first();
  if (await catLink.count()) {
    await catLink.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "/tmp/shots3/22-listing-category.png" });
  }

  // open a product detail
  await page.goto("http://localhost:4173/product/statafel-wit-110cm", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: "/tmp/shots3/23-product-top.png" });

  await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "/tmp/shots3/24-product-mid.png" });

  // add to request, open drawer
  await page.click('button:has-text("Toevoegen aan aanvraag")');
  await page.waitForTimeout(900);
  await page.screenshot({ path: "/tmp/shots3/25-drawer.png" });

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await page.waitForTimeout(800);
  await page.screenshot({ path: "/tmp/shots3/26-product-related.png" });

  // mobile listing
  await page.close();
  const mob = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await mob.goto("http://localhost:4173/assortiment", { waitUntil: "networkidle" });
  await mob.waitForTimeout(1000);
  await mob.screenshot({ path: "/tmp/shots3/m20-listing.png" });

  await mob.goto("http://localhost:4173/product/statafel-wit-110cm", { waitUntil: "networkidle" });
  await mob.waitForTimeout(1000);
  await mob.screenshot({ path: "/tmp/shots3/m21-product.png" });

  await browser.close();
  console.log("done");
})();
