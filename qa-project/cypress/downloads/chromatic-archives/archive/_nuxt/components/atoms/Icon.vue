import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Icon.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  __name: 'Icon',
  props: {
  iconClass: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
},
  setup(__props, { expose: __expose }) {
  __expose();



const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("i", {
    class: _normalizeClass(['fa-solid', $props.iconClass, $props.customClass]),
    "data-v-inspector": "components/atoms/Icon.vue:2:3"
  }, null, 2 /* CLASS */))
}


_sfc_main.__hmrId = "ad9936dd"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/atoms/Icon.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNFLG9CQUFvRztJQUFoRyxLQUFLLEVBRFgsNkJBQzBCLGdCQUFTLEVBQUUsa0JBQVc7SUFBRyxrQkFBZ0IsRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSWNvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aSA6Y2xhc3M9XCJbJ2ZhLXNvbGlkJywgaWNvbkNsYXNzLCBjdXN0b21DbGFzc11cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9JY29uLnZ1ZToyOjNcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmRlZmluZVByb3BzKHtcbiAgaWNvbkNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBjdXN0b21DbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiLFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9hdG9tcy9JY29uLnZ1ZSJ9