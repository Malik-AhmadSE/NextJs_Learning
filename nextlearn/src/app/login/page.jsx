'use client'
import './login.css';
import {useRouter} from 'next/navigation';

export default function page() {
    const route=useRouter();
  return (
    <div>
      <h1 className='heading'>Login Function</h1>
      <button onClick={()=>{route.push('/')}}>Home page</button>
      <button onClick={()=>{route.push('/login/loginsuccess')}}>Login success</button>
    </div>
  )
}
