import type { App } from 'vue'
import EButton from './components/EButton.vue'

export { EButton }

// Optional: Export a plugin to register all components at once
export default {
  install(app: App) {
    app.component('EButton', EButton)
  }
}
