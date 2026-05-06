import { test,expect} from "@playwright/test";
test ('radio button',async ({page})=>{

await page.goto("file:///C:/playwright_tutorial/forms.html");

const radioButton = page.locator("//input[@value='male']");
 
await radioButton.nth(0).isVisible();
await radioButton.nth(0).check();
await page.waitForTimeout(5000);

expect(radioButton.nth(0)).toBeChecked();




});