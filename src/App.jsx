import React, { useEffect, useState, useRef } from 'react';
import CatImage from './components/CatImage/CatImage';
import Checkbox from './components/Chekbox/Checkbox';
import Button from './components/Button/Button';
import { fetchRandomCat } from './api/catApi';
import './styles/global.scss'; 

function App() {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState('');
  
  const intervalRef = useRef(null);

  const getCat = async () => {
    if (!enabled) return; // Если приложение выключено, не загружаем
    const data = await fetchRandomCat();
    if (data && data.url) {
      setCatUrl(data.url);
    }
  };

  // Запрос по нажатию кнопки
  const handleGetCatClick = () => {
    getCat();
  };

  // Включение/выключение приложения
  const handleEnabledChange = (e) => {
    setEnabled(e.target.checked);
    // Если выключаем, то останавливаем автообновление
    if (!e.target.checked && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Включение/выключение автообновления
  const handleAutoRefreshChange = (e) => {
    setAutoRefresh(e.target.checked);
  };

  // Эффект для автообновления
  useEffect(() => {
    // Сбрасываем если чтото уже запущено
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Если autoRefresh включён и enabled = true
    if (autoRefresh && enabled) {
      // Каждые 5 сек делаем запрос
      intervalRef.current = setInterval(() => {
        getCat();
      }, 5000);
    }

    // Чистка при размонтировании
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, enabled]);

  // Можно загрузить кота при первом рендере
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="app-container">
      <div className="controls">
        <Checkbox
          label="Enabled"
          checked={enabled}
          onChange={handleEnabledChange}
        />
        <Checkbox
          label="Auto-refresh every 5 second"
          checked={autoRefresh}
          onChange={handleAutoRefreshChange}
        />
        <Button onClick={handleGetCatClick} disabled={!enabled}>
          Get cat
        </Button>
      </div>
      
      <CatImage src={catUrl} />
    </div>
  );
}

export default App;
