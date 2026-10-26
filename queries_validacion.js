// queries_validacion.js
// Ejecutar con: load("queries_validacion.js") despues de insert_pacientes.js
// 4 consultas de validacion (se pide minimo 3). Cada una imprime que esta validando.

use("hce_hospitalizacion_grupo_6");

// ================================================================
// CONSULTA 1: Pacientes hospitalizados por un diagnostico especifico
// Valida que: dado un codigo CIE10 (ej. neumonia J18.9), se puede
// encontrar rapido cuales pacientes lo tuvieron, gracias al indice
// en diagnosticos.codigo_cie10 y a los diagnosticos embebidos.
// ================================================================
print("\n=== CONSULTA 1: Pacientes con diagnostico J18.9 (Neumonia) ===");
db.hospitalizaciones.aggregate([
  { $match: { "diagnosticos.codigo_cie10": "J18.9" } }, // filtra hospitalizaciones con ese diagnostico
  {
    $lookup: { // trae los datos del paciente (estan referenciados, no embebidos)
      from: "pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" }, // $lookup devuelve array, lo convertimos en objeto
  {
    $project: { // elegimos solo los campos relevantes para el resultado
      _id: 0,
      hospitalizacion_id: "$_id",
      paciente: "$paciente.nombre_completo",
      documento: "$paciente.documento_identidad.numero",
      diagnostico: "$diagnosticos.descripcion",
      fecha_admision: 1,
      estado: 1
    }
  }
]).forEach(doc => printjson(doc));


// ================================================================
// CONSULTA 2: Evolucion cronologica de una hospitalizacion
// Valida que: se puede reconstruir, en orden de fecha, toda la
// historia de notas medicas de un paciente durante su internamiento
// (prueba de que el referenciado + indice por fecha funciona bien).
// ================================================================
print("\n=== CONSULTA 2: Evolucion cronologica de HOSP003 (Luz Dary Henao) ===");
db.notas_evolucion.find(
  { hospitalizacion_id: "HOSP003" },
  { _id: 0, fecha: 1, medico: 1, nota: 1 }
).sort({ fecha: 1 }) // orden cronologico ascendente
 .forEach(doc => printjson(doc));


// ================================================================
// CONSULTA 3: Medicamentos asignados por hospitalizacion (con datos
// del paciente y del servicio). Valida que: se puede saber, para
// cada orden medica, a que paciente y hospitalizacion pertenece,
// cruzando 3 colecciones mediante referencias.
// ================================================================
print("\n=== CONSULTA 3: Medicamentos asignados, con paciente y servicio ===");
db.ordenes_medicamento.aggregate([
  {
    $lookup: { // trae la hospitalizacion relacionada
      from: "hospitalizaciones",
      localField: "hospitalizacion_id",
      foreignField: "_id",
      as: "hosp"
    }
  },
  { $unwind: "$hosp" },
  {
    $lookup: { // desde la hospitalizacion, trae el paciente
      from: "pacientes",
      localField: "hosp.paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $project: {
      _id: 0,
      paciente: "$paciente.nombre_completo",
      servicio: "$hosp.servicio",
      medicamento: 1,
      dosis: 1,
      via: 1,
      frecuencia: 1,
      estado: 1
    }
  },
  { $sort: { paciente: 1 } }
]).forEach(doc => printjson(doc));


// ================================================================
// CONSULTA 4 (extra): Hospitalizaciones activas (pacientes que AUN
// no han sido dados de alta). Valida que: el campo "estado" y el
// subdocumento "alta: null" permiten identificar quien sigue
// internado en tiempo real, algo clave para la gestion del hospital.
// ================================================================
print("\n=== CONSULTA 4: Pacientes actualmente hospitalizados (sin alta) ===");
db.hospitalizaciones.aggregate([
  { $match: { estado: "activa" } },
  {
    $lookup: {
      from: "pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $project: {
      _id: 0,
      paciente: "$paciente.nombre_completo",
      servicio: 1,
      fecha_admision: 1,
      diagnostico_principal: { $arrayElemAt: ["$diagnosticos.descripcion", 0] }
    }
  }
]).forEach(doc => printjson(doc));
