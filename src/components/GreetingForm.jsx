import { useMemo, useState } from 'react'

export default function GreetingForm() {
  const [name, setName] = useState('')

  const greeting = useMemo(() => {
    const trimmedName = name.trim()
    if (!trimmedName) {
      return 'Por favor, ingresa tu nombre para saludarte cordialmente.'
    }

    return `Mucho gusto, ${trimmedName}. Es un placer saludarte.`
  }, [name])

  return (
    <section className="greeting-card" aria-label="Formulario de saludo">
      <h1>Saludo cordial</h1>
      <label htmlFor="name-input">Nombre</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>{greeting}</p>
    </section>
  )
}
