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
  });
});

test("takes me to the UKHSA Dashboard when I click on its link in the footer", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  const aboutLink = page.getByTestId("UKHSAlink");

  await aboutLink.click();

  await expect(page).toHaveURL("https://ukhsa-dashboard.data.gov.uk/");
});

test("takes me to the Open Government Licence v3 when I click on its link in the footer", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  const aboutLink = page.getByTestId("govLicenceLink");

  await aboutLink.click();

  await expect(page).toHaveURL(
    "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
  );
});

test("takes me to the Github repository when I click on its link in the footer", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  const aboutLink = page.getByTestId("dashboardGithubLink");

  await aboutLink.click();

  await expect(page).toHaveURL("https://github.com/sf17490/catholic-dashboard");
});
