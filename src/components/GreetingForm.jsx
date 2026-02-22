import { useMemo, useState } from 'react'

const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/

export default function GreetingForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [submittedFullName, setSubmittedFullName] = useState('')

  const nameValidationMessage = useMemo(() => {
    const trimmedName = name.trim()

    if (!trimmedName) {
      return ''
    }

    if (!namePattern.test(trimmedName)) {
      return 'El nombre solo puede contener letras (sin espacios ni números).'
    }

    return ''
  }, [name])

  const lastNameValidationMessage = useMemo(() => {
    const trimmedLastName = lastName.trim()

    if (!trimmedLastName) {
      return ''
    }

    if (!namePattern.test(trimmedLastName)) {
      return 'El apellido solo puede contener letras (sin espacios ni números).'
    }

    return ''
  }, [lastName])

  const greeting = useMemo(() => {
    if (!submittedFullName) {
      return 'Por favor, ingresa tu nombre y apellido para saludarte cordialmente.'
    }

    return `Mucho gusto, ${submittedFullName}. Es un placer saludarte.`
  }, [submittedFullName])

  const handleGreet = () => {
    const trimmedName = name.trim()
    const trimmedLastName = lastName.trim()

    if (
      !trimmedName ||
      !trimmedLastName ||
      nameValidationMessage ||
      lastNameValidationMessage
    ) {
      return
    }

    setSubmittedFullName(`${trimmedName} ${trimmedLastName}`)
  }

  const handleClear = () => {
    setName('')
    setLastName('')
    setSubmittedFullName('')
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
      <label htmlFor="last-name-input">Apellido</label>
      <input
        id="last-name-input"
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Escribe tu apellido"
      />
      <div className="button-group">
        <button
          type="button"
          className="btn-primary"
          onClick={handleGreet}
          disabled={
            !name.trim() ||
            !lastName.trim() ||
            Boolean(nameValidationMessage) ||
            Boolean(lastNameValidationMessage)
          }
        >
          Saludar
        </button>
        <button type="button" className="btn-secondary" onClick={handleClear}>
          Limpiar
        </button>
      </div>
      {nameValidationMessage ? <p>{nameValidationMessage}</p> : null}
      {lastNameValidationMessage ? <p>{lastNameValidationMessage}</p> : null}
      <p>{greeting}</p>
    </section>
  )
}
