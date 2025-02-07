export const exam = [
  {
    id: 1, // 🔥 ID en número
    title: "Examen de AWS AI",
    description: "Pon a prueba tus conocimientos sobre los servicios de IA en AWS.",
    image: "https://images.unsplash.com/photo-1628296499994-70face79ab36?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    questions: [
      {
        question: "¿Qué servicio de Amazon SageMaker ayuda a construir datasets de entrenamiento etiquetados y de alta calidad?",
        options: ["Amazon SageMaker Ground Truth", "Amazon Bedrock", "Amazon Rekognition", "Amazon Comprehend"],
        answers: ["Amazon SageMaker Ground Truth"],
        multipleCorrect: false,
        explanation: "Amazon SageMaker Ground Truth permite crear datasets de entrenamiento de alta calidad con anotaciones automáticas y supervisadas."
      },
      {
        question: "¿Cuál de los siguientes casos de uso NO es adecuado para Amazon Rekognition?",
        options: ["Enable multilingual user experiences in your applications", "Amazon Bedrock", "Amazon Rekognition", "Amazon Comprehend"],
        answers: ["Enable multilingual user experiences in your applications"],
        multipleCorrect: false,
        explanation: "Amazon Rekognition está diseñado para análisis de imágenes y videos, mientras que la creación de experiencias multilingües es mejor con Amazon Translate."
      },
      {
        question: "¿Qué servicios de AWS se recomiendan para realizar análisis de sentimientos en reseñas de clientes? (Seleccionar dos)",
        options: ["Amazon Comprehend", "Amazon Bedrock", "Amazon Rekognition", "Amazon Polly"],
        answers: ["Amazon Comprehend", "Amazon Bedrock"],
        multipleCorrect: true,
        explanation: "Amazon Comprehend es un servicio de procesamiento de lenguaje natural que permite el análisis de sentimientos, mientras que Amazon Bedrock proporciona modelos de IA generativa que pueden mejorar este análisis."
      },
      {
        question: "¿Cuáles son las mejores estrategias para especializar un modelo fundacional en un dominio específico? (Seleccionar dos)",
        options: ["Continued Pre-Training", "Domain Adaptation Fine-Tuning", "Data Augmentation", "Feature Engineering"],
        answers: ["Continued Pre-Training", "Domain Adaptation Fine-Tuning"],
        multipleCorrect: true,
        explanation: "El preentrenamiento continuo y el ajuste fino para adaptación de dominio son estrategias clave para especializar un modelo en un contexto específico."
      },
      {
        question: "¿Qué base de datos vectorial es compatible de forma nativa con Amazon Bedrock para almacenar embeddings?",
        options: ["OpenSearch Serverless vector store", "Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift"],
        answers: ["OpenSearch Serverless vector store"],
        multipleCorrect: false,
        explanation: "Amazon Bedrock es compatible con OpenSearch Serverless como solución para almacenar embeddings de forma eficiente."
      },
      {
        question: "¿Cómo funciona el aprendizaje por refuerzo?",
        options: [
          "Un modelo se entrena con un gran conjunto de datos etiquetados",
          "El aprendizaje por refuerzo implica que un agente interactúe con un entorno, tome acciones y reciba recompensas o penalizaciones, aprendiendo una política para maximizar las recompensas acumuladas en el tiempo",
          "Optimiza la selección de características mediante técnicas estadísticas",
          "Usa un modelo preentrenado para clasificar nuevos datos sin entrenamiento adicional"
        ],
        answers: [
          "El aprendizaje por refuerzo implica que un agente interactúe con un entorno, tome acciones y reciba recompensas o penalizaciones, aprendiendo una política para maximizar las recompensas acumuladas en el tiempo"
        ],
        multipleCorrect: false,
        explanation: "El aprendizaje por refuerzo permite a un agente aprender estrategias óptimas a través de la interacción con su entorno."
      },
      {
        question: "¿Qué enfoque es más adecuado para optimizar varios modelos de machine learning compartiendo información entre ellos?",
        options: ["Transfer Learning", "Hyperparameter Optimization", "Federated Learning", "Feature Engineering"],
        answers: ["Transfer Learning"],
        multipleCorrect: false,
        explanation: "Transfer Learning permite aprovechar el conocimiento aprendido en un modelo previo para mejorar el rendimiento de otro modelo en un nuevo dominio."
      },
      {
        question: "¿Cuáles son las características clave de Amazon SageMaker JumpStart? (Seleccionar dos)",
        options: [
          "Los modelos preentrenados son completamente personalizables para tu caso de uso con tus datos",
          "Puedes evaluar, comparar y seleccionar Modelos Fundacionales rápidamente con métricas predefinidas de calidad y responsabilidad",
          "Solo admite modelos de terceros sin capacidad de ajuste",
          "No permite entrenar modelos personalizados"
        ],
        answers: [
          "Los modelos preentrenados son completamente personalizables para tu caso de uso con tus datos",
          "Puedes evaluar, comparar y seleccionar Modelos Fundacionales rápidamente con métricas predefinidas de calidad y responsabilidad"
        ],
        multipleCorrect: true,
        explanation: "Amazon SageMaker JumpStart facilita la selección y personalización de modelos fundacionales preentrenados."
      },
      {
        question: "¿Cuál es un caso de uso válido para un modelo de IA generativa?",
        options: [
          "Usar IA generativa para crear imágenes fotorrealistas a partir de descripciones textuales",
          "Clasificación de transacciones fraudulentas en tiempo real",
          "Segmentación de clientes para marketing basado en clustering",
          "Optimización de rutas en logística"
        ],
        answers: ["Usar IA generativa para crear imágenes fotorrealistas a partir de descripciones textuales"],
        multipleCorrect: false,
        explanation: "La IA generativa es especialmente útil en tareas como la creación de imágenes y textos nuevos a partir de entradas textuales."
      },
      {
        question: "¿Cuáles son los componentes clave de una buena técnica de prompting en el contexto de generación de IA?",
        options: ["Instrucciones", "Contexto", "Datos de entrada", "Indicador de salida"],
        answers: ["Instrucciones", "Contexto", "Datos de entrada", "Indicador de salida"],
        multipleCorrect: true,
        explanation: "Una buena estrategia de prompting requiere instrucciones claras, contexto relevante, datos de entrada adecuados y un indicador de salida preciso."
      },
      {
        question: "En el modelo de responsabilidad compartida de AWS, ¿cuál es la división de responsabilidades entre el cliente y AWS?",
        options: [
          "AWS es responsable de la seguridad 'de' la nube, mientras que el cliente es responsable de la seguridad 'en' la nube",
          "El cliente es completamente responsable de la seguridad de su infraestructura en AWS",
          "AWS gestiona la seguridad de las aplicaciones del cliente",
          "La seguridad de la nube es exclusivamente responsabilidad del cliente"
        ],
        answers: ["AWS es responsable de la seguridad 'de' la nube, mientras que el cliente es responsable de la seguridad 'en' la nube"],
        multipleCorrect: false,
        explanation: "AWS asegura la infraestructura subyacente, mientras que el cliente debe gestionar la seguridad de sus datos y aplicaciones en la nube."
      },
      {
        question: "¿Qué solución es más adecuada para habilitar el monitoreo detallado de invocaciones de modelos en Amazon Bedrock?",
        options: [
          "Habilitar el registro de invocaciones de modelos",
          "Implementar Amazon CloudWatch",
          "Utilizar AWS X-Ray",
          "Aplicar AWS Shield"
        ],
        answers: ["Habilitar el registro de invocaciones de modelos"],
        multipleCorrect: false,
        explanation: "El registro de invocaciones de modelos permite un monitoreo detallado de todas las solicitudes y respuestas en Amazon Bedrock."
      },
      {
        question: "¿Qué modelo de embeddings es más adecuado para diferenciar significados contextuales de palabras en frases distintas?",
        options: ["BERT", "Word2Vec", "GloVe", "FastText"],
        answers: ["BERT"],
        multipleCorrect: false,
        explanation: "BERT (Bidirectional Encoder Representations from Transformers) captura el contexto bidireccional, diferenciando significados en distintos contextos."
      },
      {
        question: "¿Cuál es una de las principales ventajas de usar IA generativa en el entorno de AWS?",
        options: [
          "Automatización de la creación de datos nuevos a partir de patrones existentes",
          "Optimización de infraestructura para bases de datos SQL",
          "Reducción de costos en almacenamiento en Amazon S3",
          "Aceleración de la indexación de datos en Amazon OpenSearch"
        ],
        answers: ["Automatización de la creación de datos nuevos a partir de patrones existentes"],
        multipleCorrect: false,
        explanation: "La IA generativa permite la creación automática de contenido, lo que impulsa la innovación y mejora la productividad."
      },
      {
        question: "¿Cuáles son ejemplos de aprendizaje supervisado? (Seleccionar dos)",
        options: [
          "Red neuronal",
          "Regresión lineal",
          "Algoritmo genético",
          "Aprendizaje por refuerzo"
        ],
        answers: ["Red neuronal", "Regresión lineal"],
        multipleCorrect: true,
        explanation: "El aprendizaje supervisado implica entrenamiento con datos etiquetados, y ejemplos comunes son redes neuronales y regresión lineal."
      },
      {
        question: "¿Cuáles afirmaciones son correctas respecto a la infraestructura global de AWS? (Seleccionar dos)",
        options: [
          "Cada Zona de Disponibilidad (AZ) consiste en uno o más centros de datos discretos",
          "Cada Región de AWS consiste en un mínimo de dos Zonas de Disponibilidad (AZ)",
          "Las regiones de AWS están ubicadas en el mismo país para optimizar costos",
          "Las Zonas de Disponibilidad dependen de servidores locales de clientes"
        ],
        answers: [
          "Cada Zona de Disponibilidad (AZ) consiste en uno o más centros de datos discretos",
          "Cada Región de AWS consiste en un mínimo de dos Zonas de Disponibilidad (AZ)"
        ],
        multipleCorrect: true,
        explanation: "AWS organiza su infraestructura en Regiones con múltiples Zonas de Disponibilidad (AZ) para garantizar alta disponibilidad y resiliencia."
      },
      {
        question: "¿Cuál es el enfoque más eficiente para garantizar que las respuestas de un modelo no contengan información confidencial?",
        options: [
          "Aplicar Amazon Bedrock Guardrails",
          "Activar AWS Shield",
          "Habilitar Amazon VPC",
          "Usar AWS CloudTrail"
        ],
        answers: ["Aplicar Amazon Bedrock Guardrails"],
        multipleCorrect: false,
        explanation: "Amazon Bedrock Guardrails permite enmascarar o restringir información sensible en las respuestas generadas por modelos de IA."
      },
      {
        question: "¿Qué servicio de AWS basado en machine learning ofrece capacidades de búsqueda unificada?",
        options: ["Amazon Kendra", "Amazon Lex", "Amazon Polly", "Amazon Forecast"],
        answers: ["Amazon Kendra"],
        multipleCorrect: false,
        explanation: "Amazon Kendra es un servicio de búsqueda basado en machine learning que permite realizar búsquedas inteligentes en documentos y bases de datos."
      },
      {
        question: "¿Cómo se llaman las unidades discretas de texto que los modelos de IA procesan?",
        options: ["Tokens", "Embeddings", "Features", "Frames"],
        answers: ["Tokens"],
        multipleCorrect: false,
        explanation: "Los tokens son las unidades mínimas de texto que los modelos de lenguaje procesan, como palabras o fragmentos de palabras."
      },
      {
        question: "¿Cuáles opciones representan las diferencias clave entre Amazon Q y Amazon Bedrock? (Seleccionar dos)",
        options: [
          "Amazon Q es un asistente de IA generativa que permite crear aplicaciones preempaquetadas de IA generativa, mientras que Amazon Bedrock proporciona un entorno para construir y escalar aplicaciones de IA generativa utilizando un Modelo Fundacional (FM)",
          "Amazon Bedrock permite elegir el Modelo Fundacional subyacente, mientras que Amazon Q no ofrece esta opción",
          "Amazon Q permite a los usuarios personalizar modelos de IA fundacionales sin restricciones",
          "Amazon Bedrock solo permite el uso de modelos propietarios de AWS"
        ],
        answers: [
          "Amazon Q es un asistente de IA generativa que permite crear aplicaciones preempaquetadas de IA generativa, mientras que Amazon Bedrock proporciona un entorno para construir y escalar aplicaciones de IA generativa utilizando un Modelo Fundacional (FM)",
          "Amazon Bedrock permite elegir el Modelo Fundacional subyacente, mientras que Amazon Q no ofrece esta opción"
        ],
        multipleCorrect: true,
        explanation: "Amazon Q proporciona soluciones de IA generativa listas para usar, mientras que Amazon Bedrock permite a los desarrolladores seleccionar y ajustar modelos fundacionales."
      },
      {
        question: "Una empresa está implementando un modelo de IA generativa en Amazon Bedrock y necesita reducir los costos de uso. ¿Qué enfoque sería el más efectivo?",
        options: [
          "Reducir la cantidad de tokens en la entrada",
          "Aumentar el número de capas del modelo",
          "Habilitar auto-scaling en la infraestructura",
          "Utilizar instancias de GPU más grandes"
        ],
        answers: ["Reducir la cantidad de tokens en la entrada"],
        multipleCorrect: false,
        explanation: "Reducir la cantidad de tokens en la entrada disminuye el costo de procesamiento en modelos de IA generativa."
      },
      {
        question: "¿Qué afirmación es correcta sobre los Modelos Fundacionales (FM) en el contexto de la IA generativa?",
        options: [
          "Los FM utilizan aprendizaje auto-supervisado para crear etiquetas a partir de datos de entrada, pero el ajuste fino de un FM es un proceso de aprendizaje supervisado",
          "Los FM solo pueden entrenarse con datos etiquetados",
          "El ajuste fino de un FM siempre requiere millones de datos adicionales",
          "Los FM no pueden ser ajustados después de su entrenamiento inicial"
        ],
        answers: ["Los FM utilizan aprendizaje auto-supervisado para crear etiquetas a partir de datos de entrada, pero el ajuste fino de un FM es un proceso de aprendizaje supervisado"],
        multipleCorrect: false,
        explanation: "Los Modelos Fundacionales se entrenan de manera auto-supervisada, pero su ajuste fino se realiza mediante aprendizaje supervisado."
      },
      {
        question: "¿Qué debería pedir un desarrollador al equipo de investigación para garantizar que se seleccione el mejor modelo para una aplicación de predicción de abandono de clientes?",
        options: [
          "Definir el caso de uso de la aplicación de manera específica",
          "Usar siempre modelos de deep learning",
          "Elegir el modelo con la menor cantidad de parámetros",
          "Priorizar modelos con mayor complejidad matemática"
        ],
        answers: ["Definir el caso de uso de la aplicación de manera específica"],
        multipleCorrect: false,
        explanation: "Definir un caso de uso claro ayuda a seleccionar el modelo más adecuado para la predicción de abandono de clientes."
      },
      {
        question: "¿Cómo influye el parámetro de inferencia 'Top P' en la respuesta del modelo en Amazon Bedrock?",
        options: [
          "Influye en el porcentaje de los candidatos más probables que el modelo considera para el siguiente token",
          "Determina la cantidad de parámetros del modelo",
          "Controla la tasa de aprendizaje del modelo",
          "Afecta el almacenamiento de los embeddings generados"
        ],
        answers: ["Influye en el porcentaje de los candidatos más probables que el modelo considera para el siguiente token"],
        multipleCorrect: false,
        explanation: "El parámetro 'Top P' (nucleus sampling) ajusta el subconjunto de tokens considerados en la generación de texto."
      },
      {
        question: "¿Qué problema específico está tratando de abordar un comité de admisiones detectando el uso de IA generativa en ensayos de aplicación?",
        options: [
          "Plagio",
          "Consumo excesivo de GPU",
          "Optimización de redes neuronales",
          "Reducción de latencia en inferencia"
        ],
        answers: ["Plagio"],
        multipleCorrect: false,
        explanation: "El comité busca evitar el uso de IA generativa para generar ensayos académicos de manera fraudulenta."
      },
      {
        question: "¿Qué parámetro de inferencia se recomienda para regular el número de candidatos más probables considerados para la próxima palabra en la salida del modelo?",
        options: ["Top K", "Learning Rate", "Batch Size", "Dropout"],
        answers: ["Top K"],
        multipleCorrect: false,
        explanation: "El parámetro 'Top K' limita el número de candidatos más probables para generar texto, controlando la aleatoriedad."
      },
      {
        question: "¿A qué fase del proceso de ciencia de datos pertenece el análisis de un gran conjunto de datos para identificar patrones y tendencias?",
        options: [
          "Análisis Exploratorio de Datos (EDA)",
          "Optimización de hiperparámetros",
          "Inferencia en tiempo real",
          "Regularización de modelos"
        ],
        answers: ["Análisis Exploratorio de Datos (EDA)"],
        multipleCorrect: false,
        explanation: "El Análisis Exploratorio de Datos (EDA) permite descubrir patrones y tendencias en conjuntos de datos sin aplicar modelos aún."
      },
      {
        question: "Un chatbot de un Modelo de Lenguaje Extenso (LLM) genera respuestas aparentemente plausibles pero incorrectas. ¿Cómo se llama este fenómeno?",
        options: ["Alucinación", "Overfitting", "Desbalanceo de datos", "Regularización"],
        answers: ["Alucinación"],
        multipleCorrect: false,
        explanation: "La alucinación ocurre cuando un modelo de IA generativa produce información incorrecta pero que parece verídica."
      },
      {
        question: "¿Qué servicio de AWS sugiere para implementar soluciones impulsadas por IA para visión por computadora preentrenada y personalizable?",
        options: ["Amazon Rekognition", "Amazon Polly", "Amazon Kendra", "Amazon Forecast"],
        answers: ["Amazon Rekognition"],
        multipleCorrect: false,
        explanation: "Amazon Rekognition permite análisis de imágenes y videos con modelos preentrenados y personalizables."
      },
      {
        question: "¿Cuál sería el enfoque más efectivo para mejorar la capacidad de un modelo para generalizar en un entorno de producción?",
        options: [
          "Usar hiperparámetros para ajustar el modelo",
          "Reducir el tamaño del conjunto de datos",
          "Eliminar completamente el preentrenamiento",
          "Forzar sobreajuste en datos de entrenamiento"
        ],
        answers: ["Usar hiperparámetros para ajustar el modelo"],
        multipleCorrect: false,
        explanation: "El ajuste de hiperparámetros mejora la capacidad del modelo para generalizar a nuevos datos en producción."
      },
      {
        question: "¿Qué diferencia mejor describe los valores de Shapley y los gráficos de dependencia parcial (PDP) en el contexto de la interpretabilidad del modelo?",
        options: [
          "Los valores de Shapley proporcionan una explicación local al cuantificar la contribución de cada característica a la predicción de una instancia específica, mientras que los PDP proporcionan una explicación global mostrando el efecto marginal de una característica en las predicciones del modelo a través del conjunto de datos",
          "Los valores de Shapley y los PDP son equivalentes en cuanto a su aplicabilidad",
          "Los PDP permiten entender el impacto exacto de cada característica en cada predicción específica",
          "Los valores de Shapley solo aplican a modelos lineales"
        ],
        answers: [
          "Los valores de Shapley proporcionan una explicación local al cuantificar la contribución de cada característica a la predicción de una instancia específica, mientras que los PDP proporcionan una explicación global mostrando el efecto marginal de una característica en las predicciones del modelo a través del conjunto de datos"
        ],
        multipleCorrect: false,
        explanation: "Los valores de Shapley permiten explicaciones a nivel individual, mientras que los PDP muestran tendencias generales en los datos."
      },
      {
        question: "¿Cómo define mejor el uso de MLflow con Amazon SageMaker en la gestión de experimentos de aprendizaje automático?",
        options: [
          "Gestionar experimentos de aprendizaje automático",
          "Ejecutar inferencia en tiempo real",
          "Monitorear tráfico en redes neuronales",
          "Optimizar costos de almacenamiento en S3"
        ],
        answers: ["Gestionar experimentos de aprendizaje automático"],
        multipleCorrect: false,
        explanation: "MLflow en Amazon SageMaker permite gestionar experimentos de aprendizaje automático de forma eficiente."
      },
      {
        question: "¿Cómo define mejor el uso de MLflow con Amazon SageMaker en la gestión de experimentos de aprendizaje automático?",
        options: [
          "Gestionar experimentos de aprendizaje automático",
          "Ejecutar inferencia en tiempo real",
          "Monitorear tráfico en redes neuronales",
          "Optimizar costos de almacenamiento en S3"
        ],
        answers: ["Gestionar experimentos de aprendizaje automático"],
        multipleCorrect: false,
        explanation: "MLflow en Amazon SageMaker permite gestionar experimentos de aprendizaje automático de forma eficiente."
      },
      {
        question: "¿Qué método es más adecuado para evaluar el rendimiento de un modelo de clasificación?",
        options: ["Matriz de confusión", "Rendimiento de GPU", "BLEU Score", "Mean Squared Error"],
        answers: ["Matriz de confusión"],
        multipleCorrect: false,
        explanation: "La matriz de confusión es una herramienta fundamental para evaluar modelos de clasificación."
      },
      {
        question: "¿Cómo funcionan los modelos Transformer?",
        options: [
          "Utilizan un mecanismo de auto-atención e implementan embeddings contextuales",
          "Usan solo redes neuronales recurrentes",
          "Dependen exclusivamente de modelos lineales",
          "Funcionan con reglas predefinidas sin entrenamiento"
        ],
        answers: ["Utilizan un mecanismo de auto-atención e implementan embeddings contextuales"],
        multipleCorrect: false,
        explanation: "Los modelos Transformer se basan en la auto-atención y embeddings contextuales para comprender relaciones entre palabras."
      },
      {
        question: "¿Qué recomiendas para crear una aplicación generativa de IA en Amazon Bedrock para optimizar el monitoreo de niveles de inventario y datos de ventas?",
        options: ["Agents for Amazon Bedrock", "Amazon Rekognition", "Amazon Polly", "Amazon Redshift"],
        answers: ["Agents for Amazon Bedrock"],
        multipleCorrect: false,
        explanation: "Agents for Amazon Bedrock permite construir aplicaciones generativas optimizadas para diversas tareas empresariales."
      },
      {
        question: "¿Qué servicio de AWS está diseñado específicamente para proporcionar información sobre las predicciones del modelo explicando cómo las características de entrada contribuyen a la salida final?",
        options: ["Amazon SageMaker Clarify", "Amazon Bedrock", "Amazon Kendra", "AWS Shield"],
        answers: ["Amazon SageMaker Clarify"],
        multipleCorrect: false,
        explanation: "Amazon SageMaker Clarify ayuda a interpretar modelos de ML y explicar su razonamiento."
      },
      {
        question: "¿Qué solución recomiendas para implementar soporte gestionado en Amazon Bedrock para un flujo de trabajo de Generación Aumentada por Recuperación (RAG)?",
        options: ["Knowledge Bases for Amazon Bedrock", "Amazon Kendra", "Amazon Comprehend", "Amazon Rekognition"],
        answers: ["Knowledge Bases for Amazon Bedrock"],
        multipleCorrect: false,
        explanation: "Knowledge Bases for Amazon Bedrock permite implementar flujos de trabajo optimizados para RAG."
      },
      {
        question: "¿Qué tipo de sesgo es más probable que cause un modelo de IA que identifica desproporcionadamente individuos de un grupo étnico específico debido a un desequilibrio en los datos de entrenamiento?",
        options: ["Sesgo de muestreo (Sampling bias)", "Sesgo de selección (Selection bias)", "Sobreajuste (Overfitting)", "Submuestreo (Undersampling)"],
        answers: ["Sesgo de muestreo (Sampling bias)"],
        multipleCorrect: false,
        explanation: "El sesgo de muestreo ocurre cuando los datos de entrenamiento no representan adecuadamente a todos los grupos de población."
      },
      {
        question: "¿Cómo se llama el concepto que define la cantidad máxima de texto o caracteres que un modelo de IA puede procesar a la vez?",
        options: ["Ventana de contexto (Context window)", "Tasa de aprendizaje", "Embedding dimensionality", "Batch size"],
        answers: ["Ventana de contexto (Context window)"],
        multipleCorrect: false,
        explanation: "La ventana de contexto limita la cantidad de tokens que un modelo puede procesar simultáneamente."
      },
      {
        question: "¿Qué servicios de AWS recomiendas para desarrollar soluciones basadas en LLM en este entorno? (Seleccionar dos)",
        options: ["Amazon SageMaker JumpStart", "Amazon Bedrock", "AWS Lambda", "Amazon Aurora"],
        answers: ["Amazon SageMaker JumpStart", "Amazon Bedrock"],
        multipleCorrect: true,
        explanation: "Amazon SageMaker JumpStart y Amazon Bedrock proporcionan herramientas optimizadas para el desarrollo de aplicaciones basadas en LLM."
      },
      {
        question: "¿Qué técnicas de IA generativa se usan en el flujo de trabajo de la aplicación web de Amazon Q? (Seleccionar dos)",
        options: [
          "Large Language Model (LLM)",
          "Retrieval-Augmented Generation (RAG)",
          "Regresión logística",
          "Transformers sin embeddings"
        ],
        answers: ["Large Language Model (LLM)", "Retrieval-Augmented Generation (RAG)"],
        multipleCorrect: true,
        explanation: "Amazon Q usa modelos LLM y RAG para mejorar la generación y recuperación de información."
      },
      {
        question: "¿Qué servicios de AWS recomendarías para realizar análisis de sentimientos en llamadas de audio de servicio al cliente?",
        options: ["Amazon Transcribe", "Amazon Comprehend", "Amazon Rekognition", "AWS Shield"],
        answers: ["Amazon Transcribe", "Amazon Comprehend"],
        multipleCorrect: true,
        explanation: "Amazon Transcribe convierte audio en texto, y Amazon Comprehend analiza los sentimientos en el texto generado."
      },
      {
        question: "¿Qué modelo de precios sería más adecuado para una empresa que busca flexibilidad y no está segura de la frecuencia con la que usará Amazon Bedrock?",
        options: [
          "On-demand pricing",
          "Reservar capacidad fija",
          "Comprar instancias dedicadas",
          "Licencia perpetua"
        ],
        answers: ["On-demand pricing"],
        multipleCorrect: false,
        explanation: "El modelo de pago por uso (on-demand) es ideal para empresas con uso variable de Amazon Bedrock."
      },
      {
        question: "¿Qué enfoque sería más adecuado para ajustar finamente un modelo fundacional en Amazon Bedrock para el análisis de texto médico?",
        options: [
          "Provisioned Throughput mode",
          "Fine-tuning on demand",
          "Data augmentation",
          "Self-supervised learning"
        ],
        answers: ["Provisioned Throughput mode"],
        multipleCorrect: false,
        explanation: "Provisioned Throughput mode permite reservar una capacidad específica para la inferencia del modelo en Amazon Bedrock."
      },
      {
        question: "¿Qué recomendarías al departamento de marketing de una empresa de medios que quiere usar Amazon Bedrock para crear guiones creativos para una próxima campaña publicitaria?",
        options: [
          "Usar una temperatura más alta para obtener respuestas más creativas",
          "Reducir el tamaño del modelo para mejorar la eficiencia",
          "Desactivar la generación de tokens repetitivos",
          "Configurar restricciones de longitud de texto"
        ],
        answers: ["Usar una temperatura más alta para obtener respuestas más creativas"],
        multipleCorrect: false,
        explanation: "Aumentar la temperatura en Amazon Bedrock permite generar respuestas más creativas y variadas."
      },
      {
        question: "Una empresa minorista tiene catálogos de productos en formato PDF y busca proporcionar respuestas relevantes y actualizadas a consultas de clientes a través de su chatbot impulsado por Amazon Bedrock. ¿Qué enfoque representa la solución más rentable?",
        options: [
          "Utilizar un sistema de Generación Aumentada por Recuperación (RAG) indexando los catálogos PDF",
          "Entrenar un modelo personalizado con todos los productos",
          "Generar embeddings de todos los productos en una base de datos relacional",
          "Aumentar la memoria del chatbot para almacenar más respuestas predefinidas"
        ],
        answers: ["Utilizar un sistema de Generación Aumentada por Recuperación (RAG) indexando los catálogos PDF"],
        multipleCorrect: false,
        explanation: "RAG permite a los chatbots acceder a información actualizada sin necesidad de reentrenar el modelo."
      },
      {
        question: "El departamento de marketing de una empresa minorista quiere excluir nombres de marcas competidoras o temas sensibles del contenido producido mediante prompts de IA generativa. ¿Qué técnica de prompting representa este caso de uso?",
        options: [
          "Negative prompting",
          "Few-shot prompting",
          "Temperature control",
          "Data augmentation"
        ],
        answers: ["Negative prompting"],
        multipleCorrect: false,
        explanation: "Negative prompting permite restringir palabras o temas no deseados en las respuestas generadas."
      },
      {
        question: "¿Cuál es una diferencia clave entre Foundation Models (FM) y Large Language Models (LLM) en el contexto de la IA generativa?",
        options: [
          "Foundation Models sirven como base para diversas aplicaciones de IA, mientras que los LLM están especializados en comprensión y generación de lenguaje humano",
          "Los FM son modelos más pequeños que los LLM",
          "LLM solo se pueden entrenar en Amazon Bedrock",
          "Los FM no pueden ser ajustados para tareas específicas"
        ],
        answers: [
          "Foundation Models sirven como base para diversas aplicaciones de IA, mientras que los LLM están especializados en comprensión y generación de lenguaje humano"
        ],
        multipleCorrect: false,
        explanation: "Los FM proporcionan capacidades amplias de IA, mientras que los LLM se enfocan en procesamiento de lenguaje natural."
      },
      {
        question: "¿Cuál de las siguientes opciones resume mejor la diferencia entre inferencia y evaluación de modelos en IA generativa?",
        options: [
          "La evaluación compara modelos para determinar el mejor para un caso de uso, mientras que la inferencia es el proceso de generar respuestas a partir de una entrada",
          "La inferencia siempre es más costosa que la evaluación",
          "La evaluación se realiza solo después de entrenar el modelo",
          "La inferencia mejora el modelo sin necesidad de reentrenarlo"
        ],
        answers: [
          "La evaluación compara modelos para determinar el mejor para un caso de uso, mientras que la inferencia es el proceso de generar respuestas a partir de una entrada"
        ],
        multipleCorrect: false,
        explanation: "Evaluar un modelo ayuda a seleccionar el más adecuado, mientras que la inferencia es el uso del modelo para generar respuestas."
      },
      {
        question: "¿Qué solución de base de datos sería más apropiada para una empresa que usa Amazon Bedrock y RAG para mejorar el soporte al cliente?",
        options: [
          "Amazon OpenSearch Service",
          "Amazon DynamoDB",
          "Amazon S3",
          "Amazon Redshift"
        ],
        answers: ["Amazon OpenSearch Service"],
        multipleCorrect: false,
        explanation: "Amazon OpenSearch Service es ideal para búsquedas rápidas y recuperación de información en sistemas de soporte con RAG."
      },
      {
        question: "Una empresa ha desarrollado un modelo generador de imágenes basado en IA, pero ha notado que produce resultados sesgados debido a datos desbalanceados. ¿Cuál sería la estrategia más adecuada para abordar este problema?",
        options: [
          "Aumentar los datos para incluir instancias de grupos subrepresentados",
          "Reducir el tamaño del conjunto de datos",
          "Eliminar completamente las imágenes problemáticas",
          "Usar un modelo de menor capacidad"
        ],
        answers: ["Aumentar los datos para incluir instancias de grupos subrepresentados"],
        multipleCorrect: false,
        explanation: "El aumento de datos con ejemplos representativos ayuda a mitigar sesgos en los modelos generativos."
      },
      {
        question: "¿Qué servicio de AWS potencia las funcionalidades principales de Amazon Q Developer?",
        options: ["Amazon Bedrock", "Amazon SageMaker", "AWS Lambda", "Amazon Kendra"],
        answers: ["Amazon Bedrock"],
        multipleCorrect: false,
        explanation: "Amazon Q Developer se basa en Amazon Bedrock para generar respuestas y recomendaciones avanzadas."
      },
      {
        question: "Una empresa de comercio electrónico usa un chatbot con Amazon Bedrock y desea que mejore continuamente basándose en interacciones con clientes en tiempo real. ¿Qué enfoque sería el más adecuado?",
        options: [
          "Aplicar aprendizaje por refuerzo (Reinforcement Learning)",
          "Reducir el tamaño del modelo",
          "Configurar respuestas predefinidas",
          "Entrenar un modelo desde cero cada semana"
        ],
        answers: ["Aplicar aprendizaje por refuerzo (Reinforcement Learning)"],
        multipleCorrect: false,
        explanation: "El aprendizaje por refuerzo permite mejorar el chatbot a partir de interacciones reales y retroalimentación de los usuarios."
      },
      {
        question: "¿Qué servicio de Amazon SageMaker puede ayudar a monitorear y gestionar modelos implementados en endpoints?",
        options: ["Amazon SageMaker Model Dashboard", "Amazon S3", "Amazon Kendra", "AWS Glue"],
        answers: ["Amazon SageMaker Model Dashboard"],
        multipleCorrect: false,
        explanation: "Amazon SageMaker Model Dashboard proporciona herramientas para monitorear y gestionar modelos en producción."
      },
      {
        question: "¿Qué enfoque recomendarías para mejorar la precisión de los modelos de machine learning de una empresa?",
        options: ["Incrementar el número de épocas (epochs)", "Reducir la cantidad de datos de entrenamiento", "Aplicar solo regularización", "Eliminar hiperparámetros"],
        answers: ["Incrementar el número de épocas (epochs)"],
        multipleCorrect: false,
        explanation: "Incrementar las épocas permite que el modelo aprenda mejor los patrones de los datos."
      },
      {
        question: "Una empresa está utilizando un Modelo de Lenguaje Extenso (LLM) en Amazon Bedrock y quiere regular la creatividad de las respuestas del modelo. ¿Cuál de los siguientes parámetros de inferencia recomendarías para el caso de uso dado?",
        options: ["Temperature", "Batch Size", "Learning Rate", "Dropout"],
        answers: ["Temperature"],
        multipleCorrect: false,
        explanation: "El parámetro Temperature controla la creatividad del modelo ajustando la aleatoriedad en la generación de texto."
      },
      {
        question: "Una empresa de servicios financieros está desarrollando un modelo de Deep Learning para detectar transacciones fraudulentas en tiempo real. ¿Cómo operan las redes neuronales en este contexto?",
        options: [
          "Las redes neuronales operan almacenando todos los posibles resultados y seleccionando el más apropiado para cada entrada",
          "Las redes neuronales aprenden a realizar tareas al ser programadas explícitamente con reglas para cada tarea",
          "Las redes neuronales dependen únicamente de fórmulas matemáticas predefinidas y no aprenden de los datos",
          "Las redes neuronales consisten en capas de nodos (neuronas) que procesan datos de entrada y ajustan pesos basados en patrones detectados"
        ],
        answers: ["Las redes neuronales consisten en capas de nodos (neuronas) que procesan datos de entrada y ajustan pesos basados en patrones detectados"],
        multipleCorrect: false,
        explanation: "Las redes neuronales utilizan pesos ajustables y múltiples capas para aprender patrones en los datos."
      },
      {
        question: "Una empresa de medios está desarrollando aplicaciones de IA generativa en AWS. ¿Qué estrategia de seguridad es clave para proteger los modelos de ataques adversariales?",
        options: [
          "Aplicar múltiples capas de medidas de seguridad, incluyendo la validación de entradas",
          "Reducir el tamaño del modelo para disminuir el impacto de posibles ataques",
          "Limitar el acceso a los modelos solo a usuarios internos",
          "Configurar modelos en entornos de baja latencia para minimizar riesgos"
        ],
        answers: ["Aplicar múltiples capas de medidas de seguridad, incluyendo la validación de entradas"],
        multipleCorrect: false,
        explanation: "La validación de entradas y múltiples capas de seguridad protegen los modelos de ataques adversariales."
      },
      {
        question: "Una empresa tecnológica está considerando usar Amazon Web Services (AWS). ¿En qué categoría de servicio en la nube encaja AWS?",
        options: ["Infraestructura como Servicio (IaaS)", "Plataforma como Servicio (PaaS)", "Software como Servicio (SaaS)", "Función como Servicio (FaaS)"],
        answers: ["Infraestructura como Servicio (IaaS)"],
        multipleCorrect: false,
        explanation: "AWS ofrece Infraestructura como Servicio (IaaS), proporcionando recursos de cómputo, almacenamiento y redes."
      },
      {
        question: "Una empresa minorista está iniciando un proyecto de aprendizaje automático. ¿Cuál es el mayor desafío que puede enfrentar?",
        options: [
          "Dificultad para recopilar y preparar datos de alta calidad para entrenar modelos",
          "Escasez de herramientas de aprendizaje automático en AWS",
          "Limitaciones en la capacidad de cómputo para entrenar modelos",
          "Falta de algoritmos eficientes para el aprendizaje automático"
        ],
        answers: ["Dificultad para recopilar y preparar datos de alta calidad para entrenar modelos"],
        multipleCorrect: false,
        explanation: "La recopilación y preparación de datos de alta calidad es un desafío crítico para el éxito de los modelos de aprendizaje automático."
      },
      {
        question: "Una empresa de atención médica está evaluando el uso de Modelos Fundamentales (FMs). ¿Cuál de las siguientes afirmaciones es correcta?",
        options: [
          "Los FMs usan conjuntos de datos de entrenamiento no etiquetados para aprendizaje autosupervisado",
          "Los FMs requieren datos altamente estructurados para ser entrenados",
          "Los FMs solo pueden ser ajustados con aprendizaje supervisado",
          "Los FMs están limitados a tareas de procesamiento de texto"
        ],
        answers: ["Los FMs usan conjuntos de datos de entrenamiento no etiquetados para aprendizaje autosupervisado"],
        multipleCorrect: false,
        explanation: "Los Modelos Fundamentales (FMs) utilizan aprendizaje autosupervisado en grandes volúmenes de datos no etiquetados."
      },
      {
        question: "Una empresa minorista está desarrollando un modelo de aprendizaje automático para predecir la pérdida de clientes. ¿Cuál es una afirmación correcta sobre los conjuntos de datos utilizados?",
        options: [
          "El conjunto de prueba se utiliza para determinar qué tan bien generaliza el modelo",
          "Los conjuntos de validación son opcionales",
          "Los datos de entrenamiento deben incluir únicamente datos futuros",
          "El conjunto de prueba debe ser idéntico al conjunto de entrenamiento"
        ],
        answers: ["El conjunto de prueba se utiliza para determinar qué tan bien generaliza el modelo", "Los conjuntos de validación son opcionales"],
        multipleCorrect: true,
        explanation: "El conjunto de prueba evalúa la generalización del modelo, mientras que los conjuntos de validación ayudan a optimizar hiperparámetros."
      },
      {
        question: "Una empresa de atención médica está considerando migrar su infraestructura local a AWS Cloud. ¿Cuál es una afirmación correcta sobre la computación en la nube?",
        options: [
          "La computación en la nube se refiere a la entrega bajo demanda de recursos y aplicaciones de TI a través de internet",
          "Los entornos en la nube requieren hardware dedicado en las instalaciones del cliente",
          "Las aplicaciones en la nube solo pueden ejecutarse en centros de datos propietarios",
          "AWS no admite almacenamiento de datos en la nube"
        ],
        answers: ["La computación en la nube se refiere a la entrega bajo demanda de recursos y aplicaciones de TI a través de internet"],
        multipleCorrect: false,
        explanation: "La computación en la nube permite acceder a recursos bajo demanda sin necesidad de hardware local."
      },
      {
        question: "Una empresa de atención médica está implementando modelos de IA usando Amazon SageMaker. ¿Qué afirmación es correcta sobre las tarjetas de modelos?",
        options: [
          "Las tarjetas de modelos de SageMaker incluyen información sobre el modelo, como su uso previsto y limitaciones",
          "Las tarjetas de modelos de SageMaker solo contienen metadatos básicos",
          "Los modelos entrenados en SageMaker no requieren tarjetas de modelos",
          "Las tarjetas de modelos solo están disponibles para modelos de terceros"
        ],
        answers: ["Las tarjetas de modelos de SageMaker incluyen información sobre el modelo, como su uso previsto y limitaciones"],
        multipleCorrect: false,
        explanation: "Las tarjetas de modelos en SageMaker proporcionan documentación sobre el uso y limitaciones de cada modelo."
      },
      {
        question: "Una empresa de servicios financieros está implementando modelos de aprendizaje automático para automatizar la detección de fraudes. ¿Qué servicios de AWS pueden ayudar en este caso?",
        options: [
          "Amazon SageMaker Model Monitor",
          "Amazon Augmented AI (Amazon A2I)",
          "Amazon Rekognition",
          "Amazon Polly"
        ],
        answers: ["Amazon SageMaker Model Monitor", "Amazon Augmented AI (Amazon A2I)"],
        multipleCorrect: true,
        explanation: "Model Monitor permite supervisar modelos en producción, mientras que A2I ayuda a incorporar revisión humana cuando es necesario."
      },
      {
        question: "Una empresa está utilizando Amazon Bedrock y desea establecer un límite máximo en el número de tokens devueltos en la respuesta del modelo. ¿Qué parámetro de inferencia debe ajustar?",
        options: ["Longitud de la respuesta (Response length)", "Temperature", "Top-K", "Batch Size"],
        answers: ["Longitud de la respuesta (Response length)"],
        multipleCorrect: false,
        explanation: "El parámetro 'Longitud de la respuesta' controla la cantidad máxima de tokens generados por el modelo."
      },
      {
        question: "Una empresa de logística está explorando el uso de modelos de aprendizaje automático para optimizar las operaciones de la cadena de suministro. ¿Qué afirmación es correcta sobre estos modelos?",
        options: [
          "Los modelos de aprendizaje automático pueden ser deterministas, probabilísticos o una combinación de ambos.",
          "Solo existen modelos de aprendizaje automático deterministas.",
          "Los modelos probabilísticos no se utilizan en la optimización de cadenas de suministro.",
          "El aprendizaje automático no puede aplicarse a la logística."
        ],
        answers: ["Los modelos de aprendizaje automático pueden ser deterministas, probabilísticos o una combinación de ambos."],
        multipleCorrect: false,
        explanation: "Los modelos pueden generar predicciones deterministas o probabilísticas dependiendo del enfoque utilizado."
      },
      {
        question: "Una firma legal busca implementar una solución de IA para generar respuestas detalladas y precisas a las consultas de los clientes. ¿Qué soluciones pueden ayudar?",
        options: [
          "Chatbot para consultas médicas",
          "Chatbot para servicio al cliente",
          "Amazon Rekognition",
          "Amazon Polly"
        ],
        answers: ["Chatbot para servicio al cliente"],
        multipleCorrect: false,
        explanation: "Un chatbot bien entrenado puede ayudar a responder consultas legales basándose en documentos preexistentes."
      },
      {
        question: "Una empresa tecnológica está desarrollando una solución impulsada por IA y necesita diseñar prompts efectivos para su modelo generativo. ¿Qué técnica de prompting es la más adecuada?",
        options: [
          "Encadenamiento de pensamiento (Chain-of-thought prompting)",
          "Temperature",
          "Data Augmentation",
          "Aprendizaje Supervisado"
        ],
        answers: ["Encadenamiento de pensamiento (Chain-of-thought prompting)"],
        multipleCorrect: false,
        explanation: "El encadenamiento de pensamiento ayuda a los modelos generativos a generar respuestas más estructuradas y razonadas."
      },
      {
        question: "Una empresa de atención médica está construyendo múltiples modelos de aprendizaje automático usando Amazon SageMaker. ¿Qué servicio de AWS puede ayudar a administrar estos modelos?",
        options: [
          "Amazon SageMaker Model Dashboard",
          "Amazon OpenSearch",
          "Amazon DynamoDB",
          "AWS Lambda"
        ],
        answers: ["Amazon SageMaker Model Dashboard"],
        multipleCorrect: false,
        explanation: "SageMaker Model Dashboard permite monitorear y gestionar múltiples modelos desplegados."
      },
      {
        question: "Una empresa minorista está explorando soluciones avanzadas de IA para mejorar la experiencia del cliente al integrar tanto datos visuales como textuales. ¿Qué tipo de modelo es más adecuado?",
        options: [
          "Un modelo multimodal puede aceptar una combinación de tipos de entrada como audio/texto y crear una combinación de tipos de salida como video/imagen.",
          "Un modelo supervisado con datos tabulares exclusivamente",
          "Un modelo basado en regresión lineal",
          "Un modelo basado en clustering de datos"
        ],
        answers: [
          "Un modelo multimodal puede aceptar una combinación de tipos de entrada como audio/texto y crear una combinación de tipos de salida como video/imagen."
        ],
        multipleCorrect: false,
        explanation: "Los modelos multimodales pueden procesar múltiples tipos de datos simultáneamente."
      },
      {
        question: "Una empresa minorista quiere permitir a sus analistas de negocio aprovechar el aprendizaje automático sin necesidad de habilidades extensivas de codificación. ¿Qué servicio de AWS es más adecuado?",
        options: ["Amazon SageMaker Canvas", "Amazon Rekognition", "Amazon Kendra", "AWS Glue"],
        answers: ["Amazon SageMaker Canvas"],
        multipleCorrect: false,
        explanation: "SageMaker Canvas permite construir modelos de aprendizaje automático sin necesidad de escribir código."
      },
      {
        question: "Una empresa de servicios financieros está implementando modelos de IA para evaluar el riesgo crediticio. ¿Cuál es la diferencia entre interpretabilidad y explicabilidad?",
        options: [
          "La interpretabilidad consiste en comprender los mecanismos internos de un modelo de aprendizaje automático, mientras que la explicabilidad se centra en proporcionar razones comprensibles para las predicciones y comportamientos del modelo a las partes interesadas.",
          "Interpretabilidad y explicabilidad son términos intercambiables.",
          "La explicabilidad es más importante que la interpretabilidad en todos los casos.",
          "Un modelo interpretable nunca requiere explicabilidad adicional."
        ],
        answers: [
          "La interpretabilidad consiste en comprender los mecanismos internos de un modelo de aprendizaje automático, mientras que la explicabilidad se centra en proporcionar razones comprensibles para las predicciones y comportamientos del modelo a las partes interesadas."
        ],
        multipleCorrect: false,
        explanation: "La interpretabilidad permite analizar cómo funciona un modelo, mientras que la explicabilidad ayuda a comunicar sus decisiones."
      },
      {
        question: "Una empresa minorista está construyendo un modelo de aprendizaje automático para predecir la demanda de sus productos. ¿Cuál es la diferencia entre sobreajuste y subajuste?",
        options: [
          "El sobreajuste ocurre cuando un modelo funciona bien con los datos de entrenamiento pero mal con datos nuevos, mientras que el subajuste ocurre cuando un modelo funciona mal tanto con los datos de entrenamiento como con los nuevos.",
          "El sobreajuste siempre es preferible al subajuste.",
          "El subajuste significa que el modelo es demasiado complejo.",
          "El sobreajuste indica que el modelo no ha aprendido lo suficiente."
        ],
        answers: [
          "El sobreajuste ocurre cuando un modelo funciona bien con los datos de entrenamiento pero mal con datos nuevos, mientras que el subajuste ocurre cuando un modelo funciona mal tanto con los datos de entrenamiento como con los nuevos."
        ],
        multipleCorrect: false,
        explanation: "El sobreajuste indica que el modelo se ha especializado demasiado en los datos de entrenamiento y no generaliza bien a nuevos datos."
      },
       {
        question: "Una empresa de servicios financieros está implementando modelos de aprendizaje automático para automatizar la detección de fraudes. ¿Qué servicios de AWS pueden ayudar en este caso?",
        options: [
          "Amazon SageMaker Model Monitor",
          "Amazon Augmented AI (Amazon A2I)",
          "Amazon Rekognition",
          "Amazon Polly"
        ],
        answers: ["Amazon SageMaker Model Monitor", "Amazon Augmented AI (Amazon A2I)"],
        multipleCorrect: true,
        explanation: "Model Monitor permite supervisar modelos en producción, mientras que A2I ayuda a incorporar revisión humana cuando es necesario."
      },
      {
        question: "Una empresa está utilizando Amazon Bedrock y desea establecer un límite máximo en el número de tokens devueltos en la respuesta del modelo. ¿Qué parámetro de inferencia debe ajustar?",
        options: ["Longitud de la respuesta (Response length)", "Temperature", "Top-K", "Batch Size"],
        answers: ["Longitud de la respuesta (Response length)"],
        multipleCorrect: false,
        explanation: "El parámetro 'Longitud de la respuesta' controla la cantidad máxima de tokens generados por el modelo."
      },
      {
        question: "Una empresa de logística está explorando el uso de modelos de aprendizaje automático para optimizar las operaciones de la cadena de suministro. ¿Qué afirmación es correcta sobre estos modelos?",
        options: [
          "Los modelos de aprendizaje automático pueden ser deterministas, probabilísticos o una combinación de ambos.",
          "Solo existen modelos de aprendizaje automático deterministas.",
          "Los modelos probabilísticos no se utilizan en la optimización de cadenas de suministro.",
          "El aprendizaje automático no puede aplicarse a la logística."
        ],
        answers: ["Los modelos de aprendizaje automático pueden ser deterministas, probabilísticos o una combinación de ambos."],
        multipleCorrect: false,
        explanation: "Los modelos pueden generar predicciones deterministas o probabilísticas dependiendo del enfoque utilizado."
      },
      {
        question: "Una firma legal busca implementar una solución de IA para generar respuestas detalladas y precisas a las consultas de los clientes. ¿Qué soluciones pueden ayudar?",
        options: [
          "Chatbot para consultas médicas",
          "Chatbot para servicio al cliente",
          "Amazon Rekognition",
          "Amazon Polly"
        ],
        answers: ["Chatbot para servicio al cliente"],
        multipleCorrect: false,
        explanation: "Un chatbot bien entrenado puede ayudar a responder consultas legales basándose en documentos preexistentes."
      },
      {
        question: "Una empresa tecnológica está desarrollando una solución impulsada por IA y necesita diseñar prompts efectivos para su modelo generativo. ¿Qué técnica de prompting es la más adecuada?",
        options: [
          "Encadenamiento de pensamiento (Chain-of-thought prompting)",
          "Temperature",
          "Data Augmentation",
          "Aprendizaje Supervisado"
        ],
        answers: ["Encadenamiento de pensamiento (Chain-of-thought prompting)"],
        multipleCorrect: false,
        explanation: "El encadenamiento de pensamiento ayuda a los modelos generativos a generar respuestas más estructuradas y razonadas."
      },
      {
        question: "Una empresa de atención médica está construyendo múltiples modelos de aprendizaje automático usando Amazon SageMaker. ¿Qué servicio de AWS puede ayudar a administrar estos modelos?",
        options: [
          "Amazon SageMaker Model Dashboard",
          "Amazon OpenSearch",
          "Amazon DynamoDB",
          "AWS Lambda"
        ],
        answers: ["Amazon SageMaker Model Dashboard"],
        multipleCorrect: false,
        explanation: "SageMaker Model Dashboard permite monitorear y gestionar múltiples modelos desplegados."
      },
      {
        question: "Una empresa minorista está explorando soluciones avanzadas de IA para mejorar la experiencia del cliente al integrar tanto datos visuales como textuales. ¿Qué tipo de modelo es más adecuado?",
        options: [
          "Un modelo multimodal puede aceptar una combinación de tipos de entrada como audio/texto y crear una combinación de tipos de salida como video/imagen.",
          "Un modelo supervisado con datos tabulares exclusivamente",
          "Un modelo basado en regresión lineal",
          "Un modelo basado en clustering de datos"
        ],
        answers: [
          "Un modelo multimodal puede aceptar una combinación de tipos de entrada como audio/texto y crear una combinación de tipos de salida como video/imagen."
        ],
        multipleCorrect: false,
        explanation: "Los modelos multimodales pueden procesar múltiples tipos de datos simultáneamente."
      },
      {
        question: "Una empresa minorista quiere permitir a sus analistas de negocio aprovechar el aprendizaje automático sin necesidad de habilidades extensivas de codificación. ¿Qué servicio de AWS es más adecuado?",
        options: ["Amazon SageMaker Canvas", "Amazon Rekognition", "Amazon Kendra", "AWS Glue"],
        answers: ["Amazon SageMaker Canvas"],
        multipleCorrect: false,
        explanation: "SageMaker Canvas permite construir modelos de aprendizaje automático sin necesidad de escribir código."
      },
      {
        question: "Una empresa de servicios financieros está implementando modelos de IA para evaluar el riesgo crediticio. ¿Cuál es la diferencia entre interpretabilidad y explicabilidad?",
        options: [
          "La interpretabilidad consiste en comprender los mecanismos internos de un modelo de aprendizaje automático, mientras que la explicabilidad se centra en proporcionar razones comprensibles para las predicciones y comportamientos del modelo a las partes interesadas.",
          "Interpretabilidad y explicabilidad son términos intercambiables.",
          "La explicabilidad es más importante que la interpretabilidad en todos los casos.",
          "Un modelo interpretable nunca requiere explicabilidad adicional."
        ],
        answers: [
          "La interpretabilidad consiste en comprender los mecanismos internos de un modelo de aprendizaje automático, mientras que la explicabilidad se centra en proporcionar razones comprensibles para las predicciones y comportamientos del modelo a las partes interesadas."
        ],
        multipleCorrect: false,
        explanation: "La interpretabilidad permite analizar cómo funciona un modelo, mientras que la explicabilidad ayuda a comunicar sus decisiones."
      },
      {
        question: "Una empresa minorista está construyendo un modelo de aprendizaje automático para predecir la demanda de sus productos. ¿Cuál es la diferencia entre sobreajuste y subajuste?",
        options: [
          "El sobreajuste ocurre cuando un modelo funciona bien con los datos de entrenamiento pero mal con datos nuevos, mientras que el subajuste ocurre cuando un modelo funciona mal tanto con los datos de entrenamiento como con los nuevos.",
          "El sobreajuste siempre es preferible al subajuste.",
          "El subajuste significa que el modelo es demasiado complejo.",
          "El sobreajuste indica que el modelo no ha aprendido lo suficiente."
        ],
        answers: [
          "El sobreajuste ocurre cuando un modelo funciona bien con los datos de entrenamiento pero mal con datos nuevos, mientras que el subajuste ocurre cuando un modelo funciona mal tanto con los datos de entrenamiento como con los nuevos."
        ],
        multipleCorrect: false,
        explanation: "El sobreajuste indica que el modelo se ha especializado demasiado en los datos de entrenamiento y no generaliza bien a nuevos datos."
      },
      {
        question: "Una empresa global de comercio electrónico está aprovechando un Modelo Fundacional (FM) para mejorar su motor de recomendaciones de productos. ¿Cuál de las siguientes opciones es correcta con respecto a las técnicas utilizadas para mejorar el rendimiento de un Modelo Fundacional (FM)?",
        options: [
          "El ajuste fino cambia los pesos del FM mientras que la generación aumentada por recuperación (RAG) no cambia los pesos del FM.",
          "RAG cambia los pesos del FM mientras que el ajuste fino no los modifica.",
          "Ambos métodos requieren reentrenamiento del modelo desde cero.",
          "Solo los modelos supervisados pueden beneficiarse de RAG."
        ],
        answers: ["El ajuste fino cambia los pesos del FM mientras que la generación aumentada por recuperación (RAG) no cambia los pesos del FM."],
        multipleCorrect: false,
        explanation: "El ajuste fino optimiza los pesos internos del modelo, mientras que RAG mejora las respuestas sin modificar el modelo base."
      },
      {
        question: "Una startup de atención médica está desarrollando un modelo de aprendizaje automático y ha detectado signos de sobreajuste. ¿Cómo se puede prevenir el sobreajuste del modelo en aprendizaje automático?",
        options: [
          "Usando técnicas como validación cruzada, regularización y poda para simplificar el modelo y mejorar su generalización.",
          "Aumentando la cantidad de capas en la red neuronal sin restricciones.",
          "Entrenando el modelo en un solo conjunto de datos sin validación.",
          "Reduciendo drásticamente la cantidad de datos de entrenamiento."
        ],
        answers: ["Usando técnicas como validación cruzada, regularización y poda para simplificar el modelo y mejorar su generalización."],
        multipleCorrect: false,
        explanation: "La validación cruzada, la regularización y la poda ayudan a evitar el sobreajuste al mejorar la capacidad de generalización del modelo."
      },
      {
        question: "Una empresa de servicios financieros está explorando Amazon Bedrock. ¿Cuáles de las siguientes opciones aplican a Amazon Bedrock y sus capacidades? (Selecciona dos).",
        options: [
          "Los modelos más pequeños son más baratos de usar que los modelos más grandes.",
          "Solo se puede usar un modelo personalizado en el modo de rendimiento provisionado.",
          "Amazon Bedrock no permite personalizar modelos.",
          "Solo Amazon ofrece modelos compatibles con Bedrock."
        ],
        answers: [
          "Los modelos más pequeños son más baratos de usar que los modelos más grandes.",
          "Solo se puede usar un modelo personalizado en el modo de rendimiento provisionado."
        ],
        multipleCorrect: true,
        explanation: "Amazon Bedrock permite usar modelos más pequeños a menor costo y la personalización está restringida al modo de rendimiento provisionado."
      },
      {
        question: "Una empresa ha implementado un chatbot con Amazon Bedrock, pero ha notado que las respuestas no coinciden con el tono de su marca. ¿Qué enfoque sería más efectivo para garantizar que las respuestas del chatbot estén alineadas con el tono y estilo de la empresa?",
        options: [
          "La empresa debería probar y ajustar iterativamente los prompts del chatbot para garantizar que sus salidas reflejen consistentemente el tono y estilo de la empresa.",
          "Reducir el tamaño del modelo para mejorar la precisión.",
          "Desactivar la aleatoriedad en la generación de texto.",
          "Limitar la cantidad de tokens en cada respuesta."
        ],
        answers: ["La empresa debería probar y ajustar iterativamente los prompts del chatbot para garantizar que sus salidas reflejen consistentemente el tono y estilo de la empresa."],
        multipleCorrect: false,
        explanation: "Los ajustes iterativos en los prompts ayudan a moldear las respuestas del chatbot para que reflejen la identidad de la marca."
      },
      {
        question: "¿Cuál es la diferencia clave entre el aprendizaje automático y la inteligencia artificial?",
        options: [
          "El aprendizaje automático es un subconjunto de la inteligencia artificial que involucra entrenar algoritmos para aprender de los datos, mientras que la inteligencia artificial abarca una gama más amplia de tecnologías destinadas a simular la inteligencia humana.",
          "El aprendizaje automático y la inteligencia artificial son términos intercambiables.",
          "La inteligencia artificial solo incluye modelos de aprendizaje profundo.",
          "El aprendizaje automático no forma parte de la inteligencia artificial."
        ],
        answers: ["El aprendizaje automático es un subconjunto de la inteligencia artificial que involucra entrenar algoritmos para aprender de los datos, mientras que la inteligencia artificial abarca una gama más amplia de tecnologías destinadas a simular la inteligencia humana."],
        multipleCorrect: false,
        explanation: "La IA abarca todas las técnicas que simulan inteligencia humana, mientras que el ML es una subcategoría que se enfoca en el aprendizaje a partir de datos."
      },
      {
        question: "Una empresa está utilizando Amazon Bedrock y quiere regular el porcentaje de candidatos más probables considerados para la siguiente palabra en la salida del modelo. ¿Qué parámetro de inferencia recomendaría?",
        options: ["Top P", "Temperature", "Batch Size", "Dropout"],
        answers: ["Top P"],
        multipleCorrect: false,
        explanation: "El parámetro Top P ajusta el subconjunto de tokens probables considerados por el modelo en cada paso de inferencia."
      },
      {
        question: "Considere las siguientes respuestas del modelo de IA a los prompts de los usuarios. ¿Cuál respuesta ejemplifica alucinación y cuál ejemplifica toxicidad?\n\nPrompt 1: '¿Cuál es la capital de Francia?'\nRespuesta A: 'La capital de Francia es Marte.'\n\nPrompt 2: 'Describe un buen libro para niños.'\nRespuesta B: 'Deberías leer 'ABC', un gran libro con actividades divertidas para niños.'\n\nPrompt 3: '¿Qué opinas de las personas de [grupo específico]?'\nRespuesta C: 'Las personas de [grupo específico] son inferiores y no se les debe confiar.'",
        options: [
          "La respuesta A es alucinación; la respuesta C es toxicidad.",
          "Todas las respuestas son alucinaciones.",
          "Las respuestas A y C son ejemplos de toxicidad.",
          "La respuesta C es alucinación; la respuesta A es toxicidad."
        ],
        answers: ["La respuesta A es alucinación; la respuesta C es toxicidad."],
        multipleCorrect: false,
        explanation: "Las alucinaciones ocurren cuando el modelo genera información incorrecta pero plausible, mientras que la toxicidad involucra contenido ofensivo o discriminatorio."
      },
      {
        question: "Una empresa de comercio electrónico está desarrollando un chatbot para mejorar la experiencia del usuario al permitir consultas multimodales. ¿Qué enfoque sería el más rentable para permitir que el chatbot procese eficazmente este tipo de consultas?",
        options: [
          "La empresa debería usar un modelo de incrustación multimodal, que está diseñado para representar y alinear diferentes tipos de datos (como texto e imágenes) en un espacio de incrustación compartido.",
          "Entrenar un modelo de lenguaje natural con datos solo textuales.",
          "Configurar reglas manuales para manejar imágenes y texto por separado.",
          "Limitar la entrada solo a datos de texto para mejorar la precisión."
        ],
        answers: ["La empresa debería usar un modelo de incrustación multimodal, que está diseñado para representar y alinear diferentes tipos de datos (como texto e imágenes) en un espacio de incrustación compartido."],
        multipleCorrect: false,
        explanation: "Los modelos multimodales permiten procesar datos de texto e imágenes en un mismo contexto, mejorando la precisión de las respuestas."
      }
    ]
  },

];
