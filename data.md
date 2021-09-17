---
layout: default
permalink: /data/
libraries:
 - fontawesome
title: Download our data
description: These files contain the data we present on this web site in raw formats suitable for re-use.
---

<div class="spacer-5"></div>

<div class="container">
  <div class="row">
    <h1>Download our data</h1>
    <p>These files contain the data we present on this web site in raw formats suitable for re-use. Since much of the data is coded, please refer to the data dictionary file to interpret the coding.</p>
    <div class="alert bg-light">
      <h4>License and citation</h4>
      <p>This data is released under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license</a>.</p>
      <p>Some of our vaccination data was obtained from Our World In Data, who also <a href="https://github.com/owid/covid-19-data/tree/master/public/data#license">license</a> their data via Creative Commons Attribution 4.0 International.</p>
      <p>
        To cite this work, use the following:
      </p>  
      <blockquote class="bg-light">Johns Hopkins University, World Bank & UNICEF (2021). COVID-19 Global Education Recovery Tracker. Baltimore, Washington DC, New York: JHU, World Bank, UNICEF.</blockquote> 
      </div>
  </div>
  <div class="row bg-light rounded mt-3">
    <h2 id="version1">Version 1 Files</h2>
    <p>Version 1 files provide only the most recent information for each country / territory.</p>
    <div class="alert alert-warning">
      <i class="fas fa-exclamation-triangle"></i> Version 1 files will no longer be updated as of 31 December 2021. Please use the <a href="#version2">Version 2 files</a> instead.
    </div>
    <div class="d-flex flex-row row-nowrap justify-content-between align-items-center py-3 border-bottom">
      <span class="col-9">Data Dictionary</span>
      <a class="btn btn-outline-primary" download href="/assets/data-dictionary-2021-09-17.pdf" disabled><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <div class="d-flex flex-row row-nowrap justify-content-between align-items-center py-3 border-bottom">
      <span class="col-9">
        A CSV (comma-separated values) file can be easily read by most spreadsheet software. Some data fields can contain multiple values (refer to the data dictionary to identify which ones), which can make analysis a little more challenging. These values are stored as comma-separated numbers enclosed in quotation marks.
      </span>
      <a class="btn btn-outline-primary" download href="/data/global.csv"><i class="fas fa-file-csv"></i> CSV</a>
    </div>
    <div class="d-flex flex-row flex-nowrap justify-content-between align-items-center py-3">
      <span class="col-9">
        A JSON (javascript object notation) file is generally more suitable for data engineers or software programmers, but has better support for multiple values in a data field. Empty/null values are not included.
      </span>
      <a class="btn btn-outline-primary" download href="/data/global.json"><i class="fas fa-file-code"></i> JSON</a>
    </div>
  </div>
  <div class="row bg-light rounded mt-3">
    <h2 id="version2">Version 2 Files</h2>
    <p>Version 2 files provide the full history of responses for each country/territory.</p>
    <div class="d-flex flex-row row-nowrap justify-content-between align-items-center py-3 border-bottom">
      <span class="col-9">Data Dictionary</span>
      <span class="btn btn-outline-primary">Coming soon</span>
      <!-- <a class="btn btn-outline-primary" download href="/assets/data-dictionary-v2-2021-09-17.pdf" disabled><i class="fas fa-file-pdf"></i> PDF</a> -->
    </div>
    <div class="d-flex flex-row row-nowrap justify-content-between align-items-center py-3 border-bottom">
      <span class="col-9">
        A CSV (comma-separated values) file can be easily read by most spreadsheet software. Some data fields can contain multiple values (refer to the data dictionary to identify which ones), which can make analysis a little more challenging. These values are stored as comma-separated numbers enclosed in quotation marks.
      </span>
      <a class="btn btn-outline-primary" download href="/data/global.csv"><i class="fas fa-file-csv"></i> CSV</a>
    </div>
    <div class="d-flex flex-row flex-nowrap justify-content-between align-items-center py-3">
      <span class="col-9">
        A JSON (javascript object notation) file is generally more suitable for data engineers or software programmers, but has better support for multiple values in a data field. Empty/null values are not included. This JSON file contains an object with two keys, both arrays. The <var>countries</var> array contains a list of countries / territories; the <var>responseRounds</var> array contains a list of our survey rounds, including summary changes and links to matching survey documents. Nearly all <var>countries</var> array items contain a <var>responsesPublic</var> property, which holds an array of the survey responses for that country.
      </span>
      <a class="btn btn-outline-primary" download href="/data/global.json"><i class="fas fa-file-code"></i> JSON</a>
    </div>
  </div>
</div>

<div class="spacer-10"></div>