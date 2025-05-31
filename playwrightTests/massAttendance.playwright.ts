import { test, expect } from "@playwright/test";

const pageAndImgUrls = [
  ["massAttendance", "images/minimalist_National_Mass_Attendance.png"],
  ["conversions", "images/minimalist_National_Conversions.png"],
];

pageAndImgUrls.forEach((pageAndImgUrl) => {
  const [dashboardPage, imgUrl] = pageAndImgUrl;
  test(`has the correct title for the ${dashboardPage} page`, async ({
    page,
  }) => {
    await page.goto(`http://localhost:3000/${dashboardPage}`);

    await expect(page).toHaveTitle(/UK Catholic Dashboard/);
  });

  test(`displays a placeholder image whilst the lineGraph is being plotted on the ${dashboardPage} page`, async ({
    page,
  }) => {
    await page.goto(`http://localhost:3000/${dashboardPage}`);

    const placeHolderImage = page.getByTestId("placeholderChartImage");
    await expect(placeHolderImage).toBeVisible();
    await expect(placeHolderImage).toHaveAttribute("src", imgUrl);

    const plottedLineGraph = page.getByTestId("plottedLineGraph");
    await expect(plottedLineGraph).toBeVisible();
    await expect(placeHolderImage).not.toBeVisible();
  });
});

