"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#0a0a16] text-white" : "bg-white text-black"}`}>
      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Dark mode toggle */}
        <div className="flex items-center mb-8">
          <div
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
              isDarkMode ? "bg-blue-300" : "bg-gray-300"
            }`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? "translate-x-7" : ""
              }`}
            />
          </div>
          <span className="ml-3 text-lg">dark mode</span>
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg mx-auto">
            <Image
              src="/profile-image.jpeg"
              alt="Profile picture of Martin Picollo with Spider-Man statue in the background"
              width={800}
              height={600}
              className="object-cover w-full h-full scale-125 object-center"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-8">Martin Picollo</h1>

          <p className="text-2xl mb-8">
            <span className="mr-2">👋</span>
            Hi! I&apos;m Martin.
          </p>
          <p className="text-2xl mb-8">
            I&apos;m a Backend Developer in Golang.
          </p>
          <p className="text-2xl mb-8">
            This website was written by v0.dev.
          </p>
          <p className="text-2xl mb-8">
            Here&apos;s{" "}
            <Link href="https://www.linkedin.com/in/picollomartin" className="text-blue-400 hover:underline">
              my LinkedIn
            </Link>{" "}
            and here&apos;s{" "}
            <Link href="https://github.com/picollomartin" className="text-blue-400 hover:underline">
              my GitHub
            </Link>
            .
          </p>

          <p className="text-2xl mb-8">Check out my latest blog posts below (WIP).</p>

          <p className="text-2xl">
            You can also say hi at{" "}
            <Link href="https://x.com/picollomartin" className="text-blue-400 hover:underline">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

