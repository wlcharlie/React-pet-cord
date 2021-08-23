export const toAge = timestamp => {
  return +(
    (new Date().getTime() - timestamp * 1000) /
    (1000 * 60 * 60 * 24 * 365)
  ).toFixed(1);
};
