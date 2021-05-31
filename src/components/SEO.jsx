import Head from 'next/head'

export default function SEO({ description, title, siteTitle }) {
  title = 'Chrystian'
  siteTitle ? siteTitle = 'Home' : siteTitle = 'Undefined'
  description = 'Programador e desenvolvedor de jogos, apaixonado por tecnologia, atualmente fazendo projetos de programação em grupos e individuais. Buscando experiência na área, visto que meu sonho é trabalhar na indústria do desenvolvimento de software.'
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={'@cristiandrift'} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}
