const fs = require('fs')
const path = require('path')


async function generate (dir, files, base = '', rootOptions = {}) {
  const glob = require('glob')
  const isBinaryFileSync = require('isbinaryfile').isBinaryFileSync

  glob.sync('**/*', {
    cwd: dir,
    nodir: true
  }).forEach(rawPath => {
    const sourcePath = path.resolve(dir, rawPath)
    const filename = path.join(base, rawPath)

    if (isBinaryFileSync(sourcePath)) {
      files[filename] = fs.readFileSync(sourcePath) // return buffer
    } else {
      let content = fs.readFileSync(sourcePath, 'utf-8')
      if (path.basename(filename) === 'manifest.json') {
        content = content.replace('{{name}}', rootOptions.projectName || '')
      }
      if (filename.charAt(0) === '_' && filename.charAt(1) !== '_') {
        files[`.${filename.slice(1)}`] = content
      } else if (filename.charAt(0) === '_' && filename.charAt(1) === '_') {
        files[`${filename.slice(1)}`] = content
      } else {
        files[filename] = content
      }
    }
  })
}

module.exports = (api, options, rootOptions) => {
  // 添加公共依赖
  // api.extendPackage(pkg => {
  //   return {
  //     dependencies: {
  //       'regenerator-runtime': '^0.12.1',// 锁定版本，避免高版本在小程序中出错
  //     },
  //     devDependencies: {
  //     }
  //   }
  // })

  // 条件依赖
  if (options.template.startsWith('tpl-uni')) {
    // api.extendPackage(pkg => {
    //   return {
    //     dependencies: {

    //     },
    //     devDependencies: {

    //     }
    //   }
    // })
  } else if (options.template.startsWith('tpl-vue')) {

    if (['tpl-vue-h5'].includes(options.template)) {

    } else if (['tpl-vue-admin'].includes(options.template)) {

    }
  }
  // api.render('./template/default', 'src')

  api.render(async function (files) {
    Object.keys(files).forEach(name => {
      delete files[name]
    })

    const template = options.repo || options.template

    const base = 'src'
    // await generate(path.resolve(__dirname, './template/common'), files)
    if (template.startsWith('tpl-uni')) {
      await generate(path.resolve(__dirname, './template/common-uni'), files)
      await generate(path.resolve(__dirname, './template/tpl-uni'), files, base, rootOptions)
    } else if (template.startsWith('tpl-vue')) {
      await generate(path.resolve(__dirname, './template/common-vue'), files)
      await generate(path.resolve(__dirname, `./template/${template}`), files, base, rootOptions)
    } else {
      const ora = require('ora')
      const home = require('user-home')
      const download = require('download-git-repo')

      const spinner = ora('模板下载中...')
      spinner.start()

      const tmp = path.join(home, '.uni-app/templates', template.replace(/[/:]/g, '-'), 'src')

      if (fs.existsSync(tmp)) {
        try {
          require('rimraf').sync(tmp)
        } catch (e) {
          console.error(e)
        }
      }

      await new Promise((resolve, reject) => {
        download(template, tmp, err => {
          spinner.stop()
          if (err) {
            return reject(err)
          }
          resolve()
        })
      })

      await generate(tmp, files, base)
    }
  })
}
