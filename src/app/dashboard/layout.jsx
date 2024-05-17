import Nav from '../ui/nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}