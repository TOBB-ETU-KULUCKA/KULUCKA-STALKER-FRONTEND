import "../styles/globals.css"
import NavBar from "../components/NavBar"
import type { AppProps } from "next/app"

import "primereact/resources/themes/lara-light-indigo/theme.css" //theme
import "primereact/resources/primereact.min.css" //core css
import "primeicons/primeicons.css" //icons
import { NextRouter, useRouter } from "next/router"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {

  const router: NextRouter = useRouter();

  useEffect(() => {
    const userID =
      localStorage.getItem("userID") !== ( undefined || null)
        ? localStorage.getItem("userID")
        : null;

    if (router.pathname !== ("/login" && "/register") && !userID) router.push("/login");
  }, [router.pathname]);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
