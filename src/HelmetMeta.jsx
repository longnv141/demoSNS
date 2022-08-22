import React from 'react'
import { OGP } from 'react-ogp'
import { Helmet as Head } from 'react-helmet'
import ReactSEOMetaTags from 'react-seo-meta-tags'

export default function HelmetMeta() {
  return (
    <>
     <ReactSEOMetaTags
      render={(el) => <Head>{el}</Head>}
      breadcrumb={[
        { name: 'My Site', url: 'https://me.com' },
        { name: 'Blog', url: 'https://me.com/blog' },
      ]}
      organization={{
        name: 'Google',
        legalName: 'Google Inc',
        url: 'https://google.com',
        logo: 'https://google.com/logo.jpg'
      }}
      // blogPost={{ ...blogPost }}
      facebook={{ facebookAppId: 'abc123' }}
      twitter={{ twitterUser: '@mickey_mouse' }}
    />
    </>
  )
}