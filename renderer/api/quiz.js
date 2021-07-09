const QUIZ_URLS = {
    get: 'http://localhost:1337/quizzes',
};

export const getAll = async () => {
    const res = await fetch(QUIZ_URLS.get);
    return await res.json();
};

export const getById = async (id) => {
    const res = await fetch(`${QUIZ_URLS.get}/${id}`);
    return await res.json();
};
