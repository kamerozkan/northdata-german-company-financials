#!/usr/bin/env bash
# Run northdata-german-company-financials synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~northdata-german-company-financials/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["Siemens AG München"], "countryCodes": ["DE"], "maxResultsPerQuery": 5, "maxItems": 5}'
