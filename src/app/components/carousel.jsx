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

  const btnStyle = 'absolute top-1/4 p-4'
  return ( 
    <>
    <div className='m-4 h-24 w-48 relative'>
      <div className="flex gap-4 h-full w-full overflow-hidden">
        { items.map((item, index) => {
          const style = `border-yellow-500 translate-[${-100 * selected}%]`;  
          return (
            <Card key={index} style={style}>{item.name}</Card>
          )}
          )}
      </div>
      
      <button onClick={handleBack} className={btnStyle + ' left-0'}>&lt;</button>
      <button onClick={handleForward} className={btnStyle + ' right-0'}>&gt;</button>
    </div>

    </>
   );
}
 
export default Carousel;