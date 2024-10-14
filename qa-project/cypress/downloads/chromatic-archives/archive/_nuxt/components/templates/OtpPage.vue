import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/OtpPage.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import OtpHeader from "/_nuxt/components/organisms/OtpHeader.vue";
import OtpBody from "/_nuxt/components/organisms/OtpBody.vue";
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";

const _sfc_main = {
  __name: 'OtpPage',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { OtpHeader, OtpBody, NextIconSection }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/OtpPage.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/OtpPage.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["NextIconSection"], { text: "Back to Signup" }),
      _createVNode($setup["OtpHeader"]),
      _createVNode($setup["OtpBody"])
    ])
  ]))
}


_sfc_main.__hmrId = "44a8752d"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/OtpPage.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFlQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7QUFDNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFmcEUsS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFHcEksS0FBSyxFQUFDLDRGQUE0RjtFQUFDLGtCQUFnQixFQUFDOzs7O3dCQUp4SCxvQkFVTSxPQVZOLFVBVU07SUFQSixvQkFNTSxPQU5OLFVBTU07TUFISixhQUF5Qyw2QkFBeEIsSUFBSSxFQUFDLGdCQUFnQjtNQUN0QyxhQUFhO01BQ2IsYUFBVyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiT3RwUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotNTAgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvT3RwUGFnZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTYgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL090cFBhZ2UudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPE5leHRJY29uU2VjdGlvbiB0ZXh0PVwiQmFjayB0byBTaWdudXBcIiAvPlxuICAgICAgPE90cEhlYWRlciAvPlxuICAgICAgPE90cEJvZHkgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJqc1wiPlxuaW1wb3J0IE90cEhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdHBIZWFkZXIudnVlXCI7XG5pbXBvcnQgT3RwQm9keSBmcm9tIFwifi9jb21wb25lbnRzL29yZ2FuaXNtcy9PdHBCb2R5LnZ1ZVwiO1xuaW1wb3J0IE5leHRJY29uU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9OZXh0SWNvblNlY3Rpb24udnVlXCI7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvT3RwUGFnZS52dWUifQ==