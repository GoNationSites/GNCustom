import React from 'react';

const Knife = ({ width = '30px' }) => {
  return (
    <svg
      enable-background='new 0 0 512 512'
      viewBox='0 0 512 512'
      width={width}
      height={width}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={'#fff'}
        d='m474.339 1.142c-5.602-2.32-12.057-1.038-16.347 3.252l-425.197 425.195c-5.858 5.858-5.858 15.355 0 21.213l56.805 56.804c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l129.286-129.286 38.399 16.438c1.904.815 3.91 1.211 5.899 1.211 3.901 0 7.739-1.522 10.61-4.394l55.667-55.666c42.356-42.356 75.455-91.893 98.378-147.233 22.923-55.341 34.546-113.772 34.546-173.672v-.004c.001-6.067-3.653-11.537-9.258-13.858zm-374.133 474.645-35.591-35.591 69.673-69.673 35.591 35.591zm90.887-90.887-35.591-35.591 24.23-24.23 35.591 35.591zm230.243-207.703c-21.407 51.682-52.318 97.944-91.874 137.5l-48.489 48.488-36.209-15.5-43.817-43.819 250.976-250.977c-3.799 42.694-14.041 84.363-30.587 124.308z'
      />
    </svg>
  );
};

export default Knife;