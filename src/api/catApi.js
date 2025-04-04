import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = process.env.REACT_APP_CAT_API_KEY;

export const fetchRandomCat = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    // Возвращаем первую картинку из массива
    return response.data[0];
  } catch (error) {
    console.error('Ошибка при запросе к catapi:', error);
    return null;
  }
};
