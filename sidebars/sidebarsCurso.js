module.exports = {
  cursoSidebar: [
    {
      type: "category",  // "Curso Contabilidad" ahora es una categoría
      label: "Curso Contabilidad",
      link: {
        type: "doc",
        id: "curso",
      },
      items: [
        {
          type: "category",  // "Clase 1. Fundamentos" es una categoría dentro de "Curso Contabilidad"
          label: "Clase 1. Fundamentos",
          items: [
            {
              type: "doc",
              id: "clase-1-fundamentos/clase-1-fundamentos-1-teoria",
              label: "1.1 Teoría"
            },
            {
              type: "doc",
              id: "clase-1-fundamentos/clase-1-fundamentos-2-ejercicios",
              label: "1.2 Ejercicios"
            }
          ]
        }
      ]
    }
  ]
};
