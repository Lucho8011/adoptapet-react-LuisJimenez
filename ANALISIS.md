# Analisis de React para AdoptaPet

| Elemento de React | Donde lo uso en este problema | Por que sirve aqui |
| --- | --- | --- |
| Componente | Lo uso para separar la app en `App`, `FiltroEspecie`, `ListaMascotas` y `MascotaCard`. | Asi el trabajo queda mas ordenado y cada parte cumple una funcion clara. |
| JSX | Lo uso para armar lo que se ve en pantalla, como las tarjetas, botones, mensajes y buscador. | Me ayuda a mezclar la estructura visual con React de una forma facil de leer. |
| Props | Las uso para pasar la informacion de cada mascota a la tarjeta y para pasar datos al filtro. | Sirven para enviar informacion de un componente a otro sin repetir codigo. |
| Estado (`useState`) | Lo uso en `App` para guardar la especie elegida y lo que escribe el usuario en el buscador. | Sirve porque esos datos cambian mientras la persona usa la aplicacion. |
| Renderizado de listas (`.map` + `key`) | Lo uso en `ListaMascotas` para mostrar una tarjeta por cada mascota del arreglo. | Es la forma correcta de recorrer datos en React y la `key` ayuda a que todo se actualice bien. |
| Renderizado condicional | Lo uso para mostrar un mensaje cuando no hay resultados y para destacar las adopciones urgentes. | Sirve porque algunas cosas solo deben aparecer en ciertos casos. |

## Respuestas breves

### 1. Ventaja de dividir en componentes

Dividir la app en componentes hace que sea mas facil entenderla y ordenarla. Tambien ayuda a no mezclar todo en un mismo archivo y permite cambiar una parte sin romper las demas. Por ejemplo, si quiero mejorar solo la tarjeta de una mascota, puedo hacerlo sin tocar el filtro ni la lista.

### 2. Diferencia entre props y estado

Las props son datos que un componente recibe desde afuera. Por ejemplo, `MascotaCard` recibe el nombre, la raza y la descripcion de cada mascota. El estado es informacion que va cambiando dentro de la app. En este caso, el filtro por especie y la busqueda por nombre usan estado porque cambian segun lo que hace el usuario.
