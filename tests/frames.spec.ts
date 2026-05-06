import { test } from '@playwright/test'
test('frames example', async ({ page }) => {

    await page.goto("file:///C:/playwright_tutorial/frames.html");
    const childFrame = page.frameLocator("#myframe");
    await childFrame.getByPlaceholder("Enter your name").fill("Playwright Tutorial");
    const title = await page.title();
    console.log("Title: " + title);

    const frameTitle = await childFrame.locator("title").textContent();
    console.log("Frame Title: " + frameTitle);

});

 