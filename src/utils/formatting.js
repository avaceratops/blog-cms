import { DateTime } from 'luxon';

export function createBlogExcerpt(text, maxWords) {
  const words = text.split(' ');
  return words.length > maxWords ? words.slice(0, maxWords).join(' ') : text;
}

export function getLocalTime(isoTime) {
  return DateTime.fromISO(isoTime)
    .set({
      second: 0,
      millisecond: 0,
    })
    .toISO({ includeOffset: false });
}
