// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Index from './parts.vue'
import Kernel from '../../common/kernel'

Kernel({
  render: h => h(Index)
})
