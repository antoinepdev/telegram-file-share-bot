export async function isMsgPrivate(msg) {
  if (msg.from.is_bot || msg.chat.id !== msg.from.id) return false
  else return true
}
