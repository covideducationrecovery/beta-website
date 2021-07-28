// set configuration options here
// YOUR AIRTABLE API KEY MUST BE SET IN THE ENVIRONEMNT VARIABLE 'AIRTABLE_API_KEY'!

// airtable base identifier, go to https://airtable.com/api and choose your base, look for "The ID Of this base is ..."
const airtableBase = process.env.AIRTABLE_BASE_ID;

// set to true if you want to eliminate supplemental information from each record (still preserves record id, as they are used to link records with other tables)
const reduceToFields = true;

// list the tables to download. Each one should have the following parameters:
//    table: the displayed name of the table (including spaces, special characters, etc)
//    view: the displayed name of the view (use 'Grid view' if you aren't sure); note that views affect row selection, column selection, sort order, and record grouping
//    filename: the name of the local file which you'd like to save the data to. It will be replaced if it already exists.
const airtableTables = [
  {table: 'responseTracking', view: 'export', filename: '../globalResponseTracking.json'},
  {table: 'responses', view: 'export', filename: '../globalResponses.json'},
  {table: 'countries', view: 'export', filename: '../countries.json'},
  {table: 'responsesPublic', view: 'export', filename: '../responsesPublic.json'}
];

require('dotenv').config();

const Airtable = require('airtable');
const fs = require('fs');

async function downloadTableToFile (base, options) {
  console.log(`downloading ${JSON.stringify(options)}`)
  let airtableRecords = [];
  base(options.table)
    .select({view: options.view})
    .eachPage(function page (records, fetchNextPage) {
      for (record of records) {
        if (reduceToFields) {
          airtableRecords.push({id: record.id, fields: record.fields});
        } else {
          airtableRecords.push(record);
        }
      }
      fetchNextPage();
    }, function done (err) {
      if (err) {console.error(`error in done: ${err}`); process.exitCode = 1; return 1}
      outputString = JSON.stringify(airtableRecords, null, 2);
      fs.writeFile(options.filename, outputString, 'utf8', (err) => {
        if (err) {
          console.error(`error writing file '${options.filename}': ${err}`); process.exitCode = 1; return 1
        } else {
          console.log(`${airtableRecords.length} records written to '${options.filename}'`)
        }
      })
    })
}

if (process.env.AIRTABLE_API_KEY) {
  const airtableAPIKey = process.env.AIRTABLE_API_KEY;
  const base = new Airtable({apiKey: airtableAPIKey}).base(airtableBase);
  console.log(`airtable connection initialized; downloading ${airtableTables.length} tables`);
  for (airtableTable of airtableTables) {
    if (!downloadTableToFile(base, airtableTable)) {
      break;
    };
  }
} else {
  console.error('Missing environment variable AIRTABLE_API_KEY. Please create it and set your airtable API key as the value.');
  process.exitCode = 1;
}
