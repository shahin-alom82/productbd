

export const fetchData = async (endPoind) => {
      const res = await fetch(endPoind, {
            headers: {
                  "Content-Type": "appcation/json"
            }
      })
      const data = await res.json()
      return data
}