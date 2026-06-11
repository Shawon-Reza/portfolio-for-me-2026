"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import c1 from "../../../assets/certificates/c1.jpg";
import c2 from "../../../assets/certificates/c2.png";
import c3 from "../../../assets/certificates/c3.png";
import c4 from "../../../assets/certificates/c4.png";
import c5 from "../../../assets/certificates/c5.png";
import c6 from "../../../assets/certificates/c6.png";
import c7 from "../../../assets/certificates/c7.png";

interface CertInfo {
  img: StaticImageData;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const leftCerts: CertInfo[] = [
  {
    img: c1,
    title: "Python Course",
    issuer: "WildLearner",
    date: "January 14, 2026",
    description: "Intermediate level. Certificate of Achievement for successful completion of the Python Course.",
  },
  {
    img: c2,
    title: "AI for Business Professionals",
    issuer: "HP LIFE / HP Foundation",
    date: "January 14, 2026",
    description: "Certificate of Completion. Covered AI's role in business, prompt engineering, ethical use, and professional growth.",
  },
];

const centerCerts: CertInfo[] = [
  {
    img: c3,
    title: "AI+ Prompt Engineer Level 1™",
    issuer: "AI CERTs™",
    date: "July 7, 2025",
    description: "Blockchain-based certification. Successfully completed requirements for AI+ Prompt Engineer Level 1.",
  },
  {
    img: c4,
    title: "Basics of Artificial Intelligence",
    issuer: "UniAthena / Cambridge International Qualifications",
    date: "January 13, 2026",
    description: "Certificate of successful completion delivered in partnership with Cambridge International Qualifications, UK.",
  },
  {
    img: c5,
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "August 16, 2025",
    description: "Certificate of Completion. 20 course hours completed. AWS Academy Graduate.",
  },
];

const rightCerts: CertInfo[] = [
  {
    img: c6,
    title: "The Unlit Path of Leadership in the Age of AI",
    issuer: "HRDi / Daffodil International University",
    date: "January 15, 2026",
    description: "Certificate of Participation for the leadership session offered by Human Resource Development Institute.",
  },
  {
    img: c7,
    title: "Machine Learning Fundamentals",
    issuer: "Free Academy.ai",
    date: "January 23, 2026",
    description: "Certificate of Completion. Course code: CA-2026-MLF-08SKC9.",
  },
];


function Card({ cert }: { cert: CertInfo }) {
  return (
    // Key: no React state → no re-render on hover → no blinking
    <div className="cert-card group relative w-full overflow-hidden rounded-md border border-white/10 bg-white/5 shadow-sm">
      {/* Image — loaded once, never re-rendered */}
      <Image
        src={cert.img}
        alt={cert.title}
        width={800}
        height={600}
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="h-56 w-full object-cover sm:h-64 md:h-72 lg:h-80 transform transition-transform duration-700 ease-in-out group-hover:scale-103"
        loading="lazy"
        draggable={false}
      />

      {/* Always-present base gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Hover overlay — pure CSS via Tailwind group-hover, zero JS */}
      <div
        className="
          absolute inset-0 flex flex-col justify-end p-4
          bg-gradient-to-t from-black/85 via-black/60 to-black/20
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700 ease-in-out
        "
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-1">
          {cert.issuer} · {cert.date}
        </p>
        <h3 className="text-sm font-bold text-white leading-snug mb-1">
          {cert.title}
        </h3>
        <p className="text-xs text-white/70 leading-relaxed">
          {cert.description}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsCertificatesPage() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start">

        {/* LEFT */}
        <div className="flex w-full flex-col gap-3 lg:w-1/3 lg:mt-37">
          {leftCerts.map((cert, i) => (
            <Card cert={cert} key={`left-${i}`} />
          ))}
        </div>

        {/* CENTER */}
        <div className="flex w-full flex-col gap-3 lg:w-1/3">
          {centerCerts.map((cert, i) => (
            <Card cert={cert} key={`center-${i}`} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex w-full flex-col gap-3 lg:w-1/3 lg:mt-37">
          {rightCerts.map((cert, i) => (
            <Card cert={cert} key={`right-${i}`} />
          ))}
        </div>

      </div>
    </section>
  );
}