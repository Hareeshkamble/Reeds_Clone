import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function RingsCard(props) {
let{data}   = props;
  return (
    <Card variant='outlined' className='outline'>
        <CardContent>
            <div className='flex items-center  justify-center'>
                <img src={data.imageUrl} id={data.id} height="200" width="200" alt="" />
            </div>
            <div>
                <p className='text-center girls text-2xl p-2'>{data.name.slice(0,20)}</p>
                <h6 className='text-center girls'>${data.price}</h6>
            </div>
        </CardContent>
    </Card>
  )
}
