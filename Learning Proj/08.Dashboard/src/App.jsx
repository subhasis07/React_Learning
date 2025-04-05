import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/common/Sidebar"
import UserPage from "./pages/UserPage"

function App() {

  return (
    <div className='fix h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

      <div className="flex h-full">

        <Sidebar/>
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/users" element={<UserPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
