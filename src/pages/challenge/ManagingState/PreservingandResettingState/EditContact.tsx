import React, { useState, ChangeEvent } from 'react';

interface ContactData {
    id: number;
    name: string;
    email: string;
}

interface EditContactProps {
    initialData: ContactData;
    onSave: (data: ContactData) => void;
}

export default function EditContact({ initialData, onSave }: EditContactProps) {
    const [name, setName] = useState(initialData.name);
    const [email, setEmail] = useState(initialData.email);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSave = () => {
        const updatedData: ContactData = {
        id: initialData.id,
        name: name,
        email: email
        };
        onSave(updatedData);
    };

    const handleReset = () => {
        setName(initialData.name);
        setEmail(initialData.email);
    };

    return (
        <section>
        <label>
            Name:{' '}
            <input
            type="text"
            value={name}
            onChange={handleNameChange}
            />
        </label>
        <label>
            Email:{' '}
            <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            />
        </label>
        <button onClick={handleSave}>
            Save
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
        </section>
    );
}