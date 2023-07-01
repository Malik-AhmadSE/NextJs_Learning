'use client'
import '../login.css'
import {useRouter} from 'next/navigation';
export default function page() {
  const route=useRouter();
  return (
    <div>
      <h1 className='heading'>Login Success</h1>
      <button onClick={()=>{route.push('/login')}}>Login</button>
    </div>
  )
}
