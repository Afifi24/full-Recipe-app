import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Searchitem = () => {
  const params = useParams()
  const [SearchRecipe,setSearchRecipe] = useState([])
   const GetSearch = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dc46c86ab502461f8dfe31fa11ba5ab5&query=${name}`)
    const Recipe = await data.json()
    setSearchRecipe(Recipe.results)
   }
   useEffect(()=>{
    GetSearch(params.search)
   },[params.search])
  return (
    <Searchitemstye>
      {SearchRecipe.map(item=>{
        return(
          <Card
          initial={{opacity:0}}
          animate={{opacity:1,transition:{duration:0.5}}}
          exit ={{opacity:0,transition:{duration:0.5}}}
          key={item.id}>
            <Link to={'/recipe/'+ item.id}>
          <div className="image">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </div>
          </Link>
        </Card>
        )
      })}
      </Searchitemstye>
  )
}

export default Searchitem
const Searchitemstye = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
gap:1rem;
margin-bottom: 1rem;
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
