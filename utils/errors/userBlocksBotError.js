export async function userBlocksBotError(error) {
  if (error.response.body.description.includes("user blocks")) return true
  else return false
}
