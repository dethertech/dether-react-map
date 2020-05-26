import DetherJS from 'detherjs'
import config from '../../constants/config'

const getDetherUser = async encryptedWallet => {
  const detherJs = new DetherJS(false)

  await detherJs.init({
    rpcURL: config.rpcURL,
  })

  detherJs.loadUser(encryptedWallet)

  return detherJs
}

export default getDetherUser
