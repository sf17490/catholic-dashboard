import { test, expect } from "@playwright/test";

test("has the correct title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/UK Catholic Dashboard/);
});

test("takes me to the about page when I click on about", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const aboutLink = page.getByTestId("aboutLink");

  await aboutLink.click();

  const aboutHeading = page.getByText("About the Catholic Data Dashboard");
  expect(aboutHeading).toBeInViewport;
});
