import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function NavBar() {

  const router = useRouter();

  return (
    <nav className="bg-zinc-700	h-12 flex justify-around items-center gap-72">
      <Link
        href="/main"
        className="underline underline-offset-2 decoration-sky-500/75 decoration-2">
        Main
      </Link>
      <div>

        {/* if login page, doesn't display; else display login router button */}
        {router.pathname !== "/login" ?
          <Link href="/login" className="mr-8 hover:bg-sky-500/75 p-2 rounded-lg">
            Login
          </Link> : null}

        {/* if register page, doesn't display; else display register router button */}
        {router.pathname !== "/register" ?
          <Link href="/register" className="hover:bg-sky-500/75 p-2 rounded-lg">
            Register
          </Link> : null}

      </div>
    </nav>
  )
}
