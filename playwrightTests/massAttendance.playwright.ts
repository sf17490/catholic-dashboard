import { test, expect } from "@playwright/test";

test("has the correct title", async ({ page }) => {
  await page.goto("http://localhost:3000/massAttendance");

  await expect(page).toHaveTitle(/UK Catholic Dashboard/);
});

test("displays a placeholder image whilst the lineGraph is being plotted", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/massAttendance");

  const placeHolderImage = page.getByTestId("placeholderChartImage");
  expect(placeHolderImage).toBeVisible();

  const plottedLineGraph = page.getByTestId("plottedLineGraph");
  await expect(plottedLineGraph).toBeVisible();
  expect(placeHolderImage).not.toBeVisible();
});
