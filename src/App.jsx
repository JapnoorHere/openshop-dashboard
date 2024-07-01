import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from './components/Dashboard'
import Products from "./components/Products";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
      <Route index={true} element={<Dashboard/>}/> 
      <Route path="products" element={<Products/>}/> 
      </Route>
      </Routes>
    </Router>
  )
}