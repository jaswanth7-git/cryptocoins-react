import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
    return (
        
        
            <div className='coin-card'>
            
            <img src={props.coins.image} alt='' />
            <h3><span className='card-rank'>#{props.coins.market_cap_rank}</span>   {props.coins.symbol.toUpperCase()}</h3>
            <div className="row top-row">
                <div className="col-6">
                    <p className='subinfo'>Price</p>
                    <p>${props.coins.current_price.toLocaleString()}</p>
                    <hr/>
                </div>
                <div className="col-6">
                    <p className='subinfo'>% Change</p>
                    <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                    <hr/>
                </div>
                

            </div>
            <div className="row top-row">
                <div className="col-6">
                    <p className='subinfo'>Volume</p>
                    <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
                    <hr/>
                </div>
                <div className="col-6">
                    <p className='subinfo'>Market Cap</p>
                    <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
                    <hr/>
                </div>
                

            </div>
            </div>
            
            

        

         
    )
}

export default CoinItem

