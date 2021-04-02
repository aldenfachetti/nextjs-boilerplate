// import App from "next/app";
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    // FRAGMENT: pra nao criar uma <div> desnecessaria eu tenho que encapsular tudo p/ poder criar varios itens
    <>
      <Head>
        <title>React NextJS - Boilerplate</title>
        <link rel="shortcut icon" href="/img/react-icon-512.png" />
        <link rel="apple-touch-icon" href="/img/react-icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS anda Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
