const cursos = [
  // Primer Año - Semestre 1
  { nombre: "Química general", id: "quimica", desbloquea: ["bioquimica"] },
  { nombre: "Biología celular", id: "biocel", desbloquea: ["histologia"] },
  { nombre: "Zoología para las ciencias veterinarias", id: "zoologia", desbloquea: ["parasitologia"] },
  { nombre: "Inglés instrumental I", id: "ingles1", desbloquea: ["ingles2"] },
  { nombre: "Ecología", id: "ecologia" },
  { nombre: "Rol del médico veterinario", id: "rolmv" },

  // Primer Año - Semestre 2
  { nombre: "Procesos Bioquímicos", id: "bioquimica", requisitos: ["quimica"] },
  { nombre: "Histología", id: "histologia", requisitos: ["biocel"], desbloquea: ["embriologia", "patologia"] },
  { nombre: "Anatomía animal I", id: "anato1", desbloquea: ["anato2"] },
  { nombre: "Zootecnia", id: "zootecnia", desbloquea: ["nutricion"] },
  { nombre: "Fundamentos de etología y bienestar animal", id: "etologia" },
  { nombre: "Electivo Elac", id: "elac" },

  // Segundo Año - Semestre 3
  { nombre: "Fisiología animal I", id: "fisio1", desbloquea: ["fisio2", "fisiopato1", "farmacologia"] },
  { nombre: "Embriología", id: "embriologia", requisitos: ["histologia"] },
  { nombre: "Anatomía animal II", id: "anato2", requisitos: ["anato1"] },
  { nombre: "Microbiología general", id: "microbio", desbloquea: ["enf_infecciosas"] },
  { nombre: "Reproducción animal y genética", id: "repro" },
  { nombre: "Inglés instrumental II", id: "ingles2", requisitos: ["ingles1"] },
  { nombre: "Electivo EI1", id: "ei1" },

  // Segundo Año - Semestre 4
  { nombre: "Fisiología animal II", id: "fisio2", requisitos: ["fisio1"], desbloquea: ["fisiopato1", "farmacologia"] },
  { nombre: "Patología general", id: "patologia", requisitos: ["histologia"], desbloquea: ["semiotecnia"] },
  { nombre: "Nutrición y alimentación", id: "nutricion", requisitos: ["zootecnia"], desbloquea: ["prod_bovina", "prod_aves_cerdos", "prod_rumiantes"] },
  { nombre: "Epidemiología", id: "epidemiologia", desbloquea: ["gestion_ambiental", "vigilancia"] },
  { nombre: "Contexto social para las ciencias veterinarias", id: "contexto", desbloquea: ["negocios", "rural"] },
  { nombre: "Parasitología", id: "parasitologia", requisitos: ["zoologia"] },

  // Tercer Año - Semestre 5
  { nombre: "Fisiopatología I", id: "fisiopato1", requisitos: ["fisio1", "fisio2"], desbloquea: ["fisiopato2"] },
  { nombre: "Farmacología", id: "farmacologia", requisitos: ["fisio1", "fisio2"], desbloquea: ["anestesia"] },
  { nombre: "Enfermedades infecciosas", id: "enf_infecciosas", requisitos: ["microbio"], desbloquea: ["med_pequenos", "med_rumiantes"] },
  { nombre: "Producción de aves y cerdos", id: "prod_aves_cerdos", requisitos: ["nutricion"], desbloquea: ["proyecto"] },
  { nombre: "Producción de rumiantes menores", id: "prod_rumiantes", requisitos: ["nutricion"], desbloquea: ["proyecto"] },
  { nombre: "Electivo Elte", id: "elte" },
  { nombre: "Evaluación ciclo inicial", id: "eval_ini", requisitos: ["quimica","biocel","zoologia","ingles1","ecologia","rolmv","bioquimica","histologia","anato1","zootecnia","etologia","elac","fisio1","embriologia","anato2","microbio","repro","ingles2","ei1","fisio2","patologia","nutricion","epidemiologia","contexto","parasitologia"] },

  // Tercer Año - Semestre 6
  { nombre: "Fisiopatología II", id: "fisiopato2", requisitos: ["fisiopato1"] },
  { nombre: "Ictiopatología", id: "ictio", desbloquea: ["acuicola"] },
  { nombre: "Producción bovina", id: "prod_bovina", requisitos: ["nutricion"], desbloquea: ["proyecto"] },
  { nombre: "Negocio y emprendimiento", id: "negocios", requisitos: ["contexto"], desbloquea: ["rural"] },
  { nombre: "Semiotecnia A+S", id: "semiotecnia", requisitos: ["patologia"], desbloquea: ["tecnicas_diag", "anestesia"] },
  { nombre: "Electivo EI2", id: "ei2" },

  // Cuarto Año - Semestre 7
  { nombre: "Medicina De pequeños animales", id: "med_pequenos", requisitos: ["enf_infecciosas"], desbloquea: ["int_peq1"] },
  { nombre: "Técnicas diagnósticas", id: "tecnicas_diag", requisitos: ["semiotecnia"] },
  { nombre: "Anestesiologia y manejo del dolor", id: "anestesia", requisitos: ["farmacologia", "semiotecnia"], desbloquea: ["cirugia1"] },
  { nombre: "Producción Acuícola", id: "acuicola", requisitos: ["ictio"], desbloquea: ["proyecto"] },
  { nombre: "Vigilancia epidemiológica", id: "vigilancia", requisitos: ["epidemiologia"], desbloquea: ["salud_pub", "conservacion"] },
  { nombre: "Gestión ambiental", id: "gestion_ambiental", requisitos: ["epidemiologia"] },

  // Cuarto Año - Semestre 8
  { nombre: "Medicina de rumiantes", id: "med_rumiantes", requisitos: ["enf_infecciosas"], desbloquea: ["int_may1"] },
  { nombre: "Medicina de equinos", id: "equinos", desbloquea: ["int_may1"] },
  { nombre: "Cirugía I", id: "cirugia1", requisitos: ["anestesia"], desbloquea: ["cirugia2"] },
  { nombre: "Metodología de la investigación", id: "metodo", requisitos: ["tecnicas_diag", "anestesia", "med_pequenos", "acuicola", "vigilancia", "gestion_ambiental"] },
  { nombre: "Tecnología de los alimentos e inocuidad", id: "inocuidad", requisitos: ["epidemiologia", "prod_bovina"] },
  { nombre: "Electivo disciplinar I", id: "disc1", requisitos: ["eval_ini"] },

  // Quinto Año - Semestre 9
  { nombre: "Internado pequeños animales I", id: "int_peq1", requisitos: ["med_pequenos"], desbloquea: ["int_peq2"] },
  { nombre: "Proyecto productivo", id: "proyecto", requisitos: ["prod_bovina", "prod_aves_cerdos", "prod_rumiantes", "acuicola"] },
  { nombre: "Internado animales mayores I", id: "int_may1", requisitos: ["med_rumiantes", "equinos"], desbloquea: ["int_may2"] },
  { nombre: "Cirugía II", id: "cirugia2", requisitos: ["cirugia1"] },
  { nombre: "Desarrollo rural", id: "rural", requisitos: ["contexto", "negocios"] },
  { nombre: "Electivo EI3", id: "ei3" },

  // Quinto Año - Semestre 10
  { nombre: "Internado pequeños animales II", id: "int_peq2", requisitos: ["int_peq1"] },
  { nombre: "Internado animales mayores II", id: "int_may2", requisitos: ["int_may1"] },
  { nombre: "Salud pública", id: "salud_pub", requisitos: ["vigilancia"] },
  { nombre: "Medicina de conservación", id: "conservacion", requisitos: ["vigilancia"] },
  { nombre: "Ética profesional", id: "etica" },
  { nombre: "Electivo disciplinar II", id: "disc2", requisitos: ["eval_ini"] }
];

function crearMalla() {
  const malla = document.getElementById("malla");
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    if (curso.requisitos && curso.requisitos.length > 0) {
      div.classList.add("bloqueado");
    }
    div.id = curso.id;
    div.innerText = curso.nombre;
    div.onclick = () => aprobarCurso(curso.id);
    malla.appendChild(div);
  });
}

function aprobarCurso(id) {
  const curso = cursos.find(c => c.id === id);
  const div = document.getElementById(id);
  if (div.classList.contains("bloqueado") || div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");

  cursos.forEach(c => {
    if (c.requisitos && c.requisitos.includes(id)) {
      if (c.requisitos.every(req => document.getElementById(req).classList.contains("aprobado"))) {
        document.getElementById(c.id).classList.remove("bloqueado");
      }
    }
  });
}

window.onload = crearMalla;

