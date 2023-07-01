'use client'
import { useRouter } from "next/navigation"
export default function page() {
  const route=useRouter();
  return (
    <div>
        <h1>This is About me </h1> 
        <button onClick={()=>route.push('/about')}>about page</button>    
    </div>
  )
}
