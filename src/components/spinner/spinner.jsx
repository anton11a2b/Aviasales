import React from 'react';
import { Spin } from 'antd';

import './spinner.css';
import 'antd/dist/antd.css';

const Spinner = () => (
  <div className="spinner">
    <Spin size="large" />
  </div>
);

export default Spinner;
