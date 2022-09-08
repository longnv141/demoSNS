import React from 'react';
import { Helmet } from 'react-helmet';
// import { useLocation } from 'react-router-dom';

export default function HelmetMetaData(props) {
  const quote = props.quote !== undefined ? props.quote : '';
  const title =
    props.title !== undefined
      ? props.title
      : 'ビューティーカウンセリングの Blush';
  const image =
    props.image !== undefined
      ? props.image
      : 'https://storage.googleapis.com/cmperstribe_storage_usha/Banner/IMG_3640.JPG';
  const description =
    props.description !== undefined
      ? props.description
      : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse rem itaque nostrum doloremque, sunt aliquid culpa eaque veritatis dolore dignissimos ipsa soluta cum. Maxime, fugiat reiciendis? A impedit iusto rem';
  const hashtag = props.hashtag !== undefined ? props.hashtag : '#Blush';
  const url =
    props.url !== undefined && props.url !== null
      ? props.url
      : window.location.href;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="type" content="website" />
      <meta name="url" content={url} />
      <meta name="title" content={title} />
      <meta name="quote" content={quote} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Blush" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
