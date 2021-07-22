# WB api documentation: https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures

# check if any indicators were specified by command line
if [ "$#" -eq 0 ]; then
  # if not, then use then assume we are starting from scratch
  WBVARIABLES=(
    "HD.HCI.HLOS.FE"
    "HD.HCI.HLOS"
    "HD.HCI.HLOS.MA"
    "HD.HCI.LAYS.FE"
    "HD.HCI.LAYS"
    "HD.HCI.LAYS.MA"
    "SE.LPV.PRIM.FE"
    "SE.LPV.PRIM"
    "SE.LPV.PRIM.MA"
    "SE.PRE.ENRL.FE"
    "SE.PRE.ENRL"
    "SE.PRM.ENRL.FE"
    "SE.PRM.ENRL"
    "SE.PRM.ENRR.FE"
    "SE.PRM.ENRR"
    "SE.PRM.ENRR.MA"
    "SE.PRM.NENR.FE"
    "SE.PRM.NENR"
    "SE.PRM.NENR.MA"
    "SE.SEC.ENRL.FE"
    "SE.SEC.ENL"
    "SE.SEC.ENRR.FE"
    "SE.SEC.ENRR"
    "SE.SEC.ENRR.MA"
    "SE.SEC.NENR.FE"
    "SE.SEC.NENR"
    "SE.SEC.NENR.MA"
    "SI.POV.DDAY.MI"
    "SP.DYN.TFRT.IN"
    "SP.POP.0014.FE.IN"
    "SP.POP.0014.MA.IN"
    "SP.POP.0014.TO"
    "SP.POP.65UP.FE.IN"
    "SP.POP.65UP.MA.IN"
    "SP.POP.65UP.TO"
    "SP.POP.1564.FE.IN"
    "SP.POP.1564.MA.IN"
    "SP.POP.1564.TO"
    "SP.POP.TOTL.FE.IN"
    "SP.POP.TOTL"
    "SP.POP.TOTL.MA.IN"
    "SP.PRE.TOTL.FE.IN"
    "SP.PRE.TOTL.MA.IN"
    "SP.PRM.GRAD.FE"
    "SP.PRM.GRAD.MA"
    "SP.PRM.GRAD.TO"
    "SP.PRM.TOTL.FE.IN"
    "SP.PRM.TOTL.IN"
    "SP.PRM.TOTL.MA.IN"
    "SP.SEC.LTOT.FE.IN"
    "SP.SEC.LTOT.IN"
    "SP.SEC.LTOT.MA.IN"
    "SP.SEC.TOTL.FE.IN"
    "SP.SEC.TOTL.IN"
    "SP.SEC.TOTL.MA.IN"
    "SP.SEC.UTOT.FE.IN"
    "SP.SEC.UTOT.IN"
    "SP.SEC.UTOT.MA.IN"
    "UIS.E.1.M"
    "UIS.E.2.F"
    "UIS.E.2"
    "UIS.E.2.M"
    "UIS.E.02.M"
    "UIS.E.3.F"
    "UIS.E.3"
    "UIS.E.3.M"
    "UIS.E.23.M"
    "UIS.SCHBSP.1.WINTERN"
    "UIS.SCHBSP.2.WINTERN"
    "UIS.SCHBSP.3.WINTERN"
  )
  # delete and recreate the directory to store our files
  rm -rf ./data/worldbank
  mkdir ./data/worldbank
  mkdir ./data/worldbank/errors
else
  WBVARIABLES=( "$@" )
fi

echo "downloading ${#WBVARIABLES[@]} files..."

# loop through the array of indicators and download the data from the World Bank API
# failed downloads are stored in the /error folder (might indicate what went wrong)
for i in "${WBVARIABLES[@]}"
do
  :
  sleep 5s
  STATUS=$(curl -s -S -o ./data/worldbank/temp.json -w '%{http_code}' "http://api.worldbank.org/v2/country/all/indicator/"$i"?mrnev=1&per_page=1000&format=json")
  if [ $STATUS -eq 200 ]; then
    mv ./data/worldbank/temp.json ./data/worldbank/$i.json
    echo "downloaded ./data/worldbank/$i.json"
  else
    echo "error code $STATUS downloading ./data/worldbank/$i.json"
    mv ./data/worldbank/temp.json ./data/worldbank/errors/$i.txt
  fi
  # maybe sleep for a few seconds to avoid overloading the API
done