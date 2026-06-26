import { useState } from 'react'
import FiltroEspecie from './components/FiltroEspecie'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'
import './App.css'

const MAX_SEARCH_LENGTH = 40

function normalizeSearchTerm(value) {
  return value.trim().replace(/\s+/g, ' ').slice(0, MAX_SEARCH_LENGTH).toLowerCase()
}

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const terminoNormalizado = normalizeSearchTerm(busqueda)
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      filtroEspecie === 'Todas' || mascota.especie === filtroEspecie
    const coincideNombre = mascota.nombre.toLowerCase().includes(terminoNormalizado)

    return coincideEspecie && coincideNombre
  })

  const handleBusquedaChange = (event) => {
    const value = event.target.value.slice(0, MAX_SEARCH_LENGTH)
    setBusqueda(value)
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="hero__eyebrow">AdoptaPet</p>
        <h1>Directorio de mascotas en adopcion</h1>
        <p className="hero__text">
          Conoce a las mascotas disponibles y encuentra compania para tu hogar.
        </p>
      </header>

      <section className="toolbar" aria-label="Controles de busqueda">
        <div className="search-field">
          <label className="search-field__label" htmlFor="busqueda-mascota">
            Buscar por nombre
          </label>
          <input
            id="busqueda-mascota"
            name="busqueda-mascota"
            type="search"
            className="search-field__input"
            value={busqueda}
            onChange={handleBusquedaChange}
            placeholder="Ejemplo: Luna"
            autoComplete="off"
            maxLength={MAX_SEARCH_LENGTH}
          />
        </div>

        <FiltroEspecie
          filtroActual={filtroEspecie}
          onCambiarFiltro={setFiltroEspecie}
        />
      </section>

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p className="empty-state">No hay mascotas que coincidan</p>
      )}
    </main>
  )
}

export default App
