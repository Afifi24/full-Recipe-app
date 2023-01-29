import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
const Vegie = () => {
  const [VegieRecipe,setVegieRecipe] = useState([])
  // ! Fetch the data from API
  const GetVegie = async()=>{
    const Ckeck = localStorage.getItem('Veg')
    if(Ckeck){
      setVegieRecipe(JSON.parse(Ckeck))
    }else{

      const data = await fetch('https://api.spoonacular.com/recipes/random?apiKey=dc46c86ab502461f8dfe31fa11ba5ab5&number=9&tags=vegetarian,dessert')
      const vegie = await data.json()
      localStorage.setItem('Veg',JSON.stringify(vegie.recipes))
      setVegieRecipe(vegie.recipes)
    }
  }
  useEffect(()=>{
    GetVegie()
  },[])
  // ! Localstorage
  
  return (
    <Vegiestyle>
      <h3>Vegetarians Recipes</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'3rem',
       

      }}>
        
        {VegieRecipe.map(item=>{
          return(
            <SplideSlide key={item.id}>
            <Card >
              <Link to={'/recipe/' + item.id}>
             <h3>{item.title}</h3>
             <div className="image">
                <img src={item.image}  />
             </div>
             </Link>
            </Card>
            </SplideSlide>
          )
        })}
        </Splide>
    </Vegiestyle>
  )
}

export default Vegie

const Vegiestyle = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-bottom: 1rem;
@media screen and (max-width:1024px) {
  h3{
    font-size: 0.8rem;
  }
}
`
const Card = styled.div`
position: relative;
background-color: rgba(0,0,0,0.5);
h3{
  color: var(--color-white);
  font-size: 0.8rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
max-width: 400px;
border-radius: 2rem;
overflow: hidden;
.image{
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width:1024px) {
  h3{
    font-size: 0.5rem;
  }
  
}
@media screen and (max-width:600px) {
  h3{
    font-size: 0.4rem;
  }
  width: 150px;
}
@media screen and (max-width:560px) {
  
  width: 130px;
}
@media screen and (max-width:450px) {
  h3{
    font-size: 0.3rem;
  }
  width: 100px;
  border-radius: 0.3rem;
}
`