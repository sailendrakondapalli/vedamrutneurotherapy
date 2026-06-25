import { useState, useEffect, useRef } from 'react';

/**
 * Custom count-up hook — no external dependency, React 19 safe.
 * @param {number} end  - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Trigger flag
 * @param {number} decimals - Decimal places
 */
export function useCountUp(end, duration = 2000, start = false, decimals = 0) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = parseFloat((startVal + (end - startVal) * ease).toFixed(decimals));
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start, decimals]);

  return count;
}
