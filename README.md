# North Data Scraper - German Company Financials & Officers

North Data scraper for German company financials and register data: search companies by name or keyword, get register court and ID, legal form, address, founding date, officers with roles, register events and yearly financial KPIs. Monitor mode returns only new register events. No login.

**[Run it on Apify Store](https://apify.com/kamerozkan/northdata-german-company-financials)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/northdata-german-company-financials); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/northdata-german-company-financials).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/northdata-german-company-financials) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "queries": [
    "Siemens AG München"
  ],
  "countryCodes": [
    "DE"
  ],
  "maxResultsPerQuery": 5,
  "maxItems": 5
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "name": "Siemens AG",
    "legalForm": "AG",
    "status": "active",
    "city": "München",
    "postalCode": "80333",
    "street": "Werner-von-Siemens-Str. 1",
    "country": "Germany",
    "countryCode": "DE",
    "northdataUrl": "https://www.northdata.com/Siemens%20AG,%20M%C3%BCnchen/HRB%206684",
    "foundingDate": "1996-08-28",
    "purpose": "Development, manufacture, supply, operation and distribution of as well as trade in products, systems, plants and solutions and provision of services as well as research and development, in particular in the industrial, energy, health and infrastructure sectors, including the traditional fields of electrical engineering, electronics, precision mechanics and mechanical engineering, as well as in adjacent areas of activity. In these and other areas, the Company may be active in any field of information technologies (including electronic data processing, transmission, software, platforms and self-learning systems) and provide related services. Furthermore, the Company may be active in particular through group or associated companies in the financial sector (including banks and reinsurance) and, also in the management of its own assets, in companies and companies of any kind also indirectly.",
    "alternateNames": [
      "Siemens Setr"
    ],
    "lei": "W38RGI023J3WT1HWRP32",
    "identifiers": [
      {
        "source": "Ut",
        "sourceName": "German Trade Register Company Profile",
        "value": "District Court of Munich HRB 6684"
      },
      {
        "source": "Stockp",
        "sourceName": "Stock exchange listed companies - Profiles",
        "value": "SIA.BR SIE.DE SIEGY SMAWF SMNS.TO"
      },
      {
        "source": "Lei",
        "sourceName": "Global Legal Entity Identifier Foundation (LEI numbers)",
        "value": "W38RGI023J3WT1HWRP32"
      },
      {
        "source": "EUID",
        "sourceName": null,
        "value": "DED2601V.HRB6684"
      }
    ],
    "formerIdentifiers": [
      {
        "source": "Cvrcom",
        "sourceName": "Danish Central Business Register",
        "value": "CVR 17887750"
      },
      {
        "source": "Ccrcom",
        "sourceName": "Brønnøysund Register Centre (company profiles)",
        "value": "The Brønnøysund Register Centre 986932518"
      },
      {
        "source": "Kbo",
        "sourceName": "Crossroads Bank for Enterprises (KBO)",
        "value": "Crossroads Bank for Enterprises (KBO) 0405.923.422"
      }
    ],
    "registerText": "District Court of Munich HRB 6684",
    "registerCourt": "District Court of Munich",
    "registerId": "HRB 6684",
    "euid": "DED2601V.HRB6684",
    "stockTickers": [
      "SIA.BR",
      "SIE.DE",
      "SIEGY",
      "SMAWF",
      "SMNS.TO"
    ],
    "formerAddresses": [
      "Berlin, Germany"
    ],
    "officers": [
      {
        "name": "Busch, Roland",
        "role": "CEO",
        "type": "Person"
      },
      {
        "name": "Bienert, Veronika",
        "role":
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/northdata-german-company-financials/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
