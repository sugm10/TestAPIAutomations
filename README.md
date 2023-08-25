Author : Sugesh Munuswamy
Role : Automation Engineer 
Automation Tool : Newman 

Setup steps: 

Install NodeJS : https://nodejs.org/en/download/
Install postman : https://www.postman.com/downloads/
Install newman   : npm install -g newman
Install newman html reporter : npm install -g newman-reporter-html

Run Steps in CLI :
Download Collection file from repo: Weatherbit.postman_collection.json
Download data file from repo : Weatherbit-data.csv
setup path (windows environment varaible) : NODE_PATH = C:\Users\{{userid}}\AppData\Roaming\npm\node_modules
Open commnad line 
Run as Newman test : newman run Weatherbit.postman_collection.json -d Weatherbit-data.csv
Run as Node js package (recommended) : node TestWeatherbit.js

