import { test, expect } from "@playwright/test";

const pageAndImgUrls = [
  ["massAttendance", "images/minimalist_National_Mass_Attendance.png"],
  ["conversions", "images/minimalist_National_Conversions.png"],
];

pageAndImgUrls.forEach((pageAndImgUrl) => {
  const [pageTopic, imgUrl] = pageAndImgUrl;

  test.describe(`The ${pageTopic} page`, () => {
    test(`has the correct title`, async ({ page }) => {
      await page.goto(`http://localhost:3000/${pageTopic}`);

      await expect(page).toHaveTitle(/UK Catholic Dashboard/);
    });

    test(`displays the correct placeholder image whilst the lineGraph is being plotted`, async ({
      page,
    }) => {
      await page.goto(`http://localhost:3000/${pageTopic}`);

      const placeHolderImage = page.getByTestId("placeholderChartImage");
      await expect(placeHolderImage).toBeVisible();
      await expect(placeHolderImage).toHaveAttribute("src", imgUrl);

      const plottedLineGraph = page.getByTestId("plottedLineGraph");
      await expect(plottedLineGraph).toBeVisible();
      await expect(placeHolderImage).not.toBeVisible();
    });

    test("it provides a valid link to the Catholic Record Society", async ({
      page,
    }) => {
      await page.goto(`http://localhost:3000/${pageTopic}`);
      const citationLink = page.getByTestId("citationLink");
      await citationLink.click();
      await page.waitForURL("https://www.crs.org.uk/catholicism-in-numbers");
      const expectedRecordSocietyPage = page.getByText(
        "Towards Catholicism in Numbers by Timothea Kinnear"
      );
      await expect(expectedRecordSocietyPage).toBeVisible();
    });
  });
});
