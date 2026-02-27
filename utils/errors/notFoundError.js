export async function notFoundError(error) {
  if (error.response.body.description.includes("message to copy not found")) return true
  else return false

}
