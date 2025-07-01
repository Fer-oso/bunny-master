import { Logo } from "./Logo";

export const Header = () => {
  return (
    <section className="mt-15 w-full bg-gradient-to-b  bg-[#23191A] text-white font-montserrat flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="text-center max-w-3xl">
        <Logo />

        <div className="burbuja">
          <p className="py-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Transformamos ideas en resultados digitales reales
          </p>
        </div>

        <div className="max-w-2xl m-auto">
          <h1 className="text-2xl mt-5 colortexto">
            Sabemos que hoy no alcanza con simplemente estar en internet: hay
            que destacarse. Y ahí es donde entramos nosotros. En Bunny,
            ofrecemos soluciones ágiles, efectivas y diseñadas a medida para tu
            negocio.
          </h1>
        </div>
      </div>
    </section>
  );
};
