import React from 'react';

export default function Home() {
  return (
    <div className="container">
      {/* SEZIONE INTRODUTTIVA */}
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f4f9f4' }}>
        <h2 style={{ color: '#2d5a27' }}>Benvenuto nel tuo Percorso di Benessere</h2>
        <p>Qui puoi gestire la tua dieta, i tuoi allenamenti e testare la tua mente.</p>
      </section>

      {/* SEZIONE DIETA */}
      <section id="dieta" style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#2d5a27', borderBottom: '2px solid #2d5a27', paddingBottom: '10px' }}>
          🥗 Nutrizione Consapevole
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e67e22' }}>Colazione</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Porridge d'avena con frutti di bosco</li>
              <li>Tè verde o caffè senza zucchero</li>
              <li>3 noci per i grassi buoni</li>
            </ul>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#e67e22' }}>Pranzo & Cena</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>50% Verdure di stagione</li>
              <li>25% Proteine (pesce, legumi, carni bianche)</li>
              <li>25% Carboidrati complessi (riso integrale, quinoa)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEZIONE ESERCIZI */}
      <section id="esercizi" style={{ padding: '40px 20px', backgroundColor: '#f4f9f4' }}>
        <h2 style={{ color: '#2d5a27', borderBottom: '2px solid #2d5a27', paddingBottom: '10px' }}>
          💪 Movimento Rigenerante
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#2d5a27' }}>Cardio (30 min)</h3>
            <p>Camminata veloce o nuoto per migliorare la circolazione e l'umore.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#2d5a27' }}>Forza & Flex</h3>
            <p>Esercizi a corpo libero (squat, plank) e 10 minuti di stretching finale.</p>
          </div>
        </div>
      </section>

      {/* SEZIONE MENTE (TEST) */}
      <section id="mente" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#2d5a27' }}>🧠 Allenamento Mentale</h2>
        <p>Mantenere la mente attiva è importante quanto allenare i muscoli.</p>
        <div style={{ background: '#fff3e0', padding: '30px', borderRadius: '15px', marginTop: '20px' }}>
          <h3>Sfida di Concentrazione</h3>
          <p>Pronto per il test? Clicca il tasto qui sotto per iniziare.</p>
          <button 
            style={{ 
              backgroundColor: '#e67e22', 
              color: 'white', 
              border: 'none', 
              padding: '12px 25px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '1rem' 
            }}
          >
            Inizia Test
          </button>
        </div>
      </section>

      {/* CSS LOCALE RAPIDO */}
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          font-family: sans-serif;
          color: #333;
        }
      `}</style>
    </div>
  );
}
