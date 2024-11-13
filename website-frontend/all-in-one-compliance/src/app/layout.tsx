import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Precog.ai',
  description: 'Compliance Made Simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} fade-in flex flex-col min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-600 text-white`}>
        {/* Header */}
        <Navbar />

        {/* Main Content Section */}
        <main className="flex-grow container mx-auto px-4 py-16 flex justify-center items-center fade-in">
          <div className="flex space-x-12 items-center max-w-6xl">
            {/* Left Content (Text) */}
            <div className="w-2/5 text-left fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance made simple.</h1>
              <p className="text-lg md:text-xl mb-8">
                Experience real-time alerts and proactive guidance to safeguard sensitive information, empowering employees to make secure choices every step of the way.
              </p>
              <div className="flex space-x-4">
                <Link href="/signup" className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-6 rounded-md fade-in">
                  Sign Up
                </Link>
                <Link href="/demo" className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white py-2 px-6 rounded-md transition-colors duration-300 fade-in" style={{ animationDelay: '1s' }}>
                  View Demo →
                </Link>
              </div>
            </div>

            {/* Right Content (Video) */}
            <div className="w-3/5 flex justify-center fade-in">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <video src="/videos/demo_video.mp4" loop autoPlay muted className="w-full h-full" />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-cyan-700 text-white py-4 fade-in">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; 2024 Precog.ai. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-cyan-200"><Twitter size={24} /></a>
              <a href="#" className="hover:text-cyan-200"><Instagram size={24} /></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
