import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/InputField.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'InputField',
  props: {
  id: {
    type: String,
  },
  maxlength: {
    type: Number,
    default: 100,
  },
  type: {
    type: String,
    default: "text",
  },
  autocomplete: {
    type: String,
    default: "new-password",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  customClass: {
    type: String,
    default: "h-full w-0 flex-1 bg-transparent text-13 outline-none",
  },
},
  setup(__props, { expose: __expose }) {
  __expose();



const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = ["id", "maxlength", "autocomplete", "placeholder", "type"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("input", {
    id: $props.id,
    maxlength: $props.maxlength,
    autocomplete: $props.autocomplete,
    placeholder: $props.placeholder,
    class: _normalizeClass($props.customClass),
    type: $props.type,
    "data-v-inspector": "components/atoms/InputField.vue:3:3"
  }, null, 10 /* CLASS, PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "e5f2807b"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/atoms/InputField.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBQUE7Ozt3QkFFRSxvQkFPRTtJQU5DLEVBQUUsRUFBRSxTQUFFO0lBQ04sU0FBUyxFQUFFLGdCQUFTO0lBQ3BCLFlBQVksRUFBRSxtQkFBWTtJQUMxQixXQUFXLEVBQUUsa0JBQVc7SUFDeEIsS0FBSyxFQVBWLGdCQU9ZLGtCQUFXO0lBQ2xCLElBQUksRUFBRSxXQUFJO0lBQUUsa0JBQWdCLEVBQUM7a0NBUmxDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJJbnB1dEZpZWxkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIElucHV0RmllbGQudnVlIC0tPlxuPHRlbXBsYXRlPlxuICA8aW5wdXRcbiAgICA6aWQ9XCJpZFwiXG4gICAgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiXG4gICAgOmF1dG9jb21wbGV0ZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgIDpjbGFzcz1cImN1c3RvbUNsYXNzXCJcbiAgICA6dHlwZT1cInR5cGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9JbnB1dEZpZWxkLnZ1ZTozOjNcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmRlZmluZVByb3BzKHtcbiAgaWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIG1heGxlbmd0aDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDAsXG4gIH0sXG4gIHR5cGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJ0ZXh0XCIsXG4gIH0sXG4gIGF1dG9jb21wbGV0ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIm5ldy1wYXNzd29yZFwiLFxuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlNlYXJjaC4uLlwiLFxuICB9LFxuICBjdXN0b21DbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcImgtZnVsbCB3LTAgZmxleC0xIGJnLXRyYW5zcGFyZW50IHRleHQtMTMgb3V0bGluZS1ub25lXCIsXG4gIH0sXG59KTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvYXRvbXMvSW5wdXRGaWVsZC52dWUifQ==