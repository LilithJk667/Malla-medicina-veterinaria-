const malla = {
  "Primer año": {
    "Semestre 1": [
      { nombre: "Química general", desbloquea: ["Procesos Bioquímicos"] },
      { nombre: "Biología celular", desbloquea: ["Histología"] },
      { nombre: "Zoología para las ciencias veterinarias", desbloquea: ["Parasitología"] },
      { nombre: "Inglés instrumental I", desbloquea: ["Inglés instrumental II"] },
      { nombre: "Ecología" },
      { nombre: "Rol del médico veterinario" }
    ],
    "Semestre 2": [
      { nombre: "Procesos Bioquímicos" },
      { nombre: "Histología", desbloquea: ["Embriología", "Patología general"] },
      { nombre: "Anatomía animal I", desbloquea: ["Anatomía animal II"] },
      { nombre: "Zootecnia", desbloquea: ["Nutrición y alimentación"] },
      { nombre: "Fundamentos de etología y bienestar animal" },
      { nombre: "Electivo Elac" }
    ]
  },

  "Segundo año": {
    "Semestre 3": [
      { nombre: "Fisiología animal I", desbloquea: ["Fisiopatología I", "Farmacología"] },
      { nombre: "Embriología" },
      { nombre: "Anatomía animal II" },
      { nombre: "Microbiología general", desbloquea: ["Enfermedades infecciosas"] },
      { nombre: "Reproducción animal y genética" },
      { nombre: "Inglés instrumental II" },
      { nombre: "Electivo EI1" }
    ],
    "Semestre 4": [
      { nombre: "Fisiología animal II", desbloquea: ["Fisiopatología I", "Farmacología"] },
      { nombre: "Patología general", desbloquea: ["Semiotecnia A+S"] },
      {
        nombre: "Nutrición y alimentación",
        desbloquea: ["Producción bovina", "Producción de aves y cerdos", "Producción de rumiantes menores"]
      },
      { nombre: "Epidemiología", desbloquea: ["Gestión ambiental", "Vigilancia epidemiológica", "Tecnología de los alimentos e inocuidad"] },
      {
        nombre: "Contexto social para las ciencias veterinarias",
        desbloquea: ["Negocio y emprendimiento para las ciencias veterinarias", "Desarrollo rural"]
      },
      { nombre: "Parasitología" }
    ]
  },

  "Tercer año": {
    "Semestre 5": [
      { nombre: "Fisiopatología I", desbloquea: ["Fisiopatología II"] },
      { nombre: "Farmacología", desbloquea: ["Anestesiologia y el manejo del dolor"] },
      {
        nombre: "Enfermedades infecciosas",
        desbloquea: ["Medicina De pequeños animales", "Medicina de rumiantes"]
      },
      {
        nombre: "Producción de aves y cerdos",
        desbloquea: ["Proyecto productivo"]
      },
      {
        nombre: "Producción de rumiantes menores",
        desbloquea: ["Proyecto productivo"]
      },
      { nombre: "Electivo Elte" },
      {
        nombre: "Evaluación De ciclo inicial"
      }
    ],
    "Semestre 6": [
      { nombre: "Fisiopatología II" },
      { nombre: "Ictiopatología", desbloquea: ["Producción Acuícola"] },
      { nombre: "Producción bovina", desbloquea: ["Proyecto productivo"] },
      { nombre: "Negocio y emprendimiento para las ciencias veterinarias", desbloquea: ["Desarrollo rural"] },
      { nombre: "Semiotecnia A+S", desbloquea: ["Técnicas diagnósticas", "Anestesiologia y el manejo del dolor"] },
      { nombre: "Electivo EI2" }
    ]
  },

  "Cuarto año": {
    "Semestre 7": [
      { nombre: "Medicina De pequeños animales", desbloquea: ["Internado pequeños animales I"] },
      { nombre: "Técnicas diagnósticas" },
      { nombre: "Anestesiologia y el manejo del dolor", desbloquea: ["Cirugía I"] },
      { nombre: "Producción Acuícola", desbloquea: ["Proyecto productivo"] },
      { nombre: "Vigilancia epidemiológica", desbloquea: ["Salud pública", "Medicina de conservación"] },
      { nombre: "Gestión ambiental" }
    ],
    "Semestre 8": [
      { nombre: "Medicina de rumiantes", desbloquea: ["Internado animales mayores I"] },
      { nombre: "Medicina de equinos", desbloquea: ["Internado animales mayores I"] },
      { nombre: "Cirugía I", desbloquea: ["Cirugía II"] },
      { nombre: "Metodología de la investigación" },
      { nombre: "Tecnología de los alimentos e inocuidad" },
      { nombre: "Electivo disciplinar I" }
    ]
  },

  "Quinto año": {
    "Semestre 9": [
      { nombre: "Internado pequeños animales I", desbloquea: ["Internado pequeños animales II"] },
      { nombre: "Proyecto productivo" },
      { nombre: "Internado animales mayores I", desbloquea: ["Internado animales mayores II"] },
      { nombre: "Cirugía II" },
      { nombre: "Desarrollo rural" },
      { nombre: "Electivo EI3" }
    ],
    "Semestre 10": [
      { nombre: "Internado pequeños animales II" },
      { nombre: "Internado animales mayores II" },
      { nombre: "Salud pública" },
      { nombre: "Medicina de conservación" },
      { nombre: "Ética profesional" },
      { nombre: "Electivo disciplinar II" }
    ]
  }
};

const estadoRamos = {};
const dependencias = {};
const container = document.getElementById("malla");

function crearMalla() {
  for (const [anio, semestres] of Object.entries(malla)) {
    const contenedorAnio = document.createElement("div");
    contenedorAnio.className = "anio";

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio;
    contenedorAnio.appendChild(tituloAnio);

    for (const [semestre, ramos] of Object.entries(semestres)) {
      const contenedorSemestre = document.createElement("div");
      contenedorSemestre.className = "semestre";

      const tituloSemestre = document.createElement("h3");
      tituloSemestre.textContent = semestre;
      contenedorSemestre.appendChild(tituloSemestre);

      const contenedorRamos = document.createElement("div");
      contenedorRamos.className = "ramos";

      ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo bloqueado";
        div.textContent = ramo.nombre;
        div.dataset.nombre = ramo.nombre;
        div.setAttribute("title", "Requiere prerrequisito");

        // Estado inicial
        estadoRamos[ramo.nombre] = { aprobado: false, elemento: div };

        // Registrar dependencias
        if (ramo.desbloquea) {
          ramo.desbloquea.forEach(destino => {
            if (!dependencias[destino]) dependencias[destino] = [];
            dependencias[destino].push(ramo.nombre);
          });
        }

        div.addEventListener("click", () => aprobarRamo(ramo.nombre));
        contenedorRamos.appendChild(div);
      });

      contenedorSemestre.appendChild(contenedorRamos);
      contenedorAnio.appendChild(contenedorSemestre);
    }

    container.appendChild(contenedorAnio);
  }

  desbloquearIniciales();
  cargarProgreso();
}

function desbloquearIniciales() {
  for (const nombre in estadoRamos) {
    if (!dependencias[nombre]) {
      const el = estadoRamos[nombre].elemento;
      el.classList.remove("bloqueado");
      el.removeAttribute("title");
    }
  }
}

function aprobarRamo(nombre) {
  const ramo = estadoRamos[nombre];

  // Si está bloqueado, no permitir
  if (ramo.elemento.classList.contains("bloqueado") && !ramo.aprobado) return;

  // Alternar estado
  ramo.aprobado = !ramo.aprobado;
  ramo.elemento.classList.toggle("aprobado");

  // Recalcular desbloqueos
  for (const [destino, prereqs] of Object.entries(dependencias)) {
    const todosAprobados = prereqs.every(p => estadoRamos[p].aprobado);
    const destinoRamo = estadoRamos[destino];

    if (todosAprobados) {
      destinoRamo.elemento.classList.remove("bloqueado");
      destinoRamo.elemento.removeAttribute("title");
    } else {
      if (!destinoRamo.aprobado) {
        destinoRamo.elemento.classList.add("bloqueado");
        destinoRamo.elemento.setAttribute("title", "Requiere prerrequisito");
      }
    }
  }

  guardarProgreso();
}

function guardarProgreso() {
  const aprobados = Object.entries(estadoRamos)
    .filter(([_, info]) => info.aprobado)
    .map(([nombre]) => nombre);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

function cargarProgreso() {
  const data = localStorage.getItem("ramosAprobados");
  if (!data) return;

  const aprobados = JSON.parse(data);
  aprobados.forEach(nombre => {
    if (estadoRamos[nombre]) {
      estadoRamos[nombre].aprobado = true;
      estadoRamos[nombre].elemento.classList.add("aprobado");
    }
  });

  // Recalcular desbloqueos
  for (const [destino, prereqs] of Object.entries(dependencias)) {
    const todosAprobados = prereqs.every(p => estadoRamos[p].aprobado);
    const destinoRamo = estadoRamos[destino];

    if (todosAprobados) {
      destinoRamo.elemento.classList.remove("bloqueado");
      destinoRamo.elemento.removeAttribute("title");
    }
  }
}

crearMalla();
