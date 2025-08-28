import { ModalInfo } from '../components/Modal';

// Datos para cada item del dropdown del header
export const modalData: Record<string, ModalInfo> = {
  'equipo-directivo': {
    title: 'Equipo Directivo',
    description: 'El Equipo Directivo del ISET 812 - CeRET está conformado por profesionales comprometidos con la excelencia educativa y el desarrollo institucional.',
    content: {
      members: [
        {
          name: 'Prof. Pablo Demarie',
          position: 'Director',
          email: 'iset812@chubut.edu.ar'
        },
        {
          name: 'Lic. Carlos Alberto Rodríguez',
          position: 'Vicerrector Académico',
          email: 'vicerrector@iset812.edu.ar'
        },
        {
          name: 'Cont. Ana Patricia López',
          position: 'Secretaria Administrativa',
          email: 'administracion@iset812.edu.ar'
        }
      ],
      responsibilities: [
        'Dirección y coordinación general de la institución',
        'Planificación estratégica y desarrollo institucional',
        'Supervisión de la calidad académica',
        'Gestión de recursos humanos y financieros',
        'Representación institucional ante organismos oficiales'
      ],
      contact: {
        email: 'direccion@iset812.edu.ar',
        phone: '(0297) 485-2100',
        office: 'Edificio Central - Planta Alta'
      }
    }
  },
  
  'coordinacion-academica': {
    title: 'Coordinación Académica',
    description: 'La Coordinación Académica se encarga de supervisar y coordinar todas las actividades relacionadas con la enseñanza y el aprendizaje en nuestras carreras técnicas.',
    content: {
      members: [
        {
          name: 'Ing. Roberto Fernández',
          position: 'Coordinador Académico General',
          email: 'coordinacion.academica@iset812.edu.ar'
        },
        {
          name: 'Lic. Silvia Martínez',
          position: 'Coordinadora de Prácticas Profesionalizantes',
          email: 'practicas@iset812.edu.ar'
        }
      ],
      responsibilities: [
        'Coordinación de planes de estudio y programas académicos',
        'Supervisión del desempeño docente',
        'Organización de prácticas profesionalizantes',
        'Evaluación y seguimiento académico de estudiantes',
        'Desarrollo de proyectos de innovación educativa'
      ],
      services: [
        'Asesoramiento académico a estudiantes',
        'Coordinación de exámenes y evaluaciones',
        'Gestión de equivalencias y reconocimientos',
        'Organización de actividades de extensión'
      ],
      contact: {
        email: 'coordinacion.academica@iset812.edu.ar',
        phone: '(0297) 485-2101',
        office: 'Edificio Académico - Oficina 201'
      }
    }
  },
  
  'area-administrativa': {
    title: 'Área Administrativa',
    description: 'El Área Administrativa gestiona todos los aspectos operativos y de soporte necesarios para el funcionamiento eficiente de la institución.',
    content: {
      members: [
        {
          name: 'Cont. Jorge Luis Pérez',
          position: 'Jefe de Administración',
          email: 'administracion@iset812.edu.ar'
        },
        {
          name: 'Lic. Carmen Rodríguez',
          position: 'Responsable de Recursos Humanos',
          email: 'rrhh@iset812.edu.ar'
        },
        {
          name: 'Tec. Miguel Ángel Torres',
          position: 'Encargado de Mantenimiento',
          email: 'mantenimiento@iset812.edu.ar'
        }
      ],
      services: [
        'Gestión financiera y presupuestaria',
        'Administración de recursos humanos',
        'Mantenimiento de infraestructura y equipamiento',
        'Compras y contrataciones',
        'Gestión de servicios generales'
      ],
      contact: {
        email: 'administracion@iset812.edu.ar',
        phone: '(0297) 485-2102',
        office: 'Edificio Central - Planta Baja'
      }
    }
  },
  
  'bedelia': {
    title: 'Bedelía',
    description: 'Bedelía es el área encargada de todos los trámites académicos y administrativos relacionados con la vida estudiantil.',
    content: {
      members: [
        {
          name: 'Lic. Patricia Morales',
          position: 'Jefa de Bedelía',
          email: 'bedelia@iset812.edu.ar'
        },
        {
          name: 'Adm. Laura Sánchez',
          position: 'Asistente de Bedelía',
          email: 'bedelia.asistente@iset812.edu.ar'
        }
      ],
      services: [
        'Inscripciones y reinscripciones',
        'Emisión de certificados y constancias',
        'Gestión de legajos estudiantiles',
        'Tramitación de títulos y diplomas',
        'Atención al estudiante',
        'Registro de calificaciones y asistencias'
      ],
      contact: {
        email: 'bedelia@iset812.edu.ar',
        phone: '(0297) 485-2103',
        office: 'Edificio Central - Planta Baja',
      },
      additionalInfo: 'Horario de atención: Lunes a Viernes de 8:00 a 16:00 hs. Para trámites urgentes, solicitar turno previo.'
    }
  },
  
  'cipe': {
    title: 'CIPE - Centro de Investigación y Producción Educativa',
    description: 'El CIPE promueve la investigación, la innovación y el desarrollo de proyectos que vinculan la educación técnica con las necesidades del sector productivo.',
    content: {
      members: [
        {
          name: 'Dr. Ing. Fernando Castro',
          position: 'Director del CIPE',
          email: 'cipe@iset812.edu.ar'
        },
        {
          name: 'Mg. Ing. Claudia Vega',
          position: 'Coordinadora de Proyectos',
          email: 'proyectos.cipe@iset812.edu.ar'
        }
      ],
      responsibilities: [
        'Desarrollo de proyectos de investigación aplicada',
        'Vinculación con el sector productivo',
        'Transferencia de tecnología',
        'Capacitación y actualización profesional',
        'Gestión de convenios y alianzas estratégicas'
      ],
      services: [
        'Asesoramiento técnico a empresas',
        'Desarrollo de prototipos y soluciones tecnológicas',
        'Capacitación especializada',
        'Consultoría en procesos productivos'
      ],
      contact: {
        email: 'cipe@iset812.edu.ar',
        phone: '(0297) 485-2104',
        office: 'Edificio de Investigación - Laboratorio 301'
      }
    }
  },
  
  'centro-estudiantes': {
    title: 'Centro de Estudiantes',
    description: 'El Centro de Estudiantes representa los intereses de la comunidad estudiantil y promueve actividades que enriquecen la experiencia educativa.',
    content: {
      members: [
        {
          name: 'Juan Pablo Moreno',
          position: 'Presidente',
          email: 'presidente.ce@iset812.edu.ar'
        },
        {
          name: 'María Fernanda Díaz',
          position: 'Vicepresidenta',
          email: 'vicepresidente.ce@iset812.edu.ar'
        },
        {
          name: 'Carlos Mendoza',
          position: 'Secretario',
          email: 'secretario.ce@iset812.edu.ar'
        }
      ],
      responsibilities: [
        'Representación estudiantil ante las autoridades',
        'Organización de eventos y actividades estudiantiles',
        'Defensa de los derechos estudiantiles',
        'Promoción de la participación estudiantil',
        'Gestión de beneficios para estudiantes'
      ],
      services: [
        'Asesoramiento y orientación estudiantil',
        'Organización de actividades recreativas y culturales',
        'Gestión de becas y beneficios',
        'Mediación en conflictos estudiantiles'
      ],
      contact: {
        email: 'centro.estudiantes@iset812.edu.ar',
        office: 'Edificio Estudiantil - Sala de Reuniones'
      },
      additionalInfo: 'Las reuniones del Centro de Estudiantes se realizan todos los miércoles a las 18:00 hs. Todos los estudiantes están invitados a participar.'
    }
  }
};