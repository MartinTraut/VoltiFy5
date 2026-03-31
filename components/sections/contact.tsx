"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 transition-all duration-300 outline-none focus:border-brand/40 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(253,191,0,0.08)] focus:placeholder:text-slate-500"

  return (
    <section id="kontakt" className="min-h-dvh flex flex-col justify-center py-16 sm:py-20 snap-start">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-brand mb-4 uppercase tracking-wider">Kontakt</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Jetzt
            <br />
            <span className="text-slate-400">Kontakt aufnehmen.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            Kostenlose Erstberatung für Ihr Elektro-Projekt in Öhringen und
            Umgebung. Wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Nachricht gesendet
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-brand hover:text-brand-light transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input type="text" required className={input} placeholder="Vollständiger Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      E-Mail *
                    </label>
                    <input type="email" required className={input} placeholder="ihre@email.de" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Telefon
                    </label>
                    <input type="tel" className={input} placeholder="Telefonnummer" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Betreff
                    </label>
                    <select className={`${input} [&>option]:bg-slate-900 [&>option]:text-white`}>
                      <option value="">Bitte wählen</option>
                      <option>Elektroinstallation</option>
                      <option>Photovoltaik</option>
                      <option>Smart Home</option>
                      <option>Elektroprüfung</option>
                      <option>Beleuchtung</option>
                      <option>Service & Wartung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className={`${input} resize-none`}
                    placeholder="Ihr Anliegen..."
                  />
                </div>
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 text-brand focus:ring-brand/20"
                  />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="/datenschutzerklarung" className="underline text-slate-400 hover:text-white">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-brand-light hover:shadow-lg hover:shadow-brand/40"
                >
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 space-y-6">
              {[
                { icon: MapPin, label: "Adresse", value: "Probsthof 4\n74613 Öhringen" },
                { icon: Phone, label: "Telefon", value: "07941 / 95 96 362", href: "tel:+4979419596362" },
                { icon: Mail, label: "E-Mail", value: "info@voltify5.de", href: "mailto:info@voltify5.de" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo bis Fr 07:00 bis 18:00" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-slate-300 hover:text-brand transition-colors whitespace-pre-line">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-slate-300 whitespace-pre-line">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-48 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.5!2d9.501104!3d49.2015622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEyJzA1LjYiTiA5wrAzMCcwMy44IkU!5e0!3m2!1sde!2sde!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Voltify5 GmbH"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
