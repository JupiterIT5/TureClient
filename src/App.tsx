import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import FAQ from './pages/FAQ/FAQ'
import Kwiz from './pages/Kwiz/Kwiz'
import Ture from './pages/Ture/Ture'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/faq' element={<FAQ />} />
			<Route path='/kwiz' element={<Kwiz />} />
			<Route path='/ture' element={<Ture />}/>
		</Routes>
	)
}

export default App
