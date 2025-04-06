export const API = {
	getProducts: async () => {
		let response = await fetch('http://localhost:3001/products')
		let data = await response.json()
		return data
	},

	getUser: async () => {
		let response = await fetch('http://localhost:3001/users')
		let data = await response.json()
		return data
	},
}
