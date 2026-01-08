import { bot, storageGroupId } from "../config.js"
import { isMsgPrivate } from "../validators/isMsgPrivate.js"

bot.onText(/^\/start/, async (msg) => {
  const isPrivate = await isMsgPrivate(msg)
  if (!isPrivate) return
  const userId = msg.from.id
  const fileId = await getFileIdInLinkFile(msg)
  if (fileId === null) return

  try {
    bot.copyMessage(userId, storageGroupId, fileId)
  } catch (error) {
    console.error(error)
  }
})

async function getFileIdInLinkFile(msg) {
  const linkFile = msg.text
  const splitedLinkFile = linkFile.split("")
  const initialPosition = splitedLinkFile.lastIndexOf(" ") + 1
  if (initialPosition !== 0) {
    const splitedFileId = splitedLinkFile.slice(initialPosition)
    const fileId = splitedFileId.join("")
    return fileId
  } else {
    return null
  }
}
