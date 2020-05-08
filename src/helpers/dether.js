import DetherJS from 'detherjs'
import config from '../config/config'

const getDether = async () => {
  const detherJs = new DetherJS(false)
  const { rpcURL } = config

  await detherJs.init({
    rpcURL
  })

  return detherJs
}

export default getDether
