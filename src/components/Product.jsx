import React from 'react'
import './Product.css'

const Product = ({ title, capacity, color, price }) => {
	return (
		<>
			<div>
				<h3>{title}</h3>
				<p>Capacity: {capacity}</p>
				<p>Color: {color}</p>
				<p>Price: {price}</p>
			</div>
		</>
	)
}

export default Product
