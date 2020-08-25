/** @jsx jsx */
import { jsx, Box, Flex, Image, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
// import { Link } from "gatsby"
import axios from 'axios';
import moment from 'moment';
import capitalize from '../../helpers/capitalize';
import Lightbox from 'react-image-lightbox';

import Layout from '../../components/LayoutWoodbury';

let jsonpAdapter = require('axios-jsonp');

const DiscoverEvents = ({ bizName }) => {
  const [regularEventData, setRegularEventData] = useState(null);
  const [recurringEventData, setRecurringEventData] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState({});
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

  const id = 'bzn-mmT_2ynbR4eGFehR2VEi8g';

  const regularEventsURL = `https://data.prod.gonation.com/profile/events?profile_id=${id}`;
  const recurringEventsURL = `https://data.prod.gonation.com/profile/recurringevents?profile_id=${id}`;

  useEffect(() => {
    axios({
      url: regularEventsURL,
      adapter: jsonpAdapter,
    }).then(res => {
      setRegularEventData(res);
    });

    axios({
      url: recurringEventsURL,
      adapter: jsonpAdapter,
    }).then(res => {
      setRecurringEventData(res);
    });
  }, []);

  useEffect(() => {
    if (regularEventData && recurringEventData) {
      const regEvents = regularEventData.data.events;
      const recEvents = recurringEventData.data.events;

      setAllEvents(
        normalizeEvents(regEvents.concat(recEvents)).filter(
          (thing, index, self) =>
            index ===
            self.findIndex(
              t => t.place === thing.place && t.name === thing.name
            )
        )
      );
      setActiveEvent(normalizeEvents(regEvents.concat(recEvents))[0]);
    }
  }, [regularEventData, recurringEventData]);

  const normalizeEvents = events => {
    return events.map(event => {
      if (event.eventDays) {
        return {
          isRecurring: true,
          createdAt: event.created,
          days: event.eventDays,
          description: event.description,
          tags: event.eventTags,
          name: event.name,
          starts: event.starts,
          image: event.imageurl,
          ctas: event.ctas,
          profile_id: event.profile_id,
          _id: event._id,
        };
      } else
        return {
          isRecurring: false,
          createdAt: event.createdAt,
          description: event.description,
          tags: event.eventTags,
          name: event.name,
          starts: event.starts,
          image: event.imageurl,
          ctas: event.ctas,
          profile_id: event.profile_id,
          _id: event._id,
        };
    });
  };

  const getEventTime = event => {
    if (event.isRecurring) {
      const eventDays = Object.keys(event.days);
      return `Every ${eventDays.map(day => capitalize(day)).join(', ')} `;
    }
    return moment(event.starts).format('MMMM Do YYYY, h:mm a');
  };

  const addHTTP = url => {
    var prefix = 'https://';
    if (url.substr(0, prefix.length) !== prefix) {
      return prefix + url;
    }
    return url;
  };

  const renderCTAs = ctas => {
    const buttonTitles = Object.keys(ctas).filter(
      btn => btn !== 'cta1' && btn !== 'cta2'
    );
    return buttonTitles.map(button => (
      <a target='_blank' rel='noopener noreferrer' href={addHTTP(ctas[button])}>
        {button}
      </a>
    ));
  };

  const renderEvents = () => {
    return allEvents.map((event, idx) => (
      <Box sx={{ width: ['100%', '50%'], padding: 3 }}>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ width: ['100%', '33%'] }}>
            <Image alt={event.name} src={event.image} />
          </Box>

          <Box sx={{ flex: ['auto', 1], paddingY: [3, 0] }}>
            <Box sx={{ paddingLeft: [0, 3], paddingRight: '1' }}>
              <Text as='h4' sx={{ fontFamily: 'heading', fontSize: [3, 3, 4] }}>
                {event.name}
              </Text>
              <Text as='p' sx={{ fontSize: [2, 2], color: 'lightText' }}>
                {event.description}
              </Text>
              <Text as='p' sx={{fontSize: 1, color: 'lightText', mt: 3}}>{getEventTime(event)}</Text>
              <Box>{renderCTAs(event.ctas)}</Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    ));
  };

  return (
    <Layout pageTitle='events'>
      <Box sx={{ paddingY: ['2', '3'], paddingX: 2 }}>
        {/* {lightBox.isOpen && (
        <Lightbox
          mainSrc={lightBox.mainSrc}
          onCloseRequest={() => setLightbox({ isOpen: false })}></Lightbox>
      )} */}

        <Flex sx={{ flexWrap: 'wrap' }}>{allEvents && renderEvents()}</Flex>
      </Box>
    </Layout>
  );
};

export default DiscoverEvents;
