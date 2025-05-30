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

const dataPages = ["massAttendance", "conversions"];

dataPages.forEach((dataPage) => {
  test(`takes me to the ${dataPage} page when I click on the ${dataPage} skeleton`, async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    const pageLink = page.getByTestId(`${dataPage}Link`);

    await pageLink.click();

    await expect(page).toHaveURL(`http://localhost:3000/${dataPage}`);
    const aboutHeading = page.getByText("About the Catholic Data Dashboard");
    expect(aboutHeading).toBeInViewport;
  });
});
