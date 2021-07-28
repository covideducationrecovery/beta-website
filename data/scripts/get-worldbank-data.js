const wbDataFolderName = './data/worldbank'
const countriesOutputFilename = './data/global-indicator-data.json'
const indicatorDescriptionsFilename = "./data/global-indicator-descriptions.json"

const startTime = Date.now();

const dataMap = new Map()
const countriesMap = new Map()
const indicatorDescriptionsMap = new Map()

const fs = require('fs')

// get an array of all the items in the directory and filter them for .json files
directoryEntries = fs.readdirSync(wbDataFolderName)
  .filter(directoryEntry => directoryEntry.endsWith('.json'))
console.debug(`found ${directoryEntries.length} json files in ${wbDataFolderName}`)

for (directoryEntry of directoryEntries) {
  const thisFilename = `${wbDataFolderName}/${directoryEntry}`
  try {
    dataMap.set(directoryEntry, JSON.parse(fs.readFileSync(thisFilename)))  
  } catch (err) {
    console.error(`error reading file ${thisFilename}: ${err}`)
  }
}
console.debug(`loaded and parsed ${dataMap.size} files from ${wbDataFolderName}`)

for (const [key, value] of dataMap.entries()) {
  // make sure we aren't missing any data; if we are, don't process this file and report the error
  if (value[0].pages > value[0].page) {
    console.error(`${key} has more information that wasn't downloaded`)
  } else {
    for (const country of value[1]) {
      const indicatorId = `wb_${country.indicator.id.split('.').join('_')}`
      const indicators = {
        [indicatorId]: {
          value: country.value,
          date: country.date
        }
      }
      indicatorDescriptionsMap.set(indicatorId, {id: indicatorId, description: country.indicator.value})
      if (countriesMap.has(country.countryiso3code)) {
        newCountry = countriesMap.get(country.countryiso3code)
        newCountry.indicators = {...newCountry.indicators, ...indicators}
      } else {
        const thisCountry = {
          iso3166Alpha3Code: country.countryiso3code,
          iso3166Alpha2Code: country.country.id,
          name: country.country.value,
          indicators: indicators
        }
        countriesMap.set(thisCountry.iso3166Alpha3Code, thisCountry)
      }
    }
  }
}

const countries = Array.from(countriesMap.values());
const indicatorDescriptions = Array.from(indicatorDescriptionsMap.values())

fs.writeFile(countriesOutputFilename, JSON.stringify(countries, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`${countries.length} records written to '${countriesOutputFilename}'`);
});

fs.writeFile(indicatorDescriptionsFilename, JSON.stringify(indicatorDescriptions, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`${indicatorDescriptions.length} records written to '${indicatorDescriptionsFilename}'`);
});

console.log(`processing time: ${Date.now() - startTime}ms`)