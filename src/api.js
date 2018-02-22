export const getPokeType = async () => {
  try {
    const response = await fetch('http://localhost:3001/types')
    
    if (response.status < 300) {
      return await response.json()
      
    } else {
      throw new Error ('cannot get types')
    }

  } catch (error) {
    throw error
  }

}




