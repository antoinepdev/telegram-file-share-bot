export async function userBlocksBotError(error) {
  if (error.response && error.response.statusCode === 403) return true
  else return false
}
