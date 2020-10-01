import React from 'react';
import CollectionOverviewContainer from '../../components/collectionoverview/Collections-Overview.container'

import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/Collection.container'
import { fetchCollectionsStart } from '../../redux/shop/Shop.actions'
import { connect } from 'react-redux'






 class Shop extends React.Component {
	componentDidMount() {
      const {fetchCollectionsStart } = this.props;
      fetchCollectionsStart();
    	
    }
         
    render() {
    	const {match } = this.props;
	     return (
          <div className='shop-page'>
          	<Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
          	<Route path={`${match.path}/:collectionId`}  component={CollectionPageContainer} />
          </div>
	     );
	 }
  }

 

  const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: ()  => dispatch(fetchCollectionsStart())
  })


export default connect(null, mapDispatchToProps)(Shop);


