/* eslint-disable react/prop-types */
function StartGame({flipState}) {
  return (
    <article className="text-center">
      <h1 className="text-titleColor font-bold text-3xl my-4">
        Quizzical 
      </h1>

      <p className="text-titleColor text-lg my-4">
        Some description if needed
      </p>

      <button onClick={flipState} className="bg-buttonColor text-white py-3 px-8 rounded-md">
        Iniciar Quiz
      </button>
    </article>
  )
}

export default StartGame