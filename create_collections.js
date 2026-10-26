// create_collections.js
// Ejecutar con: load("create_collections.js")  dentro de mongosh, ya conectado y con "use hce_hospitalizacion_grupo_6"
// Crea las colecciones del subsistema de Hospitalizacion con validacion de esquema (JSON Schema) e indices.

use("hce_hospitalizacion_grupo_6"); // crea (o usa) la base de datos del grupo

// 1) PACIENTES: datos personales, se reutiliza entre varias hospitalizaciones (REFERENCIADO)
db.createCollection("pacientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "documento_identidad", "nombre_completo", "fecha_nacimiento", "sexo"],
      properties: {
        _id: { bsonType: "string" }, // usamos codigos legibles tipo "PAC001" en vez de ObjectId para facilitar el taller
        documento_identidad: {
          bsonType: "object",
          required: ["tipo", "numero"],
          properties: {
            tipo: { enum: ["CC", "TI", "CE", "RC"] }, // tipos de documento validos en Colombia
            numero: { bsonType: "string" }
          }
        },
        nombre_completo: { bsonType: "string" },
        fecha_nacimiento: { bsonType: "string" }, // formato ISO "YYYY-MM-DD"
        sexo: { enum: ["F", "M", "O"] },
        eps: { bsonType: "string" },
        telefono: { bsonType: "string" },
        direccion: { bsonType: "string" },
        contacto_emergencia: { bsonType: "object" }
      }
    }
  }
});
db.pacientes.createIndex({ "documento_identidad.numero": 1 }, { unique: true }); // no permite dos pacientes con la misma cedula

// 2) HOSPITALIZACIONES: documento central, referencia a paciente, EMBEBE diagnosticos y alta
db.createCollection("hospitalizaciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "paciente_id", "fecha_admision", "servicio", "estado", "diagnosticos"],
      properties: {
        _id: { bsonType: "string" },
        paciente_id: { bsonType: "string" }, // referencia logica a pacientes._id
        fecha_admision: { bsonType: "string" },
        motivo_admision: { bsonType: "string" },
        servicio: { bsonType: "string" },
        medico_tratante: { bsonType: "string" },
        estado: { enum: ["activa", "dada_de_alta"] }, // controla si ya tiene alta o sigue hospitalizado
        diagnosticos: {
          bsonType: "array", // EMBEBIDO: se consulta siempre junto con la hospitalizacion
          items: {
            bsonType: "object",
            required: ["codigo_cie10", "descripcion", "tipo"],
            properties: {
              codigo_cie10: { bsonType: "string" },
              descripcion: { bsonType: "string" },
              tipo: { enum: ["principal", "secundario"] },
              fecha: { bsonType: "string" }
            }
          }
        },
        alta: { bsonType: ["object", "null"] } // EMBEBIDO 1:1, null mientras el paciente sigue internado
      }
    }
  }
});
db.hospitalizaciones.createIndex({ paciente_id: 1 }); // acelera buscar todas las hospitalizaciones de un paciente
db.hospitalizaciones.createIndex({ "diagnosticos.codigo_cie10": 1 }); // acelera buscar pacientes por diagnostico

// 3) NOTAS DE EVOLUCION: crecen mucho en el tiempo -> REFERENCIADAS a hospitalizacion_id
db.createCollection("notas_evolucion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["hospitalizacion_id", "fecha", "medico", "nota"],
      properties: {
        hospitalizacion_id: { bsonType: "string" },
        fecha: { bsonType: "string" },
        medico: { bsonType: "string" },
        nota: { bsonType: "string" }
      }
    }
  }
});
db.notas_evolucion.createIndex({ hospitalizacion_id: 1, fecha: 1 }); // trae la evolucion cronologica de una hospitalizacion rapido

// 4) SIGNOS VITALES: alta frecuencia de escritura -> REFERENCIADOS
db.createCollection("signos_vitales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["hospitalizacion_id", "fecha"],
      properties: {
        hospitalizacion_id: { bsonType: "string" },
        fecha: { bsonType: "string" },
        temperatura_c: { bsonType: "double" },
        presion_arterial: { bsonType: "string" },
        frecuencia_cardiaca: { bsonType: "int" },
        frecuencia_respiratoria: { bsonType: "int" },
        saturacion_o2: { bsonType: "int" },
        registrado_por: { bsonType: "string" }
      }
    }
  }
});
db.signos_vitales.createIndex({ hospitalizacion_id: 1, fecha: 1 });

// 5) ORDENES DE MEDICAMENTO: se actualizan de estado independientemente -> REFERENCIADAS
db.createCollection("ordenes_medicamento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["hospitalizacion_id", "medicamento", "dosis", "via", "frecuencia", "estado"],
      properties: {
        hospitalizacion_id: { bsonType: "string" },
        medicamento: { bsonType: "string" },
        dosis: { bsonType: "string" },
        via: { bsonType: "string" },
        frecuencia: { bsonType: "string" },
        fecha_inicio: { bsonType: "string" },
        fecha_fin: { bsonType: ["string", "null"] },
        medico_ordena: { bsonType: "string" },
        estado: { enum: ["activa", "suspendida", "finalizada"] }
      }
    }
  }
});
db.ordenes_medicamento.createIndex({ hospitalizacion_id: 1 });

// 6) NOTAS DE ENFERMERIA: alta frecuencia por turno -> REFERENCIADAS
db.createCollection("notas_enfermeria", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["hospitalizacion_id", "fecha", "turno", "enfermero", "nota"],
      properties: {
        hospitalizacion_id: { bsonType: "string" },
        fecha: { bsonType: "string" },
        turno: { enum: ["mañana", "tarde", "noche"] },
        enfermero: { bsonType: "string" },
        nota: { bsonType: "string" }
      }
    }
  }
});
db.notas_enfermeria.createIndex({ hospitalizacion_id: 1, fecha: 1 });

print("Colecciones creadas correctamente:");
print(db.getCollectionNames());
