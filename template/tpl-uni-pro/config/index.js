// 内容较多的话，可以分多个js，条件引用require
let config

// #ifdef MP-WEIXIN
config = {
  appid: '',
  channel: 'wxapp',
  version: '1.0.0',
}
// #endif

// #ifdef MP-ALIPAY
config = {
  appid: '',
  channel: 'aliapp',
  version: '1.0.0',
}
// #endif

// #ifdef MP-BAIDU
config = {
  appid: '',
  channel: 'bdapp',
  version: '1.0.0',
}
// #endif

// #ifdef MP-TOUTIAO
config = {
  appid: '',
  channel: 'ttapp',
  version: '1.0.0',
}
// #endif

// #ifdef MP-TINGTALK
config = {
  appid: '',
  channel: 'ddapp',
  version: '1.0.0',
}
// #endif

export default config
