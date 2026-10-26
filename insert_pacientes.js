// insert_pacientes.js
// Ejecutar con: load("insert_pacientes.js") despues de create_collections.js
// Carga 5 pacientes con su hospitalizacion completa: diagnostico, >=2 notas de evolucion,
// signos vitales, >=1 orden de medicamento y nota de enfermeria.

use("hce_hospitalizacion_grupo_6");

// ---------- 1) PACIENTES ----------
db.pacientes.insertMany([
  {
    _id: "PAC001",
    documento_identidad: { tipo: "CC", numero: "43789123" },
    nombre_completo: "Maria Fernanda Restrepo Gomez",
    fecha_nacimiento: "1958-03-12",
    sexo: "F",
    eps: "EPS Sura",
    telefono: "3015558842",
    direccion: "Calle 45 # 23-10, Medellin",
    contacto_emergencia: { nombre: "Jorge Restrepo", parentesco: "hermano", telefono: "3017779911" }
  },
  {
    _id: "PAC002",
    documento_identidad: { tipo: "CC", numero: "1128456789" },
    nombre_completo: "Carlos Andres Zapata Londono",
    fecha_nacimiento: "1990-07-22",
    sexo: "M",
    eps: "Savia Salud",
    telefono: "3104412233",
    direccion: "Carrera 80 # 12-45, Bello",
    contacto_emergencia: { nombre: "Diana Zapata", parentesco: "esposa", telefono: "3121239988" }
  },
  {
    _id: "PAC003",
    documento_identidad: { tipo: "CC", numero: "32654112" },
    nombre_completo: "Luz Dary Henao Cardona",
    fecha_nacimiento: "1975-11-05",
    sexo: "F",
    eps: "Nueva EPS",
    telefono: "3137765521",
    direccion: "Calle 10 # 34-21, Itagui",
    contacto_emergencia: { nombre: "Camilo Henao", parentesco: "hijo", telefono: "3148891122" }
  },
  {
    _id: "PAC004",
    documento_identidad: { tipo: "CC", numero: "1036987654" },
    nombre_completo: "Jhon Edison Patino Rios",
    fecha_nacimiento: "2001-02-18",
    sexo: "M",
    eps: "EPS Sura",
    telefono: "3209988776",
    direccion: "Transversal 5 # 60-15, Envigado",
    contacto_emergencia: { nombre: "Marta Rios", parentesco: "madre", telefono: "3156677889" }
  },
  {
    _id: "PAC005",
    documento_identidad: { tipo: "CC", numero: "21345678" },
    nombre_completo: "Rosa Elena Munoz Velez",
    fecha_nacimiento: "1949-09-30",
    sexo: "F",
    eps: "Coosalud",
    telefono: "3012233445",
    direccion: "Calle 70 # 45-30, Medellin",
    contacto_emergencia: { nombre: "Felipe Munoz", parentesco: "nieto", telefono: "3187766554" }
  }
]);

// ---------- 2) HOSPITALIZACIONES (con diagnosticos y alta embebidos) ----------
db.hospitalizaciones.insertMany([
  {
    _id: "HOSP001",
    paciente_id: "PAC001",
    fecha_admision: "2026-10-10T08:15:00Z",
    motivo_admision: "Dificultad respiratoria y fiebre de 3 dias de evolucion",
    servicio: "Medicina Interna",
    medico_tratante: "Dr. Andres Felipe Suarez",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "J18.9", descripcion: "Neumonia, no especificada", tipo: "principal", fecha: "2026-10-10T09:00:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-14T11:00:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Neumonia adquirida en la comunidad resuelta",
      indicaciones: "Continuar amoxicilina via oral por 5 dias, control por consulta externa en 7 dias",
      medico_egreso: "Dr. Andres Felipe Suarez"
    }
  },
  {
    _id: "HOSP002",
    paciente_id: "PAC002",
    fecha_admision: "2026-10-15T22:40:00Z",
    motivo_admision: "Dolor abdominal intenso en fosa iliaca derecha",
    servicio: "Cirugia General",
    medico_tratante: "Dra. Camila Vasquez",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "K35.80", descripcion: "Apendicitis aguda, no especificada", tipo: "principal", fecha: "2026-10-15T23:10:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-18T09:30:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Post-operatorio de apendicectomia sin complicaciones",
      indicaciones: "Reposo relativo 8 dias, curacion de herida cada 48 horas, retiro de puntos en 10 dias",
      medico_egreso: "Dra. Camila Vasquez"
    }
  },
  {
    _id: "HOSP003",
    paciente_id: "PAC003",
    fecha_admision: "2026-10-22T06:50:00Z",
    motivo_admision: "Glicemia descompensada, debilidad y vomito",
    servicio: "Medicina Interna",
    medico_tratante: "Dr. Oscar Giraldo",
    estado: "activa",
    diagnosticos: [
      { codigo_cie10: "E11.65", descripcion: "Diabetes mellitus tipo 2 con hiperglicemia", tipo: "principal", fecha: "2026-10-22T07:30:00Z" }
    ],
    alta: null
  },
  {
    _id: "HOSP004",
    paciente_id: "PAC004",
    fecha_admision: "2026-10-12T19:05:00Z",
    motivo_admision: "Accidente de transito, dolor intenso e imposibilidad de mover pierna derecha",
    servicio: "Ortopedia y Traumatologia",
    medico_tratante: "Dr. Santiago Lopera",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "S72.90", descripcion: "Fractura de femur, parte no especificada", tipo: "principal", fecha: "2026-10-12T19:40:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-20T10:00:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Post-operatorio de osteosintesis de femur, evolucion favorable",
      indicaciones: "Fisioterapia ambulatoria, no apoyar la pierna por 4 semanas, control por ortopedia en 15 dias",
      medico_egreso: "Dr. Santiago Lopera"
    }
  },
  {
    _id: "HOSP005",
    paciente_id: "PAC005",
    fecha_admision: "2026-10-19T03:20:00Z",
    motivo_admision: "Dificultad para respirar y tos con flemas, antecedente de EPOC",
    servicio: "Medicina Interna",
    medico_tratante: "Dra. Natalia Correa",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "J44.1", descripcion: "EPOC con exacerbacion aguda", tipo: "principal", fecha: "2026-10-19T04:00:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-23T12:15:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "EPOC exacerbado, manejado con broncodilatadores y corticoide, estable",
      indicaciones: "Continuar inhaladores segun esquema, oxigeno domiciliario, control por neumologia en 10 dias",
      medico_egreso: "Dra. Natalia Correa"
    }
  }
]);

// ---------- 3) NOTAS DE EVOLUCION (minimo 2 por paciente) ----------
db.notas_evolucion.insertMany([
  { hospitalizacion_id: "HOSP001", fecha: "2026-10-11T07:30:00Z", medico: "Dr. Andres Felipe Suarez", nota: "Paciente afebril, mejoria de disnea, tolera via oral. Se continua manejo antibiotico." },
  { hospitalizacion_id: "HOSP001", fecha: "2026-10-13T08:00:00Z", medico: "Dr. Andres Felipe Suarez", nota: "Buena evolucion clinica, saturacion de oxigeno normal sin soporte. Se programa alta para manana." },

  { hospitalizacion_id: "HOSP002", fecha: "2026-10-16T08:00:00Z", medico: "Dra. Camila Vasquez", nota: "Post-operatorio inmediato, herida quirurgica sin signos de infeccion, dolor controlado con analgesia." },
  { hospitalizacion_id: "HOSP002", fecha: "2026-10-17T08:30:00Z", medico: "Dra. Camila Vasquez", nota: "Tolera dieta normal, deambula sin dificultad, se retira sonda vesical." },

  { hospitalizacion_id: "HOSP003", fecha: "2026-10-22T10:00:00Z", medico: "Dr. Oscar Giraldo", nota: "Se inicia insulina segun esquema, glicemia en descenso progresivo." },
  { hospitalizacion_id: "HOSP003", fecha: "2026-10-23T09:00:00Z", medico: "Dr. Oscar Giraldo", nota: "Paciente estable, glicemias dentro de rango objetivo, continua en observacion." },

  { hospitalizacion_id: "HOSP004", fecha: "2026-10-13T09:00:00Z", medico: "Dr. Santiago Lopera", nota: "Pendiente de cirugia de osteosintesis, se mantiene en traccion y manejo del dolor." },
  { hospitalizacion_id: "HOSP004", fecha: "2026-10-16T09:30:00Z", medico: "Dr. Santiago Lopera", nota: "Post-operatorio de osteosintesis sin complicaciones, inicia fisioterapia pasiva." },

  { hospitalizacion_id: "HOSP005", fecha: "2026-10-20T08:00:00Z", medico: "Dra. Natalia Correa", nota: "Disminucion del trabajo respiratorio, continua con oxigeno suplementario a bajo flujo." },
  { hospitalizacion_id: "HOSP005", fecha: "2026-10-22T08:30:00Z", medico: "Dra. Natalia Correa", nota: "Saturacion estable sin oxigeno en reposo, se programa alta con oxigeno domiciliario." }
]);

// ---------- 4) SIGNOS VITALES (varios registros por hospitalizacion) ----------
db.signos_vitales.insertMany([
  { hospitalizacion_id: "HOSP001", fecha: "2026-10-10T10:00:00Z", temperatura_c: 38.6, presion_arterial: "118/76", frecuencia_cardiaca: 98, frecuencia_respiratoria: 22, saturacion_o2: 92, registrado_por: "Enf. Paula Jimenez" },
  { hospitalizacion_id: "HOSP001", fecha: "2026-10-12T10:00:00Z", temperatura_c: 36.8, presion_arterial: "115/74", frecuencia_cardiaca: 82, frecuencia_respiratoria: 18, saturacion_o2: 96, registrado_por: "Enf. Paula Jimenez" },

  { hospitalizacion_id: "HOSP002", fecha: "2026-10-15T23:00:00Z", temperatura_c: 37.9, presion_arterial: "125/80", frecuencia_cardiaca: 102, frecuencia_respiratoria: 20, saturacion_o2: 97, registrado_por: "Enf. Tatiana Ruiz" },
  { hospitalizacion_id: "HOSP002", fecha: "2026-10-17T09:00:00Z", temperatura_c: 36.5, presion_arterial: "118/75", frecuencia_cardiaca: 78, frecuencia_respiratoria: 16, saturacion_o2: 98, registrado_por: "Enf. Tatiana Ruiz" },

  { hospitalizacion_id: "HOSP003", fecha: "2026-10-22T07:00:00Z", temperatura_c: 36.9, presion_arterial: "130/85", frecuencia_cardiaca: 95, frecuencia_respiratoria: 20, saturacion_o2: 95, registrado_por: "Enf. Mariana Osorio" },
  { hospitalizacion_id: "HOSP003", fecha: "2026-10-23T07:00:00Z", temperatura_c: 36.7, presion_arterial: "122/80", frecuencia_cardiaca: 84, frecuencia_respiratoria: 18, saturacion_o2: 97, registrado_por: "Enf. Mariana Osorio" },

  { hospitalizacion_id: "HOSP004", fecha: "2026-10-12T20:00:00Z", temperatura_c: 37.1, presion_arterial: "110/70", frecuencia_cardiaca: 110, frecuencia_respiratoria: 24, saturacion_o2: 96, registrado_por: "Enf. David Ortiz" },
  { hospitalizacion_id: "HOSP004", fecha: "2026-10-16T10:00:00Z", temperatura_c: 36.6, presion_arterial: "112/72", frecuencia_cardiaca: 88, frecuencia_respiratoria: 18, saturacion_o2: 97, registrado_por: "Enf. David Ortiz" },

  { hospitalizacion_id: "HOSP005", fecha: "2026-10-19T04:00:00Z", temperatura_c: 37.3, presion_arterial: "135/88", frecuencia_cardiaca: 100, frecuencia_respiratoria: 26, saturacion_o2: 88, registrado_por: "Enf. Laura Gaviria" },
  { hospitalizacion_id: "HOSP005", fecha: "2026-10-22T09:00:00Z", temperatura_c: 36.5, presion_arterial: "128/82", frecuencia_cardiaca: 86, frecuencia_respiratoria: 19, saturacion_o2: 94, registrado_por: "Enf. Laura Gaviria" }
]);

// ---------- 5) ORDENES DE MEDICAMENTO (minimo 1 por hospitalizacion) ----------
db.ordenes_medicamento.insertMany([
  { hospitalizacion_id: "HOSP001", medicamento: "Ampicilina/Sulbactam", dosis: "1.5 g", via: "intravenosa", frecuencia: "cada 8 horas", fecha_inicio: "2026-10-10T09:30:00Z", fecha_fin: "2026-10-13T09:30:00Z", medico_ordena: "Dr. Andres Felipe Suarez", estado: "finalizada" },

  { hospitalizacion_id: "HOSP002", medicamento: "Metamizol sodico", dosis: "1 g", via: "intravenosa", frecuencia: "cada 8 horas", fecha_inicio: "2026-10-15T23:30:00Z", fecha_fin: "2026-10-18T08:00:00Z", medico_ordena: "Dra. Camila Vasquez", estado: "finalizada" },

  { hospitalizacion_id: "HOSP003", medicamento: "Insulina cristalina", dosis: "segun esquema deslizante", via: "subcutanea", frecuencia: "cada 6 horas", fecha_inicio: "2026-10-22T08:00:00Z", fecha_fin: null, medico_ordena: "Dr. Oscar Giraldo", estado: "activa" },

  { hospitalizacion_id: "HOSP004", medicamento: "Tramadol", dosis: "100 mg", via: "intravenosa", frecuencia: "cada 8 horas", fecha_inicio: "2026-10-12T20:00:00Z", fecha_fin: "2026-10-19T20:00:00Z", medico_ordena: "Dr. Santiago Lopera", estado: "finalizada" },

  { hospitalizacion_id: "HOSP005", medicamento: "Prednisolona", dosis: "50 mg", via: "oral", frecuencia: "cada 24 horas", fecha_inicio: "2026-10-19T05:00:00Z", fecha_fin: "2026-10-23T05:00:00Z", medico_ordena: "Dra. Natalia Correa", estado: "finalizada" },
  { hospitalizacion_id: "HOSP005", medicamento: "Salbutamol inhalado", dosis: "2 puff", via: "inhalada", frecuencia: "cada 6 horas", fecha_inicio: "2026-10-19T05:00:00Z", fecha_fin: null, medico_ordena: "Dra. Natalia Correa", estado: "activa" }
]);

// ---------- 6) NOTAS DE ENFERMERIA (minimo 1 por hospitalizacion) ----------
db.notas_enfermeria.insertMany([
  { hospitalizacion_id: "HOSP001", fecha: "2026-10-10T14:00:00Z", turno: "tarde", enfermero: "Enf. Paula Jimenez", nota: "Paciente recibe oxigeno por canula nasal a 2 litros, saturacion mejora a 94%. Tolera dieta blanda." },

  { hospitalizacion_id: "HOSP002", fecha: "2026-10-16T06:00:00Z", turno: "mañana", enfermero: "Enf. Tatiana Ruiz", nota: "Curacion de herida quirurgica sin signos de infeccion, apositos limpios, dolor controlado 3/10." },

  { hospitalizacion_id: "HOSP003", fecha: "2026-10-22T20:00:00Z", turno: "noche", enfermero: "Enf. Mariana Osorio", nota: "Control de glucometria cada 6 horas segun orden medica, paciente colaboradora, sin eventos adversos." },

  { hospitalizacion_id: "HOSP004", fecha: "2026-10-13T22:00:00Z", turno: "noche", enfermero: "Enf. David Ortiz", nota: "Paciente con dolor controlado tras analgesia, se realiza cambio de posicion cada 2 horas para prevenir ulceras." },

  { hospitalizacion_id: "HOSP005", fecha: "2026-10-19T07:00:00Z", turno: "mañana", enfermero: "Enf. Laura Gaviria", nota: "Se administra nebulizacion segun orden, paciente refiere mejoria leve de la dificultad respiratoria." }
]);

print("Carga de datos completa: 5 pacientes, 5 hospitalizaciones, notas, signos vitales, ordenes y notas de enfermeria.");
