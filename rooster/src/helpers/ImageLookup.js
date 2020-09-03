export default (category) => {
    switch (category) {
      case 'Restaurant':
        return 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'Food & Beverage':
        return 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'Bar':
        return 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'Shopping & Retail':
        return 'https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'Art & Entertainment':
        return 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'Event Venue':
        return 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      default: return 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    }
}