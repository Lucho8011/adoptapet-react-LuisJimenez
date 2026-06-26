import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  console.log('Mascotas cargadas:', mascotas)

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="hero__eyebrow">AdoptaPet</p>
        <h1>Directorio de mascotas en adopcion</h1>
        <p className="hero__text">
          Los datos fueron cargados correctamente desde el archivo local.
        </p>
      </header>
    </main>
  )
}

export default App
