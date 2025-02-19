import styles from './review.module.scss'
import review1 from '../../images/icon/review/review1.png'
import review2 from '../../images/icon/review/review2.png'
import review3 from '../../images/icon/review/review3.png'

const Review = () => {
	return (
		<section className={styles.sectionReview}>
			<h2 className={styles.title}>Отзывы наших клиентов</h2>
			<p className={styles.subtitle}>Что говорят о нас путешественники:</p>
			<div className={styles.reviewContainer}>
				<div className={styles.review}>
					<img src={review1} alt="" />
					<h2>"Прекрасный сервис и внимательное отношение! Подобрали тур в Турцию за пару дней, и отпуск удался на 100%! Огромное спасибо!"</h2>
					<h3>– Олег, Санкт-Петербург</h3>
				</div>
				<div className={styles.review}>
					<img src={review2} alt="" />
					<h2>"Горящие туры – это находка! Мы улетели в Египет за полцены. Документы оформили быстро, все прошло идеально."</h2>
					<h3>– Петр, Екатеринбург</h3>
				</div>
				<div className={styles.review}>
					<img src={review3} alt="" />
					<h2>"Второй год заказываем туры здесь. Ребята – профессионалы, всегда дают полезные советы. Поедем с вами еще!"</h2>
					<h3>– Анна, Москва</h3>
				</div>
			</div>
		</section>
	)
}

export default Review