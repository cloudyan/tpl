<script>
import { checkUpdate } from '@deepjs/uni-utils'
import { qs } from 'url-parse'

export default {
  onError(err) {
    console.warn(err)
  },
  onLaunch(opts) {
    checkUpdate(86400)
    this.updateChannel(opts, 'onLaunch')
  },
  onShow(opts) {
    this.updateChannel(opts, 'onShow')
  },
  onHide() {
    console.log('App Hide')
  },
  methods: {
    updateChannel(opts = {}, type) {
      // type: onLaunch onShow
      console.log(`app ${type}:`, opts)

      const { query, scene } = opts
      const { extraData } = (opts.referrerInfo || {})

      // #ifdef MP-WEIXIN
      if (query && query.scene) {
        let paramStr = decodeURIComponent(query.scene)
        Object.assign(query, qs.parse(paramStr))
      }
      // #endif

      const queryChannel = query || extraData || {}

      console.log('app channel', queryChannel)
    },
  },
}
</script>

<style>
  /*每个页面公共css */
</style>
