import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');
    const teachers = ['Data', 'Reyes', 'Yolanda'];

    const handleNameChange = (selectedName) => {
        setName(selectedName);
    };
    const changeName = (e) => {
        e.preventDefault(); 
        if (newName.trim() !== '') {
            setName(newName); 
            setNewName(''); 
        }
    };

    return (
        <div className="App">
            <h2>Teacher Name: {name}</h2>

            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher} onClick={() => handleNameChange(teacher)} style={{ cursor: 'pointer' }}>
                        {teacher}
                    </li>
                ))}
            </ul>
            
            <form onSubmit={changeName}>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Add a name"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default App;
