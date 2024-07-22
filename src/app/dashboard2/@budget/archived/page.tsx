import Link from "next/link";

const ArchivedBudget = () => {
  return ( 
    <>
      <h1>Archived Budget</h1>
      <p>Idea is to display previous budgets.</p>
      <Link href="/dashboard2">View Current Budget</Link>
    </>
   );
}
 
export default ArchivedBudget;