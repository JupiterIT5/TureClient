import { FC } from 'react'
import Header from '../../components/Header/Header'
import './home.scss'
import About from '../../components/About/About'
import Advant from '../../components/Advant/Advant'
import HotTure from '../../components/HotTure/HotTure'
import PopularNav from '../../components/PopularNav/PopularNav'
import Review from '../../components/Review/Review'
import Footer from '../../components/Footer/Footer'

const Home: FC = () => {
	return (
		<>
			<nav className='aboutHome'>
				<Header />
				<About />
			</nav>
			<Advant />
			<HotTure />
			<PopularNav />
			<Review />
			<Footer />
		</>
	)
}

export default Home
