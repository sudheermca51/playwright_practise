import { test } from '@playwright/test'
test('pop up/alerts/', async ({ page }) => {

    await page.goto("file:///app/html-examples/pop-up.html");
    await page.getByRole('button', { name: 'Show Alert' }).click();
    await page.getByRole('button',{name:'Show Confirm'}).click();
    await page.getByRole('button',{name:'Show Prompt'}).click();
    page.on('dialog', async dialog => {
	
		console.log("Type: " + dialog.type());
		if(dialog.type()=='alert')
		{
			await page.waitForTimeout(5000);
			console.log("Message: " + dialog.message());
			await dialog.accept();
		}
		if(dialog.type()=='confirm')
		{
			await page.waitForTimeout(5000);
			console.log("Message: " + dialog.message());
			await dialog.accept();
		}
		else if(dialog.type()=='confirm')
		{
			console.log("Message: " + dialog.message());
			await dialog.dismiss();
		
		}
        if(dialog.type()=='prompt')
		{
			console.log("Message: " + dialog.message());
			await dialog.accept("Playwright Tutorial");
            const promptText = await page.locator("#promptResult").textContent();
            console.log("Prompt Text: " + promptText);
		}
		 
    });
     
});