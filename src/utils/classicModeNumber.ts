import crypto from 'crypto';

export const today: Date = new Date();
export const year: number = today.getUTCFullYear();
export const month: string = (today.getUTCMonth() + 1).toString().padStart(2, '0');

// Daily Number Generation in Classic mode
export function generateDailyNumber(): number {
  const day: string = today.getUTCDate().toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}

// Yesterday Number Generation in Classic mode
export function generateYesterdayNumber(): number {
  const day: string = (today.getUTCDate() - 1).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}
