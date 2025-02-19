import styles from './advant.module.scss'

const Advant = () => {
	return (
		<section className={styles.advant}>
			<h2 className={styles.title}>Почему выбирают нас?</h2>
			<div className={styles.advantContainers}>
				<div>
					<div className={styles.advantContainer}>
						<h2>Индивидуальный подбор туров</h2>
						<p>
							Каждое путешествие уникально. Заполните наш короткий квиз, и мы
							предложим варианты, которые идеально вам подойдут!
						</p>
					</div>
					<div className={styles.advantContainer}>
						<h2>Горящие туры и выгодные предложения</h2>
						<p>
							Следите за нашими актуальными акциями и не упустите возможность
							отправиться в отпуск по лучшей цене.
						</p>
					</div>
				</div>
				<div>
					<div className={styles.advantContainer}>
						<h2>Широкий выбор направлений</h2>
						<p>
							Популярные курорты, экзотические страны или города Европы – решать
							вам. Мы организуем путешествие в любую точку мира.
						</p>
					</div>
					<div className={styles.advantContainer}>
						<h2>Прозрачность на каждом этапе</h2>
						<p>
							Мы подробно объясняем каждый шаг: от подготовки документов до
							оформления визы. Все честно и понятно.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advant
