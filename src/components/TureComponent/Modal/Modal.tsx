import { useState } from 'react'
import styles from './Modal.module.scss'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Modal = ({ nameTure }: { nameTure: string }) => {
	const [name, setName] = useState<string>('')
	const [surName, setSurName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [input1Error, setInput1Error] = useState<boolean>(false)
	const [input2Error, setInput2Error] = useState<boolean>(false)
	const [input3Error, setInput3Error] = useState<boolean>(false)
	const [input4Error, setInput4Error] = useState<boolean>(false)
	const [input5Error, setInput5Error] = useState<boolean>(false)

	const sendData = async () => {
		setInput1Error(false)
		setInput2Error(false)
		setInput3Error(false)
		setInput4Error(false)
		setInput5Error(false)
		if (name.length == 0) {
			setInput2Error(true)
		}
		if (surName.length == 0) {
			setInput3Error(true)
		}
		if (lastName.length == 0) {
			setInput1Error(true)
		}
		if (email.length == 0) {
			setInput4Error(true)
		}
		if (phone.length == 0) {
			setInput5Error(true)
		}
		if (
			name.length == 0 ||
			surName.length == 0 ||
			lastName.length == 0 ||
			email.length == 0 ||
			phone.length == 0
		)
			return

		await axios.post('http://localhost:3000/ture/addUserTure', {
			name,
			surName,
			lastName,
			nameTure,
			email,
			phone,
		})
		setTimeout(() => window.location.href = '/', 1)
	}

	return (
		<section className={styles.modal}>
			<div className={styles.modalContainer}>
				<h2>Заполните форму</h2>
				<div className={styles.form}>
					<label>Фамилия</label>
					<input
						type='text'
						className={input1Error ? styles.error : ''}
						placeholder='Фамилия'
						name='surname'
						onChange={e => setLastName(e.target.value)}
					/>
					<label>Имя</label>
					<input
						type='text'
						className={input2Error ? styles.error : ''}
						placeholder='Имя'
						name='firstname'
						onChange={e => setName(e.target.value)}
					/>
					<label>Отчество</label>
					<input
						type='text'
						className={input3Error ? styles.error : ''}
						placeholder='Отчество'
						name='surname'
						onChange={e => setSurName(e.target.value)}
					/>
					<label>Email</label>
					<input
						type='email'
						className={input4Error ? styles.error : ''}
						placeholder='Email'
						name='email'
						onChange={e => setEmail(e.target.value)}
					/>
					<label>Телефон</label>
					<input
						type='number'
						className={input5Error ? styles.error : ''}
						placeholder='Телефон'
						name='phone'
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<div className={styles.btn}>
					<button onClick={sendData}>Отправить</button>
					<button onClick={() => (window.location.href = '/ture')}>
						Закрыть
					</button>
				</div>
			</div>
		</section>
	)
}

export default Modal
