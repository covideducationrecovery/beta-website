const responsesInputFilename = './data/responses-public-to-upload.json';
const responsesOutputFilename = './data/responses-public-to-upload.json';


// this script aggregates the primary, lower secondary, and upper secondary education status codes
// and puts them in the educationStatusCode field (suitable for showing on the website map, etc)

responsesInput = require(responsesInputFilename);

responsesOutput = responsesInput.map((response) => {
  response.educationStatusCode = []
    .concat(response.educationStatusPrimaryCode ? response.educationStatusPrimaryCode : [])
    .concat(response.educationStatusLowerSecondaryCode ? response.educationStatusLowerSecondaryCode : [])
    .concat(response.educationStatusUpperSecondaryCode ? response.educationStatusUpperSecondaryCode: [])
    .filter((value) => (value))
    .reduce((newArray, value) => {
      if (!newArray.includes(value)) {
        newArray.push(value);
      }
      return newArray
    }, [])
  return response
})

const fs = require('fs');
fs.writeFile(responsesOutputFilename, JSON.stringify(responsesOutput, null, 2),'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exitCode = 1;
  } else {
    console.info(`${responsesOutput.length} records written to '${responsesOutputFilename}'`);
  }
})