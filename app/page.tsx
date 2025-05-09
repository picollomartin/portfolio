"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [imageReady, setImageReady] = useState(false)

  return (
    <div className="fixed inset-0 bg-[#0a0a16] text-white overflow-y-auto">
      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Profile section */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg mx-auto relative bg-gray-800">
            <div
              className="absolute inset-0 bg-gray-800 rounded-full"
              style={{
                opacity: imageReady ? 0 : 1,
                transition: "opacity 0.1s ease-in-out",
              }}
            />
            <div
              className="relative w-full h-full"
              style={{
                opacity: imageReady ? 1 : 0,
                transition: "opacity 0.1s ease-in-out",
              }}
            >
              <Image
                src="/profile-image.webp"
                alt="Profile picture with Spider-Man statue"
                fill
                sizes="256px"
                className="object-cover"
                priority
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESEHEhMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AmGBYzjOKTpjNzJKI42jMNvGQoLHc7n1k+6KKCCf/2Q=="
                onLoad={() => setImageReady(true)}
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-8">Martin Picollo</h1>

          <p className="text-2xl mb-8">
            <span className="mr-2">👋</span>
            Hi! I&apos;m Martin.
          </p>
          <p className="text-2xl mb-8">I&apos;m a Backend Developer in Golang.</p>
          <p className="text-2xl mb-8">This website was written with v0 and Next.js</p>
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
