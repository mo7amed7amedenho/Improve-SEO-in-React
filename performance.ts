export const measurePageSpeed = () => {
  if (typeof window === 'undefined') return null;

  const timing = window.performance.timing;
  const interactive = timing.domInteractive - timing.navigationStart;
  const dcl = timing.domContentLoadedEventEnd - timing.navigationStart;
  const complete = timing.loadEventEnd - timing.navigationStart;

  return {
    interactive,
    dcl,
    complete,
  };
};

export const lazyLoadComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
) => {
  return React.lazy(() => importFunc());
};