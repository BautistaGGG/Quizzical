/* eslint-disable react/prop-types */
function Questions({APIdata}) {
  
  function Layout(){
    return(
      APIdata.results.map(respuesta => (
        <section key={respuesta.correct_answer} className="my-4">
          <h1 className="text-xl text-titleColor">
            {respuesta.question}
          </h1>
          <h4 className="text-lg text-titleColor">
            {respuesta.category}
          </h4>
          <ul className="flex flex-row gap-4">
            <li>
              <p className="text-md border border-titleColor rounded-md">
                {respuesta.incorrect_answers[0]} 
              </p>
            </li>
            <li>
              <p className="text-md border border-titleColor rounded-md">
                {respuesta.incorrect_answers[1]} 
              </p>
            </li>
            <li>
              <p className="text-md border border-titleColor rounded-md">
                {respuesta.incorrect_answers[2]} 
              </p>
            </li>
            <li>
              <p className="text-md border border-titleColor rounded-md">
                {respuesta.correct_answer} 
              </p>
            </li>
          </ul>
        </section>
      ))
    )
  }
  
  return (
    <article>
      <Layout/>
    </article>
  )
}

export default Questions