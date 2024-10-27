import { Container, Carousel, Image } from 'react-bootstrap'
import completeProjectsData from '../data/completedProjects.json'

function CarouselWrapper() {
	return (
		<Container className=" bg-dark rounded pt-3 pb-2">
			<h3 className="text-light ms-5 mt-2">Работы</h3>
			<Carousel>
				{completeProjectsData.map((completeProject) => {
					const completeProjectPhoto = './assets/'.concat(completeProject.photo)
					return (
						<Carousel.Item
							style={{ borderRadius: '10px' }}
							key={completeProject.id}
						>
							<div
								className="d-flex justify-content-center"
								style={{ height: '400px' }}
							>
								<Image
									src={completeProjectPhoto}
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
								<h3>{completeProject.title}</h3>
								<p>{completeProject.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</Container>
	)
}

export default CarouselWrapper
