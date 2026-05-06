import { test } from "@playwright/test";
import { expect } from "@playwright/test";

test("Locator Test", async ({ page }) => {
  await page.goto("file:///C:/playwright_tutorial/login.html");
  //<button>Submit</button>
  const submitButton = page.getByRole("button", { name: "Submit" });
  await submitButton.isVisible();
  await submitButton.click();

  const statusText = await submitButton.textContent();
  console.log("Result :: " + statusText);
  await expect(submitButton).toBeVisible();

  const usernameInput = page.locator('input[name="username"]');
  await usernameInput.fill("admin");

  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.isVisible();
  await checkbox.check();
  await page.waitForTimeout(5000);

  const checkbox1 = page.getByLabel("English");
  await checkbox1.isVisible();
  await checkbox1.click();
  await page.waitForTimeout(5000);
});
