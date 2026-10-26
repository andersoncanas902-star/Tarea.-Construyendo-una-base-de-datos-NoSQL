# Tarea. Construyendo una base de datos NoSQL — Historia Clínica Electrónica (Hospitalización) — MongoDB

Carpeta de trabajo de la actividad. Base de datos: `hce_hospitalizacion_grupo_6` (MongoDB local).

## Estado

- [x] Esquema diseñado (`schema.json`), estrategia híbrida embebido/referenciado.
- [x] Colecciones creadas (`create_collections.js`).
- [x] 10 pacientes cargados con hospitalización completa (`insert_pacientes.js` + `insert_pacientes_extra.js`).
- [x] 4 consultas de validación ejecutadas (`queries_validacion.js`).
- [x] Capturas de evidencia tomadas (`Implementacion.png`, `Insert.png`, `Consultas_1-5.png`, en la carpeta `Tareas`).
- [x] `reflexion_etica.md`, `division_trabajo.md`, `evidencia_ia.md` completos.
- [x] Informe final armado: `Grupo6_AE2_U2.pdf` (nombre exigido por la nomenclatura del enunciado).
- [ ] Repositorio digital creado y subido.
- [ ] Entrega realizada en la plataforma del curso.

## Si necesitas volver a ejecutar los scripts

```powershell
cd "C:\Users\Usuario\OneDrive\Documentos\PB\Semestre 4\Base de datos 2\Tareas\Tarea. Construyendo una base de datos NoSQL"
mongosh
```

Dentro de mongosh:
```js
use hce_hospitalizacion_grupo_6
load("create_collections.js")
load("insert_pacientes.js")
load("insert_pacientes_extra.js")
load("queries_validacion.js")
```

## Archivos de esta carpeta

| Archivo | Contenido |
|---|---|
| `schema.json` | Esquema documental y justificación embebido/referenciado |
| `create_collections.js` | Creación de las 6 colecciones con validación e índices |
| `insert_pacientes.js` / `insert_pacientes_extra.js` | Carga de los 10 pacientes de prueba |
| `queries_validacion.js` | Las 4 consultas de validación |
| `evidencia_ia.md` | Evidencia de uso de IA |
| `reflexion_etica.md` | Reflexión ética |
| `division_trabajo.md` | División del trabajo (trabajo individual) |
| `Grupo6_AE2_U2.pdf` | Informe final para entregar |
