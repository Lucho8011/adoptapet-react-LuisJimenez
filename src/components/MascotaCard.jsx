const SPECIES_STYLES = {
  Perro: {
    className: 'mascota-card mascota-card--perro',
    label: 'Perro',
  },
  Gato: {
    className: 'mascota-card mascota-card--gato',
    label: 'Gato',
  },
  Otro: {
    className: 'mascota-card mascota-card--otro',
    label: 'Otro',
  },
}

/**
 * Muestra los datos principales de una mascota.
 * Props esperadas:
 * - nombre: string con el nombre de la mascota.
 * - raza: string con la raza o tipo.
 * - edad: number con la edad en anios.
 * - especie: "Perro" | "Gato" | "Otro".
 * - descripcion: string con una descripcion breve.
 * - caracteristicas: array de strings con datos destacados.
 */
function MascotaCard({
  nombre = 'Mascota sin nombre',
  raza = 'Raza no informada',
  edad = 0,
  especie = 'Otro',
  descripcion = 'Sin descripcion disponible.',
  caracteristicas = [],
  adopcionUrgente = false,
}) {
  const speciesStyle = SPECIES_STYLES[especie] ?? SPECIES_STYLES.Otro
  const cardClassName = adopcionUrgente
    ? `${speciesStyle.className} mascota-card--urgent`
    : speciesStyle.className

  return (
    <article className={cardClassName}>
      <div className="mascota-card__header">
        <span className="mascota-card__badge">{speciesStyle.label}</span>
        {adopcionUrgente ? (
          <span className="mascota-card__urgent">Urgente</span>
        ) : null}
      </div>

      <h2 className="mascota-card__title">{nombre}</h2>
      <p className="mascota-card__meta">
        {raza} · {edad} anios
      </p>
      <p className="mascota-card__description">{descripcion}</p>

      <ul className="mascota-card__tags" aria-label={`Caracteristicas de ${nombre}`}>
        {caracteristicas.map((caracteristica) => (
          <li key={`${nombre}-${caracteristica}`} className="mascota-card__tag">
            {caracteristica}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default MascotaCard
