'use client'
import {useRouter} from 'next/navigation';
export default function page() {
  const route=useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>{route.push('/')}}>Home page</button>
    </div>
  )
}
