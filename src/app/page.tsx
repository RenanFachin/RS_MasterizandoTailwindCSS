export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="flex items-center gap-3 font-bold text-3xl sm:text-5xl lg:text-6xl before:w-0.5 before:h-8 before:bg-sky-500 before:flex">Hello Tailwind</h1>
      <h1>Hello Tailwind</h1>
      <h1>Hello Tailwind</h1>

      <button
        disabled
        className="bg-sky-500 px-4 py-2 rounded-md font-semibold mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Sign in
      </button>
    </div>
  )
}
