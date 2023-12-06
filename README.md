## abap2UI5 Extension - SAP Business Technology Platform <img src="https://github.com/abap2UI5/abap2UI5/assets/102328295/52ac0bb6-a219-4e9d-9e4f-62698dab3063" width="30">

### Key Features
* Integration of abap2UI5 Apps with SAP Business Technology Platform and call abap2UI5 Apps through various SAP Services, including SAP BTP, SAP Workzone Launchpad and SAP Mobile Start
* Deploy this UI5 App to your SAP BTP HTML5 Repository
* The abap2UI5 framework & apps can remain unchanged in your backend systems, while being accessed remotely via HTTP
* Compatible Backend Systems include SAP NetWeaver (v.702 or higher), S/4 On-Premise, S/4 Private Cloud & S/4 Public Cloud

### Installation

##### (1/2) Set Up a Destination in SAP BTP: <br>
<img width="600" alt="Bildschirmfoto 2023-12-05 um 13 47 18" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/677bdbba-7a0a-4e4a-8a64-b3c328a818ff"><br><br>
_Note I: Ensure that the HTTP Service in the backend system is created under the ICF Node sap/... to maintain correct routing_ <br>
_Note II: Fill in the complete path of the HTTP endpoint here, the frontend does not contain any path information_ <br>
##### (2/2) Deploy your Application: <br>
```
cf login
npm run build:mta
npm run deploy
```

### Integration Scenarios

##### 1/3 - Connect your ABAP System to SAP BTP and access your abap2UI5 Apps from anywhere
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/769c25b4-07e3-49d1-a754-a5d4835607e4">
<br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/356d1383-d394-49f6-9336-b33e886040a6">

##### 2/3 - Integrate your abap2UI5 Apps with SAP Build Workzone Launchpad
<img width="573" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/8dace28a-b0cb-41a8-8c36-694fc0e6ff4b">
<br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/0267f17a-b2ab-4e69-937f-24f2204f4b13">

##### 3/3 - Launch your abap2UI5 Apps using SAP Mobile Start
<img width="614" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/7fc0a79c-b013-4bc8-b97e-1d6804bccce6"><br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/d8caa3cb-7bb0-4a96-bc32-086c6238e22f">

### FAQ
* your comments, questions, wishes and bugs are welcome, please create an [**issue**](https://github.com/abap2UI5/ext-business_technology_platform/issues)
