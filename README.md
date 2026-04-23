# Emma

Emma is a premium healthcare marketplace for aesthetic treatments, connecting clients with verified medical professionals and clinic teams.

## Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS v4
- Backend: Node.js, Express, TypeScript
- Data model: Prisma schema for PostgreSQL
- Auth approach: role-based JWT-ready API scaffold

## Apps

- `apps/web`: marketing site, directory, booking flow, professional dashboard, admin/secretary dashboard
- `apps/api`: Express API scaffold, seeded endpoints, Prisma schema

## Run locally

```bash
npm run dev:web
npm run dev:api
```

## Helpful scripts

```bash
npm run build
npm run lint:web
npm run prisma:generate
```

## Included MVP areas

- Role-based experience for clients, professionals, and admins/secretaries
- Professional verification workflow
- Search/discovery and profile browsing
- Booking flow and status tracking
- Messaging hub concept for secretary-mediated conversations
- Platform analytics and moderation surfaces
