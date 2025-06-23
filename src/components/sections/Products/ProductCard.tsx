import { FaRegHeart } from 'react-icons/fa'
import { useCart } from '../../../context/CartContext'
import { IProduct } from '../../../models'

interface ProductProps {
	product: IProduct
}

export const ProductCard = ({ product }: ProductProps) => {
	const { cartItems, addToCart, removeFromCart } = useCart()

	const isInCart = cartItems.some(item => item.id === product.id)

	const handleHeartClick = () => {
		if (isInCart) {
			removeFromCart(product.id)
		} else {
			addToCart(product)
		}
	}

	return (
		<div className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
			<div className='group'>
				<img
					className='hover:grow hover:shadow-lg w-50 h-60 mx-auto'
					src={product.image}
					alt={product.title}
				/>
				<div className='pt-3 flex items-center justify-between'>
					<p className='w-80'>{product.title}</p>
					<div className='flex gap-2'>
						{/* @ts-ignore */}
						<FaRegHeart
							size={20}
							className={`cursor-pointer transition-colors ${
								isInCart ? 'text-red-500 fill-current' : 'text-gray-500 hover:text-black'
							}`}
							onClick={handleHeartClick}
						/>
					</div>
				</div>
				<p className='pt-1 text-gray-900'>${product.price.toFixed(2)}</p>
			</div>
		</div>
	)
}
