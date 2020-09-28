const fetcher = async (method, url, data) => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: localStorage.getItem('token'),
      },
    });
    const res = await response.json();
    return [null, res];
  } catch (error) {
    return [error, {}];
  }
};

export default fetcher;
