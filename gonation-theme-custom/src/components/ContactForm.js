/** @jsx jsx */
import { jsx, Input, Textarea, Button, Box } from 'theme-ui';
import React from 'react';

const ContactForm = () => {
  const inputStyle = {};
  return (
    <form
      name='Contact Form'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Input type='hidden' name='form-name' value='contact' />
      <Input name='name' id='name' placeholder='Name' sx={inputStyle} />
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        sx={inputStyle}
      />
      <Textarea name='message' id='message' rows='6' placeholder='Message' />
      <Box sx={{ textAlign: 'center' }}>
        <Button variant=''>Submit</Button>
      </Box>
    </form>
  );
};

export default ContactForm;
