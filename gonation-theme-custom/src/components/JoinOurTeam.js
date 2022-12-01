/** @jsx jsx */
import { jsx, Input, Textarea, Button, Box } from 'theme-ui';
import React from 'react';

const JoinOurTeamForm = ({ location }) => {
  const inputStyle = {maxWidth: '500px', color: 'black',};
  const formStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "white"
  }
  return (
    <form
      name={`Red Rooster ${location} Contact Form Join Our Team`}
      method="POST"
      data-netlify="true"
      style={formStyle}
    >
      <Input
        type="hidden"
        name="form-name"
        value={`Red Rooster ${location} Contact Form`}
      />
      <Input name="name" id="name" placeholder="Name" sx={inputStyle} />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        sx={inputStyle}
      />
      <Input
        type="phone"
        name="phone"
        id="phone"
        placeholder="Phone"
        required
        sx={inputStyle}
      />
      <Textarea sx={inputStyle} name="message" id="message" rows="6" placeholder="Message" />
      <Box sx={{ textAlign: 'center' }}>
        <Button type="submit" variant="">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default JoinOurTeamForm;
