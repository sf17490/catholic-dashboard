import { diocesesData } from "@/data/dioceseMapData";
import { validDioceseNames } from "@/data/enums";
import "@testing-library/jest-dom";

describe("Dioceses Data Collection", () => {
  const dioceseNames = diocesesData.features.map((diocese) => {
    return diocese.properties.name;
  });

   validDioceseNames.forEach((validName)=> {
    it(`includes data for the Diocese of ${validName}`, () => {
      expect(dioceseNames.includes(validName)).toBe(true)
    })
  })

  dioceseNames.forEach((name) => {
    it(`uses a valid DioceseName for ${name}`, () => {
      expect(validDioceseNames.includes(name)).toBe(true);
    });
  });

 
});
