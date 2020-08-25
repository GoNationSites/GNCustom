import React from 'react';
import { Helmet } from 'react-helmet';
import capitalize from '../helpers/capitalize';
import avatarCoverStringBuilder from '../helpers/avatarCoverStringBuilder';

const SEO = ({ pageTitle, siteMetaData }) => {
  return (
    <Helmet>
      <title>{`${siteMetaData.name} | ${capitalize(pageTitle)}`}</title>
      <html lang='en' />
      <meta name='description' content={siteMetaData.desc} />
      <meta
        name='image'
        content={avatarCoverStringBuilder(
          siteMetaData.avatar.imageBaseUrl,
          siteMetaData.avatar.imagePrefix
        )}
      />
      <link rel="canonical" href={siteMetaData.links.website} />

      {/* OpenGraph tags */}
      <meta property='og:url' content={siteMetaData.links.website} />
      <meta property='og:title' content={capitalize(pageTitle)} />
      <meta property='og:description' content={siteMetaData.desc} />
      <meta
        property='og:image'
        content={avatarCoverStringBuilder(
          siteMetaData.avatar.imageBaseUrl,
          siteMetaData.avatar.imagePrefix
        )}
      />
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={siteMetaData.links.twitter} />
      <meta name='twitter:title' content={capitalize(pageTitle)} />
      <meta name='twitter:description' content={siteMetaData.desc} />
      <meta
        name='twitter:image'
        content={avatarCoverStringBuilder(
          siteMetaData.avatar.imageBaseUrl,
          siteMetaData.avatar.imagePrefix
        )}
      />
    </Helmet>
  );
};

export default SEO;
