export type Modality = 'Presencial' | 'Videoconsulta' | 'Visita a domicilio'

export type Professional = {
  id: number
  name: string
  title: string
  location: string
  rating: number
  reviews: number
  verified: boolean
  bio: string
  experience: string
  modalities: Modality[]
  specialties: string[]
  treatments: { name: string; price: string; duration: string }[]
}

export type Booking = {
  id: string
  patient: string
  professional: string
  treatment: string
  time: string
  status: 'Confirmada' | 'Pendiente' | 'Reprogramacion solicitada' | 'Cancelada'
  modality: Modality
}

export const professionals: Professional[] = [
  {
    id: 1,
    name: 'Dra. Sofia Navarro',
    title: 'Medica estetica',
    location: 'Madrid, Espana',
    rating: 4.9,
    reviews: 214,
    verified: true,
    bio: 'Especialista en armonizacion facial natural y planes regenerativos de cuidado de la piel con resultados verificados.',
    experience: '12 anos',
    modalities: ['Presencial', 'Videoconsulta'],
    specialties: ['Botox', 'Rellenos', 'Skincare'],
    treatments: [
      { name: 'Consulta de Botox', price: 'EUR 90', duration: '30 min' },
      { name: 'Valoracion de relleno labial', price: 'EUR 120', duration: '45 min' },
      { name: 'Plan de calidad de la piel', price: 'EUR 80', duration: '25 min' },
    ],
  },
  {
    id: 2,
    name: 'Dra. Elena Ruiz',
    title: 'Especialista en dermatologia',
    location: 'Barcelona, Espana',
    rating: 4.8,
    reviews: 167,
    verified: true,
    bio: 'Enfocada en skincare medico, estimulacion de colageno y documentacion de antes y despues conforme a normativa.',
    experience: '9 anos',
    modalities: ['Presencial', 'Visita a domicilio', 'Videoconsulta'],
    specialties: ['Dermatologia', 'Peelings', 'Microneedling'],
    treatments: [
      { name: 'Diagnostico de piel por video', price: 'EUR 65', duration: '20 min' },
      { name: 'Sesion de microneedling', price: 'EUR 150', duration: '50 min' },
      { name: 'Seguimiento a domicilio', price: 'EUR 130', duration: '40 min' },
    ],
  },
]

export const featuredBookings: Booking[] = [
  {
    id: 'BK-1042',
    patient: 'Lucia Romero',
    professional: 'Dra. Sofia Navarro',
    treatment: 'Consulta de Botox',
    time: 'Hoy, 16:30',
    status: 'Confirmada',
    modality: 'Presencial',
  },
  {
    id: 'BK-1046',
    patient: 'Marina Costa',
    professional: 'Dra. Elena Ruiz',
    treatment: 'Diagnostico de piel por video',
    time: 'Manana, 11:00',
    status: 'Pendiente',
    modality: 'Videoconsulta',
  },
  {
    id: 'BK-1050',
    patient: 'Paula Vega',
    professional: 'Dra. Sofia Navarro',
    treatment: 'Seguimiento a domicilio',
    time: 'Vie, 18:00',
    status: 'Reprogramacion solicitada',
    modality: 'Visita a domicilio',
  },
]

export const inbox = [
  {
    name: 'Andrea M.',
    role: 'Cliente',
    message: 'Puede tu secretaria confirmar las indicaciones posteriores antes de mi cita de relleno?',
    channel: 'Bandeja de secretaria',
  },
  {
    name: 'Equipo de la clinica',
    role: 'Interno',
    message: 'Revisa por favor la credencial pendiente antes de activar la visibilidad del perfil.',
    channel: 'Verificacion',
  },
  {
    name: 'Lucia Romero',
    role: 'Cliente',
    message: 'Hay aparcamiento cerca de la clinica y puedo cambiar a videollamada si hace falta?',
    channel: 'Soporte de reservas',
  },
]

export const moderationQueue = [
  'Aprobar nuevo perfil de enfermera prescriptora con credenciales universitarias adjuntas',
  'Revisar galeria de antes y despues para comprobar cumplimiento sobre disclosure de dosis',
  'Moderar resena marcada por posibles afirmaciones enganosas sobre la recuperacion',
]
