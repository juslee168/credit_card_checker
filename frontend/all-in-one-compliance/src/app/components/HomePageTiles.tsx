"use client";
import { ShieldCheck, Brain, Eye, Layers } from "lucide-react";

const HomePageTiles = () => {
  // Tile content data
  const tiles = [
    {
      icon: <ShieldCheck size={40} className="text-cyan-500" />,
      title: "Proactive, Real-Time Protection",
      description:
        "Go beyond traditional training with instant alerts that guide employees to make secure decisions when handling sensitive data, reducing the risk of breaches before they happen.",
    },
    {
      icon: <Brain size={40} className="text-cyan-500" />,
      title: "AI-Driven Compliance Expertise",
      description:
        "Stay ahead of evolving regulations like HIPAA, GDPR, and CCPA with intelligent AI-powered monitoring that adapts to your organization’s unique needs.",
    },
    {
      icon: <Eye size={40} className="text-cyan-500" />,
      title: "Privacy-First Monitoring",
      description:
        "Focus solely on safeguarding sensitive information without compromising employee trust, ensuring transparent and ethical data protection.",
    },
    {
      icon: <Layers size={40} className="text-cyan-500" />,
      title: "Seamless Integration and Usability",
      description:
        "Easily integrate with your existing tools like Outlook or Slack while enjoying an intuitive platform that enhances productivity without adding complexity.",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Our Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4">{tile.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {tile.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700">{tile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageTiles;
