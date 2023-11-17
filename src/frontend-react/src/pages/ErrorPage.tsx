import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center text-2xl text-yellow-50">
        <h1>Oops! 🥶</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <div className="mt-10">
          <Link to="/" className=" text-blue-400 hover:text-blue-600">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}
