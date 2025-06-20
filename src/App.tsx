import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { AboutSection } from './components/sections/About/AboutSection'
import { ProductGrid } from './components/sections/Products/ProductGrid'

function App() {
	return (
		<div className='bg-white text-gray-600 work-sans leading-normal text-base tracking-normal'>
			<Header />
			<main>
				<ProductGrid />
				<AboutSection />
			</main>
			<Footer />
		</div>
	)
}

export default App
