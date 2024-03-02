import React from 'react'
import "./Latest.css"
import data_product from '../Assets/data'
import Item from '../Item/Item';

const Latest = () => {
  return (
    <div className='latest' >
      <h3><b>The latest.</b> Take a look at what's new right now.</h3>
      <hr />
        <div className='latest-item'>
          {data_product.map((item,i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Latest