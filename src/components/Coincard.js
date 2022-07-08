import React from "react"



const Coincard = (props) =>{
    return (
        <section id="info">
        <div className="row ">
            <div className="col-3 ">
            {/* <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p> */}
            <p>asd</p>
            <p>asdsad</p>
            <div className="row">
                <div className="col-6">
                    <p>Price</p>
                    <p>$20</p>
                </div>
                <div className="col-6">
                    <p>% Change</p>
                    <p>25%</p>
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <p>Volume</p>
                    <p>2501435</p>
                </div>
                <div className="col-6">
                    <p>Market Cap</p>
                    <p>32564</p>
                </div>

            </div>
            </div>
            

        </div>
        </section>
    )
}
export default Coincard