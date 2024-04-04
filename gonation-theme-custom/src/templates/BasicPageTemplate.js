/** @jsx jsx */
import { jsx, Box, Flex, Text, Heading, Link, Image } from 'theme-ui';
import React, { useEffect } from 'react';
import slugify from 'slugify';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import SimpleHero from '../components/SimpleHero';
import Menu from '../components/Menu';
import HomeRenderer from '../components/HomeRenderer';
import ButtonRow from '../components/ButtonRow';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import EventsPage from '../components/EventsPage';
import GalleryPage from '../components/GalleryPage';
import OnlineOrdering from '../components/OnlineOrdering';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import Modal from '../components/Modal';
import JoinOurTeamForm from '../components/JoinOurTeam';
import MailchimpWidget from '../../../gatsby-theme-minimal/src/components/MailchimpWidget';

const BasicPageTemplate = ({ pageContext }) => {
  const { curPage, id } = pageContext;
  const [showGiftCardContainer, setShowGiftCardContainer] = React.useState(
    false
  );

  useEffect(() => {
    if (pageContext.data.city === 'Newtown') {
      setShowGiftCardContainer(true);
    }
  }, []);

  const renderHero = () => {
    if (curPage.title === 'Home') {
      return (
        <>
          <HomeHero withShout id={id} location={pageContext.data.city} />;
        </>
      );
    } else
      return (
        <>
          <SimpleHero
            id={id}
            location={pageContext.data.city}
            pageTitle={curPage.title}
          />
        </>
      );
  };

  const routes = pageContext.pages;

  const renderComponent = title => {
    switch (title) {
      case 'Menu':
        return <Menu id={id} poweredList="1" />;
      case 'Home':
        return (
          <>
            <HomeRenderer data={pageContext} location={pageContext.data.city} />
            <Flex
              as="section"
              sx={{
                padding: [2, 3, 5],
                background: 'white',
                mt: [4, 5, 6],
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Text
                as="h3"
                sx={{ color: 'primary', fontSize: [3, 4, 5], mb: [3, 4] }}
              >
                Order Online
              </Text>
              <OnlineOrdering location={pageContext.data.city} />
            </Flex>
            <Box>
              {pageContext.data.city === 'Newtown' && <MailchimpWidget />}
            </Box>
            <Box sx={{ paddingY: 5 }}>
              <ButtonRow
                data={pageContext}
                location={pageContext.data.city}
                pages={['menu', 'gallery', 'contact']}
              />

              {showGiftCardContainer ? (
                <Box
                  sx={{
                    backgroundImage: `url('${cloudinaryOptimize(
                      'https://res.cloudinary.com/gonation/image/upload/v1671046595/sites/red-rooster/Red_Rooster_Gift.png',
                      900
                    )}')`,
                    backgroundPosition: '5px -75px',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '32vh 2rem',
                    color: 'white',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '2rem',
                      textAlign: 'center',
                    }}
                  >
                    <Heading
                      sx={{
                        marginBottom: '1rem',
                        color: 'secondary',
                        fontSize: '1.9rem',
                      }}
                    >
                      Give the Gift of Red Rooster Pub
                    </Heading>
                    <Text sx={{ marginBottom: '2rem', color: 'secondary' }}>
                      Red Rooster is serving CT
                    </Text>
                  </Box>
                </Box>
              ) : (
                <>
                  <Box
                    sx={{
                      backgroundImage: `url('${cloudinaryOptimize(
                        'https://res.cloudinary.com/gonation/image/upload/v1617388779/sites/mix-prime/serving-ct-image.jpg',
                        900
                      )}')`,
                      backgroundSize: 'cover',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '25vh 2rem',
                      color: 'white',
                    }}
                  >
                    <Heading sx={{ marginBottom: '1rem' }}>
                      Red Rooster is serving CT
                    </Heading>
                    <Text sx={{ marginBottom: '2rem' }}>
                      Find out how local business are vital to the economy
                    </Text>

                    <Link
                      href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fservingconnecticut.com%2f&c=E,1,hA45iW0GZJdGWU2_lp0BOlPA2MbuJCyCSHBrRznoiP5v2BNJNsn5x0h4ADkZlBLeOHr2HP5RMLme4LozPT9vTxNK1gc3p9-xVDwmWt19f7h14J2cmx2_Ag,,&typo=1"
                      target="_blank"
                    >
                      <Image
                        sx={{
                          maxWidth: '300px',
                          transition: 'all ease-in-out 0.5s',
                          ':hover': {
                            transform: 'scale(1.2)',
                          },
                        }}
                        src="https://res.cloudinary.com/gonation/image/upload/v1617388067/sites/mix-prime/logo-hero.png"
                        alt="reseturants serving connecticut"
                      />
                    </Link>
                  </Box>
                </>
              )}
            </Box>
          </>
        );
      case 'Join Our Team':
        return (
          <JoinOurTeamForm
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      case 'Spirits':
        return <Menu id={id} poweredList="2" />;
      case 'About':
        return (
          <AboutPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
          />
        );

      case 'Events':
        return (
          <EventsPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      case 'Gallery':
        return (
          <GalleryPage
            data={pageContext}
            location={slugify(pageContext.data.city, { lower: true })}
            id={id}
          />
        );
      default:
        console.log('in default');
        return '';
    }
  };

  const renderHours = () => {
    const titleStyle = {
      textAlign: 'center',
      fontSize: '1.25rem',
      margin: '1rem 0rem 0rem',
      color: 'primary',
    };
    const hoursText = {
      textAlign: 'center',
    };
    return (
      <section id="hours">
        <Box sx={{ pb: 3 }}>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: '2rem',
              mt: 5,
              borderBottom: '2px solid',
            }}
          >
            Hours Of Operation
          </Heading>
          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Monday - Saturday
          </Text>
          <Text sx={hoursText} as="p">
            11:30 AM - TIL
          </Text>
          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Sunday
          </Text>
          <Text sx={hoursText} as="p">
            {pageContext.data.city === 'Newtown' ? `11:00 AM` : '11:30 AM'}- TIL
          </Text>
        </Box>
        <Box sx={{ pb: 3 }}>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: '2rem',
              mt: 5,
              borderBottom: '2px solid',
            }}
          >
            Kitchen Hours
          </Heading>
          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Monday - Thursday
          </Text>
          <Text sx={hoursText} as="p">
            11:30 AM - 10:00 PM
          </Text>

          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Friday & Saturday
          </Text>
          <Text sx={hoursText} as="p">
            11:30 AM - 11:00 PM
          </Text>

          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Sunday
          </Text>
          <Text sx={hoursText} as="p">
            {pageContext.data.city === 'Newtown' ? `11:00 AM` : '11:30 AM'} -
            10:00 PM
          </Text>
        </Box>
        <Box sx={{ pb: 3 }}>
          <Text sx={titleStyle} as="h3" variant="heading">
            Brunch Served From
          </Text>
          <Text sx={{ ...titleStyle }} as="h3" variant="heading">
            Sunday
          </Text>
          <Text sx={hoursText} as="p">
            {pageContext.data.city === 'Newtown' ? `11:00 AM` : '11:30 AM'} -
            3:00 PM
          </Text>
        </Box>
        <Text
          sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'primary',
          }}
        >
          Last seating for the kitchen -- 30 minutes prior to closing.
        </Text>

        {/* ! spell Newtown right to bring back holiday hours */}
        {pageContext.data.city === 'Newtown' ? (
          <>
            {/* <Heading
              sx={{
                textAlign: 'center',
                fontSize: '2rem',
                mt: 5,
                borderBottom: '2px solid',
              }}
            >
              Holiday Hours
            </Heading> */}
            <br></br>
            {/* <Text sx={{ ...titleStyle }} as="h5" variant="heading">
              Easter Sunday
            </Text>
            <Text sx={hoursText} as="p">
              11:00am- 6pm
            </Text>
            <Text sx={hoursText} as="p">
              Last seating for the kitchen is 4:30pm
            </Text> */}
          </>
        ) : (
          ''
        )}
      </section>
    );
  };

  return (
    <Layout pageTitle={curPage.title} routes={routes} pageContext={pageContext}>
      {renderHero()}
      <Box
        sx={{
          paddingY: 5,
          bg: 'background',
          pt: curPage.title === 'Menu' ? 0 : [4, 5],
        }}
      >
        <Box
          sx={{
            paddingY: 4,
            paddingX: curPage.title === 'Events' ? 0 : 3,
            pt: curPage.title === 'Menu' ? 0 : 4,
          }}
        >
          <Box
            sx={{
              maxWidth:
                curPage.title !== 'Menu' && curPage.title !== 'Events'
                  ? '1200px'
                  : '',
              margin: 'auto',
            }}
          >
            {renderComponent(curPage.title)}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {renderHours()}
        </Box>
      </Box>
    </Layout>
  );
};

export default BasicPageTemplate;
