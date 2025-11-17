import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, Building2, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../../../../hooks/useScrollRevealOptions';

function classNames([...classes]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'El correo electrónico es obligatorio';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Correo electrónico inválido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Debe tener al menos 10 caracteres';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log('Formulario enviado:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);


  if (isSuccess) {
    return (
      <div 
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center px-4 py-12 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} `}>
        <div className="w-full max-w-2xl animate-fadeInUp">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Gradient background accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl" />

            <div className="relative p-12 md:p-16 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg transform transition-transform hover:scale-110 duration-300">
                <CheckCircle2 className="w-11 h-11 text-white" strokeWidth={1.5} />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  ¡Mensaje Enviado Exitosamente!
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Gracias por contactarnos. Nuestro equipo revisará tu mensaje y se comunicará contigo en las próximas 24-48 horas.
                </p>
              </div>

              <div className="pt-4 flex gap-3 justify-center">
                <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
    ref={elementRef}
    className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center px-4 py-12  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
      <div className="w-full max-w-2xl animate-fadeInUp">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-sm text-blue-600 font-semibold">PONTE EN CONTACTO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Hablemos de tu
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />

          <form onSubmit={handleSubmit} className="relative p-8 md:p-12 space-y-6">
            {/* Grid de campos */}
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Nombre Completo"
                name="name"
                value={formData.name}
                placeholder="Juan Pérez"
                icon={User}
                error={errors.name}
                disabled={isSubmitting}
                onChange={handleChange}
                focused={focusedField === 'name'}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />

              <Field
                label="Correo Electrónico"
                name="email"
                type="email"
                value={formData.email}
                placeholder="juan@empresa.com"
                icon={Mail}
                error={errors.email}
                disabled={isSubmitting}
                onChange={handleChange}
                focused={focusedField === 'email'}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
            </div>

            {/* Empresa - Full width */}
            <Field
              label="Empresa (opcional)"
              name="company"
              value={formData.company}
              placeholder="Nombre de tu empresa"
              icon={Building2}
              disabled={isSubmitting}
              onChange={handleChange}
              focused={focusedField === 'company'}
              onFocus={() => handleFocus('company')}
              onBlur={handleBlur}
            />

            {/* Mensaje - Full width */}
            <Field
              label="Mensaje"
              name="message"
              value={formData.message}
              placeholder="Cuéntanos sobre tu proyecto, ideas o dudas..."
              icon={MessageSquare}
              isTextarea
              error={errors.message}
              disabled={isSubmitting}
              onChange={handleChange}
              focused={focusedField === 'message'}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(
                'group relative w-full h-14 rounded-xl font-semibold text-lg flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl mt-8',
                isSubmitting
                  ? 'bg-gray-300 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] active:scale-95'
              )}
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

              <div className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </div>
            </button>

            {/* Privacy notice */}
            <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
              Tus datos serán tratados de forma confidencial y utilizados solo para responder tu consulta.
            </p>
          </form>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Respuesta rápida
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            100% Confidencial
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Sin compromisos
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  icon: Icon,
  error,
  disabled,
  isTextarea,
  onChange,
  focused,
  onFocus,
  onBlur,
}
) {
  return (
    <div className="space-y-2.5">
      <label htmlFor={name} className="text-sm font-semibold text-gray-900 flex items-center gap-2">
        {label}
        {error && <AlertCircle className="w-4 h-4 text-red-500" />}
      </label>

      <div className="relative group">
        {/* Icon container */}
        <div
          className={classNames(
            'absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300',
            focused
              ? 'text-blue-600 scale-110'
              : error
                ? 'text-red-500'
                : 'text-gray-400 group-hover:text-gray-500'
          )}
        >
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>

        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={classNames(
              'w-full pl-12 pr-4 py-4 min-h-[140px] text-base rounded-xl border-2 transition-all duration-300 resize-none font-medium',
              'focus:outline-none text-gray-900 bg-white placeholder-gray-400',
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : focused
                  ? 'border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
              disabled && 'opacity-50 cursor-not-allowed bg-gray-50'
            )}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={classNames(
              'w-full pl-12 pr-4 h-12 text-base rounded-xl border-2 transition-all duration-300 font-medium',
              'focus:outline-none text-gray-900 bg-white placeholder-gray-400',
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : focused
                  ? 'border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
              disabled && 'opacity-50 cursor-not-allowed bg-gray-50'
            )}
          />
        )}

        {/* Animated underline */}
        <div
          className={classNames(
            'absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300',
            error ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500',
            focused ? 'w-full' : 'w-0'
          )}
        />
      </div>

      {/* Error message con animación */}
      {error && (
        <div className="animate-slideIn flex items-center gap-2 text-sm text-red-600 font-medium">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Character counter para textarea */}
      {isTextarea && value && (
        <div className="text-xs text-gray-500 text-right">
          {value.length} caracteres
        </div>
      )}
    </div>
  );
}
