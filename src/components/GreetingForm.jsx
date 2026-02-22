import { useMemo, useState } from 'react'

const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/

export default function GreetingForm() {
  const [name, setName] = useState('')

  const validationMessage = useMemo(() => {
    const trimmedName = name.trim()

    if (!trimmedName) {
      return ''
    }

    if (!namePattern.test(trimmedName)) {
      return 'El nombre solo puede contener letras (sin espacios ni números).'
    }

    return ''
  }, [name])

  const greeting = useMemo(() => {
    const trimmedName = name.trim()
    if (!trimmedName) {
      return 'Por favor, ingresa tu nombre para saludarte cordialmente.'
    }

    if (validationMessage) {
      return 'Corrige el nombre para continuar con el saludo.'
    }

    return `Mucho gusto, ${trimmedName}. Es un placer saludarte.`
  }, [name, validationMessage])

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
      {validationMessage ? <p>{validationMessage}</p> : null}
      <p>{greeting}</p>
    </section>
  )
}
