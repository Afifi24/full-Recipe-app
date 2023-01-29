import React from 'react'
import styled from 'styled-components'
import {MdOutlineFoodBank} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Logo = () => {
  return (
    <Logostyle>
      
     <p><MdOutlineFoodBank className='icon'/><NavLink activeClassName='active' to={'/'}>delicious</NavLink></p>
       
    </Logostyle>
  )
}

export default Logo

const Logostyle = styled.div`
margin-bottom: 1rem;
display: flex;
align-items: center;
margin-top: 1rem;
.icon{
  font-size: 1.7rem;
  background:linear-gradient(to left,#fc4a1a,#f7b733);
  -webkit-text-fill-color: transparent;
  background-clip:text;
  color: red;

}
p{
  font-size: 1rem;
  font-family: 'Lobster Two', cursive;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.active{
  background:linear-gradient(to left,#fc4a1a,#f7b733);
  -webkit-text-fill-color: transparent;
  background-clip:text;

}
`