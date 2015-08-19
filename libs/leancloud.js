import SDK from 'sdk'
import APIs from './api'
import rules from './rules'

const HOST = 'https://leancloud.cn'
const API_VERSION = '1.1'

export default function(configs) {
  return new SDK(`${HOST}/${API_VERSION}`, APIs, rules(configs))
}