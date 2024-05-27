import React from 'react'
import { ImageSlider, RandomColor, StarRating } from './pages'

export default function App() {
  return (
    <div>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'7'}/>
    </div>
  )
}