import React from 'react';
import classes from './Masonry.modules.css';

const Masonry = (props) => {
	return (
		<div style={{ margin: '1.5em auto', width: '90%' }}>
			<div className={classes.masonry}>{props.children}</div>
		</div>
	);
};
const styles = {
	marsoniStyle: {
		columnCount: 4,
		columnGap: '1em',
	},
};

export default Masonry;
