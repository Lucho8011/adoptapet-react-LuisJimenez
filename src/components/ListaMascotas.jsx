import MascotaCard from './MascotaCard'

/**
 * Recibe un arreglo de mascotas y renderiza una tarjeta por cada una.
 */
function ListaMascotas({ mascotas = [] }) {
  return (
    <section className="mascotas-grid" aria-label="Listado de mascotas">
      {/* El id se usa como key porque es estable para cada mascota. */}
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </section>
  )
}

export default ListaMascotas
