import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';

export default function RingsCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { data, index } = props;
  // console.log(data)
  

  const handleClick = () => {
    setClicked(!clicked); 
  };
let url=data.imageUrl
let newUrl= url.slice(1)
  return (
    <>
    <Link  to={`/productDetails/${data.id}`}>
    <Card variant='' className='transition-all'>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} key={index}>
        <button onClick={handleClick} className={` absolute float-right ${isHovered ? 'flex' : 'hidden'}`} >
          {clicked ? <FavoriteOutlinedIcon/> : <FavoriteBorderTwoToneIcon />}
        </button>

        <div className='flex items-center justify-center'>
          <img src={data.imageUrl} id={data.id} height="200" width="200" alt="" />
        </div>
        <div className='mb-5'>
          <p className='text-center girls text-2xl p-2'>{data.name.slice(0, 20)}</p>
          <h6 className='text-center girls'>${data.price}</h6>
        </div>
        <div className='flex items-center justify-center'>
          <div
            className={`uppercase absolute transition-all underline items-center justify-center mt-3 font-bold text-center ${
              isHovered ? 'flex' : 'hidden'
            }`}
          >
            See this Item
          </div>
        </div>
      </div>
    </Card>
    </Link>
 
    </>
  );
}


// Dummy 

  //  {/* <div className='hidden'>
  //     <ProductDetailsPage product={data} index={index}/>
  //   </div> */}