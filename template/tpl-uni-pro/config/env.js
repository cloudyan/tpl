import config from './index'

const apiEnv = 'prod' // local dev beta prod

const terminal = config.channel

export const ENV = {
  prod: {
    host: 'm.xxx.com',
    baseUrl: 'https://m.xxx.com',
    apiBaseUrl: 'https://m.api.xxx.com',
  },
  local: {
    baseUrl: 'http://localhost:8085',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
  dev: {
    baseUrl: 'https://h5.dev.xxx.com',
    apiBaseUrl: 'https://m.devapi.xxx.com',
  },
  beta: {
    baseUrl: 'https://m.beta.xxx.com',
    apiBaseUrl: 'https://m.betaapi.xxx.com',
  },
}

const baseEnv = {
  authCode: 401, // 未登录的错误码
  debug: false,
  autoJumpH5: false,
  // port: 8001,
  terminal,
  channel: config.channel,
  version: config.version,
  publicPath: '',
  baseUrl: '',
  apiBaseUrl: '',
  defaultShareInfo: {
    title: '我分享了一家好店给你，快来看看吧',
    content: '大额优惠等你来',
    desc: '大额优惠等你来',
    imageUrl: '',
  },
  utm: { // utm 参数
    channel: config.channel,
    source: '',
    media: '',
  },
}

function createEnv(opts = {}) {
  const { env = 'prod' } = opts
  return Object.assign({}, baseEnv, ENV[env], {stage: env}, opts)
}

// 默认会有个 api 配置，之后会读取 store
const mini = createEnv({
  env: apiEnv,
})

module.exports = mini
