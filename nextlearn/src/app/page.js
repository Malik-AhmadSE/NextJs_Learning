'use client'
import {useRouter} from 'next/navigation';

export default function Home() {
  const route=useRouter();
  return (
    <main >
    <h1>Uisng Link and Navigation in Routing</h1>
    <button onClick={()=>{route.push('/login')}}>Login</button>
    <br />
    <br />
    <button onClick={()=>{route.push('/about')}}>About</button>
    </main>
  );
}

