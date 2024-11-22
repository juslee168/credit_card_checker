"use client";
import React from "react";

const Pricing = () => {
  return (
    <div className="text-white py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pricing & Plans</h1>
        <p className="text-lg">
          The best solution for your compliance needs.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3">Plan</th>
              <th className="px-6 py-3">Free</th>
              <th className="px-6 py-3">Pro (TBA)</th>
              <th className="px-6 py-3">Enterprise (TBA)</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-800">
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Ideal For</td>
              <td className="px-6 py-4">Individuals & Small Teams</td>
              <td className="px-6 py-4">Small & Medium Businesses</td>
              <td className="px-6 py-4">Large Enterprises</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Browser Extension</td>
              <td className="px-6 py-4">✔ Full access</td>
              <td className="px-6 py-4">✔ Enhanced features</td>
              <td className="px-6 py-4">✔ Custom integrations</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Desktop App</td>
              <td className="px-6 py-4">✘</td>
              <td className="px-6 py-4">✔</td>
              <td className="px-6 py-4">✔</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Real-Time Alerts</td>
              <td className="px-6 py-4">Limited</td>
              <td className="px-6 py-4">✔ Full detection across multiple platforms</td>
              <td className="px-6 py-4">✔ AI-enhanced real-time alerts</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Compliance Standards</td>
              <td className="px-6 py-4">HIPAA, GDPR (basic coverage)</td>
              <td className="px-6 py-4">HIPAA, GDPR, CCPA (full compliance)</td>
              <td className="px-6 py-4">
                HIPAA, GDPR, CCPA, PCI-DSS, FISMA
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Sensitive Data Types Monitored</td>
              <td className="px-6 py-4">Credit Cards, SSNs</td>
              <td className="px-6 py-4">
                + Health Data, Personal Identifiable Info
              </td>
              <td className="px-6 py-4">
                + Customizable sensitive data categories
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Reports & Analytics</td>
              <td className="px-6 py-4">Basic weekly insights</td>
              <td className="px-6 py-4">Advanced reporting & trends</td>
              <td className="px-6 py-4">Custom analytics dashboards</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">User Roles & Access Control</td>
              <td className="px-6 py-4">✘</td>
              <td className="px-6 py-4">✔ Role-based access</td>
              <td className="px-6 py-4">✔ Advanced role-based access</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Support</td>
              <td className="px-6 py-4">Community forums</td>
              <td className="px-6 py-4">Email Support</td>
              <td className="px-6 py-4">Priority Support</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium bg-gray-200">Integrations</td>
              <td className="px-6 py-4">Limited to web browsers</td>
              <td className="px-6 py-4">Integrates with Slack, Outlook, etc.</td>
              <td className="px-6 py-4">Custom API integrations</td>
            </tr>
          </tbody>
        </table>
      </div>

{/* Plan Highlights Section as Tiles */}
<div className="max-w-7xl mx-auto mt-16">
  <h2 className="text-3xl font-bold mb-12 text-center">Plan Highlights</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Freemium Plan Tile */}
    <div className="bg-cyan-200 text-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Freemium Plan</h3>
      <p className="text-lg">
        Perfect for individuals or small teams, offering basic compliance
        monitoring directly from your browser, covering essential standards like
        HIPAA and GDPR.
      </p>
    </div>

    {/* Pro Plan Tile */}
    <div className="bg-cyan-200 text-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
      <p className="text-lg">
        Advanced detection across platforms, enhanced analytics, and support for
        multiple compliance regulations, ideal for small and medium businesses.
      </p>
    </div>

    {/* Enterprise Plan Tile */}
    <div className="bg-cyan-200 text-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
      <p className="text-lg">
        Tailored solutions with customizable features, role-based access, and
        priority support for enterprises with complex compliance needs.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Pricing;
