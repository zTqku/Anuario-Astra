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
  {nombre:"Alanis Maidana",curso:"Third year",foto:"images/alumnos/alanis.jpg",frase:"participé más en la lista de ausentes",descripcion:"yo solo se que no se nada.",
   galeria:["images/alumnos/alanis-1.jpg", "images/alumnos/alanis-2.jpg", "images/alumnos/alanis-3.jpg", "images/alumnos/alanis-4.jpg", "images/alumnos/alanis-5.jpg", "images/alumnos/alanis-6.jpg", "images/alumnos/alanis-7.jpg"]},
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
  {nombre:"Katherin Vasquez",curso:"Third year",foto:"images/alumnos/katherin.jpg",frase:"La disciplina me busca, pero yo me hago la desentendida",descripcion:"Bajita, morena, rubia teñida, impulsiva, peresosa, olvidadiza, amorosa, sencible, llorona, despistada, ordenada, miedosa y humilde.",
   galeria:["images/alumnos/katherin-1.jpg", "images/alumnos/katherin-2.jpg", "images/alumnos/katherin-3.jpg", "images/alumnos/katherin-4.jpg", "images/alumnos/katherin-5.jpg", "images/alumnos/katherin-6.jpg", "images/alumnos/katherin-7.jpg"]},
  {nombre:"Cristian Quintana",curso:"Third year",foto:"images/alumnos/cristian.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Rodrigo Acosta",curso:"Third year",foto:"images/alumnos/rodrigo.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Sofia Velazco",curso:"Third year",foto:"images/alumnos/sofia.jpg",frase:"Even if I don't have it all figured out, I'll keep becoming myself",descripcion:"A dreamer with too many ideas, an endless imagination, and a heart that finds magic in the little things. Always curious, a little absent-minded, sensitive, and full of dreams. Still figuring out who I am, but excited to discover who I can become..",
   galeria:["images/alumnos/sofia-1.jpg", "images/alumnos/sofia-2.jpg", "images/alumnos/sofia-3.jpg", "images/alumnos/sofia-4.jpg", "images/alumnos/sofia-5.jpg", "images/alumnos/sofia-6.jpg", "images/alumnos/sofia-7.jpg", "images/alumnos/sofia-8.jpg", "images/alumnos/sofia-9.jpg"]},
  {nombre:"Ruth Roa",curso:"Third year",foto:"images/alumnos/ruth.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Micaia Benitez",curso:"Third year",foto:"images/alumnos/micaia.jpg",frase:"",descripcion:"Descripción de ejemplo.",
   galeria:["images/alumnos/-1.jpg"]},
  {nombre:"Talita Orlando",curso:"Third year",foto:"images/alumnos/Talita.jpg",frase:"I am proof that there can always be a new beginning",descripcion:"Desordenada, impulsiva, dormilona y otaku.",
   galeria:["images/alumnos/talita-1.jpg", "images/alumnos/talita-2.jpg", "images/alumnos/talita-3.jpg", "images/alumnos/talita-4.jpg", "images/alumnos/talita-5.jpg", "images/alumnos/talita-6.jpg", "images/alumnos/talita-7.jpg", "images/alumnos/talita-8.jpg"]}, 
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
const GALERIA=Array.from({length:18},(_,i)=>({src:`images/galeria/grupal${i+1}.jpg`,titulo:`Photos from the course ${i+1}`}));

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
