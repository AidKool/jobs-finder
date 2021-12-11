// remove tags function used to remove html tags that were found in primary card job description
export const removeTags = (str) => {
  if (str === null || str === '') return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with an empty string.
  return str.replace(/(<([^>]+)>)/gi, '');
};
