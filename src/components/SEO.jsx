import Head from 'next/head'

function SEO({
  title = 'Chrystian',
  siteTitle = 'Undefined',
  description = 'Programador e desenvolvedor de jogos, apaixonado por tecnologia, atualmente fazendo projetos de programação em grupos e individuais. Buscando experiência na área, visto que meu sonho é trabalhar na indústria do desenvolvimento de software.',
}) {
  return (
    <Head>
      <title key="title">{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} key="description"/>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={'@cristiandrift'} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#424242"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}

export default SEO
