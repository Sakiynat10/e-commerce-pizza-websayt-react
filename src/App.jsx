import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/home/HomePage"
import CartPage from "./pages/cart/CartPage"
import { createContext, useState } from "react"
import EN from "./language/en"
import RU from "./language/ru"
import UZ from "./language/uz"




export const LanguageContext = createContext()


function App() {
  const [language , setLanguage] = useState('uz')

  const languageObjs = {
    en: EN ,
    ru: RU ,
    uz: UZ
  }
  const state = {language , languageObj:languageObjs[ language ] , setLanguage}

  return (
    <LanguageContext.Provider value={state}>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LanguageContext.Provider>
  )
}

export default App
