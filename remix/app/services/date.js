import { DateTime } from "luxon";

export const formatDate = (dateStr) => {
  const date = DateTime.fromISO(dateStr)
    .setLocale("fi")
    .setZone("Europe/Helsinki");
  return date.toFormat("yyyy-LL-dd");
};
