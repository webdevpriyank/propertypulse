const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch all properties
async function fetchProperties(){
    try {
        // Handle the case where domain is not available
        if (!apiDomain){
            return []
        }
        const res = await fetch(`${apiDomain}/properties`)

        if(!res.ok){
            throw new Error('Could not fetch properties')
        }
        return res.json()

    } catch (error) {
      console.log(error)
      return []
    }
}

// Fetch single property
async function fetchProperty(id){
    try {
        // Handle the case where domain is not available
        if (!apiDomain){
            return null
        }
        const res = await fetch(`${apiDomain}/properties/${id}`)

        if(!res.ok){
            throw new Error('Could not fetch properties')
        }
        return res.json()

    } catch (error) {
      console.log(error)
      return null
    }
}

export { fetchProperties, fetchProperty }