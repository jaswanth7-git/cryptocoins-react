import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'

import './Coins.css'

const Coins = (props) => {
    return (
            <section id="info">
            <div className='row' >
                

                {props.coins.map(coins => {
                    return (
                        
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} className='col-lg-4 col-12 col-md-6 onhover'>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
            </section>
        
    )
}

export default Coins
