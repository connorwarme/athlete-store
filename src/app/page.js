import 'dotenv/config';
import Link from 'next/link';
import Carousel from './components/carousel';

export default function Home() {
  // home page
  // login component
  // categories carousel
  // highlighted product carousel ?

  const fakeCategories = [
    { 
      id: 1,
      name: 'Shirts',
      href: '/categories/shirts',
    }, 
    { 
      id: 2,
      name: 'Pants',
      href: '/categories/pants',
    }, 
    { 
      id: 3,
      name: 'Shoes',
      href: '/categories/shoes',
    },
    { 
      id: 21,
      name: 'Shirts',
      href: '/categories/shirts',
    }, 
    { 
      id: 22,
      name: 'Pants',
      href: '/categories/pants',
    }, 
    { 
      id: 23,
      name: 'Shoes',
      href: '/categories/shoes',
    },
    { 
      id: 31,
      name: 'Shirts',
      href: '/categories/shirts',
    }, 
    { 
      id: 32,
      name: 'Pants',
      href: '/categories/pants',
    }, 
    { 
      id: 33,
      name: 'Shoes',
      href: '/categories/shoes',
    },
  ]

  return (
    <main className="flex flex-col">
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard2">Dashboard2</Link>
      <div>
        <Link href="/categories">Categories</Link>
        <Carousel items={fakeCategories} />
      </div>
      <Link href="/products">Products</Link>
    </main>
  );
}
