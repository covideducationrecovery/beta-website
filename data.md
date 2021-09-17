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
    <h2>Download our data</h2>
    <p>These files contain the data we present on this web site in raw formats suitable for re-use. Since much of the data is coded, please refer to the data dictionary file to interpret the coding.</p>
    <h4>License and citation</h4>
    <p>This data is released under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license</a>.</p>
    <p>Some of our vaccination data was obtained from Our World In Data, who also <a href="https://github.com/owid/covid-19-data/tree/master/public/data#license">license</a> their data via Creative Commons Attribution 4.0 International.</p>
    <p>
      To cite this work, use the following:
    </p>  
    <blockquote class="bg-light">Johns Hopkins University, World Bank & UNICEF (2021). COVID-19 Global Education Recovery Tracker. Baltimore, Washington DC, New York: JHU, World Bank, UNICEF.</blockquote> 
  </div>
  <div class="row py-3">
    <div class="col-9">
      Data Dictionary
    </div>
    <div class="col-3">
      <a class="btn btn-outline-primary" download href="/assets/data-dictionary-2021-06-09.pdf" disabled><i class="fas fa-file-pdf"></i> Download PDF</a>
    </div>
  </div>
  <div class="row">
    <div class="col-12 alert alert-warning">
      <i class="fas fa-info-circle"></i> The formats below each provide the same data and coding. Select the file which works best for your needs.
    </div>
    <div class="alert alert alert-warning">
      <i class="fas fa-exclamation-triangle"></i> Please note that although we will try to maintain compatibility, the data structure in these files may change from time to time as we make enhancements to this site.
    </div>
  </div>
  <div class="row py-3 border-bottom">
    <div class="col-9">
      A CSV (comma-separated values) file can be easily read by most spreadsheet software. Some data fields can contain multiple values (refer to the data dictionary to identify which ones), which can make analysis a little more challenging. These values are stored as comma-separated numbers enclosed in quotation marks.
    </div>
    <div class="col-3">
        <a class="btn btn-outline-primary" download href="/data/global.csv"><i class="fas fa-file-csv"></i> Download CSV</a>
    </div>  
  </div>
  <div class="row py-3">
    <div class="col-9">
      A JSON (javascript object notation) file is generally more suitable for data engineers or software programmers, but has better support for multiple values in a data field. Empty/null values are not included.
    </div>
    <div class="col-3">
      <a class="btn btn-outline-primary" download href="/data/global.json"><i class="fas fa-file-code"></i> Download JSON</a>
    </div>
  </div>
</div>

<div class="spacer-10"></div>