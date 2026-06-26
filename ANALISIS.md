# Analisis de React para AdoptaPet

| Elemento de React | Donde lo uso en este problema | Por que es el adecuado |
| --- | --- | --- |
| Componente | Lo uso para separar la aplicacion en `MascotaCard`, `ListaMascotas`, `FiltroEspecie` y `App`. | Permite dividir la interfaz en piezas pequenas, reutilizables y faciles de mantener. |
| JSX | Lo uso para describir la estructura visual de las tarjetas, filtros, mensajes y contadores. | JSX mezcla logica simple con marcado de forma clara y hace mas facil leer la interfaz. |
| Props | Las uso para enviar cada mascota desde `ListaMascotas` hacia `MascotaCard`, y para pasar el filtro actual y la accion de cambio a `FiltroEspecie`. | Son adecuadas porque permiten comunicar componentes sin duplicar datos. |
| Estado (`useState`) | Lo uso en `App` para guardar la especie seleccionada y el texto del buscador. | Es correcto porque esos valores cambian segun la interaccion del usuario y deben volver a renderizar la vista. |
| Renderizado de listas (`.map` + `key`) | Lo uso en `ListaMascotas` para recorrer el arreglo y dibujar una tarjeta por mascota usando `id` como `key`. | React necesita una `key` estable para identificar elementos y actualizar la lista sin errores. |
| Renderizado condicional | Lo uso para mostrar el mensaje de "No hay mascotas que coincidan" y para destacar los casos urgentes. | Sirve porque la interfaz cambia segun los datos disponibles y segun ciertas condiciones booleanas. |

## Respuestas breves

### 1. Ventaja de dividir en componentes

Dividir el directorio en componentes permite trabajar cada parte de la interfaz por separado, probarla con mas facilidad y reutilizarla sin repetir codigo. Tambien hace que el proyecto sea mas ordenado, porque la logica del filtro no queda mezclada con la presentacion de cada mascota. Si mas adelante cambia el diseno de una tarjeta, se modifica en un solo lugar.

### 2. Diferencia entre props y estado

Las props son datos que un componente recibe desde otro componente. En esta aplicacion, `MascotaCard` recibe por props el nombre, la raza y la descripcion de cada mascota. El estado, en cambio, es informacion que cambia dentro de la aplicacion por la interaccion del usuario. En esta solucion, el filtro de especie y el texto del buscador viven en el estado de `App`, porque deben actualizar la lista cuando el usuario escribe o selecciona una opcion.
