import { diocesesPlusRobotNames } from "@/data/strings";
import { test, expect } from "@playwright/test";

diocesesPlusRobotNames.forEach((pair) => {
  const diocese = pair[0];
  const robotName = pair[1];
  test(`When I navigate to the dioceseList on the home page, and I click on ${diocese}, then I am taken to the '${diocese}' page`, async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    const dioceseLink = page.getByTestId(`${robotName}Link`);

    await dioceseLink.click();

    await expect(page).toHaveURL(`http://localhost:3000/diocese/${robotName}`);

    const diocesePageHeader = page.getByTestId(`${diocese}PageTitle`);

    await expect(diocesePageHeader).toBeInViewport();
  });
});
