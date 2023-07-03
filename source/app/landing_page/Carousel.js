'use client';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComponent() {
  const images = [
    "https://drive.google.com/uc?export=view&id=1mswYKyoZQ9YkCiBhBT-7SdutRpNxp2PH",
    "https://drive.google.com/uc?export=view&id=1PhT_tzskK6T-nimI4blGadEIu9hLU1b_",
    "https://drive.google.com/uc?export=view&id=1TI1-s0tm92ltM4xuLzRa_vLNx5xSkJnM",
    "https://drive.google.com/uc?export=view&id=18h3BKOiwcjx2Awr-3XJSrGU0lmlFcc1C",
    "https://drive.google.com/uc?export=view&id=1HC_a9CDvk_Ixyez1oocghB-yOiVbxRFd",
  ]
  return (
    <Carousel showThumbs={false}
    interval={3000}
    infiniteLoop={true}
    autoPlay={true}
    showStatus={false}>
    {
      images.map((item)=>(
        <div className='h-80 flex items-center justify-center'>
          <img
            className='h-auto max-w-full'
            alt="..."
            src={item}
          />
        </div>
      ))
    }
    </Carousel>
  )
}

