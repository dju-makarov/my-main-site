import { Container } from 'react-bootstrap'
import Header from './components/Header'
import AboutWrapper from './components/AboutWrapper'
import Footer from './components/Footer'
import CarouselWrapper from './components/CarouselWrapper'

function App() {
	return (
		<>
			<header className="mb-2 bg-dark rounded p-3">
				<Header />
			</header>
			<Container>
				<AboutWrapper />

				<CarouselWrapper />
			</Container>
			<footer
				style={{
					backgroundColor: '#282c34',
					color: 'white',
					padding: '20px 0',
					textAlign: 'center',
					marginTop: '10px',
				}}
			>
				<Footer />
			</footer>
		</>
	)
}

export default App
