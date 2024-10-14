import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Anchor.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'Anchor',
  props: {
  url: { type: String, required: true },
  text: { type: String, required: true },
  customClass: {
    type: String,
    default:
      "inline-block cursor-pointer rounded-md bg-black px-4 py-3 text-white",
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
import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = ["href"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("a", {
    href: $props.url,
    class: _normalizeClass($props.customClass),
    "data-v-inspector": "components/atoms/Anchor.vue:2:3"
  }, _toDisplayString($props.text), 11 /* TEXT, CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "ed3686c8"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/atoms/Anchor.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FRWjs7Ozs7Ozs7OzttQkFiRjs7O3dCQUNFLG9CQUFxRztJQUFqRyxJQUFJLEVBQUUsVUFBRztJQUFHLEtBQUssRUFEdkIsZ0JBQ3lCLGtCQUFXO0lBQUUsa0JBQWdCLEVBQUM7c0JBQXFDLFdBQUksZ0NBRGhHIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBbmNob3IudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGEgOmhyZWY9XCJ1cmxcIiA6Y2xhc3M9XCJjdXN0b21DbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FuY2hvci52dWU6MjozXCI+e3sgdGV4dCB9fTwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgdXJsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdGV4dDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6XG4gICAgICBcImlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJnLWJsYWNrIHB4LTQgcHktMyB0ZXh0LXdoaXRlXCIsXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL2F0b21zL0FuY2hvci52dWUifQ==