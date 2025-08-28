import React from 'react';
import { X } from 'lucide-react';

// Interfaz para la información del modal
export interface ModalInfo {
  title: string;
  description: string;
  content: {
    responsibilities?: string[];
    contact?: {
      name?: string;
      email?: string;
      phone?: string;
      office?: string;
    };
    members?: {
      name: string;
      position: string;
      email?: string;
    }[];
    services?: string[];
    additionalInfo?: string;
  };
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalInfo: ModalInfo | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalInfo }) => {
  if (!isOpen || !modalInfo) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              {modalInfo.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                {modalInfo.description}
              </p>
            </div>
            
            {/* Responsibilities */}
            {modalInfo.content.responsibilities && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Responsabilidades
                </h3>
                <ul className="space-y-2">
                  {modalInfo.content.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-azure-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Members */}
            {modalInfo.content.members && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Integrantes
                </h3>
                <div className="grid gap-4">
                  {modalInfo.content.members.map((member, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-azure-600 text-sm">{member.position}</p>
                      {member.email && (
                        <p className="text-gray-600 text-sm mt-1">
                          <span className="font-medium">Email:</span> {member.email}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Services */}
            {modalInfo.content.services && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Servicios
                </h3>
                <ul className="space-y-2">
                  {modalInfo.content.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-coral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Contact Information */}
            {modalInfo.content.contact && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Información de Contacto
                </h3>
                <div className="bg-azure-50 rounded-lg p-4 space-y-2">
                  {modalInfo.content.contact.name && (
                    <p className="text-gray-700">
                      <span className="font-medium">Responsable:</span> {modalInfo.content.contact.name}
                    </p>
                  )}
                  {modalInfo.content.contact.email && (
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span> {modalInfo.content.contact.email}
                    </p>
                  )}
                  {modalInfo.content.contact.phone && (
                    <p className="text-gray-700">
                      <span className="font-medium">Teléfono:</span> {modalInfo.content.contact.phone}
                    </p>
                  )}
                  {modalInfo.content.contact.office && (
                    <p className="text-gray-700">
                      <span className="font-medium">Oficina:</span> {modalInfo.content.contact.office}
                    </p>
                  )}
                </div>
              </div>
            )}
            
            {/* Additional Information */}
            {modalInfo.content.additionalInfo && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Información Adicional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {modalInfo.content.additionalInfo}
                </p>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-azure-500 hover:bg-azure-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;