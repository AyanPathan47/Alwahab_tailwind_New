// Access the environment variables
const Apiurl = import.meta.env.VITE_API_URL;
const Apikey = import.meta.env.VITE_API_TOKEN;

// Debug log to check if environment variables are loaded
console.log('API URL:', Apiurl);
console.log('API Key:', Apikey);

const fetchApi = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(`${Apiurl}category`, {
      headers: {
        Authorization: `Bearer ${Apikey}`,
        'Content-Type': 'application/json',
      },
    });

    // Check for response status
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON data
    const data = await response.json();
    console.log('API Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching API:', error);
    return null;
  }
};

// Call the function to fetch the API data
fetchApi();


