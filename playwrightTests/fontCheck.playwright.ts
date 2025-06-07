import { test, expect } from "@playwright/test";

/*
  The Catholic Data Dashboard is not a GOV.UK service, therefore we cannot use the GDS Transport typeface
    Read all about it: https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk#if-your-service-isnt-on-govuk 
*/

const sitePages = ["", "about", "massAttendance", "conversions"];

sitePages.forEach((sitePage) => {
  const name = sitePage.length == 0 ? "home" : sitePage;
  test(`never uses the GDS Transport font on the ${name} page`, async ({
    page,
  }) => {
    await page.goto(`http://localhost:3000/${sitePage}`);

    const textElements = await page.$$(
      "h1, h2, h3, p, i, span, div, li, a, td, th"
    );

    for (const element of textElements) {
      const fontFamily = await element.evaluate(
        (el) => getComputedStyle(el).fontFamily
      );

      expect(fontFamily).not.toContain("GDS Transport");
    }
  });
});

test("p and i elements globally behave like the govuk-body class", async ({page})=>{
      await page.goto(`http://localhost:3000/massAttendance`);

      const parasAndItalics = await page.$$(
        "p, i"
      )

      for (const element of parasAndItalics){
        const fontSize = await element.evaluate(
          (el) => getComputedStyle(el).fontSize
        )
        expect(fontSize).toContain("19px") //16px on small screens
      }


})
