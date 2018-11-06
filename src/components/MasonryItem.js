import React from 'react';

const MasonryItem = (props) => {

	return (
		<div style={styles.masonryItemStyle}>
			{props.children}
		</div>
	)
}

const styles = {
	masonryItemStyle: {
		background: '#fff',
		display: 'inline-block',
		margin: '0 0 1em',
		width: '100 %',
		padding: '1.5em'
	}
}

export default MasonryItem;