"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudLightning,
  Drill,
  Droplets,
  Hammer,
  HardHat,
  Home,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sun,
  Triangle,
  Wind,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqs, siteConfig } from "@/lib/site";

const navItems = ["Services", "Inspection", "Materials", "FAQ", "Contact"];

const serviceTracks = [
  {
    icon: Home,
    title: "Residential Roof Systems",
    copy: "Shingle, metal, and tile roof repair or replacement planned around ventilation, curb appeal, and Florida wind exposure.",
  },
  {
    icon: Building2,
    title: "Commercial Roof Work",
    copy: "Low-slope repairs, coating options, drainage review, and replacement scopes for offices, retail, multifamily, and service buildings.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Review",
    copy: "Post-storm inspections that document lifted shingles, punctures, flashing issues, wind damage, and active moisture concerns.",
  },
  {
    icon: Hammer,
    title: "Exterior Envelope Repairs",
    copy: "Soffit, fascia, flashing, gutters, vents, skylights, and trim repairs that stop roof problems from spreading into the structure.",
  },
];

const inspectionPoints = [
  "Roof slope, planes, valleys, and penetrations",
  "Flashing, fasteners, drip edge, vents, and skylights",
  "Drainage paths, gutters, ponding water, and debris traps",
  "Attic cues, ventilation gaps, staining, and heat buildup",
];

const materialCards = [
  {
    icon: Layers3,
    label: "Architectural shingles",
    detail: "Strong everyday performance with clean curb appeal for Tampa homes.",
  },
  {
    icon: Wind,
    label: "Standing seam metal",
    detail: "A durable choice for high heat, heavy rain, and long service life.",
  },
  {
    icon: Sun,
    label: "Tile roof repair",
    detail: "Careful tile replacement, underlayment review, and flashing coordination.",
  },
  {
    icon: Droplets,
    label: "Flat roof coatings",
    detail: "Commercial maintenance options for leaks, UV exposure, and ponding risk.",
  },
];

const fieldStats = [
  { value: "24-48 hr", label: "typical inspection window" },
  { value: "4-point", label: "roof system review" },
  { value: "Tampa Bay", label: "local service area" },
];

const mobileHref = "tel:6351764254";

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function LandingPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-stone-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/94 text-white shadow-xl shadow-black/20 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Apex Roofing & Exteriors home">
            <span className="relative flex size-12 items-center justify-center overflow-hidden bg-[#C62828]">
              <Triangle className="size-6 fill-current" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white/70" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-tight">Apex Roofing</span>
              <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.28em] text-red-200">& Exteriors</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-stone-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden items-center gap-2 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-[#C62828] hover:text-white lg:inline-flex">
            Request estimate
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/5 lg:hidden"
            onClick={() => setOpenMenu((value) => !value)}
            aria-expanded={openMenu}
            aria-label="Toggle navigation menu"
          >
            {openMenu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {openMenu ? (
          <div className="border-t border-white/10 bg-stone-950 px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpenMenu(false)}
                  className="px-3 py-3 text-sm font-bold text-stone-200 hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-stone-950 pt-20 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1632759145358-e5257fb6c5e5?auto=format&fit=crop&w=1800&q=85"
            alt="Roofing crew installing a residential roof system"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.88)_42%,rgba(198,40,40,0.36)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#f4f0e8] [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-36 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-2 border border-red-300/30 bg-red-500/12 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100">
              <HardHat className="size-4" aria-hidden="true" />
              Tampa roofing and exterior protection
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Roof work with a storm-ready backbone.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Apex Roofing & Exteriors helps Tampa homeowners and property managers make confident roofing decisions with clear inspections, durable material planning, and disciplined exterior workmanship.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 bg-[#C62828] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-red-950/40 transition hover:-translate-y-1 hover:bg-white hover:text-stone-950">
                Schedule roof review
                <ChevronRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href={mobileHref} className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-white hover:text-stone-950">
                <Phone className="size-4" aria-hidden="true" />
                Call mobile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="grid content-end gap-4"
          >
            <div className="ml-auto max-w-md border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-100">Field note</p>
              <p className="mt-4 text-2xl font-black leading-tight">We inspect the roof as a system, not a surface.</p>
              <div className="mt-5 grid gap-3">
                {["leaks", "wind lift", "flashing", "drainage"].map((item) => (
                  <div key={item} className="flex items-center justify-between border-t border-white/10 pt-3 text-sm font-bold text-stone-200">
                    <span className="capitalize">{item}</span>
                    <CheckCircle2 className="size-4 text-red-200" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {fieldStats.map((stat) => (
                <div key={stat.label} className="bg-white p-4 text-stone-950">
                  <p className="text-xl font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase leading-5 tracking-wide text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C62828]">Service lines</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Built for heat, wind, rain, and real buildings.</h2>
            <p className="mt-5 leading-8 text-stone-700">
              Every roof has a different failure point. We match the scope to the property, the exposure, and the useful life you need from the system.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {serviceTracks.map((service, index) => (
              <motion.article
                key={service.title}
                whileHover={{ y: -6 }}
                className={`border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-red-950/10 ${index === 1 ? "md:translate-y-8" : ""} ${index === 2 ? "md:-translate-y-2" : ""}`}
              >
                <service.icon className="size-9 text-[#C62828]" aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">{service.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="inspection" className="bg-stone-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1300&q=85"
              alt="Contractor reviewing roof and exterior construction details"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-[#C62828] p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-100">Inspection priority</p>
              <p className="mt-3 text-2xl font-black">Find the source before recommending the spend.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-200">Roof assessment</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A clear report beats guesswork.</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              We look beyond visible shingles and trace how water, heat, wind, and details interact. That keeps repair recommendations honest and replacement scopes cleaner.
            </p>
            <div className="mt-9 grid gap-4">
              {inspectionPoints.map((point, index) => (
                <div key={point} className="grid grid-cols-[56px_1fr] items-center border border-white/10 bg-white/5">
                  <span className="flex h-full min-h-16 items-center justify-center bg-white text-sm font-black text-stone-950">{String(index + 1).padStart(2, "0")}</span>
                  <p className="px-5 py-4 font-bold text-stone-100">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="materials" className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-[#C62828]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="bg-white p-7 shadow-2xl shadow-stone-950/12 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C62828]">Material strategy</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Roofing choices made for Tampa conditions.</h2>
              <p className="mt-6 leading-8 text-stone-700">
                Salt air, UV, hurricane-season rain, and attic heat all affect the right system. Apex helps compare repair, replacement, and maintenance options without vague recommendations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {materialCards.map((material) => (
                <article key={material.label} className="border border-stone-200 bg-[#f4f0e8] p-6">
                  <material.icon className="size-8 text-[#C62828]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black">{material.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{material.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-[#C62828] p-8 text-white sm:p-10">
            <ClipboardCheck className="size-10" aria-hidden="true" />
            <h2 className="mt-8 text-4xl font-black tracking-tight">What makes the scope cleaner?</h2>
            <p className="mt-5 leading-8 text-red-50">
              The project starts with the details crews actually need: access, tear-off considerations, material staging, weather windows, cleanup, and final walkthrough points.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Repair-first guidance", "When a targeted repair makes sense, we say so clearly."],
              ["Weather-aware scheduling", "Roof work is planned around Tampa rain patterns and site conditions."],
              ["Exterior coordination", "Soffit, fascia, gutters, and flashing are reviewed with the roof."],
              ["Straight final review", "The finished work is walked through before the project is closed."],
            ].map(([title, copy]) => (
              <div key={title} className="border border-stone-200 bg-white p-6">
                <ShieldCheck className="size-7 text-[#C62828]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="bg-stone-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-200">FAQ</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Before you get on the schedule.</h2>
            <p className="mt-6 leading-8 text-stone-300">
              Practical answers for Tampa property owners comparing repair, replacement, storm documentation, and roofing material options.
            </p>
          </div>
          <div className="divide-y divide-white/10 border border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white/[0.03] p-6">
                <summary className="cursor-pointer list-none text-lg font-black marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-2xl text-red-200 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-stone-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="relative overflow-hidden bg-[#f4f0e8] py-24">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-white [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C62828]">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Start with a roof review and a clear next step.</h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Tell us what you are seeing: active leaks, storm damage, missing shingles, aged materials, or exterior concerns. We will help determine whether repair, replacement, or deeper inspection is the right next move.
            </p>
            <div className="mt-8 grid gap-4">
              <a href={mobileHref} className="flex items-center gap-3 font-bold text-stone-800 transition hover:text-[#C62828]">
                <Phone className="size-5" aria-hidden="true" />
                Mobile: {siteConfig.mobile}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-bold text-stone-800 transition hover:text-[#C62828]">
                <Mail className="size-5" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 font-bold text-stone-800">
                <MapPin className="size-5" aria-hidden="true" />
                {siteConfig.serviceArea}
              </p>
            </div>
          </div>

          <form className="grid gap-4 bg-stone-950 p-6 text-white shadow-2xl shadow-stone-950/20 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black">
                Name
                <input className="border border-white/10 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-[#C62828]" name="name" autoComplete="name" />
              </label>
              <label className="grid gap-2 text-sm font-black">
                Email
                <input className="border border-white/10 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-[#C62828]" name="email" type="email" autoComplete="email" placeholder="name@example.com" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black">
                Mobile
                <input className="border border-white/10 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-[#C62828]" name="phone" type="tel" autoComplete="tel" placeholder="987654321" />
              </label>
              <label className="grid gap-2 text-sm font-black">
                Project type
                <select className="border border-white/10 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-[#C62828]" name="projectType" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Roof repair</option>
                  <option>Roof replacement</option>
                  <option>Storm damage review</option>
                  <option>Commercial roofing</option>
                  <option>Exterior repair</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-black">
              What should we inspect?
              <textarea className="min-h-32 border border-white/10 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-[#C62828]" name="message" placeholder="Leaks, storm damage, roof age, missing shingles, soft spots, gutter or fascia concerns..." />
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#C62828] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-stone-950">
              Request estimate
              <Ruler className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </AnimatedSection>

      <section className="bg-[#C62828] px-5 py-14 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Protect the roof before the next storm tests it.</h2>
            <p className="mt-3 max-w-2xl text-red-50">Start with a practical inspection and a recommendation you can understand.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-stone-950 transition hover:-translate-y-1 hover:bg-stone-950 hover:text-white">
            Plan my roof project
            <Drill className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 py-12 text-stone-300 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.25fr_0.75fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex size-10 items-center justify-center bg-[#C62828]">
                <Triangle className="size-5 fill-current" aria-hidden="true" />
              </span>
              <span className="font-black">{siteConfig.businessName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7">
              Bold roofing and exterior planning for Tampa Bay homes, commercial properties, and storm-exposed buildings.
            </p>
          </div>
          <div>
            <h3 className="font-black text-white">Roofing Work</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {serviceTracks.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-black text-white">Contact</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>{siteConfig.location}</li>
              <li>Mobile: {siteConfig.mobile}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p className="text-[10px] leading-4 text-stone-600">Website concept designed and developed by Dhravya Technology.</p>
        </div>
      </footer>
    </main>
  );
}
