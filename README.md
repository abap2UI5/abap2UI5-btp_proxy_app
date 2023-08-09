## abap2UI5 Extension - SAP Business Technology Platform <img src="https://github.com/abap2UI5/abap2UI5/assets/102328295/52ac0bb6-a219-4e9d-9e4f-62698dab3063" width="30">

#### Key Features
* enables the integration of abap2UI5 Apps with the SAP Business Technology Platform
* facilitates the invocation of abap2UI5 Apps through various SAP services, including SAP BTP, SAP Workzone Launchpad, and SAP Mobile Start
* the repository contains a UI5 App that can be deployed to the SAP BTP HTML5 Repository and an OData Service for the backend system hosting your abap2UI5 framework & apps
* the abap2UI5 framework & apps can remain unchanged in your backend systems, while being accessed remotely
* compatible backend systems include Netweaver (v.7.50 or higher), S/4 Private (Standard ABAP), and S/4 Public (ABAP for Cloud)

#### Use Cases

##### 1 - Connect your ABAP System to SAP BTP and access your abap2UI5 Apps from anywhere
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/769c25b4-07e3-49d1-a754-a5d4835607e4">
<br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/356d1383-d394-49f6-9336-b33e886040a6">

##### 2 - Integrate your abap2UI5 Apps with SAP Build Workzone Launchpad
<img width="573" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/8dace28a-b0cb-41a8-8c36-694fc0e6ff4b">
<br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/0267f17a-b2ab-4e69-937f-24f2204f4b13">

##### 3 - Launch your abap2UI5 Apps using SAP Mobile Start
<img width="614" alt="image" src="https://github.com/abap2UI5/ext-business_technology_platform/assets/102328295/7fc0a79c-b013-4bc8-b97e-1d6804bccce6"><br>
<img width="500" alt="image" src="https://github.com/abap2UI5/integration-fiori_launchpad_on_premise/assets/102328295/d8caa3cb-7bb0-4a96-bc32-086c6238e22f">

#### Installation
* install the odata service, use the [ODATA_CDS](https://github.com/abap2UI5/ext-business_technology_platform/tree/odata_cds_abap_cloud) branch for abap cloud systems and use the [ext-fiori_launchpad](https://github.com/abap2UI5/ext-fiori_launchpad_on_premise) repository for on-premise systems
* go to the [UI5_APP](https://github.com/abap2UI5/ext-business_technology_platform/tree/ui5_app) branch and deploy the UI5 app to your Business Technology Platform
* configure SAP Build Workzone Launchpad Service and SAP Mobile Start

Check the [documentation](https://github.com/abap2UI5/abap2UI5-documentation) for detailed installation guidelines.
### FAQ
* your comments, questions, wishes and bugs are welcome, please create an [**issue**](https://github.com/abap2UI5/ext-business_technology_platform/issues)
