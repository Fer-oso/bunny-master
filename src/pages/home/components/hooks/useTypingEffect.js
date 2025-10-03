import { useState, useEffect, useCallback } from "react";

/**
 * Hook dinámico para typing y borrado con cursor
 * @param {string[]} texts Array de textos para escribir secuencialmente
 * @param {object} options Opciones de configuración
 * @param {number} options.typingSpeed Velocidad de escritura base (ms)
 * @param {number} options.eraseSpeed Velocidad de borrado base (ms)
 * @param {number} options.pauseBeforeErase Pausa antes de empezar a borrar (ms)
 * @param {number} options.pauseBeforeRestart Pausa antes de reiniciar el ciclo (ms)
 * @param {number} options.randomVariation Variación aleatoria en velocidad (ms)
 */
export const useTypingEffect = (texts = {}, options = {}) => {
  const {
    typingSpeed = 80,
    eraseSpeed = 50,
    pauseBeforeErase = 500,
    pauseBeforeRestart = 200,
    randomVariation = 50
  } = options;

  // Estados para cada texto
  const [displays, setDisplays] = useState(texts.map(() => ""));
  const [activeStates, setActiveStates] = useState(texts.map(() => false));

  // Función para agregar variación aleatoria
  const randomDelay = useCallback((base) => {
    return base + Math.random() * randomVariation;
  }, [randomVariation]);

  // Función para actualizar un display específico
  const updateDisplay = useCallback((index, value) => {
    setDisplays(prev => {
      const newDisplays = [...prev];
      newDisplays[index] = value;
      return newDisplays;
    });
  }, []);

  // Función para actualizar un estado activo específico
  const updateActiveState = useCallback((index, isActive) => {
    setActiveStates(prev => {
      const newStates = [...prev];
      newStates[index] = isActive;
      return newStates;
    });
  }, []);

  useEffect(() => {
    if (!texts.length) return;

    let timeout;
    let currentIndex = 0;
    let charIndex = 0;
    let isCurrentlyErasing = false;

    const tick = () => {
      const currentText = texts[currentIndex].text;

      if (!isCurrentlyErasing) {
        // Modo escritura
        if (charIndex <= currentText.length) {
          updateDisplay(currentIndex, currentText.slice(0, charIndex));
          updateActiveState(currentIndex, true);
          charIndex++;
          timeout = setTimeout(tick, randomDelay(typingSpeed));
          return;
        }

        // Terminó de escribir el texto actual
        updateActiveState(currentIndex, false);

        // Si es el último texto, pausar antes de borrar
        if (currentIndex === texts.length - 1) {
          timeout = setTimeout(() => {
            isCurrentlyErasing = true;
            tick();
          }, pauseBeforeErase);
          return;
        }

        // Si no es el último, pasar al siguiente
        currentIndex++;
        charIndex = 0;
        timeout = setTimeout(tick, randomDelay(typingSpeed));
      } else {
        // Modo borrado (desde el último hacia el primero)
        const textToErase = texts[currentIndex].text;
        
        if (charIndex > 0) {
          charIndex--;
          updateDisplay(currentIndex, textToErase.slice(0, charIndex));
          updateActiveState(currentIndex, true);
          timeout = setTimeout(tick, randomDelay(eraseSpeed));
        } else {
          // Terminó de borrar el texto actual
          updateActiveState(currentIndex, false);
          
          if (currentIndex > 0) {
            // Pasar al texto anterior
            currentIndex--;
            charIndex = texts[currentIndex].text.length;
            timeout = setTimeout(tick, randomDelay(eraseSpeed));
          } else {
            // Terminó de borrar todo, reiniciar
            isCurrentlyErasing = false;
            currentIndex = 0;
            charIndex = 0;
            timeout = setTimeout(tick, pauseBeforeRestart);
          }
        }
      }
    };

    // Inicializar displays vacíos
    setDisplays(texts.map(() => ""));
    setActiveStates(texts.map(() => false));
    
    // Comenzar el efecto
    timeout = setTimeout(tick, 100);

    return () => clearTimeout(timeout);
  }, [texts, typingSpeed, eraseSpeed, pauseBeforeErase, pauseBeforeRestart, randomDelay, updateDisplay, updateActiveState]);

  return { displays, activeStates };
};