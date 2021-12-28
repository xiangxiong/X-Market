import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState} from 'react';
import { Content } from './component/Content/Content';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Content/>
    // <Box
    //   sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
    //   <Tabs
    //     orientation="vertical"
    //     variant="scrollable"
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="Vertical tabs example"
    //     sx={{ borderRight: 1, borderColor: 'divider' }}>
    //     <Tab label="Content model" {...a11yProps(1)} />
    //     <Tab label="Content & assets" {...a11yProps(0)} />
    //     <Tab label="Project settings" {...a11yProps(1)} />
    //   </Tabs>
    //   <TabPanel value={value} index={0}>
       
    //   </TabPanel>
    // </Box>
  );
}

export default Home