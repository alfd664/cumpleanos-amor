# Página de cumpleaños con código QR

Esta carpeta contiene una página web lista para personalizar.

## 1. Fotografías

Coloca tus fotografías dentro de:

images/

La página ya está preparada para:

- foto01.jpg
- foto02.jpg
- foto03.jpg
- foto04.jpg
- foto05.jpg
- foto06.jpg

También puedes cambiar los nombres directamente en `index.html`.

## 2. Fotografía de portada

Coloca una imagen llamada:

images/portada.jpg

Es la fotografía que aparece como fondo de la pantalla principal.

## 3. Videos

Coloca tus videos en:

videos/

La página utiliza inicialmente:

- video01.mp4
- video02.mp4

Puedes agregar más bloques `<article class="video-card">` en `index.html`.

## 4. Música

Coloca tu canción como:

music/musica.mp3

La música comienza cuando la persona presiona "Abrir sorpresa".
Esto es intencional porque los navegadores de celular normalmente bloquean
la reproducción automática de audio sin interacción del usuario.

## 5. Personalizar nombre y mensaje

Abre:

script.js

Busca:

name: "[NOMBRE]"

y cambia el nombre.

También puedes modificar:

heroMessage

para cambiar el mensaje principal.

El mensaje largo se encuentra directamente en `index.html`.

## 6. Personalizar colores y diseño

Los colores principales están al principio de:

style.css

Puedes modificar:

--bg
--text
--muted
--accent
--accent-dark

## 7. Para que funcione con un QR

La página necesita estar publicada en Internet para que un teléfono pueda
abrirla desde un código QR.

Una vez publicada, por ejemplo:

https://tusitio.com/cumpleanos/

el QR debe apuntar exactamente a esa dirección.

## IMPORTANTE

No abras solamente `index.html` desde tu computadora y esperes que el QR
funcione desde otro teléfono. Para usar un QR real, la página debe estar
alojada en un servidor/hosting accesible desde Internet.
