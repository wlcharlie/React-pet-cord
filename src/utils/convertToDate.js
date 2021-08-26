export const formatDate = date => {
  let formatted_date =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1 >= 10
      ? date.getMonth() + 1
      : '0' + (date.getMonth() + 1)) +
    '-' +
    (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate());
  return formatted_date;
};
