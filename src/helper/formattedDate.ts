export default function formattedDate(utcDate) {
  const timeZone = process.env.SERVER_TZ
    ? process.env.SERVER_TZ
    : 'Asia/Bangkok';
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });
  return formatter.format(utcDate);
}
