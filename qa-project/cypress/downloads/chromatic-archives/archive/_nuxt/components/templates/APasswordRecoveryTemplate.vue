import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/APasswordRecoveryTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import TransitionState from "/_nuxt/components/organisms/TransitionState.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import { store } from "/_nuxt/store/store.js";


const _sfc_main = {
  __name: 'APasswordRecoveryTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
};

const __returned__ = { navigateToResetPassword, InfoBaner, Text, TransitionState, ActionButton, NextIconSection, get store() { return store } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/APasswordRecoveryTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/APasswordRecoveryTemplate.vue:5:5"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-13",
  "data-v-inspector": "components/templates/APasswordRecoveryTemplate.vue:8:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["NextIconSection"], { text: "Password recovery" }),
        _createVNode($setup["InfoBaner"], {
          "img-src": "https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg",
          title: "Add New Password",
          "content-text": "Your account uses\n  Apple sign-in add a new \n  password",
          customClass: "border border-blue-700 p-5 m-5"
        }),
        _createVNode($setup["Text"], {
          text: " A recovery mail will be sent to this address. Be sure\nthat it is correct before submitting \n         ",
          class: "mb-8 text-center text-sm text-white/50 whitespace-pre-wrap"
        }),
        _createVNode($setup["Text"], {
          text: "test@apple.org",
          class: "text-white text-center"
        }),
        _createVNode($setup["TransitionState"], { class: "m-15" }),
        _createVNode($setup["ActionButton"], {
          onPointerup: $setup.navigateToResetPassword,
          text: "Reset Password"
        })
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "bb48d5d1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/APasswordRecoveryTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztBQUN4RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7O0FBRXJDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzdCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7RUE5Q0csS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFHcEksS0FBSyxFQUFDLDRGQUE0RjtFQUFDLGtCQUFnQixFQUFDOzs7RUFFL0csS0FBSyxFQUFDLGtDQUFrQztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQU5uRSxvQkFnQ00sT0FoQ04sVUFnQ007SUE3Qkosb0JBNEJNLE9BNUJOLFVBNEJNO01BekJKLG9CQXdCTSxPQXhCTixVQXdCTTtRQXZCSixhQUE0Qyw2QkFBM0IsSUFBSSxFQUFDLG1CQUFtQjtRQUN6QyxhQU9FO1VBTkEsU0FBTyxFQUFDLG1HQUFtRztVQUMzRyxLQUFLLEVBQUMsa0JBQWtCO1VBQ3hCLGNBQVksRUFBQywyREFFWjtVQUNELFdBQVcsRUFBQzs7UUFHZCxhQUtFO1VBSkEsSUFBSSxFQUFDLDBHQUVMO1VBQ0EsS0FBSyxFQUFDOztRQUVSLGFBQTZEO1VBQXZELElBQUksRUFBQyxnQkFBZ0I7VUFBQyxLQUFLLEVBQUM7O1FBQ2xDLGFBQWdDLDZCQUFmLEtBQUssRUFBQyxNQUFNO1FBRTdCLGFBR0U7VUFGQyxXQUFTLEVBQUUsOEJBQXVCO1VBQ25DLElBQUksRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotNTAgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvQVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTkgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0FQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTAgaC1mdWxsIHAtNSB0ZXh0LTEzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0FQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjg6N1wiPlxuICAgICAgICA8TmV4dEljb25TZWN0aW9uIHRleHQ9XCJQYXNzd29yZCByZWNvdmVyeVwiIC8+XG4gICAgICAgIDxJbmZvQmFuZXJcbiAgICAgICAgICBpbWctc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hcmNoaXZlLzMvMzEvMjAyMDEyMjgxMzIzMjAlMjFBcHBsZV9sb2dvX3doaXRlLnN2Z1wiXG4gICAgICAgICAgdGl0bGU9XCJBZGQgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICBjb250ZW50LXRleHQ9XCJZb3VyIGFjY291bnQgdXNlc1xuICBBcHBsZSBzaWduLWluIGFkZCBhIG5ldyBcbiAgcGFzc3dvcmRcIlxuICAgICAgICAgIGN1c3RvbUNsYXNzPVwiYm9yZGVyIGJvcmRlci1ibHVlLTcwMCBwLTUgbS01XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHRleHQ9XCIgQSByZWNvdmVyeSBtYWlsIHdpbGwgYmUgc2VudCB0byB0aGlzIGFkZHJlc3MuIEJlIHN1cmVcbnRoYXQgaXQgaXMgY29ycmVjdCBiZWZvcmUgc3VibWl0dGluZyBcbiAgICAgICAgIFwiXG4gICAgICAgICAgY2xhc3M9XCJtYi04IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC13aGl0ZS81MCB3aGl0ZXNwYWNlLXByZS13cmFwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgdGV4dD1cInRlc3RAYXBwbGUub3JnXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCIgLz5cbiAgICAgICAgPFRyYW5zaXRpb25TdGF0ZSBjbGFzcz1cIm0tMTVcIiAvPlxuXG4gICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICBAcG9pbnRlcnVwPVwibmF2aWdhdGVUb1Jlc2V0UGFzc3dvcmRcIlxuICAgICAgICAgIHRleHQ9XCJSZXNldCBQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJqc1wiPlxuaW1wb3J0IEluZm9CYW5lciBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL1RleHQudnVlXCI7XG5pbXBvcnQgVHJhbnNpdGlvblN0YXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvb3JnYW5pc21zL1RyYW5zaXRpb25TdGF0ZS52dWVcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvQWN0aW9uQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IE5leHRJY29uU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9OZXh0SWNvblNlY3Rpb24udnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7XG5cbmNvbnN0IG5hdmlnYXRlVG9SZXNldFBhc3N3b3JkID0gYXN5bmMgKCkgPT4ge1xuICBzdG9yZS5pc1VzZXJMb2dnZWRJbiA9IHRydWU7XG4gIHN0b3JlLmlzUmVjb3ZlcnlQYWdlID0gZmFsc2U7XG4gIHN0b3JlLmlzUGFzc3dvcmRSZXNldFBhZ2UgPSB0cnVlO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvdGVtcGxhdGVzL0FQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlIn0=