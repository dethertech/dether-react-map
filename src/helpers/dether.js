import DetherJS from 'detherjs'
import config from '../config/config'

const getDether = async (rpcURL) => {
  const detherJs = new DetherJS(false)

  await detherJs.init({
    rpcURL
  })

  return detherJs
}

export default getDether
