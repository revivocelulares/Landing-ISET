export interface TechnicianProgram {
  id: string;
  title: string;
  description: string;
  image: string;
  folder: string;
  duration: string;
  modality: string;
}

export const techniciansData: TechnicianProgram[] = [
  {
    id: 'petroleo-gas',
    title: 'Tecnicatura Superior en Petróleo y Gas',
    description: 'Formación integral en prospección, exploración, explotación, producción y procesamiento de hidrocarburos.',
    image: 'https://plataforma.iduo.com.ar/Panelcontenidos/Contenidos/1750649044.jpg',
    folder: 'petroleo',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'energias-renovables',
    title: 'Tecnicatura Superior en Energías Renovables',
    description: 'Especialización en tecnologías sustentables y sistemas de energía limpia para el desarrollo sostenible.',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'energias_renovables',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'mantenimiento-industrial',
    title: 'Tecnicatura Superior en Mantenimiento Industrial',
    description: 'Formación en mantenimiento preventivo, correctivo y predictivo de equipos y sistemas industriales.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'mantenimiento',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'produccion-alimentos',
    title: 'Tecnicatura Superior en Producción Industrial de Alimentos',
    description: 'Especialización en procesos industriales alimentarios, control de calidad y seguridad alimentaria.',
    image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'alimentos',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'logistica',
    title: 'Tecnicatura Superior en Logística',
    description: 'Gestión integral de cadenas de suministro, distribución y optimización de procesos logísticos.',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'logistica',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'produccion-multimedios',
    title: 'Tecnicatura Superior en Producción de Multimedios',
    description: 'Creación y producción de contenidos audiovisuales, diseño gráfico y comunicación digital.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'multimedios',
    duration: '3 años',
    modality: 'Presencial'
  },
  {
    id: 'confeccion-textil',
    title: 'Tecnicatura Superior en Confección de Indumentaria y Productos Textiles',
    description: 'Diseño, confección y producción de indumentaria y productos textiles con enfoque industrial.',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
    folder: 'textil',
    duration: '3 años',
    modality: 'Presencial'
  }
];

export const getTechnicianById = (id: string): TechnicianProgram | undefined => {
  return techniciansData.find(tech => tech.id === id);
};