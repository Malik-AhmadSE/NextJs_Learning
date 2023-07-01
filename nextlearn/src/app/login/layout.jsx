'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import './login.css';
export default function layout({children}) {
  const pathname=usePathname();
    return (
    <div>
    {
        pathname !== "/login/loginsuccess"?
        <ul className="main-layout">
        <li><h4>Login Navebar</h4></li>
        <li><Link href={'/login'}>Login Main</Link></li>
        <li><Link href={'/login/loginsuccess'}>success</Link></li>
      </ul> :
      <Link href={'/login'}>Go to Login</Link>
    }
      {children}
    </div>
  )
}
