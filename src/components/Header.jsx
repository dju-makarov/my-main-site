import { Container, Row, Col, Image } from 'react-bootstrap'

function Header() {
	return (
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
	)
}

export default Header
