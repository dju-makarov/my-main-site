import { Col, Container, Row, Image, Carousel } from 'react-bootstrap'

function App() {
	return (
		<>
			<header className="mb-2 bg-dark rounded p-3">
				<Container>
					<Row className="ms-2">
						<Col md="2" className="text-light ">
							{' '}
							<Image
								className="me-2"
								src="./assets/djumakarov2.svg"
								height={30}
								rounded
							/>
							<span className="">dju makarov</span>
						</Col>
					</Row>
				</Container>
			</header>
			<Container>
				<body>
					<Container className="bg-dark rounded pt-3 text-light mb-2 pb-2">
						<Row>
							<Col className="ps-5 pt-5">
								<h1>
									Frontend разработчик <br />
									Джу Макаров
								</h1>
								<span>Я разрабатываю сайты</span>
							</Col>
							<Col className="d-flex justify-content-center">
								<Image src="./assets/8gn58n.webp" className="" height={300} />
							</Col>
						</Row>
					</Container>

					<Container className=" bg-dark rounded pt-3 pb-2">
						<h3 className="text-light ms-5 mt-2">Работы</h3>
						<Carousel>
							<Carousel.Item style={{ borderRadius: '10px' }}>
								<div
									className="d-flex justify-content-center"
									style={{ height: '400px' }}
								>
									<Image
										src="./assets/book-library-app.webp"
										className="rounded"
										height={400}
										style={{ paddingBottom: '150px', textAlign: 'center' }}
									/>
								</div>
								<div
									className="position-absolute bottom-0 w-100"
									style={{
										height: '100%',
										background:
											'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 70%)',
									}}
								></div>
								<Carousel.Caption>
									<h3>Book Library App</h3>
									<p>
										Приложение для библиотеки книг, позволяющее добавлять книги,
										фильтровать их по автору и названию, и управлять избранным.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<div
									className="d-flex justify-content-center"
									style={{ height: '400px' }}
								>
									<Image
										src="./assets/todo-app.webp"
										className="rounded"
										height={400}
										style={{ paddingBottom: '150px' }}
									/>
								</div>
								<div
									className="position-absolute bottom-0 w-100"
									style={{
										height: '100%',
										background:
											'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 70%)',
									}}
								></div>
								<Carousel.Caption>
									<h3>Todo App</h3>
									<p>
										Простой и удобный сайт для создания, отслеживания задач, с
										функциями сброса и удаления завершённых дел
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Container>
				</body>
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
				<Container>
					<Row>
						<Col>
							<img
								src="./assets/djumakarov2.svg"
								alt="Logo"
								style={{ height: '50px' }}
							/>
						</Col>
						<Col>
							<a
								href="https://t.me/dju_makarov"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: 'white',
									textDecoration: 'none',
									height: '70px',
								}}
							>
								Telegram
							</a>
						</Col>
						<Col>
							<a
								href="https://github.com/dju-makarov"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: 'white',
									textDecoration: 'none',
									height: '70px',
								}}
							>
								GitHub
							</a>
						</Col>
					</Row>
				</Container>
				<p>© {new Date().getFullYear()} Все права защищены.</p>
			</footer>
		</>
	)
}

export default App
