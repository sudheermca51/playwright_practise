import {test} from "@playwright/test";
import {expect} from "@playwright/test";
test('list box',async ({page})=>{

    page.goto("");
    const name = page.locator("");
    console.log("name:: " + name);

    


});