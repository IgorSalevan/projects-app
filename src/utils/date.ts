import { DateTime } from 'luxon';

export const formatDate = (dateISO: string, format: string = 'yyyy-MM-dd') =>
  DateTime.fromISO(dateISO).toFormat(format);
