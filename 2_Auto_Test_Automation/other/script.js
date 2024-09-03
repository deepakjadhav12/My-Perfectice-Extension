const fs = require("fs");

const inputFile = "id_details.json";
const outputFile = "id_level.json";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const practiceSetByExam = jsonData.practiceSetByExam || [];
    if (!Array.isArray(practiceSetByExam)) {
      throw new Error("Invalid format: practiceSetByExam is not an array");
    }

    const levelsObject = {
      level1: [],
      level2: [],
      level3: [],
      level4: [],
      level5: [],
    };

    practiceSetByExam.forEach((test) => {
      const { _id, level } = test;
      if (level && typeof level === "number" && level >= 1 && level <= 5) {
        levelsObject[`level${level}`].push(test._id);
      } else {
        console.warn(`Skipping test ${_id} with invalid or missing level`);
      }
    });

    fs.writeFile(outputFile, JSON.stringify(levelsObject, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(`Successfully wrote ${outputFile}`);
    });
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }
});
