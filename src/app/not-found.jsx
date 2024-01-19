import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Sorry!</h2>
      <p>The page you searching is not available!</p>
      <Link href={'/'}>Return Home</Link>
    </div>
  )
}

export default NotFound