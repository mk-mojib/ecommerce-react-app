import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="desc-show">
            <div className="desc-show-box"> Description</div>
            <div className="desc-show-box fade">Reviews (99)</div> 
        </div>
        <div className="descriptionbox-desc">
            <p>
               An e-commerce website allows people to buy and sell physical goods, services, and digital products online. E-commerce websites allow businesses to process orders, accept payments, manage shipping and logistics, and provide customer service.
            </p>
            <p>
                A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
                Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox