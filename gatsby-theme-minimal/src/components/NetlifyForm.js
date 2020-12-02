/** @jsx jsx */
import {
  jsx,
  Input,
  Textarea,
  Button,
  Text,
  Box,
  Select,
  Flex,
  Label,
  Radio,
} from 'theme-ui'
import React, { useState } from 'react'

const NetlifyForm = ({ location }) => {
  const [hasLicense, setHasLicense] = useState(true)
  const [eligible, setEligible] = useState(true)

  return (
    <form
      name={`${location} Careers Form`}
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Box sx={{ color: 'text' }}>
        <Text
          variant='heading'
          sx={{ fontSize: [2, 3, 4], textAlign: 'center', mb: 2 }}>
          Job Application Form
        </Text>
        <Text as='p' sx={{ mb: 3 }}>
          Please complete this accurately, giving as many details as possible
          about your skills and experience related to this position. Thank you.
        </Text>
        <Input
          sx={{
            border: '1px solid',
            borderColor: 'text',
            borderRadius: '3px',
            color: 'text',
            '&::placeholder': {
              // color: ${props =>
              color: 'black',
            },
          }}
          type='hidden'
          name='form-name'
          value={`${location} Careers Form`}
        />

        <Box sx={{ paddingY: 3 }}>
          <Text as='p' variant='label'>
            Position Applying For
          </Text>
          <Select variant='career' defaultValue='Choose One'>
            <option>Administration</option>
            <option>Assistant General manager</option>
            <option>Bartender</option>
            <option>Busser</option>
            <option>Chef</option>
            <option>Dishwasher</option>
            <option>Food Runner</option>
            <option>Host</option>
            <option>Server</option>
            <option>Wait Staff</option>
          </Select>
        </Box>

        <Text
          variant='heading'
          sx={{ fontSize: [2, 3, 4], textAlign: 'center', mb: 2, mt: 2 }}>
          Personal Information
        </Text>

        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              First Name
            </Text>
            <Input
              variant='career'
              type='name'
              name='firstName'
              id='firstName'
            />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              Last Name
            </Text>
            <Input variant='career' type='name' name='lastName' id='lastName' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 100%` }}>
            <Text as='p' variant='label'>
              Address
            </Text>
            <Input variant='career' type='text' name='address' id='address' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 33%` }}>
            <Text as='p' variant='label'>
              City
            </Text>
            <Input variant='career' type='text' name='city' id='city' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 33%` }}>
            <Text as='p' variant='label'>
              State / Region
            </Text>
            <Input variant='career' type='text' name='state' id='state' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 33%` }}>
            <Text as='p' variant='label'>
              ZIP Code
            </Text>
            <Input variant='career' type='text' name='zip' id='zip' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              Email
            </Text>
            <Input variant='career' type='text' name='email' id='email' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              Phone Number
            </Text>
            <Input variant='career' type='phone' name='phone' id='phone' />
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              Do you have a valid driver's license?
            </Text>
            <Label>
              <Radio
                name='yes'
                value={'yes'}
                checked={hasLicense ? true : false}
                onClick={() => setHasLicense(true)}
              />
              Yes
            </Label>
            <Label>
              <Radio
                name='no'
                value={'no'}
                checked={!hasLicense ? true : false}
                onClick={() => setHasLicense(false)}
              />
              No
            </Label>
          </Box>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label'>
              Are you eligible to work in the United States?
            </Text>
            <Label>
              <Radio
                name='yes'
                value={'yes'}
                checked={eligible ? true : false}
                onClick={() => setEligible(true)}
              />
              Yes
            </Label>
            <Label>
              <Radio
                name='no'
                value={'no'}
                checked={!eligible ? true : false}
                onClick={() => setEligible(false)}
              />
              No
            </Label>
          </Box>

          <Text
            variant='heading'
            sx={{
              fontSize: [2, 3, 4],
              textAlign: 'center',
              mb: 3,
              mt: 3,
              textAlign: 'center',
              width: '100%',
            }}>
            Resume / Work Experience
          </Text>

          <Box sx={{ paddingY: 3, paddingX: 2, flex: `1 1 50%` }}>
            <Text as='p' variant='label' sx={{ mb: 3 }}>
              Something you would like to tell us.
            </Text>
            <Textarea name='message' id='message' rows='6' variant='career' />
          </Box>
        </Flex>
        <Button variant='black'>Submit</Button>
      </Box>
    </form>
  )
}

export default NetlifyForm
