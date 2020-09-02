/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui';
import React from 'react';
import moment from 'moment';

export default function hours({ hours }) {
  const { mon, tue, wed, thu, fri, sat, sun } = hours;

  // put all variables into an array for looping through
  const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

  // no day name in the object that coems through. needed to renfder text of the day.
  const dayOfTheWeekText = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const renderHours = day =>
    day.map(timeBlock => {
      console.log('hours -> timeBlock', timeBlock);
      const labeltest = '';

      return (
        <Box
          sx={{ textAlign: 'right', flexGrow: 1 }}
          key={'id' + Math.random().toString(16).slice(2)}>
          {/* if the business is closed render this */}
          {timeBlock.isClosed ? <span>Closed</span> : null}

          {/* if open is true. render open 24 hours */}
          {timeBlock.isOpen ? <span>Open 24 Hours</span> : null}

          {/* anything else render all hours and labels */}
          <Text as='p' sx={{ textAlign: 'center', width: '100%' }}>
            {timeBlock.name}
          </Text>
          {!timeBlock.isOpen && !timeBlock.isClosed ? (
            <Box
              style={
                day.length > 1 || (day.length === 1 && timeBlock.label)
                  ? { display: 'flex', justifyContent: 'center' }
                  : {}
              }>
              {timeBlock.label ? (
                <Text as='span'>
                  {timeBlock.label}
                  {timeBlock.label}
                </Text>
              ) : (
                ''
              )}

              <Text as='p' sx={{ mb: 2 }}>
                {moment(timeBlock.open, 'h:mm a').format('h:mm a')}-
                {moment(timeBlock.close, 'h:mm a').format('h:mm a')}
              </Text>
            </Box>
          ) : (
            ''
          )}
        </Box>
      );
    });

  return (
    <Box
      sx={{
        maxWidth: '1800px',
        margin: '0 auto',
        width: ['100%', '100%'],
        padding: [2, 3],
      }}>
      <Text
        as='h3'
        variant='heading'
        sx={{ textAlign: 'center', color: 'white', mb: 3, pb: 4, fontSize: 3 }}>
        Our Hours
      </Text>
      <Flex
        sx={{
          color: 'white',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {daysOfWeek.map((day, index) => {
          return (
            <Box
              sx={{
                textAlign: 'center',
                marginX: [0, 2, 3],
                mt: [3, 0],
                width: ['50%', 'auto'],
              }}>
              <Text
                as='span'
                sx={{
                  fontFamily: 'heading',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontSize: 3,
                }}>
                {dayOfTheWeekText[index]}
              </Text>
              {renderHours(day)}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

// const HoursBlock = styled.div`
//   padding: 1rem;
//   background: white;
//   > * {
//     max-width: 400px;
//     margin: 0 auto;
//   }

//   @media (min-width: 767px) {
//     width: 50%;
//     padding: 1rem;
//   }
// `;
// const SectionTitle = styled.h3`
//   font-size: 1.75rem;
//   font-weight: bold;
//   color: ${props => (props.theme.secondary ? props.theme.secondary : 'black')};
//   margin-bottom: 1rem;
//   text-align: center;
//   margin-bottom: 0;
// `;
// const HoursContainer = styled.div``;

// const DayOfWeekContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-bottom: 2rem;
// `;
// const DayOfWeek = styled.p`
//   display: inline-block;
//   text-transform: capitalize;
// `;

// const TimeBlocks = styled.div`
//   display: inline-block;
//   flex-direction: column;
//   vertical-align: middle;
//   text-align: right;
//   flex-grow: 1;
// `;
// const TimeBlock = styled.div`
//   display: inline-block;
// `;
// const TimeLabel = styled.span``;

// const Time = styled.span`
//   flex-grow: 1;
//   text-align: right;
// `;
