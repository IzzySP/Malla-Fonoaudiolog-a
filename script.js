const cursos = [
  // Primer Año - Semestre 1
  { id: 'practica1', nombre: 'Práctica Clínica I', creditos: 4, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'fundamentos', nombre: 'Fundamentos de Fonoaudiología', creditos: 5, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'ling1', nombre: 'Lingüística Aplicada I', creditos: 4, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'anatomia', nombre: 'Anatomía', creditos: 6, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'biocelular', nombre: 'Biología Celular', creditos: 5, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'psico', nombre: 'Psicología General y Neuropsicología', creditos: 8, requisitos: [], semestre: 'Primer Año - Semestre 1' },
  { id: 'comunicacion1', nombre: 'Comunicación Oral y Escrita I', creditos: 2, requisitos: [], semestre: 'Primer Año - Semestre 1' },

  // Primer Año - Semestre 2
  { id: 'practica2', nombre: 'Práctica Clínica II', creditos: 5, requisitos: ['practica1'], semestre: 'Primer Año - Semestre 2' },
  { id: 'principios', nombre: 'Principios de Intervención en Fonoaudiología', creditos: 3, requisitos: ['fundamentos'], semestre: 'Primer Año - Semestre 2' },
  { id: 'ling2', nombre: 'Lingüística Aplicada II', creditos: 5, requisitos: ['ling1'], semestre: 'Primer Año - Semestre 2' },
  { id: 'fisiologia', nombre: 'Fisiología', creditos: 6, requisitos: ['anatomia', 'biocelular'], semestre: 'Primer Año - Semestre 2' },
  { id: 'idioma1', nombre: 'Idioma Extranjero I', creditos: 3, requisitos: [], semestre: 'Primer Año - Semestre 2' },
  { id: 'comunicacion2', nombre: 'Comunicación Oral y Escrita II', creditos: 4, requisitos: ['comunicacion1'], semestre: 'Primer Año - Semestre 2' },

  // Segundo Año - Semestre 3
  { id: 'practica3', nombre: 'Práctica Clínica III', creditos: 5, requisitos: ['practica2'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'psicoling', nombre: 'Psicolingüística y Neurolingüística', creditos: 6, requisitos: ['psico', 'ling2'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', creditos: 4, requisitos: ['fisiologia'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'fisicaacustica', nombre: 'Física Acústica', creditos: 4, requisitos: ['ling2'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'saludpublica', nombre: 'Salud Pública', creditos: 2, requisitos: ['principios'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'idioma2', nombre: 'Idioma Extranjero II', creditos: 3, requisitos: ['idioma1'], semestre: 'Segundo Año - Semestre 3' },
  { id: 'autogestion', nombre: 'Autogestión del Aprendizaje', creditos: 3, requisitos: [], semestre: 'Segundo Año - Semestre 3' },

  // Segundo Año - Semestre 4
  { id: 'modulo1', nombre: 'Módulo Integrado I', creditos: 4, requisitos: ['practica3', 'motricidad'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'neurologia', nombre: 'Neurología y Psiquiatría Aplicada', creditos: 6, requisitos: ['psicoling', 'fisiopatologia'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'desarrollo', nombre: 'Desarrollo de la Comunicación', creditos: 4, requisitos: ['comunicacion2'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'motricidad', nombre: 'Motricidad Orofacial', creditos: 6, requisitos: ['anatomia'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'intervencionAudiologica1', nombre: 'Intervención Audiológica I', creditos: 4, requisitos: ['fisicaacustica', 'fisiologia'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'deporte1', nombre: 'Deporte I', creditos: 1, requisitos: [], semestre: 'Segundo Año - Semestre 4' },
  { id: 'epidemiologia', nombre: 'Epidemiología', creditos: 2, requisitos: ['saludpublica'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'idioma3', nombre: 'Idioma Extranjero III', creditos: 3, requisitos: ['idioma2'], semestre: 'Segundo Año - Semestre 4' },
  { id: 'trabajoEquipo', nombre: 'Trabajo en equipo y desarrollo de habilidades sociales', creditos: 3, requisitos: ['autogestion'], semestre: 'Segundo Año - Semestre 4' },

  // Tercer Año - Semestre 5
  { id: 'practica4', nombre: 'Práctica Clínica IV', creditos: 5, requisitos: ['modulo1'], semestre: 'Tercer Año - Semestre 5' },
  { id: 'intervencionAdultos1', nombre: 'Intervención en Lenguaje en Adultos I', creditos: 8, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'intervencionNinyAdol1', nombre: 'Intervención en Lenguaje en niños y adolescentes I', creditos: 8, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'intervencionHabla', nombre: 'Intervención en Alteraciones del Habla', creditos: 8, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'intervencionAudiologica2', nombre: 'Intervención Audiológica II', creditos: 8, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'intervencionVoz1', nombre: 'Intervención en voz I', creditos: 8, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'electivoDisciplinar', nombre: 'Electivo Disciplinar', creditos: 2, requisitos: [], semestre: 'Tercer Año - Semestre 5' },
  { id: 'comprensionContextos', nombre: 'Comprensión de Contextos Sociales', creditos: 3, requisitos: ['comunicacion2'], semestre: 'Tercer Año - Semestre 5' },

  // Tercer Año - Semestre 6
  { id: 'practica5', nombre: 'Práctica Clínica V', creditos: 5, requisitos: ['practica4'], semestre: 'Tercer Año - Semestre 6' },
  { id: 'bioestadisticaDesc', nombre: 'Bioestadística Descriptiva', creditos: 2, requisitos: [], semestre: 'Tercer Año - Semestre 6' },
  { id: 'comprensionContextosCult', nombre: 'Comprensión de Contextos Culturales', creditos: 3, requisitos: ['comprensionContextos'], semestre: 'Tercer Año - Semestre 6' },

  // Cuarto Año - Semestre 7
  { id: 'practica6', nombre: 'Práctica Clínica VI', creditos: 5, requisitos: ['practica5'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'intervencionAdultos2', nombre: 'Intervención en Lenguaje en Adultos II', creditos: 6, requisitos: ['intervencionAdultos1'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'intervencionNinyAdol2', nombre: 'Intervención en Lenguaje en niños y Adolescentes II', creditos: 8, requisitos: ['intervencionNinyAdol1'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'intervencionDeglucion', nombre: 'Intervención en Deglución y Disfagía', creditos: 8, requisitos: [], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'intervencionAudiologica3', nombre: 'Intervención Audiológica III', creditos: 4, requisitos: ['intervencionAudiologica2'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'intervencionVoz2', nombre: 'Intervención en voz II', creditos: 4, requisitos: ['intervencionVoz1'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'bioestadisticaMetodos', nombre: 'Bioestadística y Métodos de Investigación', creditos: 4, requisitos: ['bioestadisticaDesc'], semestre: 'Cuarto Año - Semestre 7' },
  { id: 'etica', nombre: 'Ética y Responsabilidad Social', creditos: 3, requisitos: ['trabajoEquipo'], semestre: 'Cuarto Año - Semestre 7' },

  // Cuarto Año - Semestre 8
  { id: 'modulo2', nombre: 'Módulo Integrado II', creditos: 4, requisitos: ['bioestadisticaMetodos'], semestre: 'Cuarto Año - Semestre 8' },
  { id: 'gestion', nombre: 'Gestión', creditos: 8, requisitos: ['modulo2'], semestre: 'Cuarto Año - Semestre 8' },
  { id: 'deporte2', nombre: 'Deporte II', creditos: 1, requisitos: ['deporte1'], semestre: 'Cuarto Año - Semestre 8' },
  { id: 'saludcomunitaria', nombre: 'Salud Comunitaria', creditos: 2, requisitos: ['saludpublica', 'epidemiologia'], semestre: 'Cuarto Año - Semestre 8' },
  { id: 'responsabilidadSocial', nombre: 'Responsabilidad Social', creditos: 3, requisitos: ['etica'], semestre: 'Cuarto Año - Semestre 8' },

  // Quinto Año - Semestre 9
  { id: 'internado1', nombre: 'Internado I', creditos: 13, requisitos: [], semestre: 'Quinto Año - Semestre 9' },
  { id: 'internado2', nombre: 'Internado II', creditos: 13, requisitos: [], semestre: 'Quinto Año - Semestre 9' },
  { id: 'disenoProyecto', nombre: 'Diseño proyecto de Investigación', creditos: 4, requisitos: [], semestre: 'Quinto Año - Semestre 9' },

  // Quinto Año - Semestre 10
  { id: 'internado3', nombre: 'Internado III', creditos: 13, requisitos: ['internado2'], semestre: 'Quinto Año - Semestre 10' },
  { id: 'internado4', nombre: 'Internado IV', creditos: 13, requisitos: ['internado1'], semestre: 'Quinto Año - Semestre 10' },
  { id: 'ejecucionProyecto', nombre: 'Ejecución proyecto de Investigación', creditos: 4, requisitos: ['disenoProyecto'], semestre: 'Quinto Año - Semestre 10' },
];

// Estado de créditos totales aprobados
let creditos = 0;

function actualizarCreditos() {
  document.getElementById('creditos-valor').textContent = creditos.toFixed(1);
}

function crearMalla() {
  const malla = document.getElementById('malla');
  const semestres = {};

  cursos.forEach(curso => {
    if (!semestres[curso.semestre]) {
      const divSemestre = document.createElement('div');
      divSemestre.className = 'semestre';
      divSemestre.id = curso.semestre.replace(/\s+/g, '');
      divSemestre.innerHTML = `<h2>${curso.semestre}</h2><div class='malla' id='malla_${curso.semestre.replace(/\s+/g, '')}'></div>`;
      malla.appendChild(divSemestre);
      semestres[curso.semestre] = divSemestre.querySelector('.malla');
    }
    const div = document.createElement('div');
    div.className = 'curso bloqueado';
    div.id = curso.id;
    div.innerHTML = `<input type='checkbox' id='chk_${curso.id}' disabled> <label for='chk_${curso.id}'>${curso.nombre} (${curso.creditos} ECTS)</label>`;
    semestres[curso.semestre].appendChild(div);
  });
  desbloquearCursos();
}

function desbloquearCursos() {
  cursos.forEach(curso => {
    const cumpleRequisitos = curso.requisitos.every(req => document.getElementById(`chk_${req}`)?.checked);
    const checkbox = document.getElementById(`chk_${curso.id}`);
    const divCurso = document.getElementById(curso.id);
    if (cumpleRequisitos) {
      checkbox.disabled = false;
      divCurso.classList.remove('bloqueado');
    } else {
      checkbox.disabled = true;
      divCurso.classList.add('bloqueado');
      // Si está bloqueado y estaba chequeado, desmarcar y actualizar créditos:
      if(checkbox.checked){
        checkbox.checked = false;
        creditos -= curso.creditos;
        divCurso.classList.remove('tachado');
        actualizarCreditos();
      }
    }
  });
}

document.addEventListener('change', e => {
  if (e.target.type === 'checkbox') {
    const curso = cursos.find(c => `chk_${c.id}` === e.target.id);
    const divCurso = document.getElementById(curso.id);
    if (e.target.checked) {
      creditos += curso.creditos;
      divCurso.classList.add('tachado');
    } else {
      creditos -= curso.creditos;
      divCurso.classList.remove('tachado');
    }
    actualizarCreditos();
    desbloquearCursos();
  }
});

crearMalla();
actualizarCreditos();
