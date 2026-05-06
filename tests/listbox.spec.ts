import {test} from "@playwright/test";
import {expect} from "@playwright/test";

test('list box',async ({page})=>{

await page.goto("file:///C:/playwright_tutorial/forms.html");

//count of options
const options = page.locator('#country');
await options.selectOption('India');
await page.waitForTimeout(5000);

const selectedOptionText = await options.locator('option:checked').textContent();
console.log("Selected option text: " + selectedOptionText);


const listOfOptions = page.locator("//select[@id='country']/option");
const count = await listOfOptions.count();
console.log("Total options in the list box: " + count);

console.log("the first  "+ listOfOptions.nth(0).textContent());

for (let i=0; i<count; i++){
    const optionText = await listOfOptions.nth(i).textContent();
    const optionValue = await listOfOptions.nth(i).getAttribute('value');
    console.log("Option " + (i+1) + ": " + optionText);
    console.log("Option " + (i+1) + " value: " + optionValue);
}

});