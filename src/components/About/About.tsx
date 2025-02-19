import style from './about.module.scss'
import tour1 from '../../images/icon/tour1.png'
import tour2 from '../../images/icon/tour2.png'
import tour3 from '../../images/icon/tour3.png'

const About = () => {
	return (
		<section className={style.about}>
			<h1 className={style.title}>
				Добро пожаловать
				<br />в мир путешествий
			</h1>
			<p className={style.subtitle}>
				Откройте для себя новые горизонты с нашим туристическим агентством. Мы
				помогаем воплощать мечты о путешествиях, делая каждый ваш отпуск
				незабываемым.
			</p>
			<div className={style.hotTour}>
				<div className={style.nextTour}>
					<h2>Горячие туры:</h2>
					<a href="/ture">Посмотреть ещё &gt; </a>
				</div>
				<div className={style.tourContainer}>
					<div className={style.tour}>
						<img src={tour1} alt="" />
						<div className={style.tourName}>
							<h3>Северная осетия</h3>
							<p>Горящий тур по<br />выгодной цене</p>
						</div>
					</div>
					<div className={style.tour}>
						<img src={tour2} alt="" />
						<div className={style.tourName}>
							<h3>Дагестан</h3>
							<p>Горящий тур по<br />выгодной цене</p>
						</div>
					</div>
					<div className={style.tour}>
						<img src={tour3} alt="" />
						<div className={style.tourName}>
							<h3>Беларусь</h3>
							<p>Горящий тур по<br />выгодной цене</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
