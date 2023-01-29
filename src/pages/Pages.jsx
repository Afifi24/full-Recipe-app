import React from 'react'
import Home from '../Components/Home'
import Searchitem from './Searchitem'
import Cuisine from './Cuisine'
import {Routes,Route,useLocation} from 'react-router-dom'
import styled from 'styled-components'
import Recipe from './Recipe'
import {AnimatePresence} from 'framer-motion'
const Pages = () => {
  const location = useLocation()
  return (
    <PagesStyled>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
       <Route path='/searchitem/:search' element={<Searchitem/>}/>
       <Route path='/cuisine/:type' element={<Cuisine/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
      </AnimatePresence>
    </PagesStyled>
  )
}

export default Pages
const PagesStyled = styled.div`

margin-bottom: 2rem;
`