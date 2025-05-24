import { test, expect } from "@playwright/test";

test("has the correct title", async ({ page }) => {
  await page.goto("http://localhost:3000/about");

  await expect(page).toHaveTitle(/UK Catholic Dashboard/);
});


test("takes me to the home page when I click on the heading", async ({ page }) => {
  await page.goto("http://localhost:3000/about");

  const aboutLink = page.getByTestId("homePageLink");

  await aboutLink.click();

  await expect(page).toHaveURL("http://localhost:3000/")
  const homePageSubheading = page.getByText("Showing Catholic data across England & Wales");
  expect(homePageSubheading).toBeInViewport;
});
