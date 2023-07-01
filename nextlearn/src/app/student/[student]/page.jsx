'use client'
export default function page({params}) {
  return (
    <div>
      <h1>Student Detail</h1>
      <h4>Name is : {params.student}</h4>
    </div>
  )
}
