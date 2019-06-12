import React from 'react';
import debounce from "lodash.debounce"
const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isFetching) return;
    const m = debounce(callback, 500);
    m()
  }, [isFetching]);

  function handleScroll(e) {
    if ((window.innerHeight + 250) + document.documentElement.scrollTop <= document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;