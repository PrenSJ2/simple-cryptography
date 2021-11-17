const { createCipheriv, randomBytes, createDecipheriv} = require('crypto')

// Cipher

const message = 'I love tara'
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes256', key, iv)

// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex')+ cipher.final('hex')

// Decrypt

const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8')