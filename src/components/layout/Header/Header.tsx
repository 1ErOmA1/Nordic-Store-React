type Props = {}

export const Header = (props: Props) => {
	return (
		<header>
			<nav id='header' className='w-full z-30 top-0 py-1'>
				<div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3'>
					<label htmlFor='menu-toggle' className='cursor-pointer md:hidden block'>
						<svg
							className='fill-current text-gray-900'
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'
						>
							<title>menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
						</svg>
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
							<svg
								className='fill-current text-gray-800 mr-2'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z' />
							</svg>
							NORDICS
						</a>
					</div>

					<div className='order-2 md:order-3 flex items-center' id='nav-content'>
						<a className='inline-block no-underline hover:text-black' href='#'>
							<svg
								className='fill-current hover:text-black'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<circle fill='none' cx='12' cy='7' r='3' />
								<path d='M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z' />
							</svg>
						</a>

						<a className='pl-3 inline-block no-underline hover:text-black' href='#'>
							<svg
								className='fill-current hover:text-black'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z' />
								<circle cx='10.5' cy='18.5' r='1.5' />
								<circle cx='17.5' cy='18.5' r='1.5' />
							</svg>
						</a>
					</div>
				</div>
			</nav>

			{/* Carousel/Hero Section */}
			<div className='carousel relative container mx-auto' style={{ maxWidth: '1600px' }}>
				<div className='carousel-inner relative overflow-hidden w-full'>
					{/* Slide 1 */}
					<input
						className='carousel-open'
						type='radio'
						id='carousel-1'
						name='carousel'
						aria-hidden='true'
						hidden
						checked
					/>
					<div className='carousel-item absolute opacity-0' style={{ height: '50vh' }}>
						<div
							className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
							}}
						>
							<div className='container mx-auto'>
								<div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
									<p className='text-black text-2xl my-4'>
										Stripy Zig Zag Jigsaw Pillow and Duvet Set
									</p>
									<a
										className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black'
										href='#'
									>
										view product
									</a>
								</div>
							</div>
						</div>
					</div>
					<label
						htmlFor='carousel-3'
						className='prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto'
					>
						‹
					</label>
					<label
						htmlFor='carousel-2'
						className='next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto'
					>
						›
					</label>

					{/* Slide 2 */}
					<input
						className='carousel-open'
						type='radio'
						id='carousel-2'
						name='carousel'
						aria-hidden='true'
						hidden
					/>
					<div
						className='carousel-item absolute opacity-0 bg-cover bg-right'
						style={{ height: '50vh' }}
					>
						<div
							className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')",
							}}
						>
							<div className='container mx-auto'>
								<div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
									<p className='text-black text-2xl my-4'>Real Bamboo Wall Clock</p>
									<a
										className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black'
										href='#'
									>
										view product
									</a>
								</div>
							</div>
						</div>
					</div>
					<label
						htmlFor='carousel-1'
						className='prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto'
					>
						‹
					</label>
					<label
						htmlFor='carousel-3'
						className='next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto'
					>
						›
					</label>

					{/* Slide 3 */}
					<input
						className='carousel-open'
						type='radio'
						id='carousel-3'
						name='carousel'
						aria-hidden='true'
						hidden
					/>
					<div className='carousel-item absolute opacity-0' style={{ height: '50vh' }}>
						<div
							className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom'
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
							}}
						>
							<div className='container mx-auto'>
								<div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
									<p className='text-black text-2xl my-4'>Brown and blue hardbound book</p>
									<a
										className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black'
										href='#'
									>
										view product
									</a>
								</div>
							</div>
						</div>
					</div>
					<label
						htmlFor='carousel-2'
						className='prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto'
					>
						‹
					</label>
					<label
						htmlFor='carousel-1'
						className='next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto'
					>
						›
					</label>

					{/* Indicators */}
					<ol className='carousel-indicators'>
						<li className='inline-block mr-3'>
							<label
								htmlFor='carousel-1'
								className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'
							>
								•
							</label>
						</li>
						<li className='inline-block mr-3'>
							<label
								htmlFor='carousel-2'
								className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'
							>
								•
							</label>
						</li>
						<li className='inline-block mr-3'>
							<label
								htmlFor='carousel-3'
								className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'
							>
								•
							</label>
						</li>
					</ol>
				</div>
			</div>
		</header>
	)
}
