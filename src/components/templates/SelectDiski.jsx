// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Diska from '../../assets/Diska.png'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const Seasons = [
        { label: 'California' },
        { label: 'Colarado' },
        { label: 'Florida' },
        { label: 'Georgiya' },
        { label: 'Texas' },
        { label: 'Wyoming' },
    ]


    return (

        <Box sx={{ bgcolor: 'background.paper' }} className='selectProduct'>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Диски по размеру" {...a11yProps(0)} />
                    <Tab label="Диски по автомобилю" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x - reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className="bg-blue-900" value={value} index={0} dir={theme.direction}>
                    <div className=" relative -z-0">
                        <h2 className="text-white text-lg font-bold font-body">
                            Типы размер
                        </h2>
                        <div className='flex flex-col gap-5'>
                            <div className="flex flex-wrap gap-2 text-white">
                                <div>
                                    <p>
                                        Ширина
                                    </p>
                                    <select className='text-black px-4 outline-none border border-black'>
                                        <option value='168'>168</option>
                                        <option value='178'>178</option>
                                        <option value='188'>188</option>
                                    </select>
                                </div>
                                <div>
                                    <p>
                                        Профил
                                    </p>
                                    <select className='text-black px-4 outline-none border border-black'>
                                        <option value='168'>168</option>
                                        <option value='178'>178</option>
                                        <option value='188'>188</option>
                                    </select>
                                </div>
                                <div>
                                    <p>
                                        Диаметр
                                    </p>
                                    <select className='text-black px-4 outline-none border border-black'>
                                        <option value='168'>168</option>
                                        <option value='178'>178</option>
                                        <option value='188'>188</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex items-center gap-4 sire'>
                                <div>
                                    <p className='text-white pb-1'>Производитель</p>
                                    <select className='border border-black'>
                                        <option value='all'>
                                            Поиск по производителю
                                        </option>
                                        <option value='all'>
                                            Поиск по производителю
                                        </option>
                                        <option value='all'>
                                            Поиск по производителю
                                        </option>
                                        <option value='all'>
                                            Поиск по производителю
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <p className='text-white'>Сезонность</p>
                                    <div className="inline-flex shadow-sm" role="group">
                                        <button type="button" className="inline-flex border border-black items-center px-4  text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-blue-700 focus:text-white">
                                            Зимние
                                        </button>
                                        <button type="button" className="inline-flex border border-black items-center px-4  text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-blue-700 focus:text-white">
                                            Летние
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5 cursor-pointer'>
                                <input type='checkbox' id='check' />
                                <label className='cursor-pointer text-white' htmlFor='check' >Только в наличии</label>
                            </div>
                            <div className='flex gap-4'>
                                <button className='btn bg-white text-cm px-2 active:bg-blue-300' type='submit'>
                                    Подобрать
                                </button>
                                <button className=' border-b-white border-b-2 text-white bg-darkPrimary'>
                                    Сбросить
                                </button>
                            </div>
                            <img
                                src={Diska}
                                alt='Shina'
                                className='absolute 2xl:w-52 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-40 -bottom-3 -right-3 -z-10'
                            />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="bg-blue-900" value={value} index={1} dir={theme.direction}>
                    <div className='h-64 relative'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <p className='text-white text-lg mb-5'>
                                    Сезон
                                </p>
                                <Autocomplete
                                    className='bg-white rounded outline-none autocomplete'
                                    disablePortal
                                    id="combo-box-demo"
                                    options={Seasons}
                                    renderInput={(params) => <TextField {...params} label="Seasons" />}
                                />
                            </div>
                            <div className='flex items-center gap-2 text-white cursor-pointer'>
                                <Switch {...label} />
                                <p className='cursor-pointer' >Только в наличии</p>
                            </div>
                            <div className='flex gap-4'>
                                <button className='btn bg-white text-cm px-2 active:bg-blue-300' type='submit'>
                                    Подобрать
                                </button>
                                <button className=' border-b-white border-b-2 text-white '>
                                    Сбросить
                                </button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </SwipeableViews >
        </Box >
    );
}