"use client"

import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="fixed inset-0 bg-[#0a0a16] text-white overflow-y-auto">
      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Profile section */}
        <div className="flex flex-col items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg mx-auto relative">
            <Image
              src="/profile-image.jpeg"
              alt="Profile picture of Martin Picollo with Spider-Man statue in the background"
              width={800}
              height={800}
              className="object-cover absolute inset-0 w-full h-full"
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
            This website was written with v0 and Next.js
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

