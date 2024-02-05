import crypto from 'crypto';
import { today, month, year } from './classicModeNumber';

// Daily Number Generation in Ability mode
export function generateAbilityDailyNumber(): number {
  const day: string = (today.getDate() + 31).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}

// Daily Key Number Generation in Ability mode
export function generateDailyKey(): number {
  const day: string = (today.getDate() + 31).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = hashNum % 4; // Generate a number between 0 and 3

  return num;
}

// Yesterday Number Generation in Ability mode
export function generateAbilityYesterdayNumber(): number {
  const day: string = (today.getDate() + 30).toString().padStart(2, '0');
  const dateStr: string = `${year}-${month}-${day + 10}`;
  const hash: string = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum: number = parseInt(hash.slice(0, 8), 16);
  const num: number = (hashNum % 150) + 1;

  return num;
}
