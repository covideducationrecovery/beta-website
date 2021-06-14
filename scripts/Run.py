# -*- coding: utf-8 -*-
"""
Created on Thu Jun 10 11:01:51 2021

@author: camde
"""
import requests
import json
import csv
import pandas as pd


def update_json_file():
    
    
    url_confrimed = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
    url_deaths = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
    url_vaccines = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv'
    url_look_up = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/UID_ISO_FIPS_LookUp_Table.csv'
    
    
    data_confirmed = pd.read_csv(url_confrimed, error_bad_lines=False).groupby(['Country/Region']).sum()
    data_deaths = pd.read_csv(url_deaths, error_bad_lines=False).groupby(['Country/Region']).sum()
    data_vaccines = pd.read_csv(url_vaccines, error_bad_lines=False)
    data_look_up = pd.read_csv(url_look_up, error_bad_lines=False).groupby(['iso2']).sum()
    
    
    countries = data_confirmed.iloc[: , 1].tolist() # Get Country Names
    last_column_confirmed = data_confirmed.iloc[: , [-1]] # Get most Recent Data
    last_column_deaths = data_deaths.iloc[: , [-1]] # Get most Recent Data
    column_look_up = data_look_up.iloc[: , [1,7]].drop_duplicates() # Get most Recent Data
    
    json_list = []
    
    for i in range(len(countries)):
        json_list.append({"country_name" : countries[i], "cases" : last_column_confirmed[i], "deaths" : last_column_deaths[i], "recovered" : column_look_up[i]})
        
    
    thing = json.dumps(json_list, indent = 1)
    
    
    print(json.dumps(json_list, indent = 1))
    
    



if __name__ == '__main__':
    update_json_file()
