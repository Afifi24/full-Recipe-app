import React, { useState,useEffect } from 'react'
import { json } from 'react-router-dom'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Cuisine = () => {
  const [recipeCuisine,setRecipeCuisine] = useState([])
  let params = useParams()
  console.log(params.type)
  const GetCuisine = async (name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dc46c86ab502461f8dfe31fa11ba5ab5&cuisine=${name}`)
    const cuisine = await data.json()
    setRecipeCuisine(cuisine.results)
  }
  useEffect(()=>{
    GetCuisine(params.type)
  },[params.type])
  return (
    <Cuisinestyle>
     {recipeCuisine.map(item=>{
      return(
        <Card
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0, transition:{duration:0.5}}}
        >
          <Link to={'/recipe/' + item.id}>
          <div className="image">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </div>
          </Link>
        </Card>
      )
     })}
     
    </Cuisinestyle>
  )
}

export default Cuisine

const Cuisinestyle = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
gap:1rem;
`
const Card = styled(motion.div)`
cursor: pointer;
h4{
  font-size: 0.7rem;
}
.image {
  
  img{
    width: 100%;
  }
}
`