import Link from 'next/link';
export default function page() {
  return (
    <div>
      <h1>Student Data</h1>
      <ul>
        <li><Link href={'/student/Ahmad'}>Ahmad</Link></li>
        <li><Link href={'/student/Ali'}>Ali</Link></li>
        <li><Link href={'/student/Abobakar'}>Abobakar</Link></li>
        <li><Link href={'/student/Bilal'}>Bilal</Link></li>
      </ul>
    </div>
  )
}
