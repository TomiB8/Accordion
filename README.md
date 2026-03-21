# Componente de Acordeón Minimalista

Este es un proyecto de práctica del frontend basado en los retos de [roadmap.sh](https://roadmap.sh/). Consiste en un componente de acordeón interactivo construido desde cero sin el uso de librerías externas.

## 🎯 Objetivo del Proyecto

El objetivo principal fue construir una interfaz de usuario limpia y organizada, practicando conceptos fundamentales del desarrollo web:
* **Manipulación del DOM:** Selección de elementos y modificación de clases en tiempo real.
* **Manejo de Eventos:** Escucha de clics interactivos por parte del usuario.
* **Lógica de Estado:** Garantizar que solo una sección del acordeón permanezca abierta a la vez, cerrando automáticamente las demás.
* **CSS Moderno:** Uso de Flexbox para el posicionamiento estático y diseño de UI minimalista.

## ✨ Características

* **Interacción Única:** Al abrir una pestaña, cualquier otra que estuviera abierta se cierra automáticamente.
* **Diseño Minimalista:** Sin bordes ni fondos recargados, dándole protagonismo al contenido.
* **Indicadores Visuales:** Las flechas (▼) rotan 180 grados suavemente mediante CSS puro (`::after` y `transform`) para indicar el estado de la pregunta.
* **Estabilidad Visual:** El contenedor está anclado en la parte superior mediante `align-items: flex-start` y `margin-top`, evitando que la interfaz "salte" al expandir el contenido.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica utilizando contenedores lógicos (`div` y `button`).
* **CSS3:** Flexbox, transiciones suaves y pseudo-elementos.
* **Vanilla JavaScript:** Lógica de interacción (`querySelectorAll`, `nextElementSibling`, `classList.toggle`).