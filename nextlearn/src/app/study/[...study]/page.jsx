export default function page({params}) {
  return (
    <div>
      <h1>Lecture 1</h1>
      <h3>day : {params.study[0]}</h3>
      <h3>Lecture : {params.study[1]}</h3>

    </div>
  )
}
