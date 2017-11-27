import React from 'react';

import '../../styles/scss/main.scss';
import './menu-slider.scss'

class MenuSlider extends React.Component {
	render() {
		return (
			<div className={ `menu__bar__slider ${this.props.active ? 'menu__bar__slider--visible' : 'menu__bar__slider--hidden'}` }>
				Menu Slider
			</div>
		)
	}
}

export default MenuSlider;
