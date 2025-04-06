import React from 'react'
import Product from './components/Product'

function App() {
	const [products, setProducts] = React.useState([])
	const [users, setUsers] = React.useState([])

	React.useEffect(() => {
		getProducts()
		getUsers()
	}, [])

	return (
		<>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</ul>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<div>{user.name}</div>
					</li>
				))}
			</ul>
		</>
	)
}

export default App
