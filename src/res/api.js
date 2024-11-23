const baseURL = 'https://mainapp-server.onrender.com';

const fetchApi = async (url, method, body) => {
    const fullUrl = baseURL + url;

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: method || 'GET',
    };

    if (body) {
        params.body = JSON.stringify(body);
    }

    return await fetch(fullUrl, params)
        .then(res => res.json())
        .catch(e => console.log('fetch error: ', e));
};

export const getAllHoodie = async () => {
    const url = '/getAllHoodie';
    return await fetchApi(url);
};

export const getAllShoes = async () => {
    const url = '/getAllShoes';
    return await fetchApi(url);
};
export const getAllPants = async () => {
    const url = '/getAllPants';
    return await fetchApi(url);
};

export const LogInApi = async (body) => {
    const url = '/login';
    return await fetchApi(url, "POST", body);
};

export const CreateUserApi = async (body) => {
    const url = '/CreateUser';
    return await fetchApi(url, "POST", body);
};



// Uncomment and use these functions if needed
// export const getAllUsers = async () => {
//   const url = '/getAllUsers';
//   return await fetchApi(url);
// };

// export const createpordact  = async (body) => {
//   const url = '/createpordact';
//   return await fetchApi(url, 'POST', body);
// };
