import { mascotas } from './data/mascotas'
import ListaMascotas from './components/ListaMascotas'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="hero__eyebrow">AdoptaPet</p>
        <h1>Directorio de mascotas en adopcion</h1>
        <p className="hero__text">
          Conoce a las mascotas disponibles y encuentra compania para tu hogar.
        </p>
      </header>

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
