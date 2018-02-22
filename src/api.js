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

export const getPokemon = async (pokeId) => {
  try {
    const response = await fetch(`http://localhost:3001/pokemon/${pokeId}`)
    
    if (response.status < 300) {
      return await response.json()

    } else {
      throw new Error ('cannot get pokemon')
    }
  } catch (error) {
    throw error
  }

}


