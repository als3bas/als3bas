import { useState } from 'react';
import { Button, Header, Footer } from './Components';

function App() {
  return (
    <>
      <header>
        <div className="bg-white shadow">
          <Header title="Álvaro Sebastián" subtitle="Software Developer" />
        </div>
      </header>
      <main>
        <div id="welcome-message" className="mx-auto max-w-7xl py-6 px-6">
          😀 My personal website, built with React and TailwindCSS.
          This is my first time with those frameworks, expect some bugs and bad practices.
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
