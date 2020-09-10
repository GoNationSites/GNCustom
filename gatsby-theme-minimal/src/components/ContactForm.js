/** @jsx jsx */
import { jsx, Input, Textarea, Button } from 'theme-ui';
import React from 'react';

const ContactForm = ({ location }) => {
  return (
    <form
      name={`${location} Contact Form`}
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Input type='hidden' name='form-name' value='contact' />
      <Input name='name' id='name' placeholder='Name' />
      <Input type='email' name='email' id='email' placeholder='Email' />
      <Textarea name='message' id='message' rows='6' placeholder='Message' />
      <Button variant='white'>Submit</Button>
    </form>
  );
};

export default ContactForm;
