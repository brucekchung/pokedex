export const getPokeType = async () => {
  const response = await fetch('http://localhost:3001/types')

  return await response.json()
}




