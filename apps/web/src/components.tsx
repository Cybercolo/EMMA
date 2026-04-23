import { BadgeCheck, Star } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Booking, Professional } from './data'

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Emma MVP</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{subtitle}</p>
      </div>
      <div className="mt-10">{children}</div>
    </main>
  )
}

export function DashboardShell({
  title,
  subtitle,
  sidebarLabel,
  sidebarItems,
  children,
}: {
  title: string
  subtitle: string
  sidebarLabel: string
  sidebarItems: string[]
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/50">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-200">{sidebarLabel}</p>
          <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p>
          <div className="mt-8 space-y-3">
            {sidebarItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </main>
  )
}

export function ProfessionalCard({
  professional,
  detailed = false,
}: {
  professional: Professional
  detailed?: boolean
}) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-lg shadow-rose-100/60 backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-fuchsia-100 text-lg font-semibold text-rose-700">
              {professional.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{professional.name}</h3>
                {professional.verified ? <VerifiedBadge /> : null}
              </div>
              <p className="text-sm text-slate-500">{professional.title}</p>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{professional.bio}</p>
        </div>
        <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-current" />
            {professional.rating} ({professional.reviews} resenas)
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {professional.specialties.map((specialty) => (
          <span key={specialty} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            {specialty}
          </span>
        ))}
      </div>
      {detailed ? (
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {professional.treatments.map((treatment) => (
            <div key={treatment.name} className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-900">{treatment.name}</p>
              <p className="mt-1">{treatment.duration}</p>
              <p className="mt-2 font-semibold text-rose-600">{treatment.price}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function InfoCard({ title, text, icon }: { title: string; text: string; icon: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-lg shadow-rose-100/50">
      <div className="mb-4 inline-flex rounded-2xl bg-rose-50 p-3">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-lg shadow-rose-100/60">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export function MetricCard({
  label,
  value,
  helper,
  icon,
}: {
  label: string
  value: string
  helper: string
  icon?: ReactNode
}) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-lg shadow-rose-100/50">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        {icon}
      </div>
      <p className="mt-4 text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{helper}</p>
    </div>
  )
}

export function BookingTable({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="space-y-3">
      {bookings.map((booking) => (
        <div key={booking.id} className="grid gap-4 rounded-2xl border border-slate-100 p-4 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center">
          <div>
            <p className="font-medium text-slate-900">{booking.treatment}</p>
            <p className="text-sm text-slate-500">{booking.patient} • {booking.professional}</p>
          </div>
          <p className="text-sm text-slate-600">{booking.time}</p>
          <p className="text-sm text-slate-600">{booking.modality}</p>
          <span className="rounded-full bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">{booking.status}</span>
        </div>
      ))}
    </div>
  )
}

export function TimelineItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-rose-400" />
      <p className="font-medium text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}

export function ReviewQuote({ author, text }: { author: string; text: string }) {
  return (
    <blockquote className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
      <p>"{text}"</p>
      <footer className="mt-3 font-medium text-slate-900">{author}</footer>
    </blockquote>
  )
}

export function ControlCard({
  title,
  detail,
  accent,
}: {
  title: string
  detail: string
  accent: 'rose' | 'amber' | 'emerald' | 'fuchsia'
}) {
  const accents = {
    rose: 'bg-rose-50 text-rose-700',
    amber: 'bg-amber-50 text-amber-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    fuchsia: 'bg-fuchsia-50 text-fuchsia-700',
  }

  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-100 p-4">
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-500">{detail}</p>
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${accents[accent]}`}>Activo</span>
    </div>
  )
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
    </div>
  )
}

export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      <BadgeCheck className="h-4 w-4" /> Verificado
    </span>
  )
}

export function Pill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-700 shadow-sm shadow-rose-100">
      {icon}
      {text}
    </div>
  )
}

export function FeatureRow({
  title,
  text,
  icon,
}: {
  title: string
  text: string
  icon: ReactNode
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-rose-100">{text}</p>
      </div>
    </div>
  )
}

export function StatChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
      {icon}
      <span>{label}</span>
    </div>
  )
}

export function FilterItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm text-slate-900">{value}</p>
    </div>
  )
}

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-slate-900">{value}</p>
    </div>
  )
}
