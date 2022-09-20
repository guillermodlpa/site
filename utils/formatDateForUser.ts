export default function formatDateForUser(date: Date | string): string {
  const dateObject = date instanceof Date ? date : new Date(date);
  const valid = !isNaN(dateObject as unknown as number);
  return valid
    ? dateObject.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
}
