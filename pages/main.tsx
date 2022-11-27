import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Main.module.scss"

export default function Main() {
  const [headerNumber, setHeaderNumber] = useState<number>(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Main Page</title>
      </Head>
      {/* Wrapper */}
      <div className={styles.wrapper}>
        {/* Grey area */}
        <div className="bg-zinc-600 w-1/5">
          {/* Header */}
          <div className="h-10 bg-gray-500 flex items-center justify-around">
            <h2 className="p-2 font-semibold">Backlog(Open)</h2>
            <span>{headerNumber}</span>
          </div>
          {/* Main content */}
          <div className="text-black py-4 px-4 text-center">
            <div className="mt-6 bg-slate-200 rounded-lg">
              <p className="p-2">Changes to bundle landing page</p>
            </div>
            <div className="mt-6 bg-slate-200	rounded-lg">
              <p className="p-2">Changing CTAs on check-out page</p>
            </div>
          </div>
        </div>

        {/* Yellow area */}
        <div className="bg-amber-600 w-1/5">
          {/* Header */}
          <div className="h-10 bg-amber-500 flex items-center justify-around">
            <h2 className="p-2 font-semibold">Selected</h2>
            <span>{headerNumber}</span>
          </div>
          {/* Main content */}
          <div className="text-black py-4 px-4 text-center">
            <div className="mt-6 bg-slate-200 rounded-lg">
              <p className="p-2">Changes to bundle landing page</p>
            </div>
            <div className="mt-6 bg-slate-200	rounded-lg">
              <p className="p-2">Changing CTAs on check-out page</p>
            </div>
          </div>
        </div>

        {/* Red area */}
        <div className="bg-red-600 w-1/5 ">
          {/* Header */}
          <div className="h-10 bg-red-500 flex items-center justify-around">
            <h2 className="p-2 font-semibold">Running</h2>
            <span>{headerNumber}</span>
          </div>
          {/* Main content */}
          <div className="text-black py-4 px-4 text-center">
            <div className="mt-6 bg-slate-200 rounded-lg">
              <p className="p-2">Changes to bundle landing page</p>
            </div>
            <div className="mt-6 bg-slate-200	rounded-lg">
              <p className="p-2">Changing CTAs on check-out page</p>
            </div>
          </div>
        </div>

        {/* Blue area */}
        <div className="bg-cyan-600 w-1/5">
          {/* Header */}
          <div className="h-10 bg-cyan-500 flex items-center justify-around">
            <h2 className="p-2 font-semibold">Selected</h2>
            <span>{headerNumber}</span>
          </div>
          {/* Main content */}
          <div className="text-black py-4 px-4 text-center">
            <div className="mt-6 bg-slate-200 rounded-lg">
              <p className="p-2">Changes to bundle landing page</p>
            </div>
            <div className="mt-6 bg-slate-200	rounded-lg">
              <p className="p-2">Changing CTAs on check-out page</p>
            </div>
          </div>
        </div>

        {/* Green area */}
        <div className="bg-green-600 w-1/5">
          {/* Header */}
          <div className="h-10 bg-green-500 flex items-center justify-around">
            <h2 className="p-2 font-semibold">Selected</h2>
            <span>{headerNumber}</span>
          </div>
          {/* Main content */}
          <div className="text-black py-4 px-4 text-center">
            <div className="mt-6 bg-slate-200 rounded-lg">
              <p className="p-2">Changes to bundle landing page</p>
            </div>
            <div className="mt-6 bg-slate-200	rounded-lg">
              <p className="p-2">Changing CTAs on check-out page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
