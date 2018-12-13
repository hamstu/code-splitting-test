import React from 'react';
import moment from 'moment-timezone';

export default () => (
  <div>
    This is a lazy loaded component. <br />
    {moment().tz('America/Vancouver').format('m d y')}
  </div>
);
