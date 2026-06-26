import MascotaCard from './MascotaCard'

/**
 * Recibe un arreglo de mascotas y muestra una tarjeta por cada elemento.
 */
function ListaMascotas({ mascotas = [] }) {
  return (
    <section className="mascotas-grid" aria-label="Listado de mascotas">
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
