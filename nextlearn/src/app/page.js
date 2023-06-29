'use client'
import styles from "./page.module.css";

export default function Home() {
  const name=(name_user)=>{
    alert(name_user)
  }
  return (
    <main className={styles.main}>
    <h1>Events, function and state</h1>
    <button onClick={()=>name('First Name is Ahmad')}>Click Me </button>
    </main>
  );
}

