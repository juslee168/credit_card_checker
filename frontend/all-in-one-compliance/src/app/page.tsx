import Link from 'next/link';
import HomePageTiles from './components/HomePageTiles'; // Import the tiles component

export default function HomePage() {
  return (
    <div className=" text-white">
      {/* Hero Section */}
      <div className="flex justify-center items-center py-16">
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
              {/* <Link
                href="/demo"
                className="bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white py-2 px-6 rounded-md transition-colors duration-300 fade-in"
              >
                View Demo →
              </Link> */}
            </div>
          </div>

          {/* Right Content (Video) */}
          <div className="w-3/5 flex justify-center fade-in">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <video src="/videos/demo_video.mp4" loop autoPlay muted className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="py-8"></div>

      {/* Tiles Section */}
      <div className="py-16">
        <HomePageTiles />
      </div>
    </div>
  );
}
