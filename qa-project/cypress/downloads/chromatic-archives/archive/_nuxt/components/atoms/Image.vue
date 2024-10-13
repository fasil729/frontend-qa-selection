import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Image.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
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
  __name: 'Image',
  props: {
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = ["src", "alt"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("img", {
    src: $props.src,
    alt: $props.alt,
    class: _normalizeClass($props.customClass),
    "data-v-inspector": "components/atoms/Image.vue:2:3"
  }, null, 10 /* CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "3b2c665b"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/atoms/Image.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQWFaOzs7Ozs7Ozs7O21CQWxCRjs7O3dCQUNFLG9CQUFvRztJQUE5RixHQUFHLEVBQUUsVUFBRztJQUFHLEdBQUcsRUFBRSxVQUFHO0lBQUcsS0FBSyxFQURuQyxnQkFDcUMsa0JBQVc7SUFBRSxrQkFBZ0IsRUFBQztrQ0FEbkUiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkltYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxpbWcgOnNyYz1cInNyY1wiIDphbHQ9XCJhbHRcIiA6Y2xhc3M9XCJjdXN0b21DbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0ltYWdlLnZ1ZToyOjNcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBzcmM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGFsdDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiLFxuICB9LFxuICBjdXN0b21DbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiLFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL2F0b21zL0ltYWdlLnZ1ZSJ9