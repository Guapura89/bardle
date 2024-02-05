import crypto from 'crypto';
import { today, month, year } from './classicModeNumber';

// Daily Number Generation in Quote mode
export function generateQuoteDailyNumber(): number {
  const day: string = (today.getDate() + 61).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}

// Yesterday Number Generation in Quote mode
export function generateQuoteYesterdayNumber(): number {
  const day: string = (today.getDate() + 60).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}
