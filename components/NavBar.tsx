import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-zinc-700	h-12 flex justify-around items-center gap-72">
      <Link
        href="/main"
        className="underline underline-offset-2 decoration-sky-500/75 decoration-2">
        Main
      </Link>
      <div>
        <Link href="/login" className="mr-8 hover:bg-sky-500/75 p-2 rounded-lg">
          Login
        </Link>
        <Link href="/register" className="hover:bg-sky-500/75 p-2 rounded-lg">
          Register
        </Link>
      </div>
    </nav>
  )
}
