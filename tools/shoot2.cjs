const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();

  // --- desktop checks ---
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3600);

  // ticker band just under hero
  await page.evaluate(() => window.scrollTo({ top: 620, behavior: "instant" }));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "/tmp/shots2/10-ticker.png" });

  // services bento fresh (fills viewport after scrolled)
  const svc = page.locator("#diensten");
  await svc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "/tmp/shots2/11-diensten-view.png" });

  // assortment pinned mid-scroll
  await page.evaluate(() => {
    const el = document.querySelector("#assortiment");
    const r = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + r.top + window.innerHeight * 1.2, behavior: "instant" });
  });
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "/tmp/shots2/12-assortiment-view.png" });

  await page.close();

  // --- mobile checks ---
  const mob = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mob.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await mob.waitForTimeout(3600);
  await mob.screenshot({ path: "/tmp/shots2/m1-hero.png" });

  // open mobile menu
  await mob.tap('button[aria-label="Menu openen"]');
  await mob.waitForTimeout(900);
  await mob.screenshot({ path: "/tmp/shots2/m2-menu.png" });
  await mob.tap('button[aria-label="Menu sluiten"]');
  await mob.waitForTimeout(700);

  // intro + assortment carousel
  await mob.evaluate(() => window.scrollTo({ top: 1500, behavior: "instant" }));
  await mob.waitForTimeout(1100);
  await mob.screenshot({ path: "/tmp/shots2/m3-intro.png" });

  await mob.evaluate(() => {
    const el = document.querySelector("#assortiment");
    el.scrollIntoView({ behavior: "instant" });
  });
  await mob.waitForTimeout(1100);
  await mob.evaluate(() => window.scrollBy(0, 320));
  await mob.waitForTimeout(900);
  await mob.screenshot({ path: "/tmp/shots2/m4-assortiment.png" });

  await mob.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await mob.waitForTimeout(1100);
  await mob.screenshot({ path: "/tmp/shots2/m5-footer.png" });

  await browser.close();
  console.log("done");
})();
