

export const fetchData = async (endpoind) => {
      const res = await fetch(endpoind, {
            headers: {
                  "Content-Type": "application/json"
            }
      })
      const data = await res.json()
      return data
}