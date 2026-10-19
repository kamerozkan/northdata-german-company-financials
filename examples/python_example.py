"""Run northdata-german-company-financials on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'queries': ['Siemens AG München'], 'countryCodes': ['DE'], 'maxResultsPerQuery': 5, 'maxItems': 5}
run = client.actor("kamerozkan/northdata-german-company-financials").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
