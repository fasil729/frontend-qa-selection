import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/EmailFormTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import EmailLogIn from "/_nuxt/components/organisms/EmailLogIn.vue";
import SocialLogin from "/_nuxt/components/organisms/SocialLogin.vue";

const _sfc_main = {
  __name: 'EmailFormTemplate',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { EmailLogIn, SocialLogin }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/EmailFormTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/EmailFormTemplate.vue:5:5"
}
const _hoisted_3 = {
  class: "m-8",
  "data-v-inspector": "components/templates/EmailFormTemplate.vue:8:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["EmailLogIn"]),
        _createVNode($setup["SocialLogin"])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "0a13aa20"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/EmailFormTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFmNUQsS0FBSyxFQUFDLGdHQUFnRztFQUFDLGtCQUFnQixFQUFDOzs7RUFHdEgsS0FBSyxFQUFDLHdFQUF3RTtFQUFDLGtCQUFnQixFQUFDOzs7RUFFM0YsS0FBSyxFQUFDLEtBQUs7RUFBQyxrQkFBZ0IsRUFBQzs7Ozt3QkFOdEMsb0JBV00sT0FYTixVQVdNO0lBUkosb0JBT00sT0FQTixVQU9NO01BSkosb0JBR00sT0FITixVQUdNO1FBRkosYUFBYztRQUNkLGFBQWUiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkVtYWlsRm9ybVRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxGb3JtVGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgcC01IG0tNSB0ZXh0LTEzIGJvcmRlciByb3VuZGVkLWxnIHBvcHVwLWNvbnRlbnQgYmctYmxhY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxGb3JtVGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cIm0tOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9FbWFpbEZvcm1UZW1wbGF0ZS52dWU6ODo3XCI+XG4gICAgICAgIDxFbWFpbExvZ0luIC8+XG4gICAgICAgIDxTb2NpYWxMb2dpbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBFbWFpbExvZ0luIGZyb20gXCJ+L2NvbXBvbmVudHMvb3JnYW5pc21zL0VtYWlsTG9nSW4udnVlXCI7XG5pbXBvcnQgU29jaWFsTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9vcmdhbmlzbXMvU29jaWFsTG9naW4udnVlXCI7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxGb3JtVGVtcGxhdGUudnVlIn0=