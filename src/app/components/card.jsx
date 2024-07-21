const Card = ({ children, style }) => {
  const cardStyle = `border-2 p-4 ${style}`;
  return ( 
    <>
      <div className={cardStyle}>{children}</div>
    </>
   );
}
 
export default Card;