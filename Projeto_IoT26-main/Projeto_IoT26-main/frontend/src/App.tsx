function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        RainSafe
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Umidade Atual
          </h2>

          <p className="text-5xl font-bold text-cyan-400">
            78%
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Temperatura
          </h2>

          <p className="text-5xl font-bold text-orange-400">
            24°C
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Status
          </h2>

          <p className="text-3xl font-bold text-red-400">
            Alerta de Chuva
          </p>
        </div>
      </div>
    </div>
  )
}

export default App