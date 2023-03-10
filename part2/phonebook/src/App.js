import { useState } from 'react';

const Filter = ({newFilter, handleFilterInputChange}) => (
  <div>
    filter shown with <input value={newFilter} onChange={handleFilterInputChange}/>
  </div>
);

const Form = (props) => (
  <form>
    <div>
      name: <input value={props.newName} onChange={props.handleNameInputChange}/>
    </div>
    <div>
      number: <input value={props.newNumber} onChange={props.handleNumberInputChange}/>
    </div>
    <div>
      <button type="submit" onClick={props.handleFormSubmit}>add</button>
    </div>
  </form>
);

const PersonLine = ({person}) => (
  <>
    <p>{person.name} {person.number}</p>
  </>
);

const Persons = ({filteredPersons}) => (
  <div>
    {filteredPersons.map(person => <PersonLine key={person.name} person={person}/>)}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filterPersons = (unfilteredPersons, filteredValue) => {
    const newFilteredPersons = [...unfilteredPersons].filter(person =>
      person.name.toLowerCase().includes(filteredValue.toLowerCase()));
    setFilteredPersons(newFilteredPersons);
  };

  const handleFilterInputChange = (event) => {
    const filteredValue = event.target.value;
    setNewFilter(filteredValue);
    filterPersons(persons, filteredValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    const newPersons = persons.concat(nameObject)
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
    filterPersons(newPersons, newFilter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterInputChange={handleFilterInputChange}/>
      <h2>add a new</h2>
      <Form newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange}
        handleNumberInputChange={handleNumberInputChange} handleFormSubmit={handleFormSubmit}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  );
};

export default App;
