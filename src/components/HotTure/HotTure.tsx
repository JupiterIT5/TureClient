import styles from './hotture.module.scss'
import Turkia from '../../images/img/Turkia.png'
import Tailand from '../../images/img/Tailand.png'
import Egipet from '../../images/img/Egipet.png'

const HotTure = () => {
	return (
		<section className={styles.hotture}>
			<h2 className={styles.title}>Горячие туры</h2>
			<p className={styles.subtitle}>
				Не упустите шанс отправиться в отпуск по выгодной цене!
			</p>
			<h3 className={styles.actualName}>Актуальные предложения:</h3>
			<div className={styles.actualTure}>
				<div className={styles.ture}>
					<img src={Turkia} alt='' />
					<div className={styles.tureName}>
						<h2>Турция</h2>
						<p>От 35 000 ₽</p>
					</div>
				</div>
				<div className={styles.ture}>
					<img src={Egipet} alt='' />
					<div className={styles.tureName}>
						<h2>Египет</h2>
					</div>
				</div>
				<div className={styles.ture}>
					<img src={Tailand} alt='' />
					<div className={styles.tureName}>
						<h2>Таиланд</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HotTure
