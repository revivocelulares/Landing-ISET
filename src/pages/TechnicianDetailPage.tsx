import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, BookOpen, Download } from 'lucide-react';
import { getTechnicianById, TechnicianProgram } from '../data/techniciansData';

interface TechnicianContent {
  synthesis: string;
  tables: string;
}

const TechnicianDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [technician, setTechnician] = useState<TechnicianProgram | null>(null);
  const [content, setContent] = useState<TechnicianContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'synthesis' | 'curriculum'>('synthesis');

  // Función para obtener la URL del diseño curricular
  const getCurriculumDesignUrl = (technicianId: string): string => {
    const curriculumMap: { [key: string]: string } = {
      'petroleo-gas': 'Diseño-Curricular-Petroleo-y-Gas-2015.pdf',
      'energias-renovables': 'Diseño-Curricular-Energias-Renovables-2022.pdf',
      'mantenimiento-industrial': 'Diseño-Curricular-Mantenimiento-Industrial-2015.pdf',
      'produccion-alimentos': 'Diseño-Curricular-Alimentos-2017.pdf',
      'logistica': 'Diseño-Curricular-Logistica-2022.pdf',
      'produccion-multimedios': 'Diseño-Curricular-Multimedios-2022.pdf',
      'confeccion-textil': 'Diseño-Curricular-Indumentaria-y-Textil-2019.pdf'
    };
    
    const fileName = curriculumMap[technicianId];
    return fileName ? `/docs/diseños-curriculares/${fileName}` : '';
  };

  // Función para manejar la descarga del diseño curricular
  const handleDownloadCurriculum = () => {
    if (technician) {
      const url = getCurriculumDesignUrl(technician.id);
      if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || 'diseño-curricular.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const techData = getTechnicianById(id);
      if (techData) {
        setTechnician(techData);
        loadContent(techData.folder);
      } else {
        setLoading(false);
      }
    }
  }, [id]);

  const loadContent = async (folder: string) => {
    try {
      // En un entorno real, estos archivos deberían estar en public/ o ser servidos por el servidor
      // Por ahora, simularemos el contenido basado en lo que vimos en los archivos HTML
      const synthesisResponse = await fetch(`/Tablas/${folder}/sintesis.html`);
      const tablesResponse = await fetch(`/Tablas/${folder}/tabla.html`);
      
      if (synthesisResponse.ok && tablesResponse.ok) {
        const synthesisText = await synthesisResponse.text();
        const tablesText = await tablesResponse.text();
        
        setContent({
          synthesis: extractBodyContent(synthesisText),
          tables: extractBodyContent(tablesText)
        });
      } else {
        // Fallback content si no se pueden cargar los archivos
        setContent({
          synthesis: generateFallbackSynthesis(folder),
          tables: generateFallbackTables(folder)
        });
      }
    } catch (error) {
      console.error('Error loading content:', error);
      // Fallback content
      setContent({
        synthesis: generateFallbackSynthesis(folder),
        tables: generateFallbackTables(folder)
      });
    } finally {
      setLoading(false);
    }
  };

  const extractBodyContent = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const container = doc.querySelector('.container') || doc.body;
    return container.innerHTML;
  };

  const generateFallbackSynthesis = (folder: string): string => {
    return `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold text-azure-400 mb-6">Síntesis del Programa</h1>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-700 leading-relaxed">
            Esta tecnicatura está diseñada para formar profesionales altamente capacitados en el área específica,
            con una sólida base teórica y práctica que les permita desempeñarse exitosamente en el campo laboral.
          </p>
          <h3 class="text-xl font-semibold text-azure-300 mt-8 mb-4">Objetivos del Programa</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Formar técnicos superiores con competencias específicas del área</li>
            <li>Desarrollar habilidades prácticas y teóricas necesarias para el ejercicio profesional</li>
            <li>Promover el pensamiento crítico y la resolución de problemas</li>
            <li>Fomentar la actualización continua y el aprendizaje permanente</li>
          </ul>
          <h3 class="text-xl font-semibold text-azure-300 mt-8 mb-4">Perfil del Egresado</h3>
          <p class="text-gray-700">
            El egresado estará capacitado para desempeñarse en diversos ámbitos profesionales,
            aplicando conocimientos técnicos especializados y contribuyendo al desarrollo del sector.
          </p>
        </div>
      </div>
    `;
  };

  const generateFallbackTables = (folder: string): string => {
    return `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold text-azure-400 mb-6">Plan de Estudios</h1>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-azure-300">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Año</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Materia</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Horas</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tipo</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1°</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Matemática</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">96</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Anual</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1°</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Inglés Técnico</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">96</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Anual</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1°</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Informática Aplicada</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">96</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Anual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bg-azure-100 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-azure-400 mb-4">Información Adicional</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-azure-300" />
              <span class="text-gray-700">Duración: 3 años</span>
            </div>
            <div class="flex items-center space-x-2">
              <Users className="h-5 w-5 text-azure-300" />
              <span class="text-gray-700">Modalidad: Presencial</span>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azure-300 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información...</p>
        </div>
      </div>
    );
  }

  if (!technician) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tecnicatura no encontrada</h1>
          <Link to="/academic-offer" className="text-azure-300 hover:text-azure-400 flex items-center justify-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Oferta Académica</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-azure-400 to-azure-300 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link 
            to="/academic-offer" 
            className="inline-flex items-center space-x-2 text-azure-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Oferta Académica</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {technician.title}
              </h1>
              <p className="text-xl text-azure-100 mb-8">
                {technician.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-azure-500 bg-opacity-50 rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5" />
                  <span>{technician.duration}</span>
                </div>
                <div className="flex items-center space-x-2 bg-azure-500 bg-opacity-50 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5" />
                  <span>{technician.modality}</span>
                </div>
                <div className="flex items-center space-x-2 bg-azure-500 bg-opacity-50 rounded-lg px-4 py-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Título Oficial</span>
                </div>
              </div>
              
              {/* Botón de descarga del diseño curricular */}
              <button
                onClick={handleDownloadCurriculum}
                className="inline-flex items-center space-x-2 bg-white text-azure-400 hover:bg-azure-50 hover:text-azure-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                <span>Descargar Diseño Curricular</span>
              </button>
            </div>
            <div className="lg:text-right">
              <img 
                src={technician.image} 
                alt={technician.title}
                className="w-full max-w-md mx-auto lg:ml-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('synthesis')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'synthesis'
                  ? 'border-azure-300 text-azure-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Síntesis del Programa
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'curriculum'
                  ? 'border-azure-300 text-azure-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Plan de Estudios
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {content && (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: activeTab === 'synthesis' ? content.synthesis : content.tables 
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetailPage;