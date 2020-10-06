import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { SelectIsCollectionFetching } from '../../redux/shop/Shop.selector';

import WithSpinner from '../With-spinner/With-spinner'

import CollectionOverview from './Collection-Overview'





const mapStateToProps = createStructuredSelector({
	isLoading:  SelectIsCollectionFetching 
});

const CollectionOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
   )(CollectionOverview);

export default CollectionOverviewContainer;


