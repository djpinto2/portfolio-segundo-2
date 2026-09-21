# Portfolio - Segundo Pinto 🚀

Sitio web profesional para **Segundo Pinto**, Desarrollador Full-Stack especializado en React, Next.js y TypeScript.

## ✨ Características

- **Intro con Countdown**: Página de bienvenida con temporizador de 5 segundos y video de fondo
- **Diseño Moderno**: Interfaz profesional con gradientes y animaciones fluidas
- **100% Responsive**: Optimizado para móviles, tablets y desktops
- **Dark/Light Mode**: Toggle entre tema oscuro y claro
- **Fondo con Pixel Art**: Patrón visual único y atractivo
- **Foto de Perfil**: Integración de imagen de perfil con animaciones
- **Portfolio Destacado**: Secciones para proyectos propios y trabajos externos
- **Formulario de Contacto**: Integración con Formspree para recibir mensajes
- **Performance**: Sitio estático ultra-rápido
- **SEO Optimizado**: Meta tags y datos estructurados

## 📁 Estructura

```
portfolio-segundo/
├── index.html           # Página de carga (redirige a intro.html)
├── intro.html           # Intro con countdown y video
├── portfolio.html       # Página principal del portfolio
├── styles.css           # Estilos completos
├── script.js            # Interactividad
├── netlify.toml         # Configuración Netlify
├── README.md            # Esta documentación
├── .gitignore           # Git ignore
├── profile.jpg          # Foto de perfil (AGREGAR)
├── video.mp4            # Video fondo intro (AGREGAR)
└── pixels.jpg           # Fondo pixel art (AGREGAR)
```

## 🎬 Cómo Agregar los Archivos de Medios

### 1. Foto de Perfil (`profile.jpg`)
- **Tamaño recomendado**: 300x300 px mínimo
- **Formato**: JPG, PNG o WEBP
- **Ubicación**: Raíz de la carpeta `portfolio-segundo/`

### 2. Video de Fondo (`video.mp4`)
- **Tamaño recomendado**: 1920x1080 px (Full HD) o 1280x720 px (HD)
- **Duración**: 5-15 segundos (se reproducirá en loop)
- **Formato**: MP4 (H.264 codec)
- **Bitrate**: 2-5 Mbps para balance entre calidad y tamaño
- **Ubicación**: Raíz de la carpeta `portfolio-segundo/`
- **Nota**: Se reproducirá con autoplay y muted

### 3. Fondo Pixel Art (`pixels.jpg`)
- **Tamaño recomendado**: Cualquier tamaño (se escalará automáticamente)
- **Formato**: JPG, PNG o WEBP
- **Ubicación**: Raíz de la carpeta `portfolio-segundo/`
- **Nota**: Se utilizará como background fixed en toda la página

## 🎵 Secciones

- **Intro**: Countdown de 5 segundos con video de fondo y opción de entrar
- **Hero**: Presentación con foto, nombre y descripción
- **Featured Projects**: Proyectos destacados con links externos
- **Portfolio**: Tarjetas de proyectos realizados
- **Skills**: Categorías de tecnologías (Frontend, Backend, DevOps)
- **About**: Información personal y estadísticas
- **Contact**: Formulario de contacto

## 🛠️ Tecnologías

- HTML5
- CSS3 (variables CSS, animaciones, responsive)
- JavaScript Vanilla
- Google Fonts (Inter, Fira Code)
- Formspree (formularios)

## 🚀 Deployment en Netlify

### Opción 1: Drag & Drop (Más fácil - 2 minutos)
1. Ve a [netlify.com](https://www.netlify.com)
2. Arrastra la carpeta `portfolio-segundo/` al área designada
3. Formspree se configurará automáticamente
4. ¡Listo! Tu sitio está en vivo

### Opción 2: Git + GitHub (Recomendado)
```bash
cd portfolio-segundo
git init
git add .
git commit -m "Initial commit"

# Crea repo en GitHub y sube
git branch -M main
git remote add origin https://github.com/tuusuario/portfolio-segundo.git
git push -u origin main
```

Luego en Netlify:
1. Conecta tu repositorio de GitHub
2. Netlify detectará `netlify.toml` automáticamente
3. Deployment automático en cada push

### Opción 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## ⚙️ Configuración

### Formulario de Contacto

El formulario usa **Formspree** (gratis y sin límites):

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta (gratis)
3. Crea un nuevo Form Project
4. Copia el **Form ID** que recibes
5. Abre `portfolio.html` y reemplaza:

```html
<!-- ANTES: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- DESPUÉS: (con tu Form ID real) -->
<form action="https://formspree.io/f/xyzabc1234" method="POST">
```

¡Listo! Recibirás emails cuando alguien envíe el formulario.

### Personalización de Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #00d9ff;      /* Cyan - Cambiar este */
    --color-secondary: #39ff14;    /* Green - O este */
    --color-accent: #a855f7;       /* Purple - O este */
    --color-dark: #0a0e27;         /* Dark background */
}

[data-theme="light"] {
    --color-primary: #0066cc;      /* Tema claro */
    --color-secondary: #00b300;
    /* ... */
}
```

### Actualizar Información Personal

En `portfolio.html`, cambia:
- Tu nombre y título
- Email de contacto
- Links a redes sociales
- Información de proyectos
- Descripción personal
- Estadísticas en sección "About"

En `intro.html`, actualiza:
- Nombre en el titulo
- Descripción/subtítulo

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

- ✅ Navegación completa por teclado
- ✅ Contraste de colores WCAG AA
- ✅ Labels en formularios
- ✅ ARIA labels
- ✅ Focus indicators visibles

## 📊 Performance

- Sitio estático (sin servidor)
- Sin dependencias externas pesadas
- CSS optimizado
- Animaciones GPU-aceleradas
- Video optimizado para web

## 🔍 SEO

- Meta tags completos
- Open Graph para redes sociales
- Twitter Cards
- Datos estructurados
- Semántica HTML5

## 🎨 Tema y Animaciones

### Colores Primarios
- Cyan: #00d9ff
- Green: #39ff14
- Purple: #a855f7
- Dark: #0a0e27

### Animaciones
- Fade-in en scroll
- Hover effects en cards
- Floating en foto de perfil
- Countdown timer
- Smooth scroll

## 📝 Checklist Pre-Launch

Antes de hacer público tu sitio:

- [ ] ✅ Agregar `profile.jpg` en la carpeta
- [ ] ✅ Agregar `video.mp4` en la carpeta
- [ ] ✅ Agregar `pixels.jpg` en la carpeta
- [ ] ✅ Configurar formulario con Formspree
- [ ] ✅ Actualizar información personal
- [ ] ✅ Actualizar email de contacto
- [ ] ✅ Verificar links a redes sociales
- [ ] ✅ Probar en móvil, tablet y desktop
- [ ] ✅ Verificar que video y imágenes cargan
- [ ] ✅ Probar formulario de contacto
- [ ] ✅ Revisar ortografía y contenido
- [ ] ✅ Deploy a Netlify

## 🌐 URLs Personalizadas (Opcional)

En Netlify puedes cambiar la URL:
1. Site Settings → Change site name
2. De `proyecto-12345.netlify.app` a `tunombre.netlify.app`

## 🔒 Dominio Personalizado (Avanzado)

Si tienes dominio propio:
1. En Netlify: Domain settings → Custom domains
2. Agrega tu dominio
3. Copia los DNS records
4. Actualiza DNS en tu proveedor de dominio
5. Espera 24-48h propagación

## 📱 Prueba Local

Para probar antes de subir:

**Python:**
```bash
cd portfolio-segundo
python -m http.server 8000
# Abre http://localhost:8000
```

**Node.js:**
```bash
npm install -g http-server
cd portfolio-segundo
http-server
```

**VS Code:**
- Instala extensión "Live Server"
- Click derecho → "Open with Live Server"

## 🚨 Troubleshooting

**El intro no funciona**
→ Verifica que `intro.html` y `portfolio.html` estén en la misma carpeta

**Video no se ve**
→ Verifica que `video.mp4` está en la raíz
→ Prueba con un video más pequeño (< 5MB)

**Fondo pixel no se ve**
→ Verifica que `pixels.jpg` está en la raíz
→ Asegúrate que los colores contrasten bien

**Foto de perfil no aparece**
→ Verifica que `profile.jpg` está en la raíz
→ Intenta con un archivo diferente

**Formulario no funciona**
→ Reemplaza `YOUR_FORM_ID` con tu ID real de Formspree

**Los estilos no cargan**
→ Verifica que `styles.css` está en la misma carpeta que `portfolio.html`

**Problema con tema claro/oscuro**
→ Abre DevTools y verifica localStorage

## 📞 Soporte

- **Netlify**: https://docs.netlify.com
- **Formspree**: https://formspree.io/help
- **HTML/CSS**: https://developer.mozilla.org
- **JavaScript**: https://javascript.info

## 📄 Licencia

MIT - Libre para usar, modificar y distribuir

---

**Desarrollado con ❤️ por Claude**

*Portfolio Profesional | Full-Stack Developer | React • Next.js • TypeScript*

*Buenos Aires, Argentina*
