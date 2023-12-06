## abap2UI5 Integration - SAP Business Technology Platform <img src="https://github.com/abap2UI5/abap2UI5/assets/102328295/52ac0bb6-a219-4e9d-9e4f-62698dab3063" width="30">

### Key Features
* Deploy this UI5 App to your SAP BTP HTML5 Repository. It acts as a proxy, routing all communication to your backend system
* The framework, along with all abap2UI5 apps, are accessed remotely via HTTP and can remain unchanged in your backend systems
* Enable calling abap2UI5 Apps through various SAP Services, including SAP BTP, SAP Workzone Launchpad, and SAP Mobile Start
* Compatible with Backend Systems such as SAP NetWeaver (version 7.02 or higher), S/4HANA On-Premise, S/4HANA Private Cloud, and S/4HANA Public Cloud

### Installation
##### (1/2) Deploy this Application to SAP BTP: <br>
Use VSCode or BAS to deploy this repository:
```
git clone
cf login -a
npm run build:mta
npm run deploy
```
##### (2/2) Set Up a Destination in SAP BTP: <br>
_**Note I:** Ensure that the HTTP Service in the backend system is created under the ICF Node sap/... and that the Destination has the name "BACKEND_ABAP2UI5" [(here)](https://github.com/abap2UI5/abap2UI5-btp_proxy_app/blob/e882d732eb509ce65f38e224112da8d8120b0f22/xs-app.json#L8) to maintain correct routing_ <br>
_**Note II:** Fill in the complete path of the HTTP endpoint here, the frontend does not contain any path information (example: https://<<system>>/sap/bc/ZTEST)_ <br>


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
