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
      businessIDs.map(id => {
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
      title: 'Events',
      path: '/events',
      template: '',
    },
    {
      title: 'Contact',
      path: '/contact',
      template: '',
    },
  ];
  const businessIDs = options.businessIDs;

  const fetchSiteData = async () => {
    const data = await Promise.all(
      businessIDs.map(id => {
        return axios.get(
          `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`
        );
      })
    );
    return data;
  };

  const dualSiteData = await fetchSiteData();

  dualSiteData.forEach((item, idx) => {
    console.log('item is: ', item);
    pageArray.forEach(page => {
      createPage({
        path: `/${slugify(item.data.city, { lower: true })}${page.path}`,
        component: require.resolve('./src/templates/BasicPageTemplate.js'),
        context: {
          curPage: page,
          data: item.data,
          id: businessIDs[idx],
          pages: pageArray,
        },
      });
    });
  });
};
