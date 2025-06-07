// We want to obtain the published date in UTC, which is the same that server side renders
// Otherwise, we can have a React hydration error if we format the date according to user's time zone
function toLocaleUTCDateString(
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions,
): string {
  const timeDiff = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.valueOf() + timeDiff);
  return adjustedDate.toLocaleDateString(locales, options);
}

export default function formatDateInUTCForUser(date: Date | string): string {
  const dateObject = date instanceof Date ? date : new Date(date);
  const valid = !Number.isNaN(dateObject as unknown as number);
  return valid
    ? toLocaleUTCDateString(dateObject, "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
}
