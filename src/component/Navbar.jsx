import React from 'react';
import { Button,Menu,Avatar,Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined,BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto1.png';
import MenuItem from 'antd/es/menu/MenuItem';

const Navbar = () => {
  return (
    <div className='Nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Cryptoanalys</Link>
            </Typography.Title>
            <Menu theme='dark'>
                <MenuItem icon={<HomeOutlined/>}>
                    <Link to='cryptoanlys/'>Home</Link>
                </MenuItem>
                <MenuItem icon={<FundOutlined/>}>
                    <Link to='cryptoanlys/cryptocurrencies'>Cryptocurrencies</Link>
                </MenuItem>
                <MenuItem icon={<MoneyCollectOutlined/>}>
                    <Link to='cryptoanlys/exchanges'>Exchanges</Link>
                </MenuItem>
                <MenuItem icon={<BulbOutlined/>}>
                    <Link to='cryptoanlys/news'>News</Link>
                </MenuItem>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar
