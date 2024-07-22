"use client";

import Card from './card';
import Link from 'next/link';
import { useState } from 'react';

const Carousel = ({ items }) => {
  // does there need to be a highlighted category? or just a select few that are displayed?
  const [selected, setSelected] = useState(0);

  const handleBack = () => {
    return setSelected(prevSelected => prevSelected === 0 ? items.length - 1 : prevSelected - 1);
  }
  const handleForward = () => {
    return setSelected(prevSelected => prevSelected === items.length - 1 ? 0 : prevSelected + 1);
  }

  return ( 
    <>
    <div className='flex gap-4 m-4'>
      <button onClick={handleBack}>&lt;</button>
      <div className="flex gap-4">
        {items.map((item, index) => {
          const style = "border-yellow-500";
          return (
            <Card key={index} style={style}>
              <Link href={item.href}>
                <h1>{item.name}</h1>
              </Link>
            </Card>
          )
        })}
      </div>
      <button onClick={handleForward}>&gt;</button>
    </div>

    </>
   );
}
 
export default Carousel;