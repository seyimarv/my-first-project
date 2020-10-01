import React from 'react'

import './preview.scss'
import Collectionitem from '../Collection-item/Collection-item'


const Previewcollection = ({ title, items }) => {
	return (
	   <div className='collection-preview'>
	   	 <h1 className='title'>{title.toUpperCase()}</h1>
	   	 <div className='preview'>
	   	  {
            items
            .filter((item, idx) => idx < 4)
            .map((item) => (
               <Collectionitem key= {item.id} item={item} />
            ))

	   	  }
	   	 	
	   	 </div>
	   </div>
 )
}

export default Previewcollection