import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Función para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar teléfono
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[0-9\s\-()]{8,15}$/;
    return phoneRegex.test(phone);
  };

  // Función para validar un campo específico
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (value.trim().length > 50) return 'El nombre no puede exceder 50 caracteres';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!validateEmail(value)) return 'Por favor ingresa un email válido';
        return '';
      
      case 'phone':
        if (value && !validatePhone(value)) return 'Por favor ingresa un teléfono válido';
        return '';
      
      case 'subject':
        if (!value) return 'Por favor selecciona un asunto';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (value.trim().length > 500) return 'El mensaje no puede exceder 500 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Actualizar el valor del campo
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validar el campo y actualizar errores
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    // Limpiar mensaje de envío si existe
    if (submitMessage) {
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      setSubmitMessage('Por favor corrige los errores antes de enviar el formulario.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setSubmitMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-azure-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-azure-50 to-azure-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              {/* Arrow indicators */}
              <div className="flex justify-center space-x-2">
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-200 border-b-transparent"></div>
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-300 border-b-transparent"></div>
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-coral-400 border-b-transparent"></div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-azure-400">Contacto</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestras tecnicaturas, 
                procesos de inscripción o información general del instituto.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Información de <span className="text-azure-400">Contacto</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Instituto Superior de Educación Tecnológica "Ing. Estela Miguel" - 
                    Centro de Referencia Tecnológica (CERET)
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-azure-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-azure-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Av. del Libertador N°560<br />
                        Comodoro Rivadavia, Chubut<br />
                        Argentina (U9000)
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  {/*<div className="flex items-start space-x-4">
                    <div className="bg-azure-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-azure-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">
                        +54 297 446-4444<br />
                        +54 297 446-4445
                      </p>
                    </div>
                  </div>*/}

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-azure-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-azure-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@iset812.edu.ar<br />
                        secretaria@iset812.edu.ar
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-azure-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-azure-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 16:00 - 22:00<br />
                        Sábados: Cerrado<br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-azure-50 to-azure-100 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envíanos un <span className="text-azure-400">Mensaje</span>
                </h2>
                
                {submitMessage && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitMessage.includes('correctamente') 
                      ? 'bg-green-100 border border-green-400 text-green-700'
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent transition-all duration-200 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent transition-all duration-200 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="tu@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent transition-all duration-200 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent transition-all duration-200 ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="informacion-general">Información General</option>
                        <option value="inscripciones">Inscripciones</option>
                        <option value="tecnicaturas">Consultas sobre Tecnicaturas</option>
                        <option value="documentacion">Documentación</option>
                        <option value="otros">Otros</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-azure-500 focus:border-transparent transition-all duration-200 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Escribe tu mensaje aquí..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                    <div className="text-right">
                      <span className={`text-sm ${
                        formData.message.length > 500 ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {formData.message.length}/500 caracteres
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-azure-200 to-azure-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra <span className="text-azure-400">Ubicación</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nos encontramos en el corazón del barrio General Mosconi (KM3) de Comodoro Rivadavia, fácilmente accesible desde cualquier punto de la ciudad.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.123456789!2d-67.4965600!3d-45.8641300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+del+Libertador+560%2C+Comodoro+Rivadavia%2C+Chubut!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Instituto Superior de Educación Tecnológica"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;