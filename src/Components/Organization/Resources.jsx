import * as React from 'react';
import Gallery from './Gallery';
import PropTypes from 'prop-types';
import SelarBooks from "./SelarBooks";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Articles from './Articles';


function Resources(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

Resources.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Articles" {...a11yProps(0)} />
          <Tab label="Gallery" {...a11yProps(1)} />
          <Tab label="Books" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Resources value={value} index={0}>
        <Articles />
      </Resources>
      <Resources value={value} index={1}>
        <Gallery />
      </Resources>
      <Resources value={value} index={2}>
        <SelarBooks />
      </Resources>
    </Box>
  );
}