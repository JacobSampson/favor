export function dateTimeStringsToDate(date: string, time: string = '0:0'): Date {
  const timeParts = time.split(':');

  // Set fulfillment date and time manually, modified to use separate time field by Jacob Sampson
  // https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
  const dateParts = date.toString().split('-');
  const totalDate = new Date(
    Number.parseInt(dateParts[0]),
    Number.parseInt(dateParts[1]) - 1,
    Number.parseInt(dateParts[2])
  );
  totalDate.setUTCMilliseconds(totalDate.getUTCMilliseconds() +
    Number.parseInt(timeParts[0]) * 60 * 60 * 1000 +
    Number.parseInt(timeParts[1]) * 60 * 1000);

  return totalDate;
}
