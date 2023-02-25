import Link from '../Link.jsx'

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1580217302229860353/YqwVLbjs_400x400.jpg'
          alt='Foto de Víctor'
        />
      </div>
      <p>Hola, estoy creando un clon de React Router.</p>
      <Link to='/'>Ir a la Home</Link>
    </>
  )
}

export default AboutPage
