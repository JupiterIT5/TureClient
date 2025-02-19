import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3 className={styles.subtitle}>Туристическое агенство</h3>
			<h2 className={styles.title}>Travel Slogan Here</h2>
			<div className={styles.nav}>
				<div>
					<a href='/ture'>Горячие туры</a>
					<a href='/kwiz'>Квиз на подбор тура</a>
					<a href='/about'>О нас</a>
					<a href='/faq'>Часто задаваемые вопросы</a>
				</div>
				<div>
					<h2>Социальные сети</h2>
					<a href='#'>Instagram</a>
					<a href='#'>Telegram</a>
					<a href='#'>ВКонтакте</a>
				</div>
				<div>
					<h2>График работы</h2>
					<p>Пн-Пт: 10:00 - 20:00</p>
					<p>Сб-Вс: 11:00 - 18:00</p>
				</div>
			</div>
			<div className={styles.contact}>
				<h2>Контакты:</h2>
				<p>Телефон: +7 (XXX) XXX-XX-XX</p>
				<p>Email: info@tourcompany.ru</p>
				<p>Адрес: г. Москва, ул. Примерная, д. 10</p>
			</div>
			<p className={styles.tag}>© 2025 Travel Slogan Here. Все права защищены.</p>
		</footer>
	)
}

export default Footer
