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
        name: 'uni-app 定制模板',
        value: 'tpl-uni-pro',
      },
      {
        name: 'uni-app 精简模板',
        value: 'tpl-uni',
      },
      {
        name: 'vue-h5 单页面应用模板',
        value: 'tpl-vue-h5',
      },
      {
        name: 'vue-admin PC管理后台模板',
        value: 'tpl-vue-admin',
      },
      // {
      //   name: 'vue-h5 定制模板',
      //   value: 'tpl-vue-h5',
      // },
      // {
      //   name: 'vue-admin 定制模板',
      //   value: 'tpl-vue-admin',
      // },
      {
        name: '自定义模板',
        value: 'custom',
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
