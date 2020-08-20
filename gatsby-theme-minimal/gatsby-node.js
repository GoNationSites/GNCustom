const axios = require('axios');
const slugify = require('slugify');
const crypto = require('crypto');


exports.sourceNodes = async({actions, createNodeId, createContentDigest}) => {
    const bizIDs = ['bzn-vBPQfZmCTC2V2Y_BpE6SPw', 'bzn-mmT_2ynbR4eGFehR2VEi8g'];
    const {createNode} = actions

   
   const fetchSiteData = async () => {
      const data = await Promise.all(
        bizIDs.map(id=> {
          return axios.get(
            `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`
          )
        })
      )
      return data
    }

    const dualSiteData = await fetchSiteData()

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
}