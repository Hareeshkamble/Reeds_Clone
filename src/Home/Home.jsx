import React from 'react'
import Favorites from './Favorites'
import Carousel from './HomeCarousel'
import Jewels from './Jewels'
import Recommadation from './Recommadation'
import SpringGifts from './SpringGifts'
import WatchCarousel from './Watch Carousel/WatchCarousel'

export default function Home() {
  return (

    
<div>
<Carousel/>
<Jewels/>
<SpringGifts/>
<WatchCarousel/>
<Favorites/>
<Recommadation/>
 </div>
  )
}
