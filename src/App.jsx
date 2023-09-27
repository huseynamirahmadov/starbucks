import './assets/style/index.css';
import './assets/style/app.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Rewards from './pages/Rewards';
import GiftCards from './pages/GiftCards';
import FindaStore from './pages/FindaStore';
import SignIn from './pages/SignIn';
import JoinNow from './pages/JoinNow';
import NotFound from './pages/NotFound';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/giftcards' element={<GiftCards />} />
        <Route path='/findastore' element={<FindaStore />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/joinnow' element={<JoinNow />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

