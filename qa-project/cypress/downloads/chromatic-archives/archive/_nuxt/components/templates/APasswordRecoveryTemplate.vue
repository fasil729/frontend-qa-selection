import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/APasswordRecoveryTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

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
          onPointerenter: $setup.navigateToResetPassword,
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/APasswordRecoveryTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztBQUN4RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7O0FBRXJDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzdCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7RUEvQ0csS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFHcEksS0FBSyxFQUFDLDRGQUE0RjtFQUFDLGtCQUFnQixFQUFDOzs7RUFFL0csS0FBSyxFQUFDLGtDQUFrQztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQU5uRSxvQkFpQ00sT0FqQ04sVUFpQ007SUE5Qkosb0JBNkJNLE9BN0JOLFVBNkJNO01BMUJKLG9CQXlCTSxPQXpCTixVQXlCTTtRQXhCSixhQUE0Qyw2QkFBM0IsSUFBSSxFQUFDLG1CQUFtQjtRQUN6QyxhQU9FO1VBTkEsU0FBTyxFQUFDLG1HQUFtRztVQUMzRyxLQUFLLEVBQUMsa0JBQWtCO1VBQ3hCLGNBQVksRUFBQywyREFFWjtVQUNELFdBQVcsRUFBQzs7UUFHZCxhQUtFO1VBSkEsSUFBSSxFQUFDLDBHQUVMO1VBQ0EsS0FBSyxFQUFDOztRQUVSLGFBQTZEO1VBQXZELElBQUksRUFBQyxnQkFBZ0I7VUFBQyxLQUFLLEVBQUM7O1FBQ2xDLGFBQWdDLDZCQUFmLEtBQUssRUFBQyxNQUFNO1FBRTdCLGFBSUU7VUFIQyxjQUFZLEVBQUUsOEJBQXVCO1VBQ3JDLFdBQVMsRUFBRSw4QkFBdUI7VUFDbkMsSUFBSSxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJhY2tkcm9wLWJsdXItWzVweF0gYmctb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSBtLTUgdGV4dC0xMyBib3JkZXIgZmxleCBmbGV4LWNvbCBnYXAtOSByb3VuZGVkLWxnIHBvcHVwLWNvbnRlbnQgYmctYmxhY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvQVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6NTo1XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgei0xMCBoLWZ1bGwgcC01IHRleHQtMTNcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvQVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6ODo3XCI+XG4gICAgICAgIDxOZXh0SWNvblNlY3Rpb24gdGV4dD1cIlBhc3N3b3JkIHJlY292ZXJ5XCIgLz5cbiAgICAgICAgPEluZm9CYW5lclxuICAgICAgICAgIGltZy1zcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2FyY2hpdmUvMy8zMS8yMDIwMTIyODEzMjMyMCUyMUFwcGxlX2xvZ29fd2hpdGUuc3ZnXCJcbiAgICAgICAgICB0aXRsZT1cIkFkZCBOZXcgUGFzc3dvcmRcIlxuICAgICAgICAgIGNvbnRlbnQtdGV4dD1cIllvdXIgYWNjb3VudCB1c2VzXG4gIEFwcGxlIHNpZ24taW4gYWRkIGEgbmV3IFxuICBwYXNzd29yZFwiXG4gICAgICAgICAgY3VzdG9tQ2xhc3M9XCJib3JkZXIgYm9yZGVyLWJsdWUtNzAwIHAtNSBtLTVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgdGV4dD1cIiBBIHJlY292ZXJ5IG1haWwgd2lsbCBiZSBzZW50IHRvIHRoaXMgYWRkcmVzcy4gQmUgc3VyZVxudGhhdCBpdCBpcyBjb3JyZWN0IGJlZm9yZSBzdWJtaXR0aW5nIFxuICAgICAgICAgXCJcbiAgICAgICAgICBjbGFzcz1cIm1iLTggdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LXdoaXRlLzUwIHdoaXRlc3BhY2UtcHJlLXdyYXBcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCB0ZXh0PVwidGVzdEBhcHBsZS5vcmdcIiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIiAvPlxuICAgICAgICA8VHJhbnNpdGlvblN0YXRlIGNsYXNzPVwibS0xNVwiIC8+XG5cbiAgICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICAgIEBwb2ludGVyZW50ZXI9XCJuYXZpZ2F0ZVRvUmVzZXRQYXNzd29yZFwiXG4gICAgICAgICAgQHBvaW50ZXJ1cD1cIm5hdmlnYXRlVG9SZXNldFBhc3N3b3JkXCJcbiAgICAgICAgICB0ZXh0PVwiUmVzZXQgUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwianNcIj5cbmltcG9ydCBJbmZvQmFuZXIgZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IFRyYW5zaXRpb25TdGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL29yZ2FuaXNtcy9UcmFuc2l0aW9uU3RhdGUudnVlXCI7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWVcIjtcbmltcG9ydCBOZXh0SWNvblNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmV4dEljb25TZWN0aW9uLnZ1ZVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuXG5jb25zdCBuYXZpZ2F0ZVRvUmVzZXRQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcbiAgc3RvcmUuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICBzdG9yZS5pc1JlY292ZXJ5UGFnZSA9IGZhbHNlO1xuICBzdG9yZS5pc1Bhc3N3b3JkUmVzZXRQYWdlID0gdHJ1ZTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvQVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWUifQ==