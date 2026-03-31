import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="text-slate-400 border-t border-white/[0.1]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Ihr Partner für Elektrotechnik in Öhringen. 5 Meister,
              50 Jahre Erfahrung.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Elektroinstallation", "Elektroprüfungen", "Beleuchtung", "Photovoltaik", "Smart Home", "Service"].map((s) => (
                <li key={s}>
                  <a href="#leistungen" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>Probsthof 4, 74613 Öhringen</li>
              <li>
                <a href="tel:+4979419596362" className="hover:text-white transition-colors">
                  07941 / 95 96 362
                </a>
              </li>
              <li>
                <a href="mailto:info@voltify5.de" className="hover:text-white transition-colors">
                  info@voltify5.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutzerklarung" className="hover:text-white transition-colors">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                { label: "Meisterbetrieb", abbr: "M" },
                { label: "VDE-konform", abbr: "VDE" },
                { label: "Handwerkskammer", abbr: "HWK" },
              ].map((t) => (
                <div key={t.abbr} className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-brand/20 flex items-center justify-center">
                    <span className="text-brand text-[9px] font-bold">{t.abbr}</span>
                  </div>
                  <span className="text-xs text-slate-400">{t.label}</span>
                </div>
              ))}
            </div>
            <span className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Voltify5 GmbH
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
