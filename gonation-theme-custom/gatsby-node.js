const path = require('path');
const slugify = require('slugify');
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest }, options
) => {

  const { createNode } = actions;
  const businessIDs = options.businessIDs
  console.log('fetching with ids: ', businessIDs)

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