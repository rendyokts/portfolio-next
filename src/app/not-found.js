import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen'>
      <div  className="flex flex-col text-neutral-600 dark:text-neutral-300 space-y-10 items-center justify-center lg:h-[70vh] overflow-hidden">
    <h1 className="text-4xl md:text-6xl font-semibold">Why am i here?</h1>
        <p className="text-center">It seems like the page that you are looking for is no longer here.</p>
        <Link
          href="/"
          className="uppercase text-xs px-6 py-4 rounded-xl dark:bg-neutral-300 bg-neutral-600 text-neutral-100 dark:text-neutral-700 hover:shadow-lg transition-all duration-300"
        >
          Take me home
        </Link>
    </div>
    </div>
    
    
  )
}