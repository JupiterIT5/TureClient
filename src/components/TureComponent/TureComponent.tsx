import { useState } from 'react'
import Modal from './Modal/Modal'
import styles from './turecomponent.module.scss'
import { useQuery } from '@tanstack/react-query'
import { ITure } from '../../interface/ture.interface'
import axios from 'axios'

const TureComponent = () => {
	const [modal, setModal] = useState<boolean>(false)
	const [modalTure, setModalTure] = useState<string>('')
	const {data} = useQuery<Array<ITure>>({
		queryKey: ['getTure'],
		queryFn: async () => {
			const {data} = await axios.get('http://localhost:3000/ture/getTure')
			return data
		}
	})

	return (
		<>
			<section className={styles.sectionTure}>
			<h2 className={styles.title}>Горячие туры</h2>
			<h2 className={styles.subtitle}>
				Не упустите шанс отправиться в путешествие по сниженным ценам! Эти
				предложения ограничены по времени, но обеспечат незабываемый отдых.
			</h2>
			<div className={styles.tureContainer}>
				{data?.map((value: ITure, index: number) => (
					<div className={styles.ture} key={index}>
					<img
						src={value.img}
						alt='...'
					/>
					<div className={styles.tureInfo}>
						<h2 className={styles.name}>{value.name}</h2>
						<h3 className={styles.price}>
							<span>Цена: </span>{value.prise}
						</h3>
						<h3 className={styles.include}>
							<span>Включено:</span>
							<ul>
								{value.include1 && <li>{value.include1}</li>}
								{value.include2 && <li>{value.include2}</li>}
								{value.include3 && <li>{value.include3}</li>}
								{value.include4 && <li>{value.include4}</li>}
								{value.include5 && <li>{value.include5}</li>}
							</ul>
						</h3>
						<h3 className={styles.data}>
							<span>Даты вылета: </span>{value.data}
						</h3>
						<h3 className={styles.reason}>
							<span>Почему стоит выбрать:</span>
							<br />
							{value.cause}
						</h3>
						<button onClick={() => {setModal(true); setModalTure(value.name)}}>Забронировать</button>
					</div>
				</div>
				))}
			</div>
			<h2 className={styles.title} style={{ marginTop: 70 }}>
				Туры по другим направлениям
			</h2>
			<h2 className={styles.subtitle}>
				Мы предлагаем широкий выбор направлений для любого типа отдыха. Выберите
				тур, который соответствует вашим предпочтениям.
			</h2>
			<div className={styles.tureContainer}>
				<div className={styles.tureBorder}>
					<div className={styles.tureInfo}>
						<h2 className={styles.name}>Мальдивы, Атолл Ари</h2>
						<h3 className={styles.price}>
							<span>Цена:</span> от 150 000 ₽ за 7 ночей
						</h3>
						<h3 className={styles.include}>
							<span>Включено</span>
							<ul>
								<li>Вилла на воде (завтраки)</li>
								<li>Авиаперелет и трансфер на катере</li>
								<li>Страховка</li>
							</ul>
						</h3>
						<h3 className={styles.reason}>
							<span>Особенности</span>
							<br />
							Роскошный отдых на райских островах, идеально для медового месяца
							или полного релакса.
						</h3>
					</div>
				</div>
				<div className={styles.tureBorder}>
					<div className={styles.tureInfo}>
						<h2 className={styles.name}>Франция, Париж</h2>
						<h3 className={styles.price}>
							<span>Цена:</span> от 80 000 ₽ за 5 ночей
						</h3>
						<h3 className={styles.include}>
							<span>Включено</span>
							<ul>
								<li>Проживание в отеле 3* (завтраки)</li>
								<li>Перелет</li>
								<li>Групповая экскурсия по городу</li>
							</ul>
						</h3>
						<h3 className={styles.reason}>
							<span>Особенности</span>
							<br />
							Прогулки по романтическим улочкам Парижа, возможность увидеть Эйфелеву башню, Лувр и Версаль.
						</h3>
					</div>
				</div>
				<div className={styles.tureBorder}>
					<div className={styles.tureInfo}>
						<h2 className={styles.name}>Грузия, Тбилиси + Казбеги</h2>
						<h3 className={styles.price}>
							<span>Цена:</span> от 35 000 ₽ за 7 ночей
						</h3>
						<h3 className={styles.include}>
							<span>Включено</span>
							<ul>
								<li>Проживание в гостевых домах и отелях 3*</li>
								<li>Перелет</li>
								<li>Экскурсионная программа с гидом</li>
							</ul>
						</h3>
						<h3 className={styles.reason}>
							<span>Особенности</span>
							<br />
							Гостеприимная атмосфера, дегустация грузинских вин, горные пейзажи и насыщенная культурная программа.
						</h3>
					</div>
				</div>
				<div className={styles.tureBorder}>
					<div className={styles.tureInfo}>
						<h2 className={styles.name}>Австрия, Зальцбург (горнолыжный тур)</h2>
						<h3 className={styles.price}>
							<span>Цена:</span> от 90 000 ₽ за 7 ночей
						</h3>
						<h3 className={styles.include}>
							<span>Включено</span>
							<ul>
								<li>Проживание в отеле 3*</li>
								<li>Ски-пасс</li>
								<li>Авиаперелет</li>
							</ul>
						</h3>
						<h3 className={styles.reason}>
							<span>Особенности</span>
							<br />
							Идеальный выбор для любителей активного отдыха – горные склоны, уютные шале и знаменитая австрийская кухня.
						</h3>
					</div>
				</div>
			</div>
			<h3 className={styles.subtitle} style={{marginTop:30}}>Для получения дополнительной информации о турах или бронирования свяжитесь с нами.</h3>
			<button onClick={() => window.location.href = '/kwiz'}>Пройти квиз для подбора тура</button>
		</section>
		{modal && <Modal nameTure={modalTure} />}
		</>
	)
}

export default TureComponent
