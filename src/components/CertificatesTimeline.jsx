import React from "react";
import cert from "../assets/images/cert.png";

const certificates = [
  {
    date: "March 2025",
    title: "Qualys – Vulnerability Management Foundation",
    file: "/certificates/qualys-vulnerability.pdf",
  },
  { date: "April 2025",
    title: "CISCO Networking Academy",
    file: "/certificates/cisco-networking-academy.pdf",
  },
  {
    date: "May 2025",
    title: "Network Defense",
    file: "/certificates/network-defense.pdf",
  },
  {
    date: "July 2025",
    title: "Open-source Intelligence (CISCO)",
    file: "/certificates/osint-cisco.pdf",
  },
  {
    date: "December 2025",
    title: "AWS Academy Cloud Security Foundation",
    file: "/certificates/aws-cloud-security.pdf",
  },
];

function CertificatesTimeline() {
  return (
    <div className="mt-10">

     <div className="flex gap-3 items-center">
        <img src={cert} className="w-12 self-start"/>
        <h4 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-6">Certifications 🎓</h4>
    </div>

      <ol className="relative border-l-2 border-pink-200 m-5">
        {certificates.map((cert, index) => (
          <li key={index} className="mb-8 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 ring-8 ring-white">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
            </span>
            <time className="block text-sm text-pink-500">{cert.date}</time>
            <h3 className="text-lg font-semibold text-pink-900">{cert.title}</h3>
            <a href={cert.file} target="_blank" className="inline-block mt-2 px-4 py-2 text-sm text-white bg-pink-500 rounded-full hover:bg-pink-600 transition">View Certificate</a>
          </li>
        ))}
      </ol>
      
    </div>
  );
}

export default CertificatesTimeline;