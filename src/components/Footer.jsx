import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
	return (
		<>
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
		</>
	)
}

export default Footer
