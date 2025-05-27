import { diocesesData } from "@/data/dioceseMapData";
import { test, expect } from "@playwright/test";

test("has the correct title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/UK Catholic Dashboard/);
});

//TODO: uncomment this when miniMap gets added again 
// diocesesData.features.forEach((diocese) => {
//   const dioceseName = diocese.properties.name;

//   test(`highlights the correct polygon when I hover over ${dioceseName}`, async ({
//     page,
//   }) => {
//     await page.goto("http://localhost:3000/");

//     const dioceseDisplayName = page.getByText(dioceseName);

//     const diocesePolygon = page.locator(
//       `.leaflet-polygon-${diocese.properties.cleanedName}`
//     );

//     const colourRed = "rgb(212, 89, 98)";

//     await expect(dioceseDisplayName).toBeVisible;

//     await page.hover(`text="${dioceseName}"`);

//     await expect(dioceseDisplayName).toHaveClass("MiniMap_embold__wgfVB");
//     await expect(diocesePolygon).toHaveCSS("fill", colourRed);
//   });

  //TODO:
  //test(`highlights the correct dioceseName when I hover over the ${dioceseName} polygon`)
// });
