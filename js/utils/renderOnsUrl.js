export const renderOnsUrl = (wellbeingCategory) => {
  const url = `https://api.beta.ons.gov.uk/v1/datasets/wellbeing-local-authority/editions/time-series/versions/2/observations?time=2020-21&measureofwellbeing=${wellbeingCategory}&geography=*&estimate=average-mean`;
  return url;
};
