import { test, expect } from "@playwright/test";

test("takes me to the hexham & Newcastle page when I click on the hexham&NewcastleLink'", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/leaderboard");

  const aboutLink = page.getByTestId("hexhamAndNewcastleLink");

  await aboutLink.click();

  await expect(page).toHaveURL("http://localhost:3000/diocese/hexham_and_newcastle")

  const heading = page.getByTestId("Hexham & NewcastlePageTitle")
  await expect(heading).toBeInViewport();
});

test("takes me to the northampton page when I click on the hexham&NewcastleLink'", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/leaderboard");

  const aboutLink = page.getByTestId("northamptonLink");

  await aboutLink.click();

  await expect(page).toHaveURL("http://localhost:3000/diocese/northampton")

  const heading = page.getByTestId("NorthamptonPageTitle")
  await expect(heading).toBeInViewport();
});









