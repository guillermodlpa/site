export default function formatDateForAttribute(date: Date | string): string {
  const dateObject = date instanceof Date ? date : new Date(date);
  const valid = !Number.isNaN(dateObject as unknown as number);
  if (!valid) {
    return "";
  }

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return [year, month < 10 ? `0${month}` : month, day < 10 ? `0${day}` : day].join("-");
}
