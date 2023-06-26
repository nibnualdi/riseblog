const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const getStringDateFormat = (isoString) => {

  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const dateOfMonth = date.getDate();

  return `${year} ${monthNames[month+1]} ${dateOfMonth}`
};

const getStringDayFormat = (isoString) => {

  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${year} ${monthNames[month+1]} ${dayNames[day]}`
};

export { getStringDateFormat, getStringDayFormat };
