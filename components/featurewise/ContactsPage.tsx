"use client"

import React, { useState, FormEvent } from "react"
import { Mail, MapPin, SendHorizontal, Send, Globe } from "lucide-react"
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion";

// Customize these details here
const CONTACT_INFO = {
    email: "jannatul.ferdaues.soha@gmail.com",
    phone: "+880 1601 315415",
    location: "Dhaka, Bangladesh",
    socials: [
        {
            name: "GitHub",
            href: "https://github.com/jannatul-ferdaues",
            icon: FaGithub
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/jannatul-ferdaues",
            icon: FaLinkedin
        },
        {
            name: "Email",
            href: "mailto:jannatul.ferdaues.soha@gmail.com",
            icon: Mail
        },
    ]
}

export default function ContactsPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("General Inquiries")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!name || !email || !message) return

        console.log("Form Data Submitted:", { name, email, subject, message })
        setStatus("sending")

        const WEB3FORMS_KEY = "cfc5d363-63bd-4d49-ad0f-02969ab01f4f"
        const emailBody = `
Someone want to connect with you from your portfolio contact form :

Name: ${name}
Email: ${email}
Inquiry Type: ${subject}

Message:
${message}
        `.trim()

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `New Portfolio Message: ${subject} (from ${name})`,
                    from_name: name,
                    email: email,
                    message: emailBody,
                }),
            })

            const json = await response.json().catch(() => null)

            if (response.ok && json?.success) {
                setStatus("success")
                setName("")
                setEmail("")
                setMessage("")
                setTimeout(() => setStatus("idle"), 4000)
            } else {
                console.error("Web3Forms error:", json)
                setStatus("error")
                setTimeout(() => setStatus("idle"), 4000)
            }
        } catch (error) {
            console.error("Submit error:", error)
            setStatus("error")
            setTimeout(() => setStatus("idle"), 4000)
        }
    }

    return (
        <section className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Ambient background glow matching the screenshot's nebulas */}
            <div className="pointer-events-none absolute -left-16 top-1/4 -z-10 h-72 w-72 rounded-full bg-white/[0.02] blur-[120px]" />
            <div className="pointer-events-none absolute -right-16 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-white/[0.01] blur-[120px]" />

            {/* Main glowing header */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center text-4xl md:text-5xl lg:text-6xl font-mono tracking-wide text-white mb-20"
                style={{
                    textShadow: "0 0 12px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.3)"
                }}
            >
                Let's Connect
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                {/* Left column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="lg:col-span-7 bg-white/10 border border-neutral-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Email inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-neutral-900/40 border border-neutral-800/60 focus:border-neutral-600 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-neutral-900/40 border border-neutral-800/60 focus:border-neutral-600 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dropdown list for Inquiry subject */}
                        <div className="relative">
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-neutral-900/40 border border-neutral-800/60 focus:border-neutral-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                            >
                                <option value="General Inquiries" className="bg-neutral-950">General Inquiries</option>
                                <option value="Project Proposal" className="bg-neutral-950">Project Proposal</option>
                                <option value="Collaboration" className="bg-neutral-950">Collaboration</option>
                                <option value="Other" className="bg-neutral-950">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                        {/* Message textarea */}
                        <div className="space-y-1">
                            <textarea
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full bg-neutral-900/40 border border-neutral-800/60 focus:border-neutral-600 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-medium text-sm py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
                        >
                            <SendHorizontal size={16} />
                            <span>
                                {status === "sending"
                                    ? "Sending..."
                                    : status === "success"
                                        ? "Message Sent!"
                                        : status === "error"
                                            ? "Failed to Send. Try again!"
                                            : "Send Message"}
                            </span>
                        </button>
                    </form>
                </motion.div>

                {/* Right column: Info and Socials */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="lg:col-span-5 space-y-8">
                    <div>
                        <h3
                            className="text-xl font-bold font-mono tracking-wide text-white mb-6"
                            style={{
                                textShadow: "0 0 10px rgba(255,255,255,0.5)"
                            }}
                        >
                            Get In Touch
                        </h3>

                        <div className="space-y-4">
                            {/* Email Card */}
                            <div className="bg-white/10 border border-neutral-800/60 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md transition-colors hover:border-neutral-700/60">
                                <div className="w-12 h-12 rounded-xl border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] tracking-wider text-neutral-500 font-mono font-semibold uppercase">Email</div>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:underline transition text-sm break-all font-medium">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white/10 border border-neutral-800/60 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md transition-colors hover:border-neutral-700/60">
                                <div className="w-12 h-12 rounded-xl border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] tracking-wider text-neutral-500 font-mono font-semibold uppercase">Location</div>
                                    <div className="text-white text-sm font-medium">
                                        {CONTACT_INFO.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-bold font-mono text-neutral-400 mb-4 tracking-[0.2em] uppercase">Socials . . .</h4>
                        <div className="flex gap-3.5 flex-wrap">
                            {CONTACT_INFO.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-11 h-11 rounded-full border border-neutral-800 hover:border-neutral-500 bg-neutral-900/30 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}