/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/q8tBuIkAKiL
 */
import Link from "next/link";

export function Landing() {
  return (
    <div className="flex flex-col">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            CV
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hi 👋🏼, I'm Nikhil
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a frontend engineer 👨🏻‍💻 who loves creating beautiful and
                  performant user interfaces. Whether it's React Native for
                  mobile or Next.js for the web, I'm passionate about building
                  great experiences.
                </p>
              </div>
              <div className="space-x-4 space-y-4">
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out my
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-start rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="https://github.com/saxenanickk"
                >
                  Github ⚡️
                  <ChevronRightIcon className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-start rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="https://cv.nikhilsaxena.me/"
                >
                  CV 📄
                  <ChevronRightIcon className="w-4 h-4 ml-2 inline-block" />
                </Link>
              </div>
            </div>

            {/* <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-[4rem]">
                    React Native
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Build mobile apps with React. I'll show you how to create
                    stunning UIs and access native features with ease.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-start rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Learn more
                  <ChevronRightIcon className="w-4 h-4 ml-2 inline-block" />
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-[3.5rem] 2xl:text-[4rem]">
                    Next.js
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Supercharge your website with the framework for the modern
                    web. Static or dynamic. Personal or professional. I'll help
                    you make it amazing.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-start rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Learn more
                  <ChevronRightIcon className="w-4 h-4 ml-2 inline-block" />
                </Link>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
