# get the needed data from airtable to process
node -r esm -r dotenv/config airtable-downloader.js

node -r esm -r dotenv/config generate-static-countries-files-for-public-website.js
node -r esm -r dotenv/config get-worldbank-data.js
node -r esm -r dotenv/config inject-indicators-into-countries.js
