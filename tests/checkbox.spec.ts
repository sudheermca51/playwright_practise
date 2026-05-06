import {test,expect} from "@playwright/test";
test('checkbox',async ({page})=>{
await page.goto("file:///C:/playwright_tutorial/forms.html");

const lang=page.getByLabel('Python');
await lang.click();
await expect(lang).toBeChecked();
console.log("Language selected: " + await lang.getAttribute('value'));
await page.waitForTimeout(5000);

const allchk = page.getByRole('checkbox');
const count = await allchk.count();
console.log("Total checkbox:"+ count);

for( let i=0;i<count;i++)
{
	await allchk.nth(i).click();
}
});