import React, { useState } from 'react';

export default function Form2() {
  const [form, setForm] = useState({ firstName: 'Barbara', lastName: 'Hepworth' });

  function handleFirstNameChange(e) {
    setForm({ ...form, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setForm({ ...form, lastName: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input value={form.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={form.lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        {form.firstName} {form.lastName}
      </p>
    </>
  );
}
