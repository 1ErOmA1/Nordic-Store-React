import { useState } from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useCart } from '../../../../context/CartContext'

export const Navigation = () => {
	const [cartOpen, setCartOpen] = useState(false)
	const { cartItems, totalItems, removeFromCart, totalPrice, addToCart } = useCart()
	return (
		<nav id='header' className='w-full z-30 top-0 py-1'>
			<div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3'>
				<label htmlFor='menu-toggle' className='cursor-pointer md:hidden block'>
					{/* @ts-ignore */}
					<RxHamburgerMenu size={24} className='fill-current text-gray-900' />
				</label>
				<input className='hidden' type='checkbox' id='menu-toggle' />

				<div
					className='hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1'
					id='menu'
				>
					<nav>
						<ul className='md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0'>
							<li>
								<a
									className='inline-block no-underline hover:text-black hover:underline py-2 px-4'
									href='#'
								>
									Shop
								</a>
							</li>
							<li>
								<a
									className='inline-block no-underline hover:text-black hover:underline py-2 px-4'
									href='#'
								>
									About
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className='order-1 md:order-2'>
					<a
						className='flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'
						href='#'
					>
						{/* @ts-ignore */}
						<MdOutlineShoppingBag className='fill-current text-gray-800 mr-2' size={22} />
						NORDICS
					</a>
				</div>

				<div className='order-2 md:order-3 flex items-center relative' id='nav-content'>
					<div>
						<a
							className='inline-flex items-center no-underline hover:text-black'
							href='#'
							onClick={e => e.preventDefault()}
						>
							{/* @ts-ignore */}
							<FaUser size={18} />
						</a>
					</div>

					<div className='pl-10 relative'>
						<a
							className='inline-flex items-center no-underline hover:text-black relative'
							href='#'
							onClick={e => {
								e.preventDefault()
								setCartOpen(!cartOpen)
							}}
						>
							{/* @ts-ignore */}
							<FaShoppingCart
								size={18}
								className={`cursor-pointer transition-colors ${
									cartOpen ? 'text-red-500' : 'text-current'
								}`}
							/>
							{totalItems > 0 && (
								<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
									{totalItems}
								</span>
							)}
						</a>
						{cartOpen && (
							<div
								className='absolute right-0 mt-2 w-xl bg-white rounded-md shadow-lg border border-gray-200 z-50
                       transition-opacity duration-200 opacity-100'
								onClick={e => e.stopPropagation()}
								style={{ minWidth: '520px', maxWidth: '520px' }}
							>
								<div className='p-4'>
									<h3 className='text-lg font-semibold text-gray-800'>Корзина ({totalItems})</h3>

									{cartItems.length === 0 ? (
										<div className='mt-2 text-sm text-gray-600'>Ваша корзина пуста</div>
									) : (
										<>
											<ul className='mt-2 space-y-2 max-h-60 overflow-y-auto'>
												{cartItems.map(item => (
													<li key={item.id} className='flex justify-between items-center text-sm'>
														<div className='flex-1 truncate'>
															<span className='font-medium'>{item.title}</span>
															<div>
																${item.price.toFixed(2)} × {item.quantity}
															</div>
														</div>
														<button
															onClick={() => addToCart(item)}
															className='ml-3 text-green-500 hover:text-green-700'
														>
															Добавить
														</button>
														<button
															onClick={() => removeFromCart(item.id)}
															className='ml-3 text-red-500 hover:text-red-700'
														>
															Удалить
														</button>
													</li>
												))}
											</ul>
											<div className='mt-3 pt-3 border-t border-gray-100'>
												<div className='flex justify-between font-medium'>
													<span>Итого:</span>
													<span>${totalPrice.toFixed(2)}</span>
												</div>
											</div>
										</>
									)}
								</div>
								<div className='px-4 py-3 bg-gray-50 text-right border-t border-gray-100'>
									<button
										className='px-3 py-1 text-sm text-gray-600 hover:text-gray-800'
										onClick={() => setCartOpen(false)}
									>
										Закрыть
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
