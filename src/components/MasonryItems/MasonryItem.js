import React from 'react';
import classes from './MasonryItems.module.css';

const MasonryItem = (props) => {
	return <div className={classes.masonryItem}>{props.children}</div>;
};

export default MasonryItem;
