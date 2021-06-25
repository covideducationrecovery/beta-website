const countriesFilename = './countries.json'
const responsesPublicFilename = './responses-public.json'
const responseRoundsFilename = './response-rounds.json'
const outputFilename = "./global.v2.json"
const outputMinifiedFilename = "./global.v2.min.json"

const countries = require(countriesFilename)
const responsesPublic = require(responsesPublicFilename)
const responseRounds = require(responseRoundsFilename)


for (responsePublic of responsesPublic) {
  responsePublic.roundId = responseRounds.find(responseRound => responseRound.startDate <= responsePublic.responseDate && responsePublic.responseDate <= responseRound.endDate)?.roundNumber
  responsePublic.type = 'observed'
}

const responsesPublicMap = new Map(responsesPublic.map(responsePublic => [responsePublic.__id, responsePublic]))

countries.forEach((country) => {
  country.responsesPublic = country.responsesPublic?.map(responsePublicId => responsesPublicMap.get(responsePublicId))
})

const fs = require('fs')

try {
  fs.writeFileSync(outputFilename, JSON.stringify(countries, null, 2), 'utf8')
  console.log(`${countries.length} records written to '${outputFilename}'`)
} catch (err) {
  console.error(`error writing ${outputFilename}`, err)
}
try {
  fs.writeFileSync(outputMinifiedFilename, JSON.stringify(countries), 'utf8')
  console.log(`${countries.length} records written to '${outputMinifiedFilename}'`)
} catch (err) {
  console.error(`error writing ${outputFilename}`, err)
}