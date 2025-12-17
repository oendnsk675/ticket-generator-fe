import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 inset-0 h-fit w-full px-4 py-4 border-b border-neutral-100  dark:border-neutral-800 dark:bg-black backdrop-blur">
      <section className="flex mx-auto max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-linear-to-br from-violet-500 to-pink-500" />
          <h1 className="text-base font-bold md:text-2xl">Ticket Gen.</h1>
        </div>
        <Link href="/dashboard">
        <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Dashboard
        </button>
        </Link>
      </section>
    </nav>
  );
}
