import styles from './ThreeDBackground.module.css'

function ThreeDBackground() {
	return (
		<div className={styles.pattern}>
			<div className={`${styles.face} ${styles.face1}`}></div>
			<div className={`${styles.face} ${styles.face2}`}></div>
		</div>
	)
}

export default ThreeDBackground
