import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/SignUpForm.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import EmailSignUpHeader from "/_nuxt/components/organisms/EmailSingUpHeader.vue";
import EmailSignUPForm from "/_nuxt/components/organisms/EmailSignUPForm.vue";

const _sfc_main = {
  __name: 'SignUpForm',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { EmailSignUpHeader, EmailSignUPForm }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/SignUpForm.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/SignUpForm.vue:5:5"
}
const _hoisted_3 = {
  class: "relative z-10 p-5 text-13 w-full",
  "data-v-inspector": "components/templates/SignUpForm.vue:8:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["EmailSignUpHeader"]),
        _cache[0] || (_cache[0] = _createElementVNode("div", {
          class: "p-4 m-4",
          "data-v-inspector": "components/templates/SignUpForm.vue:10:9"
        }, null, -1 /* HOISTED */)),
        _createVNode($setup["EmailSignUPForm"])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "99c08922"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/SignUpForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztBQUM1RSxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJwRSxLQUFLLEVBQUMsdUdBQXVHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUc3SCxLQUFLLEVBQUMsd0VBQXdFO0VBQUMsa0JBQWdCLEVBQUM7OztFQUUzRixLQUFLLEVBQUMsa0NBQWtDO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBTm5FLG9CQVlNLE9BWk4sVUFZTTtJQVRKLG9CQVFNLE9BUk4sVUFRTTtNQUxKLG9CQUlNLE9BSk4sVUFJTTtRQUhKLGFBQXFCO2tDQUNyQixvQkFBdUY7VUFBbEYsS0FBSyxFQUFDLFNBQVM7VUFBQyxrQkFBZ0IsRUFBQzs7UUFDdEMsYUFBbUIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpZ25VcEZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIHJvdW5kZWQtbGcgcG9wdXAtY29udGVudCBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo1OjVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSB0ZXh0LTEzIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo4OjdcIj5cbiAgICAgICAgPEVtYWlsU2lnblVwSGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgbS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjEwOjlcIj48L2Rpdj5cbiAgICAgICAgPEVtYWlsU2lnblVQRm9ybSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBFbWFpbFNpZ25VcEhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL29yZ2FuaXNtcy9FbWFpbFNpbmdVcEhlYWRlci52dWVcIjtcbmltcG9ydCBFbWFpbFNpZ25VUEZvcm0gZnJvbSBcIn4vY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxTaWduVVBGb3JtLnZ1ZVwiO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvdGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlIn0=