import { Container } from 'react-bootstrap'
import ThreeDBackground from './ThreeDBackground'
import styles from './MainWrapper.module.css'

function MainWrapper() {
	return (
		<>
			<Container className=" bg-dark rounded pt-3 pb-2 mb-2">
				<Container className={styles.backgroundContainer}>
					<ThreeDBackground className={styles.backgroundComponent} />
				</Container>
			</Container>
		</>
	)
}

export default MainWrapper
