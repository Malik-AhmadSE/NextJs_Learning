'use client'
import {useRouter} from 'next/navigation';
export default function page() {
    const route=useRouter();
  return (
    <div>
      <h1>Login Success</h1>
      <button onClick={()=>{route.push('/login')}}>Login</button>
    </div>
  )
}
