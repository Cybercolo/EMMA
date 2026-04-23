import { NavLink, Route, Routes } from 'react-router-dom'
import {
  AdminDashboardPage,
  BookingPage,
  ClientDashboardPage,
  DirectoryPage,
  HomePage,
  ProfessionalDashboardPage,
  ProfilePage,
} from './pages'

function navClass(isActive: boolean) {
  return `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-rose-100 text-rose-700' : 'text-slate-600 hover:bg-white/70'}`
}

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-500 text-lg font-semibold text-white shadow-lg shadow-rose-200">
              E
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">Emma</p>
              <p className="text-sm text-slate-500">Marketplace confiable de estetica medica</p>
            </div>
          </NavLink>
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/directory" className={({ isActive }) => navClass(isActive)}>
              Descubrir
            </NavLink>
            <NavLink to="/profiles/1" className={({ isActive }) => navClass(isActive)}>
              Perfil
            </NavLink>
            <NavLink to="/booking" className={({ isActive }) => navClass(isActive)}>
              Reserva
            </NavLink>
            <NavLink to="/dashboard/professional" className={({ isActive }) => navClass(isActive)}>
              Panel profesional
            </NavLink>
            <NavLink to="/dashboard/admin" className={({ isActive }) => navClass(isActive)}>
              Panel admin
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/profiles/:id" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/dashboard/client" element={<ClientDashboardPage />} />
        <Route path="/dashboard/professional" element={<ProfessionalDashboardPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
