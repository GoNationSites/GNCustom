export default data => {
  const { name, street, city, zip, state } = data;
  return `https://www.google.com/maps/dir/?api=1&destination=${name}${street}+${city}+${zip}+${state}`;
};
