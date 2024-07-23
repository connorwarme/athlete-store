const Card = ({ children, style }) => {
  const cardStyle = `border-2 p-4 h-full w-full ${style} flex items-center justify-center`;
  return ( 
    <>
      <div className={cardStyle}>{children}</div>
    </>
   );
}
 
export default Card;