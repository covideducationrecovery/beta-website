# GERT data files
The below is a list of data files and their purpose.

Notes:
* dates and times (where they might be included) are always in UTC/Zulu time
* Not all information which we collect is made public

## Critical data files
These files are required for the website and dependent resources (e.g. [Observable](https://www.observablehq.com)) to function correctly. Do not modify or delete them unless the dependencies have also been changed appropriately.

* GERT version 1 files
  * [global.csv](global.csv) / [global.json](global.json) / [global.min.json](global.min.json) - these files represent a snapshot of the most recent information we have for each country. It is being phased out in favor of using the version 2 files, but is still referenced on the website on our `/data` page and there are some other dependencies. 
* GERT version 2 files
  * [global.v2.csv](global.v2.csv) / [global.v2.json](global.v2.json) / [global.v2.min.json](global.v2.min.json) - these files represent a time series of all the information we have available for each country. The `.csv` version represents a more traditional time series dataset; each row represents a quality-controlled survey response and its corresponding data points; country information will be repeated for each response record which we have for that country. The .json files are structued with as a javascript object hierarchy with two parent keys:
    * `countries` contains an array of all the countries we attempt to monitor, along with some attributes such as world region or income level, which are used in various places on the website for sorting, etc. Most countries (but not all) contain a `responsesPublic` property:
      * `responsesPublic` contains an array of all the quality-controlled data we have published for that country.
    * `responseRounds` contains an array of objects, each representing a survey round. The primary properties `roundNumber` should be unique and have a unique `startDate` and `endDate`; both date values are intended to be the UTC/Zulu time zone; `startDate` should always represent the initial instant of that date (e.g. 2021-08-31T00:00:00.000Z), and `endDate` should always represent the final instant of that date (e.g. 2021-08-31T23:59:59.999Z). This information allows `responsesPublic` to be linked to specific rounds of data collection. Rounds are generally two weeks duration, but some exceptions exist. Note that the information here is not available in the `.csv` version.
* Additional files
  * [covid_data.json](covid_data.json) - this data is obtained from [Our World In Data](https://github.com/owid/covid-19-data/tree/master/public/data), and is automatically updated twice per day and includes the most recent information on covid cases, deaths, and vaccinations by country.
  * [global-with-indicators.json](global-with-indicators.json) / [global-with-indicators.min.js](global-with-indicators.min.json) - this file matches the content of [global.json](global.json), but includes additional statistical information for each country which is updated infrequently. The indicators are obtained from the [World Bank's Data Bank - Educational Statistics](https://databank.worldbank.org/source/education-statistics-%5e-all-indicators/preview/on). Indicator data for each country is contained in the `.indicators` property. `.indicators` is a JSON object where each key it contains represents a specific indicator and uses the World Bank coding convention prefixed with `wb_`, e.g. `wb_SE_SEC_ENRL_FE`. Not all indicators are available for all countries. A dictionary of indicator names and their descriptions can be found in [global-indicator-descriptions.json](global-indicator-descriptions.json).


## Non-crticial data files
These files are not required for the website to operate correctly, but may be required for automation scripts to work as expected.

* [countries_codes.csv](countries_codes.csv) - this file contains a mapping of Our World In Data country names to the corresponding country ISO identifiers. It is needed so that [fetch_covid_data.py](fetch_covid_data.py) can correcly link OWID data for each country to our data.
* global-indicator-data.json
* global-indicator-descriptions

## ./scripts directory
This folder contains files needed for automations, and there may be additional data in this folder which can be considered temporary. The one exception is `download-airtable-data-config.json` which contains the configuration settings for some of the automated scripts.


