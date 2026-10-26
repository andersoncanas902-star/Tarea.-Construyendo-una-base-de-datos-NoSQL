// insert_pacientes_extra.js
// Ejecutar con: load("insert_pacientes_extra.js") DESPUES de insert_pacientes.js
// Agrega 5 pacientes mas (PAC006-PAC010) sin duplicar los 5 ya cargados.

use("hce_hospitalizacion_grupo_6");

// ---------- 1) PACIENTES ----------
db.pacientes.insertMany([
  {
    _id: "PAC006",
    documento_identidad: { tipo: "CC", numero: "71234567" },
    nombre_completo: "Hector Ivan Castano Ramirez",
    fecha_nacimiento: "1982-04-02",
    sexo: "M",
    eps: "Nueva EPS",
    telefono: "3119981122",
    direccion: "Calle 33 # 70-12, Medellin",
    contacto_emergencia: { nombre: "Liliana Castano", parentesco: "esposa", telefono: "3134456677" }
  },
  {
    _id: "PAC007",
    documento_identidad: { tipo: "CC", numero: "43988211" },
    nombre_completo: "Gloria Patricia Arango Builes",
    fecha_nacimiento: "1965-12-19",
    sexo: "F",
    eps: "EPS Sura",
    telefono: "3156612398",
    direccion: "Carrera 52 # 40-21, Medellin",
    contacto_emergencia: { nombre: "Andres Arango", parentesco: "hijo", telefono: "3002219988" }
  },
  {
    _id: "PAC008",
    documento_identidad: { tipo: "CC", numero: "98451267" },
    nombre_completo: "Julian David Moreno Arias",
    fecha_nacimiento: "1995-06-08",
    sexo: "M",
    eps: "Savia Salud",
    telefono: "3187741256",
    direccion: "Calle 85 # 48-30, Bello",
    contacto_emergencia: { nombre: "Paola Arias", parentesco: "madre", telefono: "3209987766" }
  },
  {
    _id: "PAC009",
    documento_identidad: { tipo: "CC", numero: "22678901" },
    nombre_completo: "Alba Lucia Vargas Montoya",
    fecha_nacimiento: "1941-01-27",
    sexo: "F",
    eps: "Coosalud",
    telefono: "3145567890",
    direccion: "Transversal 24 # 15-55, Itagui",
    contacto_emergencia: { nombre: "Ricardo Vargas", parentesco: "hijo", telefono: "3178812345" }
  },
  {
    _id: "PAC010",
    documento_identidad: { tipo: "CC", numero: "1098765432" },
    nombre_completo: "Esteban Alejandro Quintero Soto",
    fecha_nacimiento: "1999-10-14",
    sexo: "M",
    eps: "Nueva EPS",
    telefono: "3012245678",
    direccion: "Calle 95 # 52-18, Medellin",
    contacto_emergencia: { nombre: "Sandra Soto", parentesco: "madre", telefono: "3121198877" }
  }
]);

// ---------- 2) HOSPITALIZACIONES (con diagnosticos y alta embebidos) ----------
db.hospitalizaciones.insertMany([
  {
    _id: "HOSP006",
    paciente_id: "PAC006",
    fecha_admision: "2026-10-11T13:20:00Z",
    motivo_admision: "Dolor lumbar intenso con fiebre y ardor al orinar",
    servicio: "Medicina Interna",
    medico_tratante: "Dr. Oscar Giraldo",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "N39.0", descripcion: "Infeccion de vias urinarias, sitio no especificado", tipo: "principal", fecha: "2026-10-11T14:00:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-15T10:00:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Infeccion urinaria complicada resuelta con antibiotico IV",
      indicaciones: "Completar antibiotico via oral por 5 dias, abundantes liquidos, control por consulta externa",
      medico_egreso: "Dr. Oscar Giraldo"
    }
  },
  {
    _id: "HOSP007",
    paciente_id: "PAC007",
    fecha_admision: "2026-10-14T05:45:00Z",
    motivo_admision: "Cefalea intensa, cifras tensionales muy elevadas en casa",
    servicio: "Medicina Interna",
    medico_tratante: "Dra. Natalia Correa",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "I16.9", descripcion: "Crisis hipertensiva, no especificada", tipo: "principal", fecha: "2026-10-14T06:15:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-16T09:00:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Crisis hipertensiva controlada, ajuste de manejo antihipertensivo",
      indicaciones: "Continuar antihipertensivos ajustados, control de tension arterial diario, control por medicina interna en 8 dias",
      medico_egreso: "Dra. Natalia Correa"
    }
  },
  {
    _id: "HOSP008",
    paciente_id: "PAC008",
    fecha_admision: "2026-10-18T21:10:00Z",
    motivo_admision: "Fiebre alta, tos seca y malestar general de 4 dias",
    servicio: "Medicina Interna",
    medico_tratante: "Dr. Andres Felipe Suarez",
    estado: "activa",
    diagnosticos: [
      { codigo_cie10: "J12.9", descripcion: "Neumonia viral, no especificada", tipo: "principal", fecha: "2026-10-18T22:00:00Z" }
    ],
    alta: null
  },
  {
    _id: "HOSP009",
    paciente_id: "PAC009",
    fecha_admision: "2026-10-09T16:30:00Z",
    motivo_admision: "Caida en casa, dolor intenso en cadera e imposibilidad de caminar",
    servicio: "Ortopedia y Traumatologia",
    medico_tratante: "Dr. Santiago Lopera",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "S72.00", descripcion: "Fractura del cuello del femur", tipo: "principal", fecha: "2026-10-09T17:10:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-19T11:30:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Post-operatorio de reemplazo de cadera, evolucion favorable",
      indicaciones: "Fisioterapia ambulatoria, uso de caminador, control por ortopedia en 15 dias",
      medico_egreso: "Dr. Santiago Lopera"
    }
  },
  {
    _id: "HOSP010",
    paciente_id: "PAC010",
    fecha_admision: "2026-10-23T02:50:00Z",
    motivo_admision: "Vomito y diarrea abundante con signos de deshidratacion",
    servicio: "Medicina Interna",
    medico_tratante: "Dr. Oscar Giraldo",
    estado: "dada_de_alta",
    diagnosticos: [
      { codigo_cie10: "A09", descripcion: "Gastroenteritis y colitis de origen infeccioso no especificado", tipo: "principal", fecha: "2026-10-23T03:20:00Z" }
    ],
    alta: {
      fecha_alta: "2026-10-25T10:00:00Z",
      tipo_alta: "mejoria",
      diagnostico_egreso: "Gastroenteritis aguda resuelta tras hidratacion IV",
      indicaciones: "Dieta blanda progresiva, hidratacion oral abundante, control si persisten sintomas",
      medico_egreso: "Dr. Oscar Giraldo"
    }
  }
]);

// ---------- 3) NOTAS DE EVOLUCION (minimo 2 por paciente) ----------
db.notas_evolucion.insertMany([
  { hospitalizacion_id: "HOSP006", fecha: "2026-10-12T08:00:00Z", medico: "Dr. Oscar Giraldo", nota: "Afebril, dolor lumbar en disminucion, buena respuesta a antibiotico IV." },
  { hospitalizacion_id: "HOSP006", fecha: "2026-10-14T08:30:00Z", medico: "Dr. Oscar Giraldo", nota: "Paciente asintomatico, parcial de orina de control normal, se programa alta." },

  { hospitalizacion_id: "HOSP007", fecha: "2026-10-14T12:00:00Z", medico: "Dra. Natalia Correa", nota: "Tension arterial en descenso progresivo con manejo IV, cefalea disminuida." },
  { hospitalizacion_id: "HOSP007", fecha: "2026-10-15T08:00:00Z", medico: "Dra. Natalia Correa", nota: "Cifras tensionales estables con manejo oral, asintomatica, se programa alta." },

  { hospitalizacion_id: "HOSP008", fecha: "2026-10-19T08:00:00Z", medico: "Dr. Andres Felipe Suarez", nota: "Persiste fiebre intermitente, se solicitan examenes de control e imagen de torax." },
  { hospitalizacion_id: "HOSP008", fecha: "2026-10-20T08:30:00Z", medico: "Dr. Andres Felipe Suarez", nota: "Mejoria parcial de la saturacion, continua manejo de soporte y observacion." },

  { hospitalizacion_id: "HOSP009", fecha: "2026-10-10T09:00:00Z", medico: "Dr. Santiago Lopera", nota: "Pendiente de cirugia de cadera, manejo del dolor y preparacion prequirurgica." },
  { hospitalizacion_id: "HOSP009", fecha: "2026-10-14T09:30:00Z", medico: "Dr. Santiago Lopera", nota: "Post-operatorio de reemplazo de cadera sin complicaciones, inicia fisioterapia asistida." },

  { hospitalizacion_id: "HOSP010", fecha: "2026-10-23T07:00:00Z", medico: "Dr. Oscar Giraldo", nota: "Persiste deshidratacion leve, continua hidratacion IV y manejo antiemetico." },
  { hospitalizacion_id: "HOSP010", fecha: "2026-10-24T07:30:00Z", medico: "Dr. Oscar Giraldo", nota: "Tolera via oral, deposiciones normalizadas, se programa alta para manana." }
]);

// ---------- 4) SIGNOS VITALES ----------
db.signos_vitales.insertMany([
  { hospitalizacion_id: "HOSP006", fecha: "2026-10-11T15:00:00Z", temperatura_c: 38.4, presion_arterial: "120/78", frecuencia_cardiaca: 96, frecuencia_respiratoria: 19, saturacion_o2: 97, registrado_por: "Enf. Mariana Osorio" },
  { hospitalizacion_id: "HOSP006", fecha: "2026-10-13T09:00:00Z", temperatura_c: 36.7, presion_arterial: "115/75", frecuencia_cardiaca: 80, frecuencia_respiratoria: 17, saturacion_o2: 98, registrado_por: "Enf. Mariana Osorio" },

  { hospitalizacion_id: "HOSP007", fecha: "2026-10-14T06:30:00Z", temperatura_c: 36.6, presion_arterial: "190/112", frecuencia_cardiaca: 104, frecuencia_respiratoria: 20, saturacion_o2: 96, registrado_por: "Enf. David Ortiz" },
  { hospitalizacion_id: "HOSP007", fecha: "2026-10-15T09:00:00Z", temperatura_c: 36.5, presion_arterial: "132/85", frecuencia_cardiaca: 82, frecuencia_respiratoria: 17, saturacion_o2: 98, registrado_por: "Enf. David Ortiz" },

  { hospitalizacion_id: "HOSP008", fecha: "2026-10-18T22:30:00Z", temperatura_c: 39.1, presion_arterial: "110/70", frecuencia_cardiaca: 112, frecuencia_respiratoria: 24, saturacion_o2: 91, registrado_por: "Enf. Paula Jimenez" },
  { hospitalizacion_id: "HOSP008", fecha: "2026-10-20T09:00:00Z", temperatura_c: 37.8, presion_arterial: "112/72", frecuencia_cardiaca: 98, frecuencia_respiratoria: 21, saturacion_o2: 94, registrado_por: "Enf. Paula Jimenez" },

  { hospitalizacion_id: "HOSP009", fecha: "2026-10-09T17:30:00Z", temperatura_c: 36.8, presion_arterial: "128/80", frecuencia_cardiaca: 92, frecuencia_respiratoria: 19, saturacion_o2: 95, registrado_por: "Enf. Tatiana Ruiz" },
  { hospitalizacion_id: "HOSP009", fecha: "2026-10-14T10:00:00Z", temperatura_c: 36.6, presion_arterial: "122/78", frecuencia_cardiaca: 84, frecuencia_respiratoria: 17, saturacion_o2: 97, registrado_por: "Enf. Tatiana Ruiz" },

  { hospitalizacion_id: "HOSP010", fecha: "2026-10-23T03:30:00Z", temperatura_c: 37.5, presion_arterial: "100/65", frecuencia_cardiaca: 108, frecuencia_respiratoria: 21, saturacion_o2: 96, registrado_por: "Enf. Laura Gaviria" },
  { hospitalizacion_id: "HOSP010", fecha: "2026-10-24T08:00:00Z", temperatura_c: 36.6, presion_arterial: "112/72", frecuencia_cardiaca: 78, frecuencia_respiratoria: 16, saturacion_o2: 98, registrado_por: "Enf. Laura Gaviria" }
]);

// ---------- 5) ORDENES DE MEDICAMENTO ----------
db.ordenes_medicamento.insertMany([
  { hospitalizacion_id: "HOSP006", medicamento: "Ceftriaxona", dosis: "1 g", via: "intravenosa", frecuencia: "cada 24 horas", fecha_inicio: "2026-10-11T14:30:00Z", fecha_fin: "2026-10-15T08:00:00Z", medico_ordena: "Dr. Oscar Giraldo", estado: "finalizada" },

  { hospitalizacion_id: "HOSP007", medicamento: "Labetalol", dosis: "20 mg", via: "intravenosa", frecuencia: "segun necesidad", fecha_inicio: "2026-10-14T06:30:00Z", fecha_fin: "2026-10-15T06:00:00Z", medico_ordena: "Dra. Natalia Correa", estado: "finalizada" },
  { hospitalizacion_id: "HOSP007", medicamento: "Losartan", dosis: "50 mg", via: "oral", frecuencia: "cada 12 horas", fecha_inicio: "2026-10-15T06:00:00Z", fecha_fin: null, medico_ordena: "Dra. Natalia Correa", estado: "activa" },

  { hospitalizacion_id: "HOSP008", medicamento: "Oseltamivir", dosis: "75 mg", via: "oral", frecuencia: "cada 12 horas", fecha_inicio: "2026-10-18T22:30:00Z", fecha_fin: null, medico_ordena: "Dr. Andres Felipe Suarez", estado: "activa" },

  { hospitalizacion_id: "HOSP009", medicamento: "Enoxaparina", dosis: "40 mg", via: "subcutanea", frecuencia: "cada 24 horas", fecha_inicio: "2026-10-09T18:00:00Z", fecha_fin: "2026-10-19T08:00:00Z", medico_ordena: "Dr. Santiago Lopera", estado: "finalizada" },

  { hospitalizacion_id: "HOSP010", medicamento: "Lactato de Ringer", dosis: "1000 ml", via: "intravenosa", frecuencia: "cada 8 horas", fecha_inicio: "2026-10-23T03:00:00Z", fecha_fin: "2026-10-24T20:00:00Z", medico_ordena: "Dr. Oscar Giraldo", estado: "finalizada" }
]);

// ---------- 6) NOTAS DE ENFERMERIA ----------
db.notas_enfermeria.insertMany([
  { hospitalizacion_id: "HOSP006", fecha: "2026-10-11T18:00:00Z", turno: "tarde", enfermero: "Enf. Mariana Osorio", nota: "Paciente hidratado, se inicia antibiotico IV segun orden medica, sin reacciones adversas." },

  { hospitalizacion_id: "HOSP007", fecha: "2026-10-14T07:00:00Z", turno: "mañana", enfermero: "Enf. David Ortiz", nota: "Control de tension arterial cada hora segun orden, paciente ansiosa pero colaboradora." },

  { hospitalizacion_id: "HOSP008", fecha: "2026-10-19T00:00:00Z", turno: "noche", enfermero: "Enf. Paula Jimenez", nota: "Paciente febril, se administra antipiretico, oxigeno suplementario por canula nasal." },

  { hospitalizacion_id: "HOSP009", fecha: "2026-10-15T06:00:00Z", turno: "mañana", enfermero: "Enf. Tatiana Ruiz", nota: "Se inicia movilizacion asistida con caminador, herida quirurgica en buen estado." },

  { hospitalizacion_id: "HOSP010", fecha: "2026-10-23T08:00:00Z", turno: "mañana", enfermero: "Enf. Laura Gaviria", nota: "Control estricto de liquidos administrados y eliminados, buena tolerancia a hidratacion IV." }
]);

print("Carga adicional completa: 5 pacientes mas (PAC006-PAC010), 5 hospitalizaciones, notas, signos vitales, ordenes y notas de enfermeria.");
print("TOTAL ACUMULADO: 10 pacientes con hospitalizacion completa.");
