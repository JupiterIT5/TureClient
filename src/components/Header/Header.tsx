import style from './header.module.scss'
import logo from '../../images/img/logo1.png'

const Header = ({fon}: {fon?: boolean}) => {
	return (
		<header className={fon ? [style.header, style.fon].join(' ') : style.header}>
			<img src={logo} alt="logo" onClick={() => window.location.href = '/'} />
			<nav className={style.nav}>
				<a href="/about">О нас</a>
				<a href="/ture">Туры</a>
				<a href="/kwiz">Подбор тура</a>
				<a href="#">Прайс</a>
			</nav>
		</header>
	)
}

export default Header