import React from 'react';
import classes from './Masonry.module.css';

const Masonry = (props) => {
	return (
		<div style={{ margin: '1.5em auto', width: '90%' }}>
			<div className={classes.masonry}>{props.children}</div>
		</div>
	);
};

export default Masonry;
