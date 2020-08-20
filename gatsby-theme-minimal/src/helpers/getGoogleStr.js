export default (name, street, city, zip, state) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${name}${street}+${city}+${zip}+${state}`;
};
