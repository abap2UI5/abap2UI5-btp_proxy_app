## abap2UI5 Integration - SAP Business Technology Platform <img src="https://github.com/abap2UI5/abap2UI5/assets/102328295/52ac0bb6-a219-4e9d-9e4f-62698dab3063" width="30">

#### Key Features
* **UI5 App Deployment:** Deploy this UI5 App to your SAP BTP HTML5 Repository. It functions as a proxy, managing all communication with your backend system and running the abap2UI5 apps<br>
* **Framework Consistency:** The framework, as well as all abap2UI5 apps, can remain unchanged in your backend systems<br>
* **Service Integration:** Run abap2UI5 apps with SAP Build Workzone Launchpad & SAP Build Mobile Start<br>
* **Broad System Compatibility:** Compatible with all Backend Systems, including SAP NetWeaver version 7.02 or higher, S/4HANA On-Premise, S/4HANA Private Cloud, and S/4HANA Public Cloud

#### Installation
##### (1/2) Deploying the Application to SAP BTP: <br>
Use Visual Studio Code or Business Application Studio for deployment:
```
git clone
cf login
npm run build:mta
npm run deploy
```
##### (2/2) Setting Up a Destination in SAP BTP: <br>
<img width="500" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/1a4880fd-aad7-4f40-9a45-9452205f9bff"> <br>
###### **Note I:** Verify that the HTTP Service in the backend system is under the ICF Node sap/... and that the Destination is named "BACKEND_ABAP2UI5" for correct routing [(here)](https://github.com/abap2UI5/abap2UI5-btp_proxy_app/blob/e882d732eb509ce65f38e224112da8d8120b0f22/xs-app.json#L8)
###### **Note II:** Input the complete path of the HTTP endpoint here. The frontend does not include any path information (e.g. https://<<backend_system>>/sap/bc/ZTEST)


#### Integration Scenarios

##### 1/3 - Connect your ABAP System to SAP BTP and access your abap2UI5 Apps from anywhere
<img width="700" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/110c0810-1a57-4a16-b8c2-c88d35be7002">
<br>
<img width="600" alt="Bildschirmfoto 2023-12-06 um 10 46 55" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/1fd174a8-86e8-4303-88b8-76b20df5a087">


##### 2/3 - Integrate your abap2UI5 Apps to SAP Build Workzone Launchpad [(here)](https://github.com/abap2UI5/abap2UI5-documentation/blob/main/docs/ext-business_technology_platform/04_build_workzone_configuration.md)
<img width="700" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/1def3a77-1887-4807-be6f-619d1c2526ae">
<br>
<img width="600" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/0267f17a-b2ab-4e69-937f-24f2204f4b13">

##### 3/3 - Launch your abap2UI5 Apps using SAP Mobile Start [(here)](https://github.com/abap2UI5/abap2UI5-documentation/blob/main/docs/ext-business_technology_platform/05_mobile_start_configuration.md)
<img width="700" alt="image" src="https://github.com/abap2UI5/abap2UI5-btp_proxy_app/assets/102328295/e895e772-0705-425c-9fb9-deed7d304642">
<br>
<img width="600" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/d8caa3cb-7bb0-4a96-bc32-086c6238e22f">

#### FAQ
* your comments, questions, wishes and bugs are welcome, please create an [**issue**](https://github.com/abap2UI5/ext-business_technology_platform/issues)
