import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/SocialLoginBody.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import Text from "/_nuxt/components/atoms/Text.vue";

const _sfc_main = {
  __name: 'SocialLoginBody',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "flex flex-1 flex-col px-6",
  "data-v-inspector": "components/organisms/SocialLoginBody.vue:2:3"
}
const _hoisted_2 = {
  class: "leading-none text-white/70",
  "data-v-inspector": "components/organisms/SocialLoginBody.vue:3:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["Text"], {
        text: " A recovery mail will be sent to this address. Be sure\nthat it is correct before submitting \n         ",
        class: "mb-8 text-center text-sm text-white/50 whitespace-pre-wrap"
      }),
      _createVNode($setup["Text"], { text: "test@google.com" })
    ])
  ]))
}


_sfc_main.__hmrId = "adb7e4e5"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/organisms/SocialLoginBody.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFlQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztFQWQ3QixLQUFLLEVBQUMsMkJBQTJCO0VBQUMsa0JBQWdCLEVBQUM7OztFQUNqRCxLQUFLLEVBQUMsNEJBQTRCO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBRDNELG9CQVVNLE9BVk4sVUFVTTtJQVRKLG9CQVFNLE9BUk4sVUFRTTtNQVBKLGFBS0U7UUFKQSxJQUFJLEVBQUMsMEdBRUg7UUFDRixLQUFLLEVBQUM7O01BRVIsYUFBK0Isa0JBQXpCLElBQUksRUFBQyxpQkFBaUIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNvY2lhbExvZ2luQm9keS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgcHgtNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Tb2NpYWxMb2dpbkJvZHkudnVlOjI6M1wiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Tb2NpYWxMb2dpbkJvZHkudnVlOjM6NVwiPlxuICAgICAgPFRleHRcbiAgICAgICAgdGV4dD1cIiBBIHJlY292ZXJ5IG1haWwgd2lsbCBiZSBzZW50IHRvIHRoaXMgYWRkcmVzcy4gQmUgc3VyZVxudGhhdCBpdCBpcyBjb3JyZWN0IGJlZm9yZSBzdWJtaXR0aW5nIFxuICAgICAgICAgXCJcbiAgICAgICAgY2xhc3M9XCJtYi04IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC13aGl0ZS81MCB3aGl0ZXNwYWNlLXByZS13cmFwXCJcbiAgICAgIC8+XG4gICAgICA8VGV4dCB0ZXh0PVwidGVzdEBnb29nbGUuY29tXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJqc1wiIHNldHVwPlxuaW1wb3J0IFRleHQgZnJvbSBcIi4uL2F0b21zL1RleHQudnVlXCI7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9vcmdhbmlzbXMvU29jaWFsTG9naW5Cb2R5LnZ1ZSJ9