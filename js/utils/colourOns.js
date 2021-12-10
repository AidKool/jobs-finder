export const colourOns = (avg) => {
  if (avg < 7) {
    return `<b>Average: <span class="red">${avg}</span></b>`;
  } else if (avg >= 7 && avg < 7.5) {
    return `<b>Average: <span class="yellow">${avg}</span></b>`;
  } else {
    return `<b>Average: <span class="green">${avg}</span></b>`;
  }
};
