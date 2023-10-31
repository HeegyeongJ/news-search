import { useState } from 'react';
import Input from './components/Input';
import News from './components/News';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchValue = (value) => {
    setSearchValue(value);
  }
  
  return (
    <div className="App">
      <Input getSearchValue={getSearchValue} />
      <News searchValue={searchValue} />
    </div>
  );
}

export default App;
