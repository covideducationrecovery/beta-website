const countriesFilename = '../countries.json';
const responsesPublicFilename = './responsesPublic.json';
const globalPublicFilename = "../global.json";
const globalPublicMinifiedFilename = "../global.min.json";
const globalPublicCSVFilename = '../global.csv';

const fs = require('fs');
const fastcsv = require('@fast-csv/format')

const countries = require(countriesFilename);
const responsesPublic = require(responsesPublicFilename);

const countryFieldsForExport = [
    'countryName',
    'wbCountryCode',
    'm49code',
    'iso3166Alpha2Code',
    'wbRegion',
    'wbRegionCode',
    'wbIncomeLevelCode',
    'wbIncomeLevelName',
    'owidHasVaccine'
]

const mostRecentResponseFieldsForExport = [
    { responseField: 'responseDate', countryField: 'mostRecentResponseDate' },
    { responseField: 'extendedBreakCode', countryField: 'mostRecentExtendedBreakCode' },
    { responseField: 'educationStatusCode', countryField: 'mostRecentEducationStatusCode' },
    { responseField: 'educationStatusPrePrimaryCode', countryField: 'mostRecentEducationStatusPrePrimaryCode' },
    { responseField: 'educationStatusPrimaryCode', countryField: 'mostRecentEducationStatusPrimaryCode' },
    { responseField: 'educationStatusLowerSecondaryCode', countryField: 'mostRecentEducationStatusLowerSecondaryCode' },
    { responseField: 'educationStatusUpperSecondaryCode', countryField: 'mostRecentEducationStatusUpperSecondaryCode' },
    { responseField: 'educationStatusHigherCode', countryField: 'mostRecentEducationStatusHigherCode' },
    { responseField: 'educationStatusVocationalCode', countryField: 'mostRecentEducationStatusVocationalCode' },
    { responseField: 'vaccineAvailabilityForTeachersCode', countryField: 'mostRecentVaccineAvailabilityForTeachersCode' },
    { responseField: 'inPersonAdditionalSupportPrePrimary', countryField: 'mostRecentInPersonAdditionalSupportPrePrimary' },
    { responseField: 'inPersonAdditionalSupportPrimary', countryField: 'mostRecentInPersonAdditionalSupportPrimary' },
    { responseField: 'inPersonAdditionalSupportLowerSecondary', countryField: 'mostRecentInPersonAdditionalSupportLowerSecondary' },
    { responseField: 'inPersonAdditionalSupportUpperSecondary', countryField: 'mostRecentInPersonAdditionalSupportUpperSecondary' },
    { responseField: 'remoteEducationModalitiesPrePrimaryCode', countryField: 'mostRecentRemoteEducationModalitiesPrePrimaryCode' },
    { responseField: 'remoteEducationModalitiesPrimaryCode', countryField: 'mostRecentRemoteEducationModalitiesPrimaryCode' },
    { responseField: 'remoteEducationModalitiesLowerSecondaryCode', countryField: 'mostRecentRemoteEducationModalitiesLowerSecondaryCode' },
    { responseField: 'remoteEducationModalitiesUpperSecondaryCode', countryField: 'mostRecentRemoteEducationModalitiesUpperSecondaryCode' },
    { responseField: 'remoteEducationModalitiesHigherCode', countryField: 'mostRecentRemoteEducationModalitiesHigherCode' },
    { responseField: 'remoteEducationModalitiesVocationalCode', countryField: 'mostRecentRemoteEducationModalitiesVocationalCode' },
]

const csvHeaders = [
  'countryName',
  'wbCountryCode',
  'm49code',
  'iso3166Alpha2Code',
  'wbRegion',
  'wbRegionCode',
  'wbIncomeLevelName',
  'wbIncomeLevelCode',
  'owidHasVaccine',
  'mostRecentResponseDate',
  'mostRecentExtendedBreakCode',
  'mostRecentEducationStatusCode',
  'mostRecentEducationStatusPrePrimaryCode',
  'mostRecentEducationStatusPrimaryCode',
  'mostRecentEducationStatusLowerSecondaryCode',
  'mostRecentEducationStatusUpperSecondaryCode',
  'mostRecentEducationStatusHigherCode',
  'mostRecentEducationStatusVocationalCode',
  'mostRecentVaccineAvailabilityForTeachersCode',
  'mostRecentInPersonAdditionalSupportPrePrimary',
  'mostRecentInPersonAdditionalSupportPrimary',
  'mostRecentInPersonAdditionalSupportLowerSecondary',
  'mostRecentInPersonAdditionalSupportUpperSecondary',
  'mostRecentRemoteEducationModalitiesPrePrimaryCode',
  'mostRecentRemoteEducationModalitiesPrimaryCode',
  'mostRecentRemoteEducationModalitiesLowerSecondaryCode',
  'mostRecentRemoteEducationModalitiesUpperSecondaryCode',
  'mostRecentRemoteEducationModalitiesHigherCode',
  'mostRecentRemoteEducationModalitiesVocationalCode',
]

responsesPublic.sort((response1, response2) => {
    date1 = new Date(response1.fields.responseDate).getTime();
    date2 = new Date(response2.fields.responseDate).getTime();
    if (date1 > date2) { return 1 }
    if (date1 < date2) { return -1 }
    return 0;
})

const countriesMap = new Map()
for (country of countries) {
    country.responsesPublic = [];
    countriesMap.set(country.id, country)
}

for (response of responsesPublic) {
    countriesMap.get(response.fields.country[0]).responsesPublic.push(response);
}

countriesOutput = [];
countriesCSVOutput = [];
for (country of countries) {
  const countryOutput = {
    id: country.id,
    fields: {}
  }
  
  for (countryField of countryFieldsForExport) {
    if (country.fields[countryField]) {
      countryOutput.fields[countryField] = country.fields[countryField]
    }
  }

  if (country.responsesPublic.length > 0) {
    const mostRecentResponse = country.responsesPublic.pop();
    for (mapping of mostRecentResponseFieldsForExport) {
      if (mostRecentResponse.fields[mapping.responseField]) {
        countryOutput.fields[mapping.countryField] = mostRecentResponse.fields[mapping.responseField];
      }
    }
  }
  countriesOutput.push(countryOutput);
  countriesCSVOutput.push(countryOutput.fields);
}

fs.writeFile(globalPublicFilename, JSON.stringify(countriesOutput, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(`error writing file '${globalPublicFilename}': ${err}`); process.exitCode = 1; return 1
  } else {
    console.log(`${countriesOutput.length} records written to '${globalPublicFilename}'`)
  }
})

fs.writeFile(globalPublicMinifiedFilename, JSON.stringify(countriesOutput), 'utf8', (err) => {
  if (err) {
    console.error(`error writing file '${globalPublicMinifiedFilename}': ${err}`); process.exitCode = 1; return 1
  } else {
    console.log(`${countriesOutput.length} records written to '${globalPublicMinifiedFilename}'`)
  }
})

try {
  fastcsv.writeToPath(globalPublicCSVFilename,countriesCSVOutput, {writeHeaders: true, headers: csvHeaders});
  console.log(`${countriesOutput.length} records written to '${globalPublicCSVFilename}'`)
} catch (e) {
  console.error(`error writing file '${globalPublicCSVFilename}': ${err}`)
} 
