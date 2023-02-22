import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line no-undef
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap') : null;
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
