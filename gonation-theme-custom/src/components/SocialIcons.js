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
      {Object.keys(links)
        .filter(
          el => (el === 'facebook' && el === 'instagram') || el === 'twitter'
        )
        .map(
          (social, idx) =>
            links[social] && (
              <a
                style={idx === 0 ? { margin: 0 } : {}}
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
        <Guy color={iconFill} height={'20px'} width={iconWidth} />
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
