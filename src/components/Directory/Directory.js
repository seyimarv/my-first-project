import React from 'react'
import './directory.scss'
import MenuItem from '../Menu-items/Menu-item'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/Directory.selectors.js'


const Directory = ({ section }) => ( 
		   <div className='directory-menu'>
		     {
                section.map (section => (
                   <MenuItem key={section.id} title= {section.title} imageUrl={section.imageUrl} size= {section.size} linkUrl={section.linkUrl}
                   />
                ))

		     }


		   </div>

		);
	


const mapStateToProps = createStructuredSelector({
	section: selectDirectorySections
})


export default connect(mapStateToProps)(Directory)


