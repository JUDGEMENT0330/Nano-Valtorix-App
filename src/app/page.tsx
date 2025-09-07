'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set the default theme to light on initial load
    document.documentElement.setAttribute('data-theme', 'light');
    setTheme('light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container-fluid p-0">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <header className="p-5 text-center" style={{background: 'transparent', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="p-4 rounded-3 glass-effect">
            <h1 className="display-4 fw-bold">Branding Inteligente para la Era Digital</h1>
            <p className="lead col-md-8 mx-auto">Utiliza el poder de la IA para generar logos, imágenes y una identidad de marca cohesiva en segundos.</p>
            <a href="#tools" className="btn btn-primary btn-lg">Empezar a Crear</a>
        </div>
      </header>

      {/* Tools Section */}
      <main id="tools" className="container p-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center mb-4">Generador de Diseños</h2>
            <div className="card p-4 shadow-sm card-hover-effect">
              <div className="mb-3">
                <label htmlFor="prompt-input" className="form-label">Describe tu idea:</label>
                <textarea id="prompt-input" className="form-control" rows={3} placeholder="Ej: Un logo para una cafetería llamada 'Astro Coffee', estilo minimalista, con un cohete y un grano de café."></textarea>
              </div>
              <button className="btn btn-primary">Generar</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-12 text-center">
                <h3 className="mb-4">Resultado</h3>
                <div className="p-4 border rounded bg-light" style={{minHeight: '400px'}}>
                    <p className="text-muted">El diseño generado aparecerá aquí.</p>
                </div>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4">
        <p>&copy; {new Date().getFullYear()} Cyber Valtorix. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
