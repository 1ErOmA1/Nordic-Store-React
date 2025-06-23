export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

// Тип для элемента корзины (товар + количество)
export interface CartItem extends IProduct {
	quantity: number
}

// Тип для контекста корзины
export interface CartContextType {
	cartItems: CartItem[]
	addToCart: (product: IProduct) => void
	removeFromCart: (productId: number) => void
	updateQuantity: (productId: number, quantity: number) => void
	clearCart: () => void
	totalItems: number
	totalPrice: number
}
