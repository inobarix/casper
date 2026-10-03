// Registro de las páginas de contenido (guía pillar + artículos satélite).
// Alimenta las tarjetas de "Seguí leyendo", el footer y el sitemap: al sumar
// una guía nueva, agregarla acá además de crear su página en src/pages.
export interface Guia {
  path: string;
  titulo: string;
  resumen: string;
}

export const GUIA_PILLAR: Guia = {
  path: '/privacidad-de-pantallas-en-oficinas/',
  titulo: 'Privacidad de pantallas en oficinas',
  resumen: 'La guía completa: riesgos, soluciones y cómo funciona el film de ocultación.',
};

export const GUIAS: Guia[] = [
  GUIA_PILLAR,
  {
    path: '/que-es-el-visual-hacking/',
    titulo: '¿Qué es el visual hacking?',
    resumen: 'Definición, por qué es tan efectivo y cómo prevenirlo.',
  },
  {
    path: '/smart-film-vs-film-de-ocultacion/',
    titulo: 'Smart film vs film de ocultación',
    resumen: 'Qué hace cada uno y cuál conviene según tu caso.',
  },
  {
    path: '/privacidad-salas-de-reunion-vidrio/',
    titulo: 'Privacidad en salas de reunión de vidrio',
    resumen: 'Cómo proteger las pantallas sin cerrar la sala.',
  },
  {
    path: '/ley-25326-proteccion-datos-seguridad-visual/',
    titulo: 'Ley 25.326 y seguridad visual',
    resumen: 'Qué exige la ley de datos personales y dónde entran las pantallas.',
  },
];
