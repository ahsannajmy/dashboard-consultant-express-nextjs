export function formatDate(dateString) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  if (!dateString) {
    return "-";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", options);
}
