import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import { Layout,Typography,Space} from 'antd';
import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Homepages } from './component';
import './App.css';
//import 'antd/dist/reset.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path='cryptoanlys/' element={<Homepages/>}/>
                        <Route exact path='cryptoanlys/exchanges' element={<Exchanges/>}/>
                        <Route exact path='cryptoanlys/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route exact path='cryptoanlys/crypto/:coinId' element={<CryptoDetails/>}/>
                        <Route exact path='cryptoanlys/news' element={ <News/>}/>                           
                    </Routes>
                </div>
            </Layout>
        <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white',textAlign: 'center'}}>
                Cryptoanalys<br/>
                All rights reserverd
            </Typography.Title>
            <space>
                <Link to='cryptoanlys/'>Home</Link>
                <Link to='cryptoanlys/exchanges'>Exchanges</Link>
                <Link to='cryptoanlys/news'>News</Link>
            </space>
        </div>
        </div>
    </div>
  )
}

export default App
