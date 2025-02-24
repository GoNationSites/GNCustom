/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cloudinaryOptimize from '../helpers/cloudinaryHelper';
import moment from 'moment';
import EventPills from './EventPills';
import capitalize from '../helpers/capitalize';
import Lightbox from 'react-image-lightbox';
let jsonpAdapter = require('axios-jsonp');

const DiscoverEvents = ({ id, bizName, location }) => {
  const [regularEventData, setRegularEventData] = useState(null);
  const [recurringEventData, setRecurringEventData] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState({});
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

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
      // console.log("DiscoverEvents -> normalizeEvents(regEvents.concat(recEvents))", normalizeEvents(regEvents.concat(recEvents)))
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
      return `Every ${eventDays.map(day => capitalize(day))}`;
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
      <Text
        as='a'
        target='_blank'
        rel='noopener noreferrer'
        href={addHTTP(ctas[button])}>
        {button}
      </Text>
    ));
  };

  const renderEvents = () => {
    return allEvents.map((event, idx) => (
      <Flex sx={{ flexWrap: 'wrap' }}>
        <Box
          sx={{
            width: ['100%', '100%', '33%'],
            padding: [3, 4],
            pt: 0,
            mb: 4,
          }}>
          <Text
            as='h4'
            variant='heading'
            sx={{ fontSize: [4, 5, 6], color: 'primary' }}>
            {event.name}
          </Text>
          <Text variant='heading' sx={{ fontSize: [3, 4, 5], my: 3 }}>
            {capitalize(location)}
          </Text>
          <Text sx={{ mb: 3 }}>{event.description}</Text>
          <Text sx={{ mb: 3 }}>{getEventTime(event)}</Text>
          <EventPills tags={event.tags} />
          {renderCTAs(event.ctas)}
        </Box>
        <Box sx={{ width: ['100%', '100%', '66%'] }}>
          <img
            onClick={() =>
              setLightbox({
                isOpen: true,
                mainSrc: event.image,
              })
            }
            src={cloudinaryOptimize(event.image, 1300)}
            alt={event.name}
          />
        </Box>
      </Flex>
    ));
  };

  return (
    <Box>
      {lightBox.isOpen && (
        <Lightbox
          mainSrc={lightBox.mainSrc}
          onCloseRequest={() => setLightbox({ isOpen: false })}></Lightbox>
      )}
      {allEvents && renderEvents()}
    </Box>
  );
};

export default DiscoverEvents;
