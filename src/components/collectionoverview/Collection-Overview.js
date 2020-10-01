import React from 'react'
import Previewcollection from '../../components/preview-collection/Previewcollection';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCollectionsForPreview } from '../../redux/shop/Shop.selector'
import './collections-overview.scss'


const CollectionOverview = ({collections}) => {
     return (
         <div className='collections-overview'>
           {
          		collections.map( ({id, ...otherCollectionProps}) => (

                <Previewcollection key={id} {...otherCollectionProps} />
          	  ))
              
          	}

        </div>
       )
};



const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);