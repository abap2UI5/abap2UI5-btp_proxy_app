## abap2UI5 Integration - SAP Business Technology Platform <img src="https://github.com/abap2UI5/abap2UI5/assets/102328295/52ac0bb6-a219-4e9d-9e4f-62698dab3063" width="30">

#### Key Features
* **UI5 App Deployment:** Deploy this UI5 App to your SAP BTP HTML5 Repository. It functions as a proxy, managing all communication with your backend system and presenting the abap2UI5 apps<br>
* **Framework Consistency:** The framework, as well as all abap2UI5 apps, can remain unchanged in your backend systems<br>
* **Service Integration:** Run abap2UI5 apps with SAP Build Workzone Launchpad & SAP Build Mobile Start<br>
* **Broad System Compatibility:** Compatible with all Backend Systems, including SAP NetWeaver version 7.02 or higher, S/4HANA On-Premise, S/4HANA Private Cloud, and S/4HANA Public Cloud

#### Installation
##### (1/2) Deploy this Application to SAP BTP: <br>
Use VSCode or BAS to deploy this repository:
```
git clone
cf login
npm run build:mta
npm run deploy
```
##### (2/2) Set Up a Destination in SAP BTP: <br>
<img width="500" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/1a4880fd-aad7-4f40-9a45-9452205f9bff"> <br> <br>
_**Note I:** Ensure that the HTTP Service in the backend system is created under the ICF Node sap/... and that the Destination has the name "BACKEND_ABAP2UI5" [(here)](https://github.com/abap2UI5/abap2UI5-btp_proxy_app/blob/e882d732eb509ce65f38e224112da8d8120b0f22/xs-app.json#L8) to maintain correct routing_ <br>
_**Note II:** Fill in the complete path of the HTTP endpoint here, the frontend does not contain any path information (example: https://<<system>>/sap/bc/ZTEST)_ <br>


#### Integration Scenarios

##### 1/3 - Connect your ABAP System to SAP BTP and access your abap2UI5 Apps from anywhere
<img width="600" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/110c0810-1a57-4a16-b8c2-c88d35be7002">
<br>
<img width="600" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/356d1383-d394-49f6-9336-b33e886040a6">

##### 2/3 - Integrate your abap2UI5 Apps with SAP Build Workzone Launchpad
<img width="573" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/8dace28a-b0cb-41a8-8c36-694fc0e6ff4b">
<br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/0267f17a-b2ab-4e69-937f-24f2204f4b13">

##### 3/3 - Launch your abap2UI5 Apps using SAP Mobile Start
<img width="614" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/7fc0a79c-b013-4bc8-b97e-1d6804bccce6"><br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/d8caa3cb-7bb0-4a96-bc32-086c6238e22f">

#### FAQ
* your comments, questions, wishes and bugs are welcome, please create an [**issue**](https://github.com/abap2UI5/ext-business_technology_platform/issues)
