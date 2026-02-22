import { useMemo, useState } from 'react'

const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/

export default function GreetingForm() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

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
    if (!submittedName) {
      return 'Por favor, ingresa tu nombre para saludarte cordialmente.'
    }

    return `Mucho gusto, ${submittedName}. Es un placer saludarte.`
  }, [submittedName])

  const handleGreet = () => {
    const trimmedName = name.trim()

    if (!trimmedName || validationMessage) {
      return
    }

    setSubmittedName(trimmedName)
  }

  const handleClear = () => {
    setName('')
    setSubmittedName('')
  }

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
      <div className="button-group">
        <button
          type="button"
          className="btn-primary"
          onClick={handleGreet}
          disabled={!name.trim() || Boolean(validationMessage)}
        >
          Saludar
        </button>
        <button type="button" className="btn-secondary" onClick={handleClear}>
          Limpiar
        </button>
      </div>
      {validationMessage ? <p>{validationMessage}</p> : null}
      <p>{greeting}</p>
    </section>
  )
}
