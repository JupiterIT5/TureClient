import styles from './Modal.module.scss'

const Modal = () => {
	return (
		<section className={styles.modal}>
			<div className={styles.modalContainer}>
				<h2>Спасибо за участие в квизе!</h2>
				<h3>
					В скором времени мы свяжемся с вами и выберем для вас лучший тур!
				</h3>
				<div className={styles.btn}>
					<button onClick={() => (window.location.href = '/kwiz')}>
						Закрыть
					</button>
					<button onClick={() => (window.location.href = '/')}>
						Вернуться на главную
					</button>
				</div>
			</div>
		</section>
	)
}

export default Modal
