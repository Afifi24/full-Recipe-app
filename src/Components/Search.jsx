import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const [Input,setInput] = useState('')
  const navigate = useNavigate()
  const SubmitHandler = (e)=>{
   e.preventDefault()
   navigate('/searchitem/'+ Input)
   setInput('')
  }
  return (
    <Searchstyle>
     <form className="search" onSubmit={SubmitHandler}>
     <input  value={Input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Cookies' />
     <FaSearch className='icon'/>
     </form>
    </Searchstyle>
  )
}

export default Search

const Searchstyle = styled.div`

margin-bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;
.search{
width: 400px;
position: relative;

}
input{
background-color: var(--color-bg);
height: 2.2rem;
border: none;
width: 100%;
border-radius: 1rem;
padding: 0.3rem 2rem;
color: var(--color-white);
outline: none;
}
.icon{
  position: absolute;
  left: 4%;
  top: 50%;
  transform: translate(-4%,-50%);
  color: var(--color-light);
  font-size: .8rem;
}
`