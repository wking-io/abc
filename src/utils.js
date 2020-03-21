import { useLayoutEffect, useEffect } from 'react';

export const isBrowser = typeof window !== `undefined`;

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function getElBottom(element) {
  if (!isBrowser) return 0;

  const target = element ? element.current : document.body;
  const { bottom } = target.getBoundingClientRect();

  return bottom;
}

export function useElBottom(effect, deps, element) {
  const callBack = () => {
    const pos = getElBottom(element);
    effect(pos);
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    window.addEventListener('scroll', callBack);

    return () => window.removeEventListener('scroll', callBack);
  }, deps);
}

useElBottom.defaultProps = {
  deps: [],
  element: false,
  wait: null,
};
