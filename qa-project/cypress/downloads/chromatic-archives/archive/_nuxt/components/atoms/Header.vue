import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Header.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'Header',
  props: {
  text: { type: String, required: true },
  customClass: { type: String, default: "text-6xl font-bold opacity-90" },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("h1", {
    class: _normalizeClass($props.customClass),
    "data-v-inspector": "components/atoms/Header.vue:2:3"
  }, _toDisplayString($props.text), 3 /* TEXT, CLASS */))
}


_sfc_main.__hmrId = "9ceda85c"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/atoms/Header.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BR1o7Ozs7Ozs7Ozs7O3dCQVBBLG9CQUEyRjtJQUF0RixLQUFLLEVBRFosZ0JBQ2Msa0JBQVc7SUFBRSxrQkFBZ0IsRUFBQztzQkFBcUMsV0FBSSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGVhZGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxoMSA6Y2xhc3M9XCJjdXN0b21DbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0hlYWRlci52dWU6MjozXCI+e3sgdGV4dCB9fTwvaDE+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHRleHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBjdXN0b21DbGFzczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwidGV4dC02eGwgZm9udC1ib2xkIG9wYWNpdHktOTBcIiB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL2F0b21zL0hlYWRlci52dWUifQ==