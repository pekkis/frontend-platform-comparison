import { DateTime } from "luxon";

export const formatDate = (dateStr: string) => {
  const date = DateTime.fromISO(dateStr)
    .setLocale("fi")
    .setZone("Europe/Helsinki");
  return date.toFormat("yyyy-LL-dd");
};
export const formatDatePretty = (dateStr: string) => {
  const date = DateTime.fromISO(dateStr)
    .setLocale("fi")
    .setZone("Europe/Helsinki");
  return date.toLocaleString();
};
