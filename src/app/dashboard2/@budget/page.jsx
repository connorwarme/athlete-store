import Link from "next/link";

const Budget = () => {
  return ( 
    <>
      <h1>Budget</h1>
      <p>Idea is to display remaining budget for the year.</p>
      <Link href="/dashboard2/archived">View Archived Budgets</Link>
    </>
   );
}
 
export default Budget;