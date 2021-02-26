/** @jsx jsx */
import { jsx, Input, Textarea, Button } from 'theme-ui'
import React from 'react'

const ContactForm = ({ location }) => {
  return (
    <form
      name={`${location} Contact Form`}
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Input
        type='hidden'
        name='form-name'
        value={`${location} Contact Form`}
      />
      <Input type='text' name='name' id='name' placeholder='Name' />
      <Input type='email' name='email' id='email' placeholder='Email' />
      <Input
        type='phone'
        name='phone'
        id='phone'
        placeholder='Phone'
        required
      />
      <Input
        type='text'
        sx={{ display: 'none !important' }}
        name='location'
        id='location'
        value={location}
        placeholder={location}
      />
      <Textarea
        name='message'
        id='message'
        rows='6'
        placeholder='Message'
        sx={{ color: 'white' }}
      />
      <Button variant='white'>Submit</Button>
    </form>
  )
}

export default ContactForm
