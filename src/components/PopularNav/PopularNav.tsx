import styles from './popularnav.module.scss'

const PopularNav = () => {
	return (
		<section className={styles.popularNav}>
			<h2 className={styles.title}>Популярные направления</h2>
			<p className={styles.subtitle}>
				Откройте самые востребованные уголки планеты!
			</p>
			<h3 className={styles.popularTureTitle}>
				Мы собрали топовые направления для вашего идеального отдыха:
			</h3>
			<div className={styles.popularTure}>
				<div className={styles.ture}>
					<div className={styles.tureName}>
						<h3>Турция</h3>
						<h3>От 35 000 ₽</h3>
					</div>
					<p>
						Комфортные отели, ласковое море и сервис на высшем уровне. Подходит
						для семейного и романтического отдыха.
					</p>
				</div>
				<div className={[styles.ture, styles.tureActive].join(' ')}>
					<div className={styles.tureName}>
						<h3>Египет</h3>
						<h3>От 40 000 ₽</h3>
					</div>
					<p>
						Древние пирамиды, Красное море с потрясающим подводным миром и
						круглогодичное солнце.
					</p>
				</div>
				<div className={styles.ture}>
					<div className={styles.tureName}>
						<h3>Мальдивы</h3>
						<h3>От 55 000 ₽</h3>
					</div>
					<p>
						Райские острова с белоснежными пляжами и бирюзовой водой для тех,
						кто ищет уединение и роскошь.
					</p>
				</div>
				<div className={styles.ture}>
					<div className={styles.tureName}>
						<h3>Европейские города</h3>
						<h3>От 45 000 ₽</h3>
					</div>
					<p>
						Прогуляйтесь по улочкам Парижа, насладитесь архитектурой Праги или
						посетите музеи Рима.
					</p>
				</div>
				<div className={styles.ture}>
					<div className={styles.tureName}>
						<h3>Таиланд</h3>
						<h3>От 65 000 ₽</h3>
					</div>
					<p>
						Экзотика Азии, яркая природа, вкуснейшая кухня и доступные цены.
					</p>
				</div>
				<div className={styles.kwizButton}>
					<h2>Не нашли свой вариант?</h2>
					<p>Заполните наш квиз, и мы предложим идеальное направление для вас!</p>
					<button onClick={() => window.location.href = '/kwiz'}>Пройти квиз</button>
				</div>
			</div>
		</section>
	)
}

export default PopularNav
