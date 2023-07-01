import Link from "next/link";
import './login.css';
export default function layout({children}) {
  return (
    <div>
      <ul className="main-layout">
        <li><h4>Login Navebar</h4></li>
        <li><Link href={'/login'}>Login Main</Link></li>
        <li><Link href={'/login/loginsuccess'}>success</Link></li>
      </ul>
      {children}
    </div>
  )
}
