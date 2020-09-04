/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Flex } from 'theme-ui';
import Facebook from './facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Guy from './GoNationMan';

const SocialIcons = ({
  iconWidth = '30px',
  iconFill = '#fff',
  links,
  slug,
  justifyLeft,
  push,
}) => {
  const getSocialIcon = social => {
    switch (social) {
      case 'facebook':
        return <Facebook fill={iconFill} width={iconWidth} />;
      case 'instagram':
        return <Instagram fill={iconFill} width={iconWidth} />;
      case 'twitter':
        return <Twitter fill={iconFill} width={iconWidth} />;
      default:
        return null;
    }
  };

  const renderSocialIcons = () => (
    <>
      {Object.keys(links).map(
        (social, idx) =>
          links[social] && (
            <a
              style={
                idx === 0 ? { margin: 0 } : { marginRight: push ? '20px' : 0 }
              }
              target='_blank'
              rel='noopener noreferrer'
              href={links[social]}>
              {getSocialIcon(social)}
            </a>
          )
      )}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://gonation.com/place/${slug}/pulse`}>
        <Guy color={iconFill} height={'30px'} width={'30px'} />
      </a>
    </>
  );

  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: justifyLeft ? 'flex-start' : 'space-evenly',
      }}>
      {renderSocialIcons()}
    </Flex>
  );
};

export default SocialIcons;
