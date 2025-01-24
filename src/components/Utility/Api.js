function checkResponse (res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}

const  getBotResponse =  () => {
  return  fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/Json' },
    body: JSON.stringify({ contents: history })
  }).then(checkResponse)
  .catch(console.error);
}
 