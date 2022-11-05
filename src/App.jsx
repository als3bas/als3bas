import { useState } from 'react';
import { Button, Header, Footer } from './Components';

function App() {
  return (
    <>
      <header>
        <div className="bg-white shadow">
          <Header title="Álvaro Sebastián" subtitle="Software Developer">
            Álvaro Sebastián
          </Header>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 px-6">
          😊
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
