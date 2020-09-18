module.exports = {
  default: {

  },
  eslint: {
    scripts: {
      "commit": "npm run lint & npx git-cz",
      "lint": "vue-cli-service lint",
    },
    "devDependencies": {
      "@vue/cli-plugin-eslint": "^4.5.6",
      "babel-eslint": "^10.1.0",
      "eslint": "^7.8.1",
      "eslint-plugin-import": "^2.22.0",
      "eslint-plugin-vue": "^6.2.2",
    },
  },
  sass: {
    "devDependencies": {
      "node-sass": "^4.14.1",
      "sass-loader": "^10.0.2",
    },
  },
  vue: {
    "devDependencies": {
      "@vue/cli-plugin-babel": "^4.5.6",
      "@vue/cli-service": "^4.5.6",
      "@vue/shared": "3.0.0-rc.10",
      "babel-plugin-import": "^1.13.0",
      "vue-template-compiler": "^2.6.12"
    },
  },
  uni: {
    "author": "@deepjs",
    scripts: {
      "dev": "npm run dev:mp-alipay",
      "serve": "npm run dev:mp-alipay",
      "build": "npm run build:mp-alipay",
      "build:app-plus": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build",
      "build:custom": "cross-env NODE_ENV=production uniapp-cli custom",
      "build:h5": "cross-env NODE_ENV=production UNI_PLATFORM=h5 vue-cli-service uni-build",
      "build:mp-360": "cross-env NODE_ENV=production UNI_PLATFORM=mp-360 vue-cli-service uni-build",
      "build:mp-alipay": "cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay vue-cli-service uni-build",
      "build:mp-baidu": "cross-env NODE_ENV=production UNI_PLATFORM=mp-baidu vue-cli-service uni-build",
      "build:mp-qq": "cross-env NODE_ENV=production UNI_PLATFORM=mp-qq vue-cli-service uni-build",
      "build:mp-toutiao": "cross-env NODE_ENV=production UNI_PLATFORM=mp-toutiao vue-cli-service uni-build",
      "build:mp-weixin": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
      "build:quickapp-native": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-native vue-cli-service uni-build",
      "build:quickapp-webview": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview vue-cli-service uni-build",
      "build:quickapp-webview-huawei": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build",
      "build:quickapp-webview-union": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build",
      "dev:app-plus": "cross-env NODE_ENV=development UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
      "dev:custom": "cross-env NODE_ENV=development uniapp-cli custom",
      "dev:h5": "cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-serve",
      "dev:mp-360": "cross-env NODE_ENV=development UNI_PLATFORM=mp-360 vue-cli-service uni-build --watch",
      "dev:mp-alipay": "cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay vue-cli-service uni-build --watch",
      "dev:mp-baidu": "cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch",
      "dev:mp-qq": "cross-env NODE_ENV=development UNI_PLATFORM=mp-qq vue-cli-service uni-build --watch",
      "dev:mp-toutiao": "cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch",
      "dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
      "dev:quickapp-native": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-native vue-cli-service uni-build --watch",
      "dev:quickapp-webview": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview vue-cli-service uni-build --watch",
      "dev:quickapp-webview-huawei": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build --watch",
      "dev:quickapp-webview-union": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build --watch",
      "serve:quickapp-native": "node node_modules/@dcloudio/uni-quickapp-native/bin/serve.js",
      "info": "node node_modules/@dcloudio/vue-cli-plugin-uni/commands/info.js",
    },
    "devDependencies": {
      "@dcloudio/types": "*",
      "@dcloudio/uni-app-plus": "^2.0.0-28920200907001",
      "@dcloudio/uni-automator": "^2.0.0-28920200907001",
      "@dcloudio/uni-cli-shared": "^2.0.0-28920200907001",
      "@dcloudio/uni-h5": "^2.0.0-28920200907001",
      "@dcloudio/uni-helper-json": "*",
      "@dcloudio/uni-migration": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-alipay": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-baidu": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-qq": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-toutiao": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-vue": "^2.0.0-28920200907001",
      "@dcloudio/uni-mp-weixin": "^2.0.0-28920200907001",
      "@dcloudio/uni-quickapp-native": "^2.0.0-28920200907001",
      "@dcloudio/uni-quickapp-webview": "^2.0.0-28920200907001",
      "@dcloudio/uni-stat": "^2.0.0-28920200907001",
      "@dcloudio/uni-template-compiler": "^2.0.0-28920200907001",
      "@dcloudio/vue-cli-plugin-hbuilderx": "^2.0.0-28920200907001",
      "@dcloudio/vue-cli-plugin-uni": "^2.0.0-28920200907001",
      "@dcloudio/vue-cli-plugin-uni-optimize": "^2.0.0-28920200907001",
      "@dcloudio/webpack-uni-mp-loader": "^2.0.0-28920200907001",
      "@dcloudio/webpack-uni-pages-loader": "^2.0.0-28920200907001",
      "@vue/cli-plugin-babel": "^4.5.6",
      "@vue/cli-service": "^4.5.6",
      "@vue/shared": "3.0.0-rc.10",
      "babel-plugin-import": "^1.13.0",
      "core-js": "^3.6.5",
      "cross-env": "^7.0.2",
      "flyio": "^0.6.14",
      "mini-types": "*",
      "miniprogram-api-typings": "*",
      "postcss-comment": "^2.0.0",
      "regenerator-runtime": "^0.13.7",
      "vue-template-compiler": "^2.6.12",
    },
    "browserslist": [
      "Android >= 4",
      "ios >= 8"
    ],
  },
  'uni-test': {
    scripts: {
      "test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
      "test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
      "test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
      "test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i",
      "test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i"
    },
    "devDependencies": {
      "jest": "^25.4.0",
    },
  },
  'uni-pro': {
    scripts: {
      "prebuild": "npm run pages",
      "pages": "node ./scripts/pages.js",
    },
    dependencies: {
      "@deepjs/qs": "^0.2.1",
      "@deepjs/uni-ccui": "^0.3.4",
      "@deepjs/uni-storage": "^0.3.6",
      "@deepjs/uni-utils": "^0.3.6",
      "lru-cache": "^6.0.0",
      "umtrack-alipay": "^2.4.8",
      "url-parse": "^1.4.7",
      "vue": "^2.6.12",
      "vuex": "^3.5.1"
    },
    "uni-app": {
      "scripts": {
        "mp-dingtalk": {
          "title": "钉钉小程序",
          "env": {
            "UNI_PLATFORM": "mp-alipay"
          },
          "define": {
            "MP-DINGTALK": true
          }
        }
      }
    },
  },
}

