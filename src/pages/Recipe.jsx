import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
const Recipe = () => {
    const [DetailsRecipe,setDetailsRecipe]=useState({})
    const [isactive,setIsactive] = useState('instrument')
    let params = useParams()
    const FetchDetails = async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=dc46c86ab502461f8dfe31fa11ba5ab5`)
    const details = await data.json()
    setDetailsRecipe(details)
  }
  useEffect(()=>{
    FetchDetails()
  },[params.name])
  return (
    <RecipeStyle
    initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:0.5}}}
    exit ={{opacity:0,transition:{duration:0.5}}}
    >
       <div className="image-title">
       <h3 className='title'>{DetailsRecipe.title}</h3>
       <div className="image">
       <img src={DetailsRecipe.image} alt="" />
       </div>
       </div>
       <div className='ingredient'>
          <motion.div className="btn"
           initial={{opacity:0}}
           animate={{opacity:1,transition:{duration:1}}}
           exit={{opacity:0,transition:0.5}}
          >
            <button className={isactive==='instrument'?'active':''} onClick={()=>setIsactive('instrument')}>Instructions</button>
            <button className={isactive==='ingredient'?'active':''}  onClick={()=>setIsactive('ingredient')}>Ingredients</button>
          </motion.div>
          {isactive==='instrument' && (<div className="summary">
           <p dangerouslySetInnerHTML={{__html:DetailsRecipe.summary}}></p>
          </div>)}
          {isactive==='ingredient' && (<div className="ingd">
            {DetailsRecipe.extendedIngredients.map(item=>(
              <li key={item.id}>{item.original}</li>
            ))}
          </div>)}
       </div>
    </RecipeStyle>
  )
}

export default Recipe

const RecipeStyle = styled(motion.div)`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 4rem;
margin: 5rem 0rem;
.image-title{
 .title{
  margin-bottom: 1rem;
  font-size: 0.9rem;
 }
  .image{
    max-width: 400px;
    img{
      width: 100%;
    }
  }
}
.ingredient{
  .btn{
    display: flex;
    gap: 3rem;
  }
  button{
    padding: 0.5rem 1.5rem;
    border: 2px solid black;
    cursor: pointer;
    /* background-color: #fff;
    color: #000; */
  }
}
.active{
  color:var(--color-white);
  background: var(--color-bg);
}
.summary, .ingd{
  margin-top: 1rem;
}

/* MEDIA QUERIES */
@media screen and (max-width:884px) {
  grid-template-columns: 1fr;
  place-items: center;
  .summary, .ingd{
  font-size: 0.8rem;
}
}
`