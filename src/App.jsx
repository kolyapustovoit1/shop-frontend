import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AccountPage from './pages/AccountPage/AccountPage'
import CartPage from './pages/CartPage/CartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="contacts" element={<ContactPage />} />
				<Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default App