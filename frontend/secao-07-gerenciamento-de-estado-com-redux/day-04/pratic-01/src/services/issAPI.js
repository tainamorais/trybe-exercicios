const API_BASE_URL = 'http://api.open-notify.org';

export const getCurrentISSLocation = async () => {
  const response = await fetch(`${API_BASE_URL}/iss-now.json`);
  const json = await response.json();
  return json;
}