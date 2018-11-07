import React from 'react';
import classes from './Masonry.module.css';

const Masonry = (props) => {
	return (
		<div style={{ margin: '0 auto', width: '80%' }}>
			<div className={classes.masonry}>{props.children}</div>
		</div>
	);
};

export default Masonry;
