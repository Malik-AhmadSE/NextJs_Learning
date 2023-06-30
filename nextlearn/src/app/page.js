'use client'
import {useRouter} from 'next/navigation';

export default function Home() {
  const route=useRouter();
  const navigate=(name)=>{
    route.push(name);
  }
  return (
    <main >
    <h1>Uisng Link and Navigation in Routing</h1>
    <button onClick={()=>{navigate('/login')}}>Login</button>
    <br />
    <br />
    <button onClick={()=>{navigate('/about')}}>About</button>
    </main>
  );
}

