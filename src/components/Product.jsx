import React from 'react'
import './Product.css'

const listItems = ['Главная', 'Услуги', 'Контакты']

const Product = () => {
	const [count, setCount] = React.useState(0)
	const [open, setOpen] = React.useState(false)
	const [active, setActive] = React.useState(0)

	const handleActive = index => setActive(index)

	return (
		<>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<button onClick={() => setOpen(open => !open)} style={{ marginLeft: 15 }}>
				{open ? 'Закрыть окно' : 'Открыть окно'}
			</button>
			{open && (
				<div style={{ backgroundColor: 'gainsboro', width: 90 }}>
					<h3 style={{ color: 'black' }}>Мое окно</h3>
				</div>
			)}
			<ul>
				{listItems.map((item, index) => (
					<li
						key={index}
						onClick={() => handleActive(index)}
						className={active == index ? 'red' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	)
}

export default Product
