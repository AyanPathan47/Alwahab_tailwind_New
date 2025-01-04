// api.js

export const fetchPrograms = async () => {
  const icharmsUrl = import.meta.env.ICHARMS_URL;
  const apiKey = import.meta.env.ICHARMS_API_KEY;

  const response = await fetch(`${icharmsUrl}/all-program-list`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,

    },
  });

  const data = await response.json();
  return data; // Assuming the response is an array of programs
};