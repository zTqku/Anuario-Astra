/* ============ DATOS DEL ANUARIO ============
   Todo lo marcado "(ejemplo)" es de muestra. Reemplázalo con los datos reales.
   Si "foto" está vacía o la imagen no existe, se muestran las iniciales. */

// ALUMNOS: copia y pega un bloque { ... } por cada alumno.
const _al=n=>({nombre:`Alumno ${n} (ejemplo)`,curso:"Curso (ejemplo)",foto:"",frase:".",descripcion:"Descripción de ejemplo.",galeria:["images/alumnos/-----1.jpg"]});
const ALUMNOS=[
  {nombre:"Alejandra Talavera",curso:"Third year",foto:"images/alumnos/alejandra.jpg",frase:"Ya que tengo abierta la cosa veo si le pongo.",descripcion:"Me cambiaste porque traigo bicicleta.",
   galeria:["images/alumnos/alejandra-1.jpg", "images/alumnos/alejandra-2.jpg", "images/alumnos/alejandra-3.jpg", "images/alumnos/alejandra-4.jpg", "images/alumnos/alejandra-5.jpg", "images/alumnos/alejandra-6.jpg", "images/alumnos/alejandra-7.jpg", "images/alumnos/alejandra-8.jpg", "images/alumnos/alejandra-9.jpg", "images/alumnos/alejandra-10.jpg"]},
  {nombre:"Willian Varela",curso:"Third year",foto:"images/alumnos/willian.jpg",frase:"No hagas hoy lo que puedes hacer mañana.",descripcion:"Me gusta la informatica y pasar el tiempo sin hacer nada.",
   galeria:["images/alumnos/willian-1.jpg", "images/alumnos/willian-2.jpg", "images/alumnos/willian-3.jpg", "images/alumnos/willian-4.jpg", "images/alumnos/willian-5.jpg", "images/alumnos/willian-6.jpg"]},
  {nombre:"Alanis Maidana",curso:"Third year",foto:"images/alumnos/alanis.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Fernando Lopez",curso:"Third year",foto:"images/alumnos/fernando.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Dylan Gimenez",curso:"Third year",foto:"images/alumnos/dylan.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Aracelly Manzur",curso:"Third year",foto:"images/alumnos/manzur.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Willian Leiva",curso:"Third year",foto:"images/alumnos/leiva.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Maite Villalba",curso:"Third year",foto:"images/alumnos/maite.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Katherin Vasquez",curso:"Third year",foto:"images/alumnos/katherin.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Cristian Quintana",curso:"Third year",foto:"images/alumnos/cristian.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Rodrigo Acosta",curso:"Third year",foto:"images/alumnos/rodrigo.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Sofia Velazco",curso:"Third year",foto:"images/alumnos/sofia.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Ruth Roa",curso:"Third year",foto:"images/alumnos/ruth.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Micaia Benitez",curso:"Third year",foto:"images/alumnos/micaia.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Talita Orlando",curso:"Third year",foto:"images/alumnos/Talita.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]}, 
  {nombre:"Luana Martinez",curso:"Third year",foto:"images/alumnos/luana.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]}, 
  {nombre:"Yamila Britez",curso:"Third year",foto:"images/alumnos/yamila.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]}, 
  {nombre:"Alex Ramirez",curso:"Third year",foto:"images/alumnos/alex.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]}, 

];
   // DIRECCIÓN: 1 director + 1 directora
const DIRECTIVOS=[
  {nombre:"Director (ejemplo)",cargo:"Director",foto:"images/profesores/director.jpg",mensaje:"Mensaje de ejemplo.",descripcion:""},
  {nombre:"Directora (ejemplo)",cargo:"Directora",foto:"images/profesores/directora.jpg",mensaje:"Mensaje de ejemplo.",descripcion:""}
];

// PROFESORES: 
  const PROFESORES=[
  {nombre:"Teacher Cecilia",materia:"Ingles",foto:"images/profesores/profcecilia.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Sergio",materia:"Fisica",foto:"images/profesores/sergio.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Luz",materia:"Quimica",foto:"images/profesores/profluz.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Nelida",materia:"",foto:"images/profesores/profnelida.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Oscar",materia:"",foto:"images/profesores/profoscar.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Amancio",materia:"",foto:"images/profesores/profamancio.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Sofia",materia:"",foto:"images/profesores/profsofia.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Natalia",materia:"",foto:"images/profesores/profnatalia.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Victor",materia:"",foto:"images/profesores/profvictor.jpg",mensaje:"Su mensaje.",descripcion:""},
  {nombre:"Teacher Nicolasa",materia:"",foto:"images/profesores/profnico.jpg",mensaje:"Su mensaje.",descripcion:""}, 
     
];

// MOMENTOS (línea de tiempo)
const MOMENTOS=[
  {fecha:"Fecha (ejemplo)",titulo:"Primer día de clases (ejemplo)",texto:"Texto de ejemplo: cuenta aquí este momento."},
  {fecha:"Fecha (ejemplo)",titulo:"Actividades escolares (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Excursión (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Deportes (ejemplo)",texto:"Texto de ejemplo."},
  {fecha:"Fecha (ejemplo)",titulo:"Fiesta de despedida (ejemplo)",texto:"Texto de ejemplo."}
];

// EVENTOS: "fotos" = las que abre el botón "Ver fotografías"
const EVENTOS=[1,2,3].map(n=>({nombre:`Evento ${n} (ejemplo)`,fecha:"Fecha (ejemplo)",foto:`images/eventos/evento${n}.jpg`,descripcion:"Descripción de ejemplo.",fotos:[`images/eventos/evento${n}-1.jpg`,`images/eventos/evento${n}-2.jpg`]}));

// GALERÍA
const GALERIA=Array.from({length:18},(_,i)=>({src:`images/galeria/foto${i+1}.jpg`,titulo:`Photos from the course${i+1}`}));

// MENSAJES
const MENSAJES=[
  {texto:"Puede que terminemos el colegio, pero estos recuerdos nos van a acompañar siempre.",autor:"Alumno (ejemplo)"},
  {texto:"Mensaje de ejemplo para la promoción.",autor:"Alumno (ejemplo)"},
  {texto:"Mensaje de ejemplo para la promoción.",autor:"Alumno (ejemplo)"}
];

// RECUERDOS (se muestran al azar en la página "Recuerdos")
const RECUERDOS=[
  {texto:"Recuerdo de ejemplo número uno.",autor:"Alumno (ejemplo)"},
  {texto:"Recuerdo de ejemplo número dos.",autor:"Alumno (ejemplo)"},
  {texto:"Recuerdo de ejemplo número tres.",autor:"Alumno (ejemplo)"}
];
