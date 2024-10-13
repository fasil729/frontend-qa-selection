import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/IconWithText.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import Icon from "/_nuxt/components/atoms/Icon.vue";
import Text from "/_nuxt/components/atoms/Text.vue";


const _sfc_main = {
  __name: 'IconWithText',
  props: {
  iconWidth: {
    type: String,
    default: "16",
  },
  iconHeight: {
    type: String,
    default: "16",
  },
  text: {
    type: String,
    required: true,
  },
  textClass: {
    type: String,
    default: "",
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, Icon, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "flex items-center justify-center gap-2",
  "data-v-inspector": "components/molecules/IconWithText.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["Icon"], {
      width: $props.iconWidth,
      height: $props.iconHeight
    }, null, 8 /* PROPS */, ["width", "height"]),
    _createVNode($setup["Text"], {
      text: $props.text,
      customClass: $props.textClass
    }, null, 8 /* PROPS */, ["text", "customClass"])
  ]))
}


_sfc_main.__hmrId = "9a1e2094"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/IconWithText.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BaUJaOzs7Ozs7Ozs7OztFQTNCSyxLQUFLLEVBQUMsd0NBQXdDO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBQXJFLG9CQUdNLE9BSE4sVUFHTTtJQUZKLGFBQWdEO01BQXpDLEtBQUssRUFBRSxnQkFBUztNQUFHLE1BQU0sRUFBRTs7SUFDbEMsYUFBOEM7TUFBdkMsSUFBSSxFQUFFLFdBQUk7TUFBRyxXQUFXLEVBQUUiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkljb25XaXRoVGV4dC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvSWNvbldpdGhUZXh0LnZ1ZToyOjNcIj5cbiAgICA8SWNvbiA6d2lkdGg9XCJpY29uV2lkdGhcIiA6aGVpZ2h0PVwiaWNvbkhlaWdodFwiIC8+XG4gICAgPFRleHQgOnRleHQ9XCJ0ZXh0XCIgOmN1c3RvbUNsYXNzPVwidGV4dENsYXNzXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IEljb24gZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9JY29uLnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9UZXh0LnZ1ZVwiO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgaWNvbldpZHRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiMTZcIixcbiAgfSxcbiAgaWNvbkhlaWdodDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIjE2XCIsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRleHRDbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiLFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL21vbGVjdWxlcy9JY29uV2l0aFRleHQudnVlIn0=