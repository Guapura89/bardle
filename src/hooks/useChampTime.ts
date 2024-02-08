import { useEffect, useState } from 'react';
import { formatDistanceStrict } from 'date-fns';
const useChampTime = () => {
  const [time, setTime] = useState<string>('1 day');
  const today = new Date();

  useEffect(() => {
    const timeTo: string = formatDistanceStrict(
      new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        today.getUTCHours(),
        today.getUTCMinutes(),
        today.getUTCSeconds()
      ),
      new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1, 0, 0, 0)
    );

    setTime(timeTo);
  }, []);

  return time;
};

export default useChampTime;
