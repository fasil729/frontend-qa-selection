import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/FPasswordRecoveryTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import TransitionState from "/_nuxt/components/organisms/TransitionState.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import { store } from "/_nuxt/store/store.js";


const _sfc_main = {
  __name: 'FPasswordRecoveryTemplate',
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
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/FPasswordRecoveryTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/FPasswordRecoveryTemplate.vue:5:5"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-13",
  "data-v-inspector": "components/templates/FPasswordRecoveryTemplate.vue:8:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["NextIconSection"], { text: "Password recovery" }),
        _createVNode($setup["InfoBaner"], {
          "img-src": "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
          title: "Add New Password",
          "content-text": "Your account uses\nFaceBook sign-in add a new \npassword",
          "custom-class": "border border-blue-700 p-5 m-5"
        }),
        _createVNode($setup["Text"], {
          text: " A recovery mail will be sent to this address. Be sure\nthat it is correct before submitting \n         ",
          class: "mb-8 text-center text-sm text-white/50 whitespace-pre-wrap"
        }),
        _createVNode($setup["Text"], {
          text: "test@facebook.org",
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


_sfc_main.__hmrId = "75767206"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/FPasswordRecoveryTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztBQUN4RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7O0FBRXJDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzdCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7RUE5Q0csS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFHcEksS0FBSyxFQUFDLDRGQUE0RjtFQUFDLGtCQUFnQixFQUFDOzs7RUFFL0csS0FBSyxFQUFDLGtDQUFrQztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQU5uRSxvQkFnQ00sT0FoQ04sVUFnQ007SUE3Qkosb0JBNEJNLE9BNUJOLFVBNEJNO01BekJKLG9CQXdCTSxPQXhCTixVQXdCTTtRQXZCSixhQUE0Qyw2QkFBM0IsSUFBSSxFQUFDLG1CQUFtQjtRQUN6QyxhQU9FO1VBTkEsU0FBTyxFQUFDLDRFQUE0RTtVQUNwRixLQUFLLEVBQUMsa0JBQWtCO1VBQ3hCLGNBQVksRUFBQywwREFFZDtVQUNDLGNBQVksRUFBQzs7UUFHZixhQUtFO1VBSkEsSUFBSSxFQUFDLDBHQUVMO1VBQ0EsS0FBSyxFQUFDOztRQUVSLGFBQWdFO1VBQTFELElBQUksRUFBQyxtQkFBbUI7VUFBQyxLQUFLLEVBQUM7O1FBQ3JDLGFBQWdDLDZCQUFmLEtBQUssRUFBQyxNQUFNO1FBRTdCLGFBR0U7VUFGQyxXQUFTLEVBQUUsOEJBQXVCO1VBQ25DLElBQUksRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRlBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotNTAgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRlBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTkgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0ZQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTAgaC1mdWxsIHAtNSB0ZXh0LTEzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0ZQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjg6N1wiPlxuICAgICAgICA8TmV4dEljb25TZWN0aW9uIHRleHQ9XCJQYXNzd29yZCByZWNvdmVyeVwiIC8+XG4gICAgICAgIDxJbmZvQmFuZXJcbiAgICAgICAgICBpbWctc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2I5LzIwMjNfRmFjZWJvb2tfaWNvbi5zdmdcIlxuICAgICAgICAgIHRpdGxlPVwiQWRkIE5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgY29udGVudC10ZXh0PVwiWW91ciBhY2NvdW50IHVzZXNcbkZhY2VCb29rIHNpZ24taW4gYWRkIGEgbmV3IFxucGFzc3dvcmRcIlxuICAgICAgICAgIGN1c3RvbS1jbGFzcz1cImJvcmRlciBib3JkZXItYmx1ZS03MDAgcC01IG0tNVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0ZXh0PVwiIEEgcmVjb3ZlcnkgbWFpbCB3aWxsIGJlIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiBCZSBzdXJlXG50aGF0IGl0IGlzIGNvcnJlY3QgYmVmb3JlIHN1Ym1pdHRpbmcgXG4gICAgICAgICBcIlxuICAgICAgICAgIGNsYXNzPVwibWItOCB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtd2hpdGUvNTAgd2hpdGVzcGFjZS1wcmUtd3JhcFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IHRleHQ9XCJ0ZXN0QGZhY2Vib29rLm9yZ1wiIGNsYXNzPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiIC8+XG4gICAgICAgIDxUcmFuc2l0aW9uU3RhdGUgY2xhc3M9XCJtLTE1XCIgLz5cblxuICAgICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgICAgQHBvaW50ZXJ1cD1cIm5hdmlnYXRlVG9SZXNldFBhc3N3b3JkXCJcbiAgICAgICAgICB0ZXh0PVwiUmVzZXQgUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwianNcIj5cbmltcG9ydCBJbmZvQmFuZXIgZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IFRyYW5zaXRpb25TdGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL29yZ2FuaXNtcy9UcmFuc2l0aW9uU3RhdGUudnVlXCI7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWVcIjtcbmltcG9ydCBOZXh0SWNvblNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmV4dEljb25TZWN0aW9uLnZ1ZVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuXG5jb25zdCBuYXZpZ2F0ZVRvUmVzZXRQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcbiAgc3RvcmUuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICBzdG9yZS5pc1JlY292ZXJ5UGFnZSA9IGZhbHNlO1xuICBzdG9yZS5pc1Bhc3N3b3JkUmVzZXRQYWdlID0gdHJ1ZTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvRlBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWUifQ==