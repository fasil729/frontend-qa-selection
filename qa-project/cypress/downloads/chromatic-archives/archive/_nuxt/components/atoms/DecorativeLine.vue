import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/DecorativeLine.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'DecorativeLine',
  props: {
  customClass: {
    type: String,
    default:
      "bg-gradient-to-l from-white/0 to-white absolute bottom-0 left-0 right-0 h-[1px] w-full",
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
  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass($props.customClass),
    "data-v-inspector": "components/atoms/DecorativeLine.vue:2:3"
  }, null, 2 /* CLASS */))
}


_sfc_main.__hmrId = "288e2a74"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/atoms/DecorativeLine.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNFLG9CQUEyRjtJQUFyRixLQUFLLEVBRGIsZ0JBQ2Usa0JBQVc7SUFBRSxrQkFBZ0IsRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGVjb3JhdGl2ZUxpbmUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJjdXN0b21DbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0RlY29yYXRpdmVMaW5lLnZ1ZToyOjNcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5kZWZpbmVQcm9wcyh7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6XG4gICAgICBcImJnLWdyYWRpZW50LXRvLWwgZnJvbS13aGl0ZS8wIHRvLXdoaXRlIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtWzFweF0gdy1mdWxsXCIsXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL2F0b21zL0RlY29yYXRpdmVMaW5lLnZ1ZSJ9