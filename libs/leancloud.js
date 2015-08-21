import SDK from 'sdk'
import APIs from './api'
import rules from './rules'

export default class LeanCloud {
  constructor(configs) {
    if (!configs || !(configs.appId && configs.appKey))
      throw new Error('leancloud.init() appId and appKey are both required')

    this.HOST = 'https://leancloud.cn'
    this.API_VERSION = '1.1'

    return new SDK(
      `${this.HOST}/${this.API_VERSION}/`, 
      APIs, 
      rules(configs)
    )
  }
}
