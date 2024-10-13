import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/GPasswordRecoveryTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
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
import SocialLoginHeader from "/_nuxt/components/organisms/SocialLoginHeader.vue";
import SocialLoginBody from "/_nuxt/components/organisms/SocialLoginBody.vue";
import TransitionState from "/_nuxt/components/organisms/TransitionState.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import { store } from "/_nuxt/store/store.js";


const _sfc_main = {
  __name: 'GPasswordRecoveryTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
};

const __returned__ = { navigateToResetPassword, SocialLoginHeader, SocialLoginBody, TransitionState, ActionButton, NextIconSection, get store() { return store } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/GPasswordRecoveryTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/GPasswordRecoveryTemplate.vue:5:5"
}
const _hoisted_3 = {
  class: "p-10",
  "data-v-inspector": "components/templates/GPasswordRecoveryTemplate.vue:8:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["NextIconSection"], { text: "Password recovery" }),
        _createVNode($setup["SocialLoginHeader"]),
        _createVNode($setup["SocialLoginBody"], { class: "p-5 text-center" }),
        _createVNode($setup["TransitionState"], { class: "m-15" }),
        _createVNode($setup["ActionButton"], {
          onPointerup: $setup.navigateToResetPassword,
          text: "Reset Password"
        })
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "a60ec917"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/GPasswordRecoveryTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztBQUM1RSxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBQ3hFLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUNsRSxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7OztBQUVyQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7O0VBakNHLEtBQUssRUFBQyw4R0FBOEc7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBR3BJLEtBQUssRUFBQyw0RkFBNEY7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBRS9HLEtBQUssRUFBQyxNQUFNO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBTnZDLG9CQW1CTSxPQW5CTixVQW1CTTtJQWhCSixvQkFlTSxPQWZOLFVBZU07TUFaSixvQkFXTSxPQVhOLFVBV007UUFWSixhQUE0Qyw2QkFBM0IsSUFBSSxFQUFDLG1CQUFtQjtRQUN6QyxhQUFxQjtRQUVyQixhQUEyQyw2QkFBMUIsS0FBSyxFQUFDLGlCQUFpQjtRQUN4QyxhQUFnQyw2QkFBZixLQUFLLEVBQUMsTUFBTTtRQUU3QixhQUdFO1VBRkMsV0FBUyxFQUFFLDhCQUF1QjtVQUNuQyxJQUFJLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmFja2Ryb3AtYmx1ci1bNXB4XSBiZy1vcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0dQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgcC01IG0tNSB0ZXh0LTEzIGJvcmRlciBmbGV4IGZsZXgtY29sIGdhcC05IHJvdW5kZWQtbGcgcG9wdXAtY29udGVudCBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9HUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZTo1OjVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTEwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0dQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjg6N1wiPlxuICAgICAgICA8TmV4dEljb25TZWN0aW9uIHRleHQ9XCJQYXNzd29yZCByZWNvdmVyeVwiIC8+XG4gICAgICAgIDxTb2NpYWxMb2dpbkhlYWRlciAvPlxuXG4gICAgICAgIDxTb2NpYWxMb2dpbkJvZHkgY2xhc3M9XCJwLTUgdGV4dC1jZW50ZXJcIiAvPlxuICAgICAgICA8VHJhbnNpdGlvblN0YXRlIGNsYXNzPVwibS0xNVwiIC8+XG5cbiAgICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICAgIEBwb2ludGVydXA9XCJuYXZpZ2F0ZVRvUmVzZXRQYXNzd29yZFwiXG4gICAgICAgICAgdGV4dD1cIlJlc2V0IFBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cImpzXCI+XG5pbXBvcnQgU29jaWFsTG9naW5IZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9vcmdhbmlzbXMvU29jaWFsTG9naW5IZWFkZXIudnVlXCI7XG5pbXBvcnQgU29jaWFsTG9naW5Cb2R5IGZyb20gXCJ+L2NvbXBvbmVudHMvb3JnYW5pc21zL1NvY2lhbExvZ2luQm9keS52dWVcIjtcbmltcG9ydCBUcmFuc2l0aW9uU3RhdGUgZnJvbSBcIn4vY29tcG9uZW50cy9vcmdhbmlzbXMvVHJhbnNpdGlvblN0YXRlLnZ1ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlXCI7XG5pbXBvcnQgTmV4dEljb25TZWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL05leHRJY29uU2VjdGlvbi52dWVcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIn4vc3RvcmUvc3RvcmVcIjtcblxuY29uc3QgbmF2aWdhdGVUb1Jlc2V0UGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XG4gIHN0b3JlLmlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgc3RvcmUuaXNSZWNvdmVyeVBhZ2UgPSBmYWxzZTtcbiAgc3RvcmUuaXNQYXNzd29yZFJlc2V0UGFnZSA9IHRydWU7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvR1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWUifQ==