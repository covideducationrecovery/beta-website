const countriesInputFilename = '../global.json'
const indicatorsFilename = '../global-indicator-data.json'
const missingCountriesFilename = '../unmatched-country-indicators.json'
const countriesOutputFilename = '../global-with-indicators.json'
const countriesOutputMinifiedFilename = '../global-with-indicators.min.json'

const startDate = Date.now()

const countries = require(countriesInputFilename)
const indicators = require(indicatorsFilename)
const missingCountries = []

for (const indicator of indicators) {
  const country = countries.find(country => country.fields.wbCountryCode === indicator.iso3166Alpha3Code)
  if (country) {
    country.fields.indicators = indicator.indicators
  } else {
    missingCountries.push({name: indicator.name, iso3: indicator.iso3166Alpha3Code, iso2: indicator.iso3166Alpha2Code})
  }
}

const countriesWithNoIndicators = countries
  .reduce((array, country) => {
    if (!country.fields.indicators) { return array.concat(country.fields.countryName) }
    else { return array }
  }, [])

console.log(`countries with no indicators: ${countriesWithNoIndicators.join(', ')}`)

const fs = require('fs')

fs.writeFile(missingCountriesFilename, JSON.stringify(missingCountries, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`${missingCountries.length} records written to '${missingCountriesFilename}'`);
});

fs.writeFile(countriesOutputFilename, JSON.stringify(countries, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`${countries.length} records written to '${countriesOutputFilename}'`);
});

fs.writeFile(countriesOutputMinifiedFilename, JSON.stringify(countries), 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`${countries.length} records written to '${countriesOutputMinifiedFilename}'`);
});

console.log(`processing time: ${Date.now() - startDate}ms`)
