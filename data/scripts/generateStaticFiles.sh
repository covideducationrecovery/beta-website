# get the needed data from airtable to process
node -r dotenv/config airtable-downloader.js

node generate-static-countries-files-for-public-website.js
node get-worldbank-data.js
node inject-indicators-into-countries.js
