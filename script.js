const cursos = [
    // Primer Año
    { id: 'practica1', nombre: 'Práctica Clínica I', creditos: 4, requisitos: [] },
    { id: 'fundamentos', nombre: 'Fundamentos de Fonoaudiología', creditos: 5, requisitos: [] },
    { id: 'ling1', nombre: 'Lingüística Aplicada I', creditos: 4, requisitos: [] },
    { id: 'anatomia', nombre: 'Anatomía', creditos: 6, requisitos: [] },
    { id: 'biocelular', nombre: 'Biología Celular', creditos: 5, requisitos: [] },
    { id: 'psico', nombre: 'Fundamentos de Psicología General y Neuropsicología', creditos: 8, requisitos: [] },
    { id: 'comunicacion1', nombre: 'Comunicación Oral y Escrita I', creditos: 2, requisitos: [] },
    { id: 'practica2', nombre: 'Práctica Clínica II', creditos: 5, requisitos: ['practica1'] },
    { id: 'principios', nombre: 'Principios de Intervención en Fonoaudiología', creditos: 3, requisitos: ['fundamentos'] },
    { id: 'ling2', nombre: 'Lingüística Aplicada II', creditos: 5, requisitos: ['ling1'] },
    { id: 'fisiologia', nombre: 'Fisiología', creditos: 6, requisitos: ['anatomia', 'biocelular'] },
    { id: 'idioma1', nombre: 'Idioma Extranjero I', creditos: 3, requisitos: [] },
    { id: 'comunicacion2', nombre: 'Comunicación Oral y Escrita II', creditos: 4, requisitos: ['comunicacion1'] },

    // Segundo Año
    { id: 'practica3', nombre: 'Práctica Clínica III', creditos: 5, requisitos: ['practica2'] },
    { id: 'psicoling', nombre: 'Psicolingüística y Neurolingüística', creditos: 6, requisitos: ['psico', 'ling2'] },
    { id: 'fisiopatologia', nombre: 'Fisiopatología', creditos: 4, requisitos: ['fisiologia'] },
    { id: 'fisica', nombre: 'Física Acústica', creditos: 4, requisitos: ['ling2'] },
    { id: 'saludpublica', nombre: 'Salud Pública', creditos: 2, requisitos: ['principios'] },
    { id: 'idioma2', nombre: 'Idioma Extranjero II', creditos: 3, requisitos: ['idioma1'] },
    { id: 'autogestion', nombre: 'Autogestión del Aprendizaje', creditos: 3, requisitos: [] },
    { id: 'mod1', nombre: 'Módulo Integrado I', creditos: 4, requisitos: ['practica3', 'intervAudiologica1', 'motricidad', 'neurologia'] },
    { id: 'neurologia', nombre: 'Neurología y Psiquiatría Aplicada', creditos: 6, requisitos: ['psicoling', 'fisiopatologia'] },
    { id: 'desarrollo', nombre: 'Desarrollo de la Comunicación', creditos: 4, requisitos: ['comunicacion2'] },
    { id: 'motricidad', nombre: 'Motricidad Orofacial', creditos: 6, requisitos: ['fisiologia'] },
    { id: 'intervAudiologica1', nombre: 'Intervención Audiológica I', creditos: 4, requisitos: ['principios', 'fisiologia', 'fisica'] },
    { id: 'deporte1', nombre: 'Deporte I', creditos: 1, requisitos: [] },
    { id: 'epidemiologia', nombre: 'Epidemiología', creditos: 2, requisitos: ['saludpublica'] },
    { id: 'idioma3', nombre: 'Idioma Extranjero III', creditos: 3, requisitos: ['idioma2'] },
    { id: 'trabajoEquipo', nombre: 'Trabajo en Equipo y Desarrollo de Habilidades Sociales', creditos: 3, requisitos: ['autogestion'] },

    // Tercer Año
    { id: 'practica4', nombre: 'Práctica Clínica IV', creditos: 5, requisitos: ['mod1'] },
    { id: 'intervLenguajeAdulto1', nombre: 'Intervención en Lenguaje en Adultos I', creditos: 8, requisitos: ['neurologia'] },
    { id: 'intervLenguajeNNA1', nombre: 'Intervención en Lenguaje en Niños y Adolescentes I', creditos: 8, requisitos: ['principios', 'desarrollo'] },
    { id: 'intervHabla', nombre: 'Intervención en Alteraciones del Habla', creditos: 8, requisitos: ['principios', 'motricidad'] },
    { id: 'intervAudiologica2', nombre: 'Intervención Audiológica II', creditos: 8, requisitos: ['intervAudiologica1'] },
    { id: 'intervVoz1', nombre: 'Intervención en Voz I', creditos: 8, requisitos: ['fisica', 'motricidad'] },
    { id: 'electivo', nombre: 'Electivo Disciplinar', creditos: 2, requisitos: [] },
    { id: 'contextosSociales', nombre: 'Comprensión de Contextos Sociales', creditos: 3, requisitos: ['comunicacion2'] },

    { id: 'practica5', nombre: 'Práctica Clínica V', creditos: 5, requisitos: ['practica4'] },
    { id: 'bioestadistica1', nombre: 'Bioestadística Descriptiva', creditos: 2, requisitos: ['epidemiologia'] },
    { id: 'contextosCulturales', nombre: 'Comprensión de Contextos Culturales', creditos: 3, requisitos: ['contextosSociales'] },

    // Cuarto Año
    { id: 'practica6', nombre: 'Práctica Clínica VI', creditos: 5, requisitos: ['practica5'] },
    { id: 'intervLenguajeAdulto2', nombre: 'Intervención en Lenguaje en Adultos II', creditos: 6, requisitos: ['intervLenguajeAdulto1'] },
    { id: 'intervLenguajeNNA2', nombre: 'Intervención en Lenguaje en Niños y Adolescentes II', creditos: 8, requisitos: ['intervLenguajeNNA1'] },
    { id: 'intervDeglucion', nombre: 'Intervención en Deglución y Disfagia', creditos: 8, requisitos: ['neurologia', 'motricidad'] },
    { id: 'intervAudiologica3', nombre: 'Intervención Audiológica III', creditos: 4, requisitos: ['intervAudiologica2'] },
    { id: 'intervVoz2', nombre: 'Intervención en Voz II', creditos: 4, requisitos: ['intervVoz1'] },
    { id: 'bioestadistica2', nombre: 'Bioestadística y Métodos de Investigación', creditos: 4, requisitos: ['bioestadistica1'] },
    { id: 'etica', nombre: 'Ética y Responsabilidad Social', creditos: 3, requisitos: ['trabajoEquipo', 'contextosCulturales'] },

    { id: 'mod2', nombre: 'Módulo Integrado II', creditos: 4, requisitos: ['intervLenguajeAdulto2', 'intervLenguajeNNA2', 'intervDeglucion', 'intervAudiologica3', 'intervVoz2', 'bioestadistica2', 'gestion', 'saludComunitaria', 'deporte2', 'responsabilidadSocial'] },
    { id: 'gestion', nombre: 'Gestión', creditos: 8, requisitos: ['trabajoEquipo', 'practica6'] },
    { id: 'deporte2', nombre: 'Deporte II', creditos: 1, requisitos: ['deporte1'] },
    { id: 'saludComunitaria', nombre: 'Salud Comunitaria', creditos: 2, requisitos: ['epidemiologia'] },
    { id: 'responsabilidadSocial', nombre: 'Responsabilidad Social', creditos: 3, requisitos: ['etica'] },

    // Quinto Año
    { id: 'internado1', nombre: 'Internado I', creditos: 13, requisitos: ['mod2'] },
    { id: 'internado2', nombre: 'Internado II', creditos: 13, requisitos: ['mod2'] },
    { id: 'disenoInvestigacion', nombre: 'Diseño Proyecto de Investigación', creditos: 4, requisitos: ['mod2'] },

    { id: 'internado3', nombre: 'Internado III', creditos: 13, requisitos: ['internado2'] },
    { id: 'internado4', nombre: 'Internado IV', creditos: 13, requisitos: ['internado1'] },
    { id: 'ejecucionInvestigacion', nombre: 'Ejecución Proyecto de Investigación', creditos: 4, requisitos: ['disenoInvestigacion'] }
];

let creditos = 0;

function actualizarCreditos() {
    document.getElementById('creditos-valor').textContent = creditos.toFixed(1);
}

function crearMalla() {
    const malla = document.getElementById('malla');
    cursos.forEach(curso => {
        const div = document.createElement('div');
        div.className = 'curso bloqueado';
        div.id = curso.id;
        div.innerHTML = `<input type='checkbox' id='chk_${curso.id}' disabled> <label for='chk_${curso.id}'>${curso.nombre} (${curso.creditos} ECTS)</label>`;
        malla.appendChild(div);
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
        }
    });
}

document.addEventListener('change', e => {
    if (e.target.type === 'checkbox') {
        const curso = cursos.find(c => `chk_${c.id}` === e.target.id);
        if (e.target.checked) {
            creditos += curso.creditos;
        } else {
            creditos -= curso.creditos;
        }
        actualizarCreditos();
        desbloquearCursos();
    }
});

crearMalla();
actualizarCreditos();

