import { extractCritical } from "emotion-server";

function MyApp({ Component, pageProps }) {
  const { ids, css } = extractCritical(pageProps?.css);

  return (
    <CacheProvider value={cache}>
      <Head>
        <style
          data-emotion={`css ${ids.join(" ")}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="true"
        />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}
export default MyApp;
