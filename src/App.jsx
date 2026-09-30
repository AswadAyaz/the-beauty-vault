import { useEffect, useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, Instagram, Facebook, ArrowRight } from 'lucide-react'
import { BOOK, TEL, PHONE, IG, FB, TABS, PACKS } from './data.js'
import store from './assets/storefront.webp'
import bridal from './assets/bridal.webp'

const ease = [0.22, 0.7, 0.2, 1]
const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.85, delay, ease }}>{children}</motion.div>
)
const Btn = ({ href, children, solid, ext = true, className = '' }) => (
  <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-7 py-3 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${solid ? 'border-gold bg-gold text-ink hover:bg-ivory hover:border-ivory' : 'border-gold/60 text-ivory hover:border-gold hover:bg-gold/10'} ${className}`}>
    {children}<ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
  </a>
)
const Title = ({ children, sub }) => (
  <div className="mb-12 max-w-2xl"><h2 className="font-serif text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">{children}</h2>{sub && <p className="mt-5 text-mute">{sub}</p>}<div className="mt-7 h-px w-16 bg-gold" /></div>
)
const LINKS = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Gallery', '#gallery'], ['Specials', '#specials'], ['Contact', '#contact']]

function Nav() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [open])
  return (
    <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${solid || open ? 'border-gold/20 bg-ink/90 backdrop-blur-md' : 'border-transparent'}`} style={{ paddingTop: 'env(safe-area-inset-top,0px)' }}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-serif text-xl tracking-[0.14em] sm:text-2xl" onClick={() => setOpen(false)}>THE BEAUTY VAULT</a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([l, h]) => <a key={l} href={h} className="text-[13px] uppercase tracking-[0.16em] text-mute transition-colors hover:text-gold">{l}</a>)}
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="border border-gold px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-ink">Book Now</a>
        </nav>
        <button className="grid h-11 w-11 place-items-center border border-gold/40 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease }} className="fixed inset-x-0 bottom-0 top-[calc(5rem+env(safe-area-inset-top,0px))] z-40 overflow-y-auto bg-ink px-6 pb-10 pt-6 lg:hidden">
            {LINKS.map(([l, h], i) => (
              <motion.a key={l} href={h} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1, duration: 0.4, ease }} className="block border-b border-gold/15 py-4 font-serif text-3xl">{l}</motion.a>
            ))}
            <Btn href={BOOK} solid className="mt-8 w-full">Book Now</Btn>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

function Hero() {
  const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease } })
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(80%_60%_at_80%_30%,#3a2326_0%,#171211_70%)] pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p {...up(0.1)} className="mb-5 text-sm text-gold">Salon &amp; Lounge &middot; Aesthetic &amp; Skin Care Studio</motion.p>
          <motion.h1 {...up(0.2)} className="font-serif text-[clamp(3.4rem,11vw,7.5rem)] font-medium leading-[0.92] tracking-tight">The Beauty Vault</motion.h1>
          <motion.p {...up(0.4)} className="mt-7 max-w-md font-serif text-2xl italic leading-snug text-ivory/90 sm:text-3xl">Hair, skin and bridal beauty, in one elegant studio.</motion.p>
          <motion.p {...up(0.5)} className="mt-4 max-w-md text-mute">An exclusive space for ladies, with hair, hydra facials, laser, nails, lashes, head spa, makeup and mehndi.</motion.p>
          <motion.div {...up(0.65)} className="mt-9 flex flex-col gap-4 sm:flex-row"><Btn href={BOOK} solid>Book an Appointment</Btn><Btn href="#services" ext={false}>Explore Services</Btn></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.3, ease }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-2 rounded-t-[999px] border border-gold/40" aria-hidden="true" />
          <img src={store} alt="The Beauty Vault Salon & Lounge entrance lit with golden lights at night" width="938" height="620" className="relative aspect-[4/5] w-full rounded-t-[999px] object-cover object-center" />
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const items = ['Advanced Skin Treatments', 'Hydra Facial', 'Anti-Aging Solutions', 'Beauty & Aesthetic Color', 'Luxury Services']
  return (
    <section id="about" className="bg-plum py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <Reveal><img src={bridal} alt="Bridal makeup and styling at The Beauty Vault in red and gold" loading="lazy" width="680" height="620" className="aspect-[5/5] w-full object-cover object-top" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">A salon made for ladies</h2>
          <div className="mt-7 h-px w-16 bg-gold" />
          <p className="mt-7 text-lg text-ivory/90">The Beauty Vault is a salon and lounge and an aesthetic and skin care studio, open to ladies only.</p>
          <ul className="mt-8 divide-y divide-gold/15 border-y border-gold/15">{items.map(t => <li key={t} className="py-3.5 font-serif text-xl">{t}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  const [id, setId] = useState(TABS[0].id), tab = TABS.find(t => t.id === id)
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Title sub="Choose a category to see the full menu and prices.">Services &amp; prices</Title></Reveal>
        <div role="tablist" aria-label="Service categories" className="mb-12 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {TABS.map(t => <button key={t.id} role="tab" aria-selected={t.id === id} onClick={() => setId(t.id)} className={`border px-3 py-3 text-center text-[12px] uppercase tracking-[0.12em] sm:px-5 sm:text-[13px] sm:tracking-[0.14em] transition-colors ${t.id === id ? 'border-gold bg-gold text-ink' : 'border-gold/30 text-mute hover:border-gold hover:text-ivory'}`}>{t.label}</button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={id} role="tabpanel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }} className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {tab.secs.map(s => (
              <div key={s.t}>
                <h3 className="font-serif text-3xl text-gold">{s.t}</h3>
                {s.note && <p className="mt-1 text-sm text-mute">({s.note})</p>}
                <div className="mb-3 mt-3 h-px bg-gold/30" />
                <ul>{s.i.map(x => (
                  <li key={x.n} className="group flex items-baseline gap-3 py-2.5 transition-transform duration-300 hover:translate-x-1">
                    <span className="text-ivory/90 transition-colors group-hover:text-gold">{x.n}{x.c && <span className="ml-2 text-sm text-mute">{x.c}</span>}</span>
                    <span className="min-w-4 flex-1 translate-y-[-3px] border-b border-dotted border-gold/30" aria-hidden="true" />
                    <span className="whitespace-nowrap font-medium">{x.p}</span>
                  </li>))}</ul>
              </div>))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-16"><Btn href={BOOK} solid>Schedule Your Visit</Btn></div>
      </div>
    </section>
  )
}

function Gallery() {
  const [big, setBig] = useState(null)
  useEffect(() => { const k = e => e.key === 'Escape' && setBig(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  const pics = [{ s: store, a: 'The Beauty Vault entrance at night, lit with golden string lights and roses', c: 'md:col-span-3', p: 'object-center' }, { s: bridal, a: 'Bridal look in red and gold at The Beauty Vault', c: 'md:col-span-2', p: 'object-top' }]
  return (
    <section id="gallery" className="bg-plum py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Title>Gallery</Title></Reveal>
        <div className="grid gap-4 md:grid-cols-5">
          {pics.map((p, i) => (
            <Reveal key={i} delay={0.1 * i} className={p.c}>
              <button onClick={() => setBig(p)} aria-label={`View larger: ${p.a}`} className="group block h-[360px] w-full cursor-zoom-in overflow-hidden sm:h-[460px]">
                <img src={p.s} alt={p.a} loading="lazy" className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${p.p}`} />
              </button>
            </Reveal>))}
        </div>
      </div>
      <AnimatePresence>
        {big && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setBig(null)} role="dialog" aria-modal="true" aria-label="Enlarged photo" className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4">
            <button className="absolute right-4 grid h-12 w-12 place-items-center border border-gold text-ivory" style={{ top: 'calc(1rem + env(safe-area-inset-top,0px))' }} aria-label="Close photo"><X /></button>
            <motion.img initial={{ scale: 0.96 }} animate={{ scale: 1 }} src={big.s} alt={big.a} className="max-h-[88vh] max-w-full object-contain" />
          </motion.div>)}
      </AnimatePresence>
    </section>
  )
}

function Specials() {
  return (
    <section id="specials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Title sub="Head spa packages from the salon's menu.">Specials &amp; packages</Title></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal key={p.n} delay={0.1 * i}>
              <div className="flex h-full flex-col border border-gold/40 bg-gradient-to-b from-wine/40 to-wine/10 p-8 transition-colors duration-300 hover:border-gold">
                <h3 className="font-serif text-4xl">{p.n}</h3>
                <p className="mt-2 text-mute">{p.d}</p>
                <p className="mb-8 mt-10 font-serif text-3xl text-gold">{p.p}</p>
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className="mt-auto text-[13px] font-medium uppercase tracking-[0.18em] underline-offset-8 hover:underline">Book Now</a>
              </div>
            </Reveal>))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const rows = [[MessageCircle, 'WhatsApp', PHONE, BOOK], [Phone, 'Call', PHONE, TEL], [Instagram, 'Instagram', '@thebeautyvault_salon', IG], [Facebook, 'Facebook', 'The Beauty Vault Salon & Aesthetics', FB]]
  return (
    <section id="contact" className="bg-plum py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal><Title>Book your visit</Title><p className="text-mute">Book your appointment on WhatsApp, or call the salon.</p><Btn href={BOOK} solid className="mt-8">Book an Appointment</Btn></Reveal>
        <Reveal delay={0.1}>
          <ul className="border-t border-gold/20">{rows.map(([I, l, v, h]) => (
            <li key={l}><a href={h} {...(h.startsWith('tel') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="group flex min-h-16 items-center gap-5 border-b border-gold/20 py-4 transition-colors hover:bg-gold/5">
              <I size={22} className="shrink-0 text-gold" /><span className="w-24 shrink-0 text-sm text-mute">{l}</span><span className="min-w-0 flex-1 break-words font-serif text-xl sm:text-2xl">{v}</span><ArrowRight size={18} className="shrink-0 text-gold transition-transform group-hover:translate-x-1" /></a></li>))}</ul>
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main><Hero /><About /><Services /><Gallery /><Specials /><Contact /></main>
      <footer className="border-t border-gold/15 px-5 py-10 text-center text-sm text-mute">
        <p className="font-serif text-xl tracking-[0.14em] text-ivory">THE BEAUTY VAULT</p>
        <p className="mt-2">Salon &amp; Lounge &middot; Aesthetic &amp; Skin Care Studio</p>
        <p className="mt-4">&copy; {new Date().getFullYear()} The Beauty Vault</p>
      </footer>
    </MotionConfig>
  )
}
