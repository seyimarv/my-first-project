import { connect } from 'react-redux';

import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';


import {  SelectIsCollectionsLoaded } from '../../redux/shop/Shop.selector'

import WithSpinner  from '../../components/With-spinner/With-spinner';

import CollectionPage from './Collection'


 const mapStateToProps = createStructuredSelector({
  	isCollectionsLoaded: state => !SelectIsCollectionsLoaded (state)
  });


 const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
  )(CollectionPage);


  export default CollectionPageContainer;

