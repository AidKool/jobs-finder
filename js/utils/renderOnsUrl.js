// renders URL for ONS fetch call by providing one of the 4 wellbeing categories as the input. No API key is required for this call
// This retrieves average wellbeing info for each local region in the UK based on the 2020-2021 survey results
export const renderOnsUrl = (wellbeingCategory) => {
  const url = `https://api.beta.ons.gov.uk/v1/datasets/wellbeing-local-authority/editions/time-series/versions/2/observations?time=2020-21&measureofwellbeing=${wellbeingCategory}&geography=*&estimate=average-mean`;
  return url;
};
