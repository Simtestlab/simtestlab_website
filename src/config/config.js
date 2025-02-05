const getCredentials = async () => {
    const response = await fetch('/.netlify/functions/getCredentials');
    const data = await response.json();
    return data;
  };
  
export default getCredentials;