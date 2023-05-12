import React, { useState } from 'react';
import CustomSelect from './Componant/CustomSelect';

const App = () => {
  const countries = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'in', label: 'India' },
  ];

  const statesByCountry = {
    usa: [
      { value: 'ny', label: 'New York' },
      { value: 'ca', label: 'California' },
      { value: 'tx', label: 'Texas' },
    ],
    canada: [
      { value: 'on', label: 'Ontario' },
      { value: 'qc', label: 'Quebec' },
      { value: 'bc', label: 'British Columbia' },
    ],
    in: [
      { value: 'guj', label: 'Gujrat' },
      { value: 'bom', label: 'Bombay' },
      { value: 'del', label: 'Delhi' },
    ],
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCountryChange = (option) => {
    setSelectedCountry(option);
    setSelectedState(null);
  };

  const handleStateChange = (option) => {
    setSelectedState(option);
  };

  const handleSubmit = () => {
    if (!selectedCountry || !selectedState) {
      setErrorMessage('Please select both country and state');
    } else {
      // Perform submit action and redirect to a new page
      // Display selectedCountry and selectedState on the new page
    }
  };

  return (
    <div>
      <h1>Select Country and State</h1>
      <CustomSelect options={countries} onChange={handleCountryChange} />
      {selectedCountry && (
        <CustomSelect
          options={statesByCountry[selectedCountry.value]}
          onChange={handleStateChange}
        />
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
