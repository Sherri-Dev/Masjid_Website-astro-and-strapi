export const getDataFromProp = (obj, prop) => {
  return obj[prop];
};
export const text_truncate = (str, length = 80, ending = "...") => {
  return str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;
};
