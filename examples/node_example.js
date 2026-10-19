// Run northdata-german-company-financials on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "queries": [
    "Siemens AG München"
  ],
  "countryCodes": [
    "DE"
  ],
  "maxResultsPerQuery": 5,
  "maxItems": 5
};
const run = await client.actor('kamerozkan/northdata-german-company-financials').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
