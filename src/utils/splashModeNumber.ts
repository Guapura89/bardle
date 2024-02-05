import crypto from 'crypto';
import { today, month, year } from './classicModeNumber';

// Daily Number Generation in Splash mode
export function generateSplashDailyNumber(): number {
  const day: string = (today.getDate() + 121).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}

// Yesterday Number Generation in Splash mode
export function generateSplashYesterdayNumber(): number {
  const day: string = (today.getDate() + 120).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}

// Yesterday Number Generation in Splash mode
export function generateSplashDailySkinNumber(max_skins: number): number {
  const day: string = today.getDate().toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = hashNum % max_skins;

  return num;
}
