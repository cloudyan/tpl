module.exports = [
  {
    type: 'list',
    name: 'template',
    message: '请选择模板',
    choices: [
      // {
      //   name: 'tpl-default: 默认模板 vue 精简项目',
      //   value: 'tpl-default'
      // },
      {
        name: 'tpl-uni: uni-app 跨平台小程序',
        value: 'tpl-uni'
      },
      {
        name: 'tpl-uni: vue H5 单页面应用项目',
        value: 'tpl-vue-h5'
      },
      {
        name: 'tpl-vue-admin: vue admin PC管理后台项目',
        value: 'tpl-vue-admin'
      },
      // {
      //   name: 'Hello uni-app',
      //   value: 'cloudyan/tpl-hello'
      // },
      // {
      //   name: 'uni-app 模板',
      //   value: 'cloudyan/tpl-uni'
      // },
      // {
      //   name: 'Vue H5 模板',
      //   value: 'cloudyan/tpl-vue-h5'
      // },
      // {
      //   name: 'Vue admin 模板',
      //   value: 'cloudyan/tpl-vue-admin'
      // },
      {
        name: '自定义模板',
        value: 'custom'
      }
    ],
    default: 'None'
  },
  {
    when: answers => answers.template === 'custom',
    type: 'input',
    name: 'repo',
    message: '请输入自定义模板地址',
    filter (input) {
      return new Promise(function (resolve, reject) {
        if (input) {
          resolve(input)
        } else {
          reject(new Error('模板地址不能为空'))
        }
      })
    }
  }
]
