'use client'
import styles from "./page.module.css";

export default function Home() {
  const name=()=>{
    alert('Ahmad Ali')
  }
  return (
    <main className={styles.main}>
    <h1>Events, function and state</h1>
    <button onClick={name}>Click Me </button>
    </main>
  );
}

