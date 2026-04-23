import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Star,
  Stethoscope,
  TrendingUp,
  UserRound,
  Video,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import {
  BookingTable,
  ControlCard,
  DashboardShell,
  FeatureRow,
  Field,
  FilterItem,
  InfoCard,
  MetricCard,
  PageShell,
  Panel,
  Pill,
  ProfessionalCard,
  ReviewQuote,
  SectionTitle,
  StatChip,
  TimelineItem,
  VerifiedBadge,
} from './components'
import { featuredBookings, inbox, moderationQueue, professionals } from './data'

export function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="space-y-7">
          <Pill icon={<ShieldCheck className="h-4 w-4" />} text="Solo profesionales con licencia pueden publicarse" />
          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Encuentra profesionales sanitarios verificados para tratamientos esteticos con confianza.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Emma combina confianza de nivel medico, resultados transparentes y comunicacion con apoyo de secretaria para que los clientes reserven Botox, rellenos, skincare y consultas de seguimiento con seguridad.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/directory" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5">
              Explorar profesionales
            </NavLink>
            <NavLink to="/dashboard/professional" className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-50">
              Ver panel profesional
            </NavLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Especialistas verificados" value="128+" helper="Medicos, enfermeros y expertos en dermatologia" />
            <MetricCard label="Reservas completadas" value="3.4k" helper="Solo las visitas verificadas desbloquean resenas" />
            <MetricCard label="Valoracion media" value="4.9/5" helper="Basada en resultados de citas confirmadas" />
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-rose-100 backdrop-blur-xl">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-800 to-rose-900 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-rose-100">Reserva asistida por secretaria</p>
                <h2 className="mt-2 text-2xl font-semibold">Coordinacion premium y conforme a normativa</h2>
              </div>
              <VerifiedBadge />
            </div>
            <div className="mt-8 space-y-4 rounded-[1.5rem] bg-white/10 p-5">
              <FeatureRow icon={<UserRound className="h-5 w-5" />} title="Galeria de resultados verificados" text="El contenido de antes y despues se modera y se vincula a registros de tratamiento conformes." />
              <FeatureRow icon={<CalendarDays className="h-5 w-5" />} title="Tipos de cita flexibles" text="Ofrece visitas presenciales, videoconsultas seguras y visitas a domicilio cuando corresponda." />
              <FeatureRow icon={<MessageSquare className="h-5 w-5" />} title="Centro de mensajes con secretaria" text="Los clientes coordinan precios, preparacion y seguimiento con el equipo de la clinica." />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Como funciona Emma" title="Disenada alrededor de seguridad, confianza y claridad operativa" />
        <div className="grid gap-4 lg:grid-cols-4">
          <InfoCard title="Revision de credenciales" text="Los profesionales suben titulos, licencias y certificaciones antes de que su perfil sea publico." icon={<ShieldCheck className="h-6 w-6 text-rose-500" />} />
          <InfoCard title="Buscar y comparar" text="Los clientes descubren especialistas por tratamiento, ciudad, rango de precio, disponibilidad y modalidad de visita." icon={<CalendarDays className="h-6 w-6 text-rose-500" />} />
          <InfoCard title="Reserva con confianza" text="Los flujos basados en calendario muestran estado, modalidad y soporte de secretaria desde la solicitud hasta la confirmacion." icon={<CheckCircle2 className="h-6 w-6 text-rose-500" />} />
          <InfoCard title="Resultados y resenas verificadas" text="Solo las reservas completadas pueden dejar resenas, manteniendo las senales de confianza creibles y relevantes." icon={<Star className="h-6 w-6 text-rose-500" />} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Profesionales destacados" title="Ejemplos de tarjetas de perfil publico" />
        <div className="grid gap-6 lg:grid-cols-2">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </section>
    </main>
  )
}

export function DirectoryPage() {
  return (
    <PageShell title="Busqueda y descubrimiento" subtitle="Explora profesionales por tipo de tratamiento, ubicacion, disponibilidad, precio y modalidad de servicio.">
      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <div className="space-y-4 rounded-[2rem] border border-rose-100 bg-white/90 p-6 shadow-lg shadow-rose-100/60">
          <h3 className="text-lg font-semibold text-slate-900">Filtros</h3>
          <FilterItem label="Tratamiento" value="Botox, Rellenos, Skincare" />
          <FilterItem label="Ubicacion" value="Madrid, Barcelona" />
          <FilterItem label="Disponibilidad" value="Hoy, esta semana" />
          <FilterItem label="Precio" value="EUR 65 - EUR 150" />
          <FilterItem label="Modalidad" value="Presencial, Video, Domicilio" />
          <div className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">
            Los profesionales verificados muestran una insignia visible solo despues de la revision administrativa de credenciales.
          </div>
        </div>
        <div className="space-y-5">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} detailed />
          ))}
        </div>
      </div>
    </PageShell>
  )
}

export function ProfilePage() {
  const professional = professionals[0]

  return (
    <PageShell title={professional.name} subtitle="Diseno de perfil publico con tratamientos, indicadores de confianza, resultados verificados y acceso a reserva.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-rose-100 bg-white/90 p-7 shadow-lg shadow-rose-100/60">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{professional.title}</h3>
                  <VerifiedBadge />
                </div>
                <p className="mt-2 text-slate-600">{professional.bio}</p>
              </div>
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {professional.experience} de experiencia
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <StatChip icon={<MapPin className="h-4 w-4" />} label={professional.location} />
              <StatChip icon={<Star className="h-4 w-4" />} label={`${professional.rating} de valoracion`} />
              <StatChip icon={<Stethoscope className="h-4 w-4" />} label={professional.specialties.join(' • ')} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Panel title="Tratamientos ofrecidos">
              <div className="space-y-3">
                {professional.treatments.map((treatment) => (
                  <div key={treatment.name} className="rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-slate-900">{treatment.name}</p>
                        <p className="text-sm text-slate-500">{treatment.duration}</p>
                      </div>
                      <p className="font-semibold text-rose-600">{treatment.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="Galeria verificada">
              <div className="grid grid-cols-2 gap-3">
                {['Suavizado de frente', 'Hidratacion labial', 'Calidad de piel', 'Contorno mandibular'].map((item) => (
                  <div key={item} className="flex aspect-square items-end rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-white to-fuchsia-100 p-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        <div className="space-y-6">
          <Panel title="Disponibilidad y modalidades">
            <div className="space-y-3 text-sm text-slate-600">
              <StatChip icon={<CalendarDays className="h-4 w-4" />} label="Huecos disponibles: Hoy 16:30, Jue 11:00, Vie 18:00" />
              <StatChip icon={<Video className="h-4 w-4" />} label={professional.modalities.join(' • ')} />
              <StatChip icon={<MessageSquare className="h-4 w-4" />} label="La secretaria responde en 30 minutos" />
            </div>
            <NavLink to="/booking" className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              Empezar reserva
            </NavLink>
          </Panel>
          <Panel title="Valoraciones y resenas">
            <div className="space-y-4 text-sm text-slate-600">
              <ReviewQuote author="Reserva verificada" text="Consulta tranquila, expectativas claras y resultados naturales con indicaciones detalladas de aftercare." />
              <ReviewQuote author="Seguimiento posterior" text="La secretaria gestiono el cambio de horario con facilidad y la doctora explico cada paso." />
            </div>
          </Panel>
        </div>
      </div>
    </PageShell>
  )
}

export function BookingPage() {
  return (
    <PageShell title="Flujo de reserva" subtitle="Ejemplo del recorrido de una cita entre seleccion de tratamiento, modalidad, agenda y confirmacion asistida por secretaria.">
      <div className="grid gap-5 xl:grid-cols-4">
        {[
          ['1. Elegir tratamiento', 'Selecciona servicio, modalidad, precio estimado y profesional adecuado.'],
          ['2. Elegir horario', 'La disponibilidad en calendario muestra huecos abiertos, bloqueados o pendientes de reprogramacion.'],
          ['3. Compartir detalles', 'Anade objetivos, alergias o direccion para visitas a domicilio cuando corresponda.'],
          ['4. Confirmar con la clinica', 'La secretaria y el profesional pueden aceptar, rechazar o reprogramar la solicitud.'],
        ].map(([title, text]) => (
          <InfoCard key={title} title={title} text={text} icon={<CheckCircle2 className="h-6 w-6 text-rose-500" />} />
        ))}
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
        <Panel title="Vista previa de la solicitud">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Profesional" value="Dra. Sofia Navarro" />
            <Field label="Tratamiento" value="Consulta de Botox" />
            <Field label="Modalidad" value="Videoconsulta" />
            <Field label="Horario preferido" value="Manana, 11:00" />
            <Field label="Precio estimado" value="EUR 90" />
            <Field label="Estado" value="Pendiente de confirmacion de la clinica" />
          </div>
        </Panel>
        <Panel title="Linea de estado">
          <div className="space-y-5">
            <TimelineItem title="Solicitud enviada" text="El cliente selecciona servicio, horario y notas." />
            <TimelineItem title="Revision de secretaria" text="El equipo de la clinica valida logistica y dudas sobre precio." />
            <TimelineItem title="Respuesta profesional" text="La reserva se acepta, se rechaza o se reprograma." />
            <TimelineItem title="Visita completada" text="El resultado puede dejar una resena verificada y pasar a aprobacion de medios." />
          </div>
        </Panel>
      </div>
    </PageShell>
  )
}

export function ClientDashboardPage() {
  return (
    <DashboardShell title="Panel del cliente" subtitle="Espacio compacto donde los clientes siguen citas, mensajes y resenas verificadas." sidebarLabel="Herramientas del cliente" sidebarItems={['Proximas reservas', 'Profesionales guardados', 'Mensajes', 'Historial de resenas']}>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Proxima cita" value="Manana" helper="Seguimiento de skincare por video" />
        <MetricCard label="Conversaciones abiertas" value="3" helper="Respuestas de secretaria y clinica" />
        <MetricCard label="Resenas verificadas" value="2" helper="Disponibles tras citas completadas" />
      </div>
      <div className="mt-6">
        <Panel title="Proximas citas">
          <BookingTable bookings={featuredBookings.slice(0, 2)} />
        </Panel>
      </div>
    </DashboardShell>
  )
}

export function ProfessionalDashboardPage() {
  return (
    <DashboardShell title="Panel profesional" subtitle="Espacio privado para que los clinicos gestionen citas, servicios, documentacion y comunicacion con clientes." sidebarLabel="Modulos profesionales" sidebarItems={['Resumen', 'Gestion de agenda', 'Solicitudes de pacientes', 'Gestion del perfil', 'Servicios y precios', 'Resenas']}>
      <div className="grid gap-4 lg:grid-cols-4">
        <MetricCard label="Reservas esta semana" value="18" helper="+12% frente a la semana pasada" icon={<CalendarDays className="h-5 w-5 text-rose-500" />} />
        <MetricCard label="Solicitudes pendientes" value="5" helper="2 requieren seguimiento de secretaria" icon={<Clock3 className="h-5 w-5 text-amber-500" />} />
        <MetricCard label="Ingresos mensuales" value="EUR 7.2k" helper="Mix de consultas y tratamientos" icon={<TrendingUp className="h-5 w-5 text-emerald-500" />} />
        <MetricCard label="Valoracion media" value="4.9" helper="Basada en resultados verificados" icon={<Star className="h-5 w-5 text-fuchsia-500" />} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel title="Gestion de agenda">
          <BookingTable bookings={featuredBookings} />
        </Panel>
        <Panel title="Controles de perfil y servicios">
          <div className="space-y-4">
            <ControlCard title="Visibilidad del perfil" detail="La ficha publica esta activa y verificada" accent="rose" />
            <ControlCard title="Certificaciones" detail="1 documento pendiente de revision administrativa" accent="amber" />
            <ControlCard title="Galeria de antes y despues" detail="12 recursos verificados, 2 pendientes de moderacion" accent="emerald" />
            <ControlCard title="Servicios y precios" detail="8 tratamientos activos en 3 modalidades" accent="fuchsia" />
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Solicitudes de pacientes y apoyo de secretaria">
          <div className="space-y-4">
            {inbox.map((item) => (
              <div key={item.name + item.channel} className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role} • {item.channel}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Abierto</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.message}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Resenas y cola de respuesta">
          <div className="space-y-4">
            <ReviewQuote author="Resena de 5 estrellas" text="Precios muy claros, trato amable y resultados sutiles y naturales." />
            <ReviewQuote author="Comentario sobre secretaria" text="El equipo de la clinica respondio rapido a las dudas previas y ayudo a cambiar la cita sin estres." />
          </div>
          <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">
            Las respuestas rapidas sugeridas y las plantillas de moderacion pueden incorporarse en la siguiente iteracion.
          </div>
        </Panel>
      </div>
    </DashboardShell>
  )
}

export function AdminDashboardPage() {
  return (
    <DashboardShell title="Panel de administracion / secretaria" subtitle="Centro operativo para verificacion, gestion de reservas, mensajeria, moderacion y analitica de la plataforma." sidebarLabel="Operaciones" sidebarItems={['Verificacion profesional', 'Gestion de citas', 'Centro de mensajes', 'Gestion de usuarios', 'Moderacion de contenido', 'Analitica']}>
      <div className="grid gap-4 lg:grid-cols-4">
        <MetricCard label="Usuarios activos" value="2.8k" helper="Clientes y profesionales" icon={<UserRound className="h-5 w-5 text-rose-500" />} />
        <MetricCard label="Aprobaciones pendientes" value="14" helper="Credenciales en cola" icon={<ShieldCheck className="h-5 w-5 text-amber-500" />} />
        <MetricCard label="Reservas de hoy" value="42" helper="7 requieren reprogramacion" icon={<CalendarDays className="h-5 w-5 text-emerald-500" />} />
        <MetricCard label="Tendencia de crecimiento" value="+18%" helper="Reservas completadas al mes" icon={<TrendingUp className="h-5 w-5 text-fuchsia-500" />} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <Panel title="Panel de verificacion profesional">
          <div className="space-y-4">
            <ControlCard title="Dra. Carla Sanz" detail="Licencia medica, titulo y seguro subidos" accent="emerald" />
            <ControlCard title="Enfermera prescriptora Ana Gil" detail="La documentacion universitaria necesita comprobacion manual" accent="amber" />
            <ControlCard title="Perfil marcado" detail="El formato sospechoso del certificado requiere escalado" accent="rose" />
          </div>
        </Panel>
        <Panel title="Gestion de citas">
          <BookingTable bookings={featuredBookings} />
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Panel title="Centro de mensajes">
          <div className="space-y-3">
            {inbox.map((item) => (
              <div key={item.name + item.message} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="mt-1">{item.message}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Moderacion de contenido">
          <div className="space-y-3">
            {moderationQueue.map((task) => (
              <div key={task} className="rounded-2xl border border-slate-100 p-4 text-sm leading-6 text-slate-600">
                {task}
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Analitica de la plataforma">
          <div className="space-y-4">
            <StatChip icon={<TrendingUp className="h-4 w-4" />} label="Conversion de consulta a reserva: 42%" />
            <StatChip icon={<ShieldCheck className="h-4 w-4" />} label="Tasa de aprobacion de verificacion: 81%" />
            <StatChip icon={<Star className="h-4 w-4" />} label="Valoracion media profesional: 4.86" />
            <StatChip icon={<MessageSquare className="h-4 w-4" />} label="Tiempo medio de primera respuesta: 19 minutos" />
          </div>
        </Panel>
      </div>
    </DashboardShell>
  )
}
