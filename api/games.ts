export const getAllData = async () => {
    const response = await fetch('http://localhost:3001/all');
    const data = await response.json();
    return data;
};

export const getUpdateNews = async () => {
    const response = await fetch('http://localhost:3001/updates');
    const data = await response.json();
    return data;
};

export const getNews = async () => {
    const response = await fetch('http://localhost:3001/news');
    const data = await response.json();
    return data;
};