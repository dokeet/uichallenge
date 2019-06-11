import { useState, useEffect } from 'react';
import debounce from "lodash.debounce"
const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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