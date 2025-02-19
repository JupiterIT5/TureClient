import { useState } from 'react'
import styles from './kwizcomponent.module.scss'
import Modal from './Modal/Modal'
import axios from 'axios'

const KwizComponent = () => {
	const [step1, setStep1] = useState<string>('Море и пляжи')
	const [step2, setStep2] = useState<string>('Семейный отдых')
	const [step3, setStep3] = useState<string>('До 50 000 ₽')
	const [step4, setStep4] = useState<string>('В ближайший месяц')
	const [step5, setStep5] = useState<string>('1')
	const [step6, setStep6] = useState<string>('Да, все нужно оформить')
	const [step1Bool, setStep1Bool] = useState<boolean>(false)
	const [step2Bool, setStep2Bool] = useState<boolean>(false)
	const [step3Bool, setStep3Bool] = useState<boolean>(false)
	const [step4Bool, setStep4Bool] = useState<boolean>(false)
	const [step5Bool, setStep5Bool] = useState<boolean>(false)
	const [step6Bool, setStep6Bool] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [emailError, setEmailError] = useState<boolean>(false)
	const [nameError, setNameError] = useState<boolean>(false)
	const [phoneError, setPhoneError] = useState<boolean>(false)
	const [modal, setModal] = useState<boolean>(false)

	const sendData = async () => {
		setEmailError(false)
		setNameError(false)
		setPhoneError(false)
		if (email.length == 0) {
			setEmailError(true)
		}
		if (phone.length == 0) {
			setPhoneError(true)
		}
		if (name.length == 0) {
			setNameError(true)
		}
		if (name.length == 0 || phone.length == 0 || email.length ==0) return 
		await axios.post('http://109.71.242.40:3000/kwiz/addKwiz', {
			name,email,phone,step1,step2,step3,step4,step5,step6
		}).then(() => setModal(true))
	}

	return (
		<>
			<section className={styles.kwiz}>
				<h1 className={styles.title}>Найдите свой идеальный отдых!</h1>
				<h2 className={styles.subtitle}>
					Ответьте на несколько вопросов, и мы подберем для вас лучшие варианты
					туров. Это займет не больше 2 минут.
				</h2>
				<div
					className={
						step1Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 1. Куда вы хотите поехать?</h3>
					<div className={styles.input}>
						<button
							className={
								step1 != 'Море и пляжи'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step1Bool}
							onClick={() => !step1Bool && setStep1('Море и пляжи')}
						></button>
						<label>Море и пляжи</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step1 != 'Экзотика и тропики'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step1Bool}
							onClick={() => !step1Bool && setStep1('Экзотика и тропики')}
						></button>
						<label>Экзотика и тропики</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step1 != 'Европейские города'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step1Bool}
							onClick={() => !step1Bool && setStep1('Европейские города')}
						></button>
						<label>Европейские города</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step1 != 'Горнолыжные курорты'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step1Bool}
							onClick={() => !step1Bool && setStep1('Горнолыжные курорты')}
						></button>
						<label>Горнолыжные курорты</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step1 != 'Экскурсионные туры'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step1Bool}
							onClick={() => !step1Bool && setStep1('Экскурсионные туры')}
						></button>
						<label>Экскурсионные туры</label>
					</div>
					{!step1Bool && (
						<button
							className={styles.success}
							onClick={() => setStep1Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<div
					className={
						step2Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 2. Какой формат отдыха вам подходит?</h3>
					<div className={styles.input}>
						<button
							className={
								step2 != 'Семейный отдых'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step2Bool}
							onClick={() => !step2Bool && setStep2('Семейный отдых')}
						></button>
						<label>Семейный отдых</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step2 != 'Романтическое путешествие'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step2Bool}
							onClick={() =>
								!step2Bool && setStep2('Романтическое путешествие')
							}
						></button>
						<label>Романтическое путешествие</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step2 != 'Активный отдых'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step2Bool}
							onClick={() => !step2Bool && setStep2('Активный отдых')}
						></button>
						<label>Активный отдых</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step2 != 'Уединение и релакс'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step2Bool}
							onClick={() => !step2Bool && setStep2('Уединение и релакс')}
						></button>
						<label>Уединение и релакс</label>
					</div>
					{!step2Bool && (
						<button
							className={styles.success}
							onClick={() => setStep2Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<div
					className={
						step3Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 3. Ваш бюджет на человека?</h3>
					<div className={styles.input}>
						<button
							className={
								step3 != 'До 50 000 ₽'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step3Bool}
							onClick={() => !step3Bool && setStep3('До 50 000 ₽')}
						></button>
						<label>До 50 000 ₽</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step3 != '50 000 – 100 000 ₽'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step3Bool}
							onClick={() => !step3Bool && setStep3('50 000 – 100 000 ₽')}
						></button>
						<label>50 000 – 100 000 ₽</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step3 != 'Более 100 000 ₽'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step3Bool}
							onClick={() => !step3Bool && setStep3('Более 100 000 ₽')}
						></button>
						<label>Более 100 000 ₽</label>
					</div>
					{!step3Bool && (
						<button
							className={styles.success}
							onClick={() => setStep3Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<div
					className={
						step4Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 4. Когда вы хотите отправиться в путешествие?</h3>
					<div className={styles.input}>
						<button
							className={
								step4 != 'В ближайший месяц'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step4Bool}
							onClick={() => !step4Bool && setStep4('В ближайший месяц')}
						></button>
						<label>В ближайший месяц</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step4 != 'Через 1–3 месяца'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step4Bool}
							onClick={() => !step4Bool && setStep4('Через 1–3 месяца')}
						></button>
						<label>Через 1–3 месяца</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step4 != 'Неважно, ищу лучшие предложения'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step4Bool}
							onClick={() =>
								!step4Bool && setStep4('Неважно, ищу лучшие предложения')
							}
						></button>
						<label>Неважно, ищу лучшие предложения</label>
					</div>
					{!step4Bool && (
						<button
							className={styles.success}
							onClick={() => setStep4Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<div
					className={
						step5Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 5. Сколько человек едет?</h3>
					<div className={styles.input}>
						<button
							className={
								step5 != '1'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step5Bool}
							onClick={() => !step5Bool && setStep5('1')}
						></button>
						<label>1</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step5 != '2'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step5Bool}
							onClick={() => !step5Bool && setStep5('2')}
						></button>
						<label>2</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step5 != '3 или более'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step5Bool}
							onClick={() => !step5Bool && setStep5('3 или более')}
						></button>
						<label>3 или более</label>
					</div>
					{!step5Bool && (
						<button
							className={styles.success}
							onClick={() => setStep5Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<div
					className={
						step6Bool
							? [styles.stepContainer, styles.stepContainerActive].join(' ')
							: styles.stepContainer
					}
				>
					<h3>Шаг 6. Нужна ли вам помощь с документами (виза, страховка)?</h3>
					<div className={styles.input}>
						<button
							className={
								step6 != 'Да, все нужно оформить'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step6Bool}
							onClick={() => !step6Bool && setStep6('Да, все нужно оформить')}
						></button>
						<label>Да, все нужно оформить</label>
					</div>
					<div className={styles.input}>
						<button
							className={
								step6 != 'Нет, у меня уже есть необходимые документы'
									? styles.radio
									: [styles.radio, styles.radioActive].join(' ')
							}
							disabled={step6Bool}
							onClick={() =>
								!step6Bool &&
								setStep6('Нет, у меня уже есть необходимые документы')
							}
						></button>
						<label>Нет, у меня уже есть необходимые документы</label>
					</div>
					{!step6Bool && (
						<button
							className={styles.success}
							onClick={() => setStep6Bool(true)}
						>
							Далее
						</button>
					)}
				</div>
				<h4>Спасибо за ваши ответы!</h4>
				<p>
					Мы подберем лучшие туры для вас и свяжемся с вами в ближайшее время.
					Оставьте свои контактные данные, чтобы мы могли отправить вам
					персональное предложение.
				</p>
				<h5>Ваши данные:</h5>
				<input
					type='text'
					placeholder='Имя'
					name='firstname'
					maxLength={20}
					onChange={e => setName(e.target.value)}
					className={nameError ? styles.error : ''}
				/>
				<input
					type='number'
					placeholder='Телефон'
					name='phone'
					maxLength={25}
					onChange={e => setPhone(e.target.value)}
					className={phoneError ? styles.error : ''}
				/>
				<input
					type='email'
					placeholder='Email'
					name='email'
					maxLength={50}
					onChange={e => setEmail(e.target.value)}
					className={emailError ? styles.error : ''}
				/>
				<button onClick={sendData}>Отправить заявку</button>
				<b>Ваш идеальный отпуск ближе, чем кажется!</b>
			</section>
			{modal && <Modal />}
		</>
	)
}

export default KwizComponent
