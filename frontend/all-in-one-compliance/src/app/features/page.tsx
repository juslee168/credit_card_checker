"use client";
import React, { useState } from "react";

// Define the type for a single feature
interface Feature {
  title: string;
  description: string;
  image: string;
}

// Define the feature content
const featureContent: Record<string, Feature> = {
  "Security and Privacy": {
    title: "Security and Privacy",
    description:
      "The app is designed to provide seamless compliance and robust data protection, aligning with the highest standards on data security and employee privacy.",
    image: "/images/features_1.jpg",
  },
  "Real-Time Alerts for Sensitive Data": {
    title: "Real-Time Alerts for Sensitive Data",
    description:
      "Detect and alert employees when sensitive information, like credit card details or health data, is being transmitted. This immediate feedback empowers users to make secure decisions in real time.",
    image: "/images/features_2.jpg",
  },
  "AI-Driven Compliance Monitoring": {
    title: "AI-Driven Compliance Monitoring",
    description:
      "Leveraging AI, the app continuously monitors for compliance with HIPAA, GDPR, CCPA, and other regulations, adapting to evolving data privacy needs to prevent potential risks before they happen.",
    image: "/images/features_3.jpg",
  },
  "End-to-End Data Encryption": {
    title: "End-to-End Data Encryption",
    description:
      "Data is encrypted on device, in transit, and at rest, ensuring a multi-layered approach to secure sensitive information from unauthorized access.",
    image: "/images/features_4.jpg",
  },
  "Role-Based Access Control": {
    title: "Role-Based Access Control",
    description:
      "Define role-specific access permissions so that only authorized personnel can view or interact with sensitive data. This adds an extra layer of control to protect privacy.",
    image: "/images/features_5.jpg",
  },
  "Two-Step Verification for High-Risk Actions": {
    title: "Two-Step Verification for High-Risk Actions",
    description:
      "Require a second layer of verification before high-risk actions are completed, giving users a 'pause and review' moment for secure decision-making.",
    image: "/images/features_6.jpg",
  },
  "Transparent Activity Logs for Compliance Audits": {
    title: "Transparent Activity Logs for Compliance Audits",
    description:
      "Maintain a transparent record of actions taken on the platform. These logs provide a secure, immutable audit trail to support compliance and accountability within the organization.",
    image: "/images/features_7.jpg",
  },
};

const Features = () => {
  // State to track the selected feature
  const [selectedFeature, setSelectedFeature] = useState<keyof typeof featureContent>(
    "Security and Privacy"
  );

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Introductory Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Built for All Kinds of Work and All Kinds of Teams
        </h1>
        <p className="text-lg text-gray-200">
          Our features are designed to provide comprehensive compliance, robust
          data protection, and seamless user experience across industries and
          teams of all sizes.
        </p>
      </div>

      <div className="flex">
        {/* Sidebar Menu */}
        <aside className="w-1/3 pr-6">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <ul className="space-y-4">
            {Object.keys(featureContent).map((feature) => (
              <li key={feature}>
                <button
                  onClick={() => setSelectedFeature(feature)}
                  className={`w-full text-left py-2 px-4 rounded-lg text-lg transition-colors ${
                    selectedFeature === feature
                      ? "bg-cyan-500 text-white"
                      : "hover:bg-gray-100 text-black"
                  }`}
                >
                  {feature}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Divider Line */}
        <div className="w-1 bg-white mx-4"></div>

        {/* Content Section */}
        <section className="w-2/3">
          <div
            className="p-6 bg-white rounded-lg shadow flex items-center"
            style={{
              minHeight: "500px",
            }}
          >
            {/* Left Side: Image */}
            <div className="w-1/2 h-full">
              <img
                src={featureContent[selectedFeature].image}
                alt={featureContent[selectedFeature].title}
                className="rounded-lg shadow-lg w-full h-full object-cover"
                style={{
                  height: "450px",
                }}
              />
            </div>

            {/* Right Side: Title and Text */}
            <div className="w-1/2 pl-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {featureContent[selectedFeature].title}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {featureContent[selectedFeature].description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
