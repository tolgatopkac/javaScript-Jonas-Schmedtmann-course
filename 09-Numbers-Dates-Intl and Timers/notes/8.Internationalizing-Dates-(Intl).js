// Experimenting API
// ISO LANGUAGE CODE TABLE
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
}
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl