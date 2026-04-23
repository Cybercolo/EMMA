import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { z } from 'zod'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 4000)

app.use(cors())
app.use(express.json())

type Modality = 'IN_PERSON' | 'VIDEO' | 'HOME_VISIT'
type BookingStatus = 'PENDING' | 'CONFIRMED' | 'RESCHEDULE_REQUESTED' | 'CANCELLED'

type Professional = {
  id: string
  fullName: string
  roleTitle: string
  city: string
  rating: number
  verified: boolean
  specialties: string[]
  modalities: Modality[]
  minPriceEur: number
}

type Booking = {
  id: string
  clientName: string
  professionalId: string
  treatmentName: string
  dateTime: string
  modality: Modality
  status: BookingStatus
}

const professionals: Professional[] = [
  {
    id: 'prof_1',
    fullName: 'Dr. Sofia Navarro',
    roleTitle: 'Aesthetic Physician',
    city: 'Madrid',
    rating: 4.9,
    verified: true,
    specialties: ['Botox', 'Fillers', 'Skincare'],
    modalities: ['IN_PERSON', 'VIDEO'],
    minPriceEur: 80,
  },
  {
    id: 'prof_2',
    fullName: 'Dra. Elena Ruiz',
    roleTitle: 'Dermatology Specialist',
    city: 'Barcelona',
    rating: 4.8,
    verified: true,
    specialties: ['Peels', 'Microneedling', 'Dermatology'],
    modalities: ['IN_PERSON', 'VIDEO', 'HOME_VISIT'],
    minPriceEur: 65,
  },
]

const bookings: Booking[] = [
  {
    id: 'bk_1042',
    clientName: 'Lucia Romero',
    professionalId: 'prof_1',
    treatmentName: 'Botox consultation',
    dateTime: '2026-04-24T16:30:00.000Z',
    modality: 'IN_PERSON',
    status: 'CONFIRMED',
  },
  {
    id: 'bk_1046',
    clientName: 'Marina Costa',
    professionalId: 'prof_2',
    treatmentName: 'Skin diagnostic video visit',
    dateTime: '2026-04-25T11:00:00.000Z',
    modality: 'VIDEO',
    status: 'PENDING',
  },
  {
    id: 'bk_1050',
    clientName: 'Paula Vega',
    professionalId: 'prof_1',
    treatmentName: 'Home follow-up visit',
    dateTime: '2026-04-26T18:00:00.000Z',
    modality: 'HOME_VISIT',
    status: 'RESCHEDULE_REQUESTED',
  },
]

const conversations = [
  {
    id: 'conv_1',
    subject: 'Pricing clarification',
    participants: ['client_1', 'secretary_1', 'prof_1'],
    lastMessage: 'The secretary will confirm the exact treatment duration this afternoon.',
  },
  {
    id: 'conv_2',
    subject: 'Aftercare instructions',
    participants: ['client_2', 'secretary_2', 'prof_2'],
    lastMessage: 'Please avoid strenuous exercise for 24 hours after the session.',
  },
]

const bookingSchema = z.object({
  clientName: z.string().min(2),
  professionalId: z.string().min(1),
  treatmentName: z.string().min(2),
  dateTime: z.string().datetime(),
  modality: z.enum(['IN_PERSON', 'VIDEO', 'HOME_VISIT']),
})

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'emma-api' })
})

app.get('/api/professionals', (req, res) => {
  const treatment = req.query.treatment?.toString().toLowerCase()
  const city = req.query.city?.toString().toLowerCase()
  const modality = req.query.modality?.toString().toUpperCase() as Modality | undefined

  const filtered = professionals.filter((professional) => {
    const matchesTreatment = treatment
      ? professional.specialties.some((specialty) => specialty.toLowerCase().includes(treatment))
      : true
    const matchesCity = city ? professional.city.toLowerCase().includes(city) : true
    const matchesModality = modality ? professional.modalities.includes(modality) : true
    return matchesTreatment && matchesCity && matchesModality
  })

  res.json({ data: filtered })
})

app.get('/api/professionals/:id', (req, res) => {
  const professional = professionals.find((item) => item.id === req.params.id)

  if (!professional) {
    res.status(404).json({ error: 'Professional not found' })
    return
  }

  res.json({
    data: {
      ...professional,
      treatments: [
        { name: 'Botox consultation', durationMinutes: 30, priceEur: 90 },
        { name: 'Filler assessment', durationMinutes: 45, priceEur: 120 },
        { name: 'Skincare review', durationMinutes: 25, priceEur: 80 },
      ],
      gallery: ['asset_1', 'asset_2', 'asset_3'],
      reviewsSummary: { average: professional.rating, total: 120 },
    },
  })
})

app.get('/api/bookings', (req, res) => {
  const professionalId = req.query.professionalId?.toString()
  const status = req.query.status?.toString().toUpperCase() as BookingStatus | undefined

  const filtered = bookings.filter((booking) => {
    const matchesProfessional = professionalId ? booking.professionalId === professionalId : true
    const matchesStatus = status ? booking.status === status : true
    return matchesProfessional && matchesStatus
  })

  res.json({ data: filtered })
})

app.post('/api/bookings', (req, res) => {
  const parsed = bookingSchema.safeParse(req.body)

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() })
    return
  }

  const booking: Booking = {
    id: `bk_${bookings.length + 1100}`,
    ...parsed.data,
    status: 'PENDING',
  }

  bookings.unshift(booking)
  res.status(201).json({ data: booking })
})

app.get('/api/messages', (_req, res) => {
  res.json({ data: conversations })
})

app.get('/api/dashboard/professional/:id', (req, res) => {
  const professional = professionals.find((item) => item.id === req.params.id)

  if (!professional) {
    res.status(404).json({ error: 'Professional not found' })
    return
  }

  const ownBookings = bookings.filter((booking) => booking.professionalId === professional.id)

  res.json({
    data: {
      professional,
      metrics: {
        bookingsThisWeek: ownBookings.length,
        revenueEstimateEur: 7200,
        pendingRequests: ownBookings.filter((booking) => booking.status === 'PENDING').length,
        averageRating: professional.rating,
      },
      bookings: ownBookings,
      inbox: conversations,
    },
  })
})

app.get('/api/dashboard/admin', (_req, res) => {
  res.json({
    data: {
      activeUsers: 2840,
      pendingApprovals: 14,
      bookingsToday: 42,
      growthTrendPct: 18,
      moderationQueue: [
        'Approve nurse prescriber profile after university verification',
        'Moderate before/after image missing recovery disclaimer',
        'Investigate suspicious credential upload metadata',
      ],
    },
  })
})

app.listen(port, () => {
  console.log(`Emma API listening on http://localhost:${port}`)
})
