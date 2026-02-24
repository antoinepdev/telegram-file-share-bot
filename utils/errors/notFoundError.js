export async function notFoundError(error) {
  if (error.response.body.description.includes("not found")) return true
  else return false
}
