export default function formatDate(date: Date | string): string {
  const dateObjecgt = date instanceof Date ? date : new Date(date);
  const valid = !isNaN(dateObjecgt as unknown as number);
  return valid
    ? dateObjecgt.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
}
