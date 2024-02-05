// BlurSection.jsx

import  { useEffect, useState } from 'react';
import './blurSection.module.css'; // Assurez-vous d'avoir votre fichier de styles CSS

const BlurSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const section = document.getElementById('blurSection');

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        // Écoute l'événement de défilement de la page
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Renvoie uniquement la classe 'blur' basée sur l'état isScrolled
    return isScrolled ? 'blur' : '';
};

export default BlurSection;
