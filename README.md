## Installation

##### (1/2) Set Up a Destination in SAP BTP: <br>
<img width="600" alt="Bildschirmfoto 2023-12-05 um 13 47 18" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/677bdbba-7a0a-4e4a-8a64-b3c328a818ff"><br><br>
_Note I: Ensure that the HTTP Service in the backend system is created under the ICF Node sap/something to maintain correct routing_ <br>
_Note II: Fill in the complete path of the HTTP endpoint here, the frontend does not hold any path information_ <br>
##### (2/2) Deploy your Application: <br>
```
cf login
npm run build:mta
npm run deploy
```
