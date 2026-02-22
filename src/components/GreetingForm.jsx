import { useState } from 'react'

const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/

export default function GreetingForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [submittedFullName, setSubmittedFullName] = useState('')

  const trimmedName = name.trim()
  const trimmedLastName = lastName.trim()

  const nameValidationMessage =
    trimmedName && !namePattern.test(trimmedName)
      ? 'El nombre solo puede contener letras (sin espacios ni números).'
      : ''

  const lastNameValidationMessage =
    trimmedLastName && !namePattern.test(trimmedLastName)
      ? 'El apellido solo puede contener letras (sin espacios ni números).'
      : ''

  const greeting = submittedFullName
    ? `Mucho gusto, ${submittedFullName}. Es un placer saludarte.`
    : 'Por favor, ingresa tu nombre y apellido para saludarte cordialmente.'

  const handleGreet = () => {
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
            !trimmedName ||
            !trimmedLastName ||
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
