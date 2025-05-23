import { diocesesData } from "@/data/dioceseMapData";
import { validDioceseNames } from "@/data/enums";
import "@testing-library/jest-dom";

describe("Dioceses Data Collection", () => {
  const dioceseNames = diocesesData.features.map((diocese) => {
    return diocese.properties.name;
  });

  validDioceseNames.forEach((validName) => {
    it(`includes data for the Diocese of ${validName}`, () => {
      expect(dioceseNames.includes(validName)).toBe(true);
    });
  });

  dioceseNames.forEach((name) => {
    it(`uses a valid DioceseName for ${name}`, () => {
      expect(validDioceseNames.includes(name)).toBe(true);
    });
  });

  const diocesesWithCleanedNames: [string, string][] = [
    ["Arundel & Brighton", "Arundel_and_Brighton"],
    ["East Anglia", "East_Anglia"],
    ["Hexham & Newcastle", "Hexham_and_Newcastle"]
  ];

  diocesesWithCleanedNames.forEach(([name, cleanName]) => {
    it(`has a cleaned name for the diocese of ${name} so playwright tests can find it`, () => {
      const diocese = diocesesData.features.find(
        (diocese) => diocese.properties.name == name
      );
      expect(diocese?.properties.cleanedName == cleanName).toBe(true);
    });
  });
});
