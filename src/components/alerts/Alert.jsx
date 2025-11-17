export const Alert = ({icon,title, message}) =>{

    const IconComponent = icon;

    return(
        <div className="w-full max-w-2xl animate-fadeInUp">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Gradient background accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl" />

          <div className="relative p-12 md:p-16 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg transform transition-transform hover:scale-110 duration-300">
              <IconComponent className="w-11 h-11 text-white" strokeWidth={1.5} />
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
               {message}
              </p>
            </div>

            <div className="pt-4 flex gap-3 justify-center">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
}