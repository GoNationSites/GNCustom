const path = require('path');
const slugify = require('slugify');
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;
  const businessIDs = options.businessIDs;

  const fetchSiteData = async () => {
    const data = await Promise.all(
      businessIDs.map((id) => {
        return axios.get(
          `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`
        );
      })
    );
    return data;
  };

  const dualSiteData = await fetchSiteData();

  dualSiteData.map(({ data, idx }) => {
    {
      const siteMetaNode = {
        // Required Fields
        id: `${data.city}-${idx}`,
        parent: `__SOURCE__`,
        internal: {
          type: 'SiteData',
        },
        children: [],
        data: data,
      };
      const contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(siteMetaNode))
        .digest('hex');
      siteMetaNode.internal.contentDigest = contentDigest;
      createNode(siteMetaNode);
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions;

  const pageArray = [
    {
      title: 'Home',
      path: '',
      template: '',
    },
    {
      title: 'About',
      path: '/about',
      template: '',
    },
    {
      title: 'Menu',
      path: '/menu',
      template: '',
    },
    {
      title: 'Gallery',
      path: '/gallery',
      template: '',
    },
    {
      title: 'Spirits',
      path: '/spirits',
      template: '',
    },
    {
      title: 'Events',
      path: '/events',
      template: '',
    },
    {
      title: 'Contact',
      path: '/contact',
      template: '',
    },
    {
      title: 'Join Our Team',
      path: '/join-our-team',
      template: '',
    },
    // {
    //   title: 'Uber Eats',
    //   path:
    //     'https://www.ubereats.com/connecticut/food-delivery/red-rooster-pub-newtown/nVk1BEWIQ6qwAlCHPcsD2A',
    //   template: '',
    // },
  ];
  const businessIDs = options.businessIDs;

  const fetchSiteData = async () => {
    const data = await Promise.all(
      businessIDs.map((id) => {
        return axios.get(
          `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`
        );
      })
    );
    return data;
  };

  const dualSiteData = await fetchSiteData();

  const getGoogleMapLink = (city) => {
    switch (city) {
      case 'Ridgefield':
        return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11991.337072428223!2d-73.4973287!3d41.2907113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cccd74766f5848e!2sRed%20Rooster%20Pub!5e0!3m2!1sen!2sus!4v1598538003539!5m2!1sen!2sus';
      case 'Wilton':
        return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12008.879098877222!2d-73.4323159!3d41.1951819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cc44549bf4d8d5f!2sRed%20Rooster%20Pub!5e0!3m2!1sen!2sus!4v1598537961680!5m2!1sen!2sus';
      case 'Newtown':
        return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23951.4094677391!2d-73.29578263605957!3d41.37568845737877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11a2ec9d9a19a311!2sRed%20Rooster%20Pub!5e0!3m2!1sen!2sus!4v1598538030564!5m2!1sen!2sus';
      default:
        return '';
    }
  };

  dualSiteData.forEach((item, idx) => {
    pageArray.forEach((page) => {
      if (page.path.includes('contact')) {
        // ! Hacky. We check to see if it's a contact page, and statically generatre a template that does NOT use any dynamic rendering

        createPage({
          path: `/${slugify(item.data.city, { lower: true })}${page.path}`,
          component: require.resolve('./src/templates/ContactTemplate.js'),
          context: {
            curPage: page,
            data: item.data,
            id: businessIDs[idx],
            pages: pageArray,
            googleMapLink: getGoogleMapLink(item.data.city),
          },
        });
      } else {
        createPage({
          path: `/${slugify(item.data.city, { lower: true })}${page.path}`,
          component: require.resolve('./src/templates/BasicPageTemplate.js'),
          context: {
            curPage: page,
            data: item.data,
            id: businessIDs[idx],
            pages: pageArray,
            googleMapLink: getGoogleMapLink(item.data.city),
          },
        });
      }
    });
  });
};
