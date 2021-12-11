// colours the overall wellbeing score rendered on the map city popups
export const colourOns = (avg) => {
  if (avg < 7) {
    return 'red';
  } else if (avg >= 7 && avg < 7.5) {
    return 'yellow';
  } else {
    return 'green';
  }
};
