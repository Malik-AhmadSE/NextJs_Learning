'use client'
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {

  const Innercomp=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }
  return (
    <main >
    <h1>Uisng Link and Navigation in Routing</h1>
    <Link href={'/login'}>Login Page</Link><br/><br/>
    <Link href={'/about'}>About Page</Link>
    </main>
  );
}

