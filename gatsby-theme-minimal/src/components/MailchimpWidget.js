import React from 'react'
import { jsx, Box, Text, Flex, Image } from 'theme-ui'

const MailchimpWidget = () => {
  React.useEffect(() => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script.async = true
    document.getElementById('scriptWidget').appendChild(script)

    return () => {}
  }, [])
  return (
    <>
      <Box sx={formStyles.container}>
        {/* <!-- Begin Mailchimp Signup Form --> */}
        <Text css={{fontSize: '2rem', marginLeft: '2rem'}}>Join Our Mailing List</Text>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
          rel="stylesheet"
          type="text/css"
        />

        <div id="mc_embed_signup">
          <form
            action="https://gmail.us11.list-manage.com/subscribe/post?u=d056452b9921a4c4ffb79f2a8&amp;id=930266406f&amp;f_id=003da4e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  class=""
                  id="mce-FNAME"
                />
                <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                ></div>
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_8bac184af4ef0c296a9a7b5b8_cbdfcd8c1f"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
        <div id="scriptWidget"></div>
      </Box>
    </>
  )
}
const formStyles = {
  container: {
    
    '#mc_embed_signup': {
      input: {
        border: 'solid 2px',
        borderColor: 'tertiary',
        backgroundColor: 'transparent',
        maxWidth: '500px',
      },
      '.indicates-required': {
        display: 'none',
      },
      '.button': {
        backgroundColor: 'primary',
        padding: '0.75rem 1rem',
        height: 'auto',
        lineHeight: '1.5',
      },
    },
  },
}
export default MailchimpWidget
