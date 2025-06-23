import { ReactNode, createContext, useContext, useState } from 'react'
import { CartContextType, CartItem, IProduct } from '../models'

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	const addToCart = (product: IProduct) => {
		setCartItems(prev => {
			const existing = prev.find(item => item.id === product.id)
			if (existing) {
				return prev.map(item =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
				)
			}
			return [...prev, { ...product, quantity: 1 }]
		})
	}

	const removeFromCart = (productId: number) => {
		setCartItems(prev => prev.filter(item => item.id !== productId))
	}

	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				updateQuantity: (id, qty) => {}, // Не реализовано для простоты
				clearCart: () => setCartItems([]),
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) throw new Error('useCart must be used within CartProvider')
	return context
}
