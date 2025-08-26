import { useState, useEffect } from "react";

/**
 * Hook para typing y borrado con cursor
 * @param {string[]} texts Array de textos (cada texto puede ser un span separado)
 * @param {object} options Opciones: typingSpeed, eraseSpeed, pause
 */
export const useTypingEffect = (span1, span2) => {
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("");
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    let i1 = 0;
    let i2 = 0;
    let timeout;

    const randomDelay = (base) => base + Math.random() * 50; // un toque de aleatorio

    const tick = () => {
      // Escribir primer span
      if (i1 <= span1.length) {
        setDisplay1(span1.slice(0, i1));
        setActive1(true);
        i1++;
        timeout = setTimeout(tick, randomDelay(80)); // escritura más humana
        return;
      }

      setActive1(false);

      // Escribir segundo span
      if (i2 <= span2.length) {
        setDisplay2(span2.slice(0, i2));
        setActive2(true);
        i2++;
        timeout = setTimeout(tick, randomDelay(80));
        return;
      }

      setActive2(false);

      // Pausa corta antes de borrar
      timeout = setTimeout(() => {
        // Borrar segundo span
        const erase2 = () => {
          if (i2 > 0) {
            i2--;
            setDisplay2(span2.slice(0, i2));
            setActive2(true);
            timeout = setTimeout(erase2, randomDelay(50));
          } else {
            setActive2(false);
            // Borrar primer span
            const erase1 = () => {
              if (i1 > 0) {
                i1--;
                setDisplay1(span1.slice(0, i1));
                setActive1(true);
                timeout = setTimeout(erase1, randomDelay(50));
              } else {
                setActive1(false);
                timeout = setTimeout(tick, 200); // breve pausa antes de reiniciar
              }
            };
            erase1();
          }
        };
        erase2();
      }, 500); // pausa mínima antes de empezar a borrar
    };

    tick();

    return () => clearTimeout(timeout);
  }, []);

  return [display1, display2, active1, active2];
};
