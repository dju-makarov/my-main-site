import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function AboutWrapper() {
	return (
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
	)
}

export default AboutWrapper
