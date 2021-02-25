import dayjs from 'dayjs';

export function getDate(date?: string) {
  return dayjs(date).format('HH:mm, DD-MM-YYYY');
}
