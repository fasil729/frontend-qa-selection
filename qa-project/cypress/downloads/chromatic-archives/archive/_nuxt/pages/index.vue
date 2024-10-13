import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/pages/index.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { store } from "/_nuxt/store/store.js";
import LandingTemplate from "/_nuxt/components/templates/LandingTemplate.vue";
import EmailFormTemplate from "/_nuxt/components/templates/EmailFormTemplate.vue";

import SignUpForm from "/_nuxt/components/templates/SignUpForm.vue";
import OtpPage from "/_nuxt/components/templates/OtpPage.vue";
import GPasswordRecoveryTemplate from "/_nuxt/components/templates/GPasswordRecoveryTemplate.vue";
import SignUpSuccessTemplate from "/_nuxt/components/templates/SignUpSuccessTemplate.vue";
import LogInPasswordTemplate from "/_nuxt/components/templates/LogInPasswordTemplate.vue";

import GPasswordResetTemplate from "/_nuxt/components/templates/GPasswordResetTemplate.vue";

import GPasswordSuccess from "/_nuxt/components/templates/GPasswordSuccess.vue";
import PasswordRecovery from "/_nuxt/components/templates/PasswordRecovery.vue";

import PasswordResetTemplate from "/_nuxt/components/templates/PasswordResetTemplate.vue";
import PasswordSuccessTemplate from "/_nuxt/components/templates/PasswordSuccessTemplate.vue";
import FPasswordRecoveryTemplate from "/_nuxt/components/templates/FPasswordRecoveryTemplate.vue";
import FPasswordResetTemplate from "/_nuxt/components/templates/FPasswordResetTemplate.vue";
import FPasswordSuccessTemplate from "/_nuxt/components/templates/FPasswordSuccessTemplate.vue";

import APasswordRecoveryTemplate from "/_nuxt/components/templates/APasswordRecoveryTemplate.vue";
import APasswordResetTemplate from "/_nuxt/components/templates/APasswordResetTemplate.vue";
import APasswordSuccessTemplate from "/_nuxt/components/templates/APasswordSuccessTemplate.vue";

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { get store() { return store }, LandingTemplate, EmailFormTemplate, SignUpForm, OtpPage, GPasswordRecoveryTemplate, SignUpSuccessTemplate, LogInPasswordTemplate, GPasswordResetTemplate, GPasswordSuccess, PasswordRecovery, PasswordResetTemplate, PasswordSuccessTemplate, FPasswordRecoveryTemplate, FPasswordResetTemplate, FPasswordSuccessTemplate, APasswordRecoveryTemplate, APasswordResetTemplate, APasswordSuccessTemplate }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode,   } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "h-full",
  "data-v-inspector": "pages/index.vue:2:3"
}
const _hoisted_2 = {
  "data-layout": "default",
  "data-v-inspector": "pages/index.vue:3:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["LandingTemplate"]),
      ($setup.store.isPopUpVisible)
        ? (_openBlock(), _createBlock($setup["EmailFormTemplate"], { key: 0 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.userEmail && !$setup.store.isEmailRegistered)
        ? (_openBlock(), _createBlock($setup["SignUpForm"], { key: 1 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.userEmail && $setup.store.isOTPage)
        ? (_openBlock(), _createBlock($setup["OtpPage"], { key: 2 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isSuccessPage && $setup.store.isOtpVerified)
        ? (_openBlock(), _createBlock($setup["SignUpSuccessTemplate"], { key: 3 }))
        : _createCommentVNode("v-if", true),
      (
          !$setup.store.isOTPage &&
          $setup.store.isEmailRegistered &&
          !$setup.store.isUserLoggedIn &&
          !$setup.store.isRecoveryPage
        )
        ? (_openBlock(), _createBlock($setup["LogInPasswordTemplate"], { key: 4 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isRecoveryPage && $setup.store.provider == 'email')
        ? (_openBlock(), _createBlock($setup["PasswordRecovery"], { key: 5 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordResetPage && $setup.store.provider == 'email')
        ? (_openBlock(), _createBlock($setup["PasswordResetTemplate"], { key: 6 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordSuccessPage && $setup.store.provider == 'email')
        ? (_openBlock(), _createBlock($setup["PasswordSuccessTemplate"], { key: 7 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isRecoveryPage && $setup.store.provider == 'google')
        ? (_openBlock(), _createBlock($setup["GPasswordRecoveryTemplate"], { key: 8 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordResetPage && $setup.store.provider == 'google')
        ? (_openBlock(), _createBlock($setup["GPasswordResetTemplate"], { key: 9 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordSuccessPage && $setup.store.provider == 'google')
        ? (_openBlock(), _createBlock($setup["GPasswordSuccess"], { key: 10 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isRecoveryPage && $setup.store.provider == 'facebook')
        ? (_openBlock(), _createBlock($setup["FPasswordRecoveryTemplate"], { key: 11 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordResetPage && $setup.store.provider == 'facebook')
        ? (_openBlock(), _createBlock($setup["FPasswordResetTemplate"], { key: 12 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordSuccessPage && $setup.store.provider == 'facebook')
        ? (_openBlock(), _createBlock($setup["FPasswordSuccessTemplate"], { key: 13 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isRecoveryPage && $setup.store.provider == 'apple')
        ? (_openBlock(), _createBlock($setup["APasswordRecoveryTemplate"], { key: 14 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordResetPage && $setup.store.provider == 'apple')
        ? (_openBlock(), _createBlock($setup["APasswordResetTemplate"], { key: 15 }))
        : _createCommentVNode("v-if", true),
      ($setup.store.isPasswordSuccessPage && $setup.store.provider == 'apple')
        ? (_openBlock(), _createBlock($setup["APasswordSuccessTemplate"], { key: 16 }))
        : _createCommentVNode("v-if", true)
    ])
  ]))
}

import "/_nuxt/pages/index.vue?vue&type=style&index=0&scoped=02281a80&lang.css"

_sfc_main.__hmrId = "02281a80"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-02281a80"],['__file',"/home/biniyam/frontend-qa-selection/qa-project/pages/index.vue"]])
//# sourceMappingURL=data:application/json;base64,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QUFLLENBQUMsUUFBUTt5QkFEckQsYUFFRSw4QkF4Q1I7VUFBQTtPQTJDYyxZQUFLLENBQUMsY0FBYyxJQUFJLFlBQUssQ0FBQyxRQUFRO3lCQUQ5QyxhQUVFLHVDQTVDUjtVQUFBO09BOENjLFlBQUssQ0FBQyxtQkFBbUIsSUFBSSxZQUFLLENBQUMsUUFBUTt5QkFEbkQsYUFFRSxvQ0EvQ1I7VUFBQTtPQWlEYyxZQUFLLENBQUMscUJBQXFCLElBQUksWUFBSyxDQUFDLFFBQVE7eUJBRHJELGFBRUUsc0NBbERSO1VBQUE7T0FxRGMsWUFBSyxDQUFDLGNBQWMsSUFBSSxZQUFLLENBQUMsUUFBUTt5QkFEOUMsYUFFRSx1Q0F0RFI7VUFBQTtPQXdEYyxZQUFLLENBQUMsbUJBQW1CLElBQUksWUFBSyxDQUFDLFFBQVE7eUJBRG5ELGFBRUUsb0NBekRSO1VBQUE7T0EyRGMsWUFBSyxDQUFDLHFCQUFxQixJQUFJLFlBQUssQ0FBQyxRQUFRO3lCQURyRCxhQUVFLHNDQTVEUjtVQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmRleC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaC1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2luZGV4LnZ1ZToyOjNcIj5cbiAgICA8ZGl2IGRhdGEtbGF5b3V0PVwiZGVmYXVsdFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9pbmRleC52dWU6Mzo1XCI+XG4gICAgICA8TGFuZGluZ1RlbXBsYXRlIC8+XG4gICAgICA8RW1haWxGb3JtVGVtcGxhdGUgdi1pZj1cInN0b3JlLmlzUG9wVXBWaXNpYmxlXCIgLz5cbiAgICAgIDxTaWduVXBGb3JtIHYtaWY9XCJzdG9yZS51c2VyRW1haWwgJiYgIXN0b3JlLmlzRW1haWxSZWdpc3RlcmVkXCIgLz5cbiAgICAgIDxPdHBQYWdlIHYtaWY9XCJzdG9yZS51c2VyRW1haWwgJiYgc3RvcmUuaXNPVFBhZ2VcIiAvPlxuICAgICAgPFNpZ25VcFN1Y2Nlc3NUZW1wbGF0ZVxuICAgICAgICB2LWlmPVwic3RvcmUuaXNTdWNjZXNzUGFnZSAmJiBzdG9yZS5pc090cFZlcmlmaWVkXCJcbiAgICAgIC8+XG5cbiAgICAgIDxMb2dJblBhc3N3b3JkVGVtcGxhdGVcbiAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICFzdG9yZS5pc09UUGFnZSAmJlxuICAgICAgICAgIHN0b3JlLmlzRW1haWxSZWdpc3RlcmVkICYmXG4gICAgICAgICAgIXN0b3JlLmlzVXNlckxvZ2dlZEluICYmXG4gICAgICAgICAgIXN0b3JlLmlzUmVjb3ZlcnlQYWdlXG4gICAgICAgIFwiXG4gICAgICAvPlxuICAgICAgPFBhc3N3b3JkUmVjb3ZlcnlcbiAgICAgICAgdi1pZj1cInN0b3JlLmlzUmVjb3ZlcnlQYWdlICYmIHN0b3JlLnByb3ZpZGVyID09ICdlbWFpbCdcIlxuICAgICAgLz5cbiAgICAgIDxQYXNzd29yZFJlc2V0VGVtcGxhdGVcbiAgICAgICAgdi1pZj1cInN0b3JlLmlzUGFzc3dvcmRSZXNldFBhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2VtYWlsJ1wiXG4gICAgICAvPlxuICAgICAgPFBhc3N3b3JkU3VjY2Vzc1RlbXBsYXRlXG4gICAgICAgIHYtaWY9XCJzdG9yZS5pc1Bhc3N3b3JkU3VjY2Vzc1BhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2VtYWlsJ1wiXG4gICAgICAvPlxuXG4gICAgICA8R1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZVxuICAgICAgICB2LWlmPVwic3RvcmUuaXNSZWNvdmVyeVBhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2dvb2dsZSdcIlxuICAgICAgLz5cbiAgICAgIDxHUGFzc3dvcmRSZXNldFRlbXBsYXRlXG4gICAgICAgIHYtaWY9XCJzdG9yZS5pc1Bhc3N3b3JkUmVzZXRQYWdlICYmIHN0b3JlLnByb3ZpZGVyID09ICdnb29nbGUnXCJcbiAgICAgIC8+XG4gICAgICA8R1Bhc3N3b3JkU3VjY2Vzc1xuICAgICAgICB2LWlmPVwic3RvcmUuaXNQYXNzd29yZFN1Y2Nlc3NQYWdlICYmIHN0b3JlLnByb3ZpZGVyID09ICdnb29nbGUnXCJcbiAgICAgIC8+XG5cbiAgICAgIDxGUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlXG4gICAgICAgIHYtaWY9XCJzdG9yZS5pc1JlY292ZXJ5UGFnZSAmJiBzdG9yZS5wcm92aWRlciA9PSAnZmFjZWJvb2snXCJcbiAgICAgIC8+XG4gICAgICA8RlBhc3N3b3JkUmVzZXRUZW1wbGF0ZVxuICAgICAgICB2LWlmPVwic3RvcmUuaXNQYXNzd29yZFJlc2V0UGFnZSAmJiBzdG9yZS5wcm92aWRlciA9PSAnZmFjZWJvb2snXCJcbiAgICAgIC8+XG4gICAgICA8RlBhc3N3b3JkU3VjY2Vzc1RlbXBsYXRlXG4gICAgICAgIHYtaWY9XCJzdG9yZS5pc1Bhc3N3b3JkU3VjY2Vzc1BhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2ZhY2Vib29rJ1wiXG4gICAgICAvPlxuXG4gICAgICA8QVBhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZVxuICAgICAgICB2LWlmPVwic3RvcmUuaXNSZWNvdmVyeVBhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2FwcGxlJ1wiXG4gICAgICAvPlxuICAgICAgPEFQYXNzd29yZFJlc2V0VGVtcGxhdGVcbiAgICAgICAgdi1pZj1cInN0b3JlLmlzUGFzc3dvcmRSZXNldFBhZ2UgJiYgc3RvcmUucHJvdmlkZXIgPT0gJ2FwcGxlJ1wiXG4gICAgICAvPlxuICAgICAgPEFQYXNzd29yZFN1Y2Nlc3NUZW1wbGF0ZVxuICAgICAgICB2LWlmPVwic3RvcmUuaXNQYXNzd29yZFN1Y2Nlc3NQYWdlICYmIHN0b3JlLnByb3ZpZGVyID09ICdhcHBsZSdcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IExhbmRpbmdUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9MYW5kaW5nVGVtcGxhdGUudnVlXCI7XG5pbXBvcnQgRW1haWxGb3JtVGVtcGxhdGUgZnJvbSBcIn4vY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxGb3JtVGVtcGxhdGUudnVlXCI7XG5cbmltcG9ydCBTaWduVXBGb3JtIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlXCI7XG5pbXBvcnQgT3RwUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9PdHBQYWdlLnZ1ZVwiO1xuaW1wb3J0IEdQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUgZnJvbSBcIn4vY29tcG9uZW50cy90ZW1wbGF0ZXMvR1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWVcIjtcbmltcG9ydCBTaWduVXBTdWNjZXNzVGVtcGxhdGUgZnJvbSBcIn4vY29tcG9uZW50cy90ZW1wbGF0ZXMvU2lnblVwU3VjY2Vzc1RlbXBsYXRlLnZ1ZVwiO1xuaW1wb3J0IExvZ0luUGFzc3dvcmRUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dJblBhc3N3b3JkVGVtcGxhdGUudnVlXCI7XG5cbmltcG9ydCBHUGFzc3dvcmRSZXNldFRlbXBsYXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL0dQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlXCI7XG5cbmltcG9ydCBHUGFzc3dvcmRTdWNjZXNzIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL0dQYXNzd29yZFN1Y2Nlc3MudnVlXCI7XG5pbXBvcnQgUGFzc3dvcmRSZWNvdmVyeSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFJlY292ZXJ5LnZ1ZVwiO1xuXG5pbXBvcnQgUGFzc3dvcmRSZXNldFRlbXBsYXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWVcIjtcbmltcG9ydCBQYXNzd29yZFN1Y2Nlc3NUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFN1Y2Nlc3NUZW1wbGF0ZS52dWVcIjtcbmltcG9ydCBGUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL0ZQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlXCI7XG5pbXBvcnQgRlBhc3N3b3JkUmVzZXRUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9GUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZVwiO1xuaW1wb3J0IEZQYXNzd29yZFN1Y2Nlc3NUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9GUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlXCI7XG5cbmltcG9ydCBBUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlIGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGVzL0FQYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlXCI7XG5pbXBvcnQgQVBhc3N3b3JkUmVzZXRUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZVwiO1xuaW1wb3J0IEFQYXNzd29yZFN1Y2Nlc3NUZW1wbGF0ZSBmcm9tIFwifi9jb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5wb3B1cC1jb250ZW50IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvcGFnZXMvaW5kZXgudnVlIn0=