import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Category = () => {
  return (
    <Categorystyle>
        <NavLink activeClassName='active' to={'/cuisine/Italian'} className="item">
           <FaPizzaSlice className='icon'/> 
           <h4>Italian</h4>
        </NavLink>
        <NavLink activeClassName='active' to={'/cuisine/American'} className="item">
           <FaHamburger className='icon'/> 
           <h4>American</h4>
        </NavLink>
        <NavLink activeClassName='active' to={'/cuisine/Thai'} className="item">
           <GiNoodles className='icon'/> 
           <h4>Thai</h4>
        </NavLink>
        <NavLink activeClassName='active' to={'/cuisine/Japanese'} className="item">
           <GiChopsticks className='icon'/> 
           <h4>Japanese</h4>
        </NavLink>
    </Categorystyle>
  )
}

export default Category

const Categorystyle = styled.div`
display: flex;
align-items: center;
gap: 2rem;
justify-content: center;
margin-bottom: 1rem;

.icon{
    font-size: 0.9rem;
}
.item{
    cursor: pointer;
    text-align: center;
    background-color: var( --color-bg);
    color: var(--color-white);
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    h4{
    font-size: 0.5rem;
    font-weight: lighter;
    margin-top: -1rem;
}
}
.active{
  background:linear-gradient(to left,#fc4a1a,#f7b733);
}
/* MEDIA QUERIES */
@media screen and (max-width:500px) {
   .item{
      width: 2.9rem;
      height: 2.9rem;
      h4{
         font-size: 0.4rem;
      }
   }
}
`