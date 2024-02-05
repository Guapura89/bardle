import crypto from 'crypto';

// Daily Number Generation in Classic mode
export function generateDailyNumber() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  const hash = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum = parseInt(hash.slice(0, 8), 16);
  const num = (hashNum % 150) + 1;

  return num;
}

// Yesterday Number Generation in Classic mode
export function generateYesterdayNumber() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = (today.getDate() - 1).toString().padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  const hash = crypto.createHash('sha256').update(dateStr).digest('hex');
  const hashNum = parseInt(hash.slice(0, 8), 16);
  const num = (hashNum % 150) + 1;

  return num;
}

