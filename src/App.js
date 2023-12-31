import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const mode = localStorage.getItem('darkMode');

  const [isDarkMode, setIsDarkMode] = useState(mode);

  const toggleDarkMode = () => {
    if (isDarkMode === 'dark-mode') {
      localStorage.setItem('darkMode', '');
      setIsDarkMode('');
    } else {
      setIsDarkMode('dark-mode');
      localStorage.setItem('darkMode', 'dark-mode');
    }
  };
  // use class "'dark-mode' to change theme"

  return (
    <Provider store={store}>
      <div className={`${isDarkMode}`}>
        <Header toggleDarkMode={toggleDarkMode} />
        <List />
      </div>
    </Provider>
  );
}

export default App;
