import React from 'react'
import Popular from './Popular'
import Vegie from './Vegie'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <Homestyle
    initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:0.5}}}
    exit={{opacity:0,transition:{duration:0.5}}}
    >
      <Vegie/>
      <Popular/>
    </Homestyle>
  )
}

export default Home

const Homestyle = styled(motion.div)`
/* margin-bottom: 2rem; */

`