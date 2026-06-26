const FILTER_OPTIONS = ['Todas', 'Perro', 'Gato', 'Otro']

/**
 * Permite cambiar la especie visible sin tocar directamente la lista.
 */
function FiltroEspecie({ filtroActual = 'Todas', onCambiarFiltro = () => {} }) {
  return (
    <div className="filtro-especie" role="group" aria-label="Filtrar por especie">
      {FILTER_OPTIONS.map((opcion) => {
        // Marca visual y semanticamente cual filtro esta activo.
        const isActive = opcion === filtroActual

        return (
          <button
            key={opcion}
            type="button"
            className={`filtro-especie__button${isActive ? ' filtro-especie__button--active' : ''}`}
            onClick={() => onCambiarFiltro(opcion)}
            aria-pressed={isActive}
          >
            {opcion}
          </button>
        )
      })}
    </div>
  )
}

export default FiltroEspecie
