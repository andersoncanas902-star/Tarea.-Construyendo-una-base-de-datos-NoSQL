# Evidencia de uso de IA

**Herramienta usada:** Claude (Anthropic), modelo Claude Sonnet 5, a través de Claude Code.

**Qué generó directamente la IA (archivos técnicos del repositorio):**
1. El esquema NoSQL documental (híbrido embebido/referenciado) del subsistema de Hospitalización, incluyendo `schema.json` y la justificación técnica de cada decisión de diseño.
2. Los scripts de MongoDB listos para ejecutar en mongosh: `create_collections.js`, `insert_pacientes.js`, `insert_pacientes_extra.js` y `queries_validacion.js`.
3. Los datos de prueba de los 10 pacientes (nombres, diagnósticos CIE-10, notas de evolución, signos vitales, órdenes de medicamento y notas de enfermería).
4. El armado del informe final en PDF (`Grupo6_AE2_U2.pdf`), a partir del esquema, las capturas y los textos ya escritos.

**Cómo se construyó la reflexión ética (proceso distinto, no generación directa):**
La IA propuso un primer borrador basado en las decisiones técnicas del esquema, pero luego me hizo preguntas puntuales sobre mi propia postura (qué estrategia considero más riesgosa para la privacidad y por qué, y si priorizaría seguridad sobre velocidad en un sistema de salud real). Respondí con mi propio criterio — incluyendo mi analogía entre una tarjeta de crédito clonada y un historial médico filtrado — y la IA integró esas respuestas en el texto final. El análisis y la postura son míos; la IA ayudó a estructurarlo y redactarlo.

**Qué hice yo, más allá de copiar y pegar:**
- Ejecuté cada script en mi base de datos real (MongoDB local) y revisé que los datos de prueba tuvieran sentido (fechas, diagnósticos, nombres).
- Pedí ampliar de 5 a 10 pacientes para tener más evidencia, y verifiqué que las 4 consultas siguieran funcionando bien con el conjunto de datos más grande.
- Di mi propia postura ética sobre embebido/referenciado y sobre seguridad vs. velocidad, que quedó reflejada en la reflexión final.
- Revisé que los resultados de las consultas tuvieran sentido clínico antes de tomar las capturas.

**Capturas incluidas en el PDF (sección "Evidencia de IA"):**
- Captura de esta conversación con Claude: diseño del esquema y las preguntas que llevaron a mi postura en la reflexión ética.

**Nota de honestidad académica:** declaro el uso de IA tal como lo pide el enunciado, sin ocultarlo. Claude generó directamente el código, los datos de prueba y el armado del informe; la ejecución, la validación contra el motor real y el análisis ético que sustenta la reflexión son míos.
