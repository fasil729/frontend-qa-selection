import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/LogInPasswordTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add";
import { store } from "/_nuxt/store/store.js"; // Import store

import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import Anchor from "/_nuxt/components/atoms/Anchor.vue";

// Reactive variable for the password input

const _sfc_main = {
  __name: 'LogInPasswordTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const password = ref("");

// Handle login click
const handleLogin = () => {
  if (!password.value) {
    alert("Please enter your password");
    return;
  }
  // Call the login method from the store
  store.login(password.value);
};

// Handle navigation to forgot password page
const navigateToForgotPassword = () => {
  // Set the recovery page state in the store and proceed to the recovery page
  store.isRecoveryPage = true;
};

const __returned__ = { password, handleLogin, navigateToForgotPassword, ref, get store() { return store }, NextIconSection, InputBox, Text, ActionButton, InfoBaner, Anchor }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/LogInPasswordTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/LogInPasswordTemplate.vue:5:5"
}
const _hoisted_3 = { "data-v-inspector": "components/templates/LogInPasswordTemplate.vue:21:7" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" Logo or Header Section "),
      _createVNode($setup["NextIconSection"]),
      _createCommentVNode(" Information Banner "),
      _createVNode($setup["InfoBaner"], {
        title: "Welcome to Aladia",
        "content-text": "Create or access your Account from here"
      }),
      _createCommentVNode(" Instructional Text "),
      _createVNode($setup["Text"], {
        "content-text": "Enter your password",
        class: "text-white text-center"
      }),
      _createCommentVNode(" Password Input and Forgot Password Option "),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["InputBox"], {
          modelValue: $setup.password,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.password) = $event)),
          placeholder: "Password",
          type: "password",
          "icon-class": "fa-key text-base text-black/70"
        }, null, 8 /* PROPS */, ["modelValue"]),
        _createVNode($setup["Anchor"], {
          text: "Forgot Password?",
          class: "text-white/50 cursor-pointer text-sm",
          onClick: $setup.navigateToForgotPassword
        })
      ]),
      _createCommentVNode(" Login Button "),
      _createVNode($setup["ActionButton"], {
        text: "Enter",
        onClick: $setup.handleLogin
      })
    ])
  ]))
}


_sfc_main.__hmrId = "ef486403"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/LogInPasswordTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,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O0VBQUMsa0JBQWdCLEVBQUM7O3FCQWUvRyxrQkFBZ0IsRUFBQyxxREFBcUQ7Ozt3QkFuQi9FLG9CQW9DTSxPQXBDTixVQW9DTTtJQWpDSixvQkFnQ00sT0FoQ04sVUFnQ007TUE3QkosK0NBQStCO01BQy9CLGFBQW1CO01BRW5CLDJDQUEyQjtNQUMzQixhQUdFO1FBRkEsS0FBSyxFQUFDLG1CQUFtQjtRQUN6QixjQUFZLEVBQUM7O01BR2YsMkNBQTJCO01BQzNCLGFBQTBFO1FBQXBFLGNBQVksRUFBQyxxQkFBcUI7UUFBQyxLQUFLLEVBQUM7O01BRS9DLGtFQUFrRDtNQUNsRCxvQkFZTSxPQVpOLFVBWU07UUFYSixhQUtFO1VBMUJWLFlBc0JtQixlQUFRO1VBdEIzQiw2REFzQm1CLGVBQVE7VUFDakIsV0FBVyxFQUFDLFVBQVU7VUFDdEIsSUFBSSxFQUFDLFVBQVU7VUFDZixZQUFVLEVBQUM7O1FBRWIsYUFJRTtVQUhBLElBQUksRUFBQyxrQkFBa0I7VUFDdkIsS0FBSyxFQUFDLHNDQUFzQztVQUMzQyxPQUFLLEVBQUU7OztNQUlaLHFDQUFxQjtNQUNyQixhQUFrRDtRQUFwQyxJQUFJLEVBQUMsT0FBTztRQUFFLE9BQUssRUFBRSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTG9nSW5QYXNzd29yZFRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJhY2tkcm9wLWJsdXItWzVweF0gYmctb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dJblBhc3N3b3JkVGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgcC01IG0tNSB0ZXh0LTEzIGJvcmRlciBmbGV4IGZsZXgtY29sIGdhcC02IHJvdW5kZWQtbGcgcG9wdXAtY29udGVudCBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dJblBhc3N3b3JkVGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPCEtLSBMb2dvIG9yIEhlYWRlciBTZWN0aW9uIC0tPlxuICAgICAgPE5leHRJY29uU2VjdGlvbiAvPlxuXG4gICAgICA8IS0tIEluZm9ybWF0aW9uIEJhbm5lciAtLT5cbiAgICAgIDxJbmZvQmFuZXJcbiAgICAgICAgdGl0bGU9XCJXZWxjb21lIHRvIEFsYWRpYVwiXG4gICAgICAgIGNvbnRlbnQtdGV4dD1cIkNyZWF0ZSBvciBhY2Nlc3MgeW91ciBBY2NvdW50IGZyb20gaGVyZVwiXG4gICAgICAvPlxuXG4gICAgICA8IS0tIEluc3RydWN0aW9uYWwgVGV4dCAtLT5cbiAgICAgIDxUZXh0IGNvbnRlbnQtdGV4dD1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIiAvPlxuXG4gICAgICA8IS0tIFBhc3N3b3JkIElucHV0IGFuZCBGb3Jnb3QgUGFzc3dvcmQgT3B0aW9uIC0tPlxuICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9nSW5QYXNzd29yZFRlbXBsYXRlLnZ1ZToyMTo3XCI+XG4gICAgICAgIDxJbnB1dEJveFxuICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpY29uLWNsYXNzPVwiZmEta2V5IHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEFuY2hvclxuICAgICAgICAgIHRleHQ9XCJGb3Jnb3QgUGFzc3dvcmQ/XCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtd2hpdGUvNTAgY3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiXG4gICAgICAgICAgQGNsaWNrPVwibmF2aWdhdGVUb0ZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIExvZ2luIEJ1dHRvbiAtLT5cbiAgICAgIDxBY3Rpb25CdXR0b24gdGV4dD1cIkVudGVyXCIgQGNsaWNrPVwiaGFuZGxlTG9naW5cIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7IC8vIEltcG9ydCBzdG9yZVxuXG5pbXBvcnQgTmV4dEljb25TZWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL05leHRJY29uU2VjdGlvbi52dWVcIjtcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEJveC52dWVcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJ+L2NvbXBvbmVudHMvYXRvbXMvVGV4dC52dWVcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvQWN0aW9uQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IEluZm9CYW5lciBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlXCI7XG5pbXBvcnQgQW5jaG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvYXRvbXMvQW5jaG9yLnZ1ZVwiO1xuXG4vLyBSZWFjdGl2ZSB2YXJpYWJsZSBmb3IgdGhlIHBhc3N3b3JkIGlucHV0XG5jb25zdCBwYXNzd29yZCA9IHJlZihcIlwiKTtcblxuLy8gSGFuZGxlIGxvZ2luIGNsaWNrXG5jb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgaWYgKCFwYXNzd29yZC52YWx1ZSkge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIENhbGwgdGhlIGxvZ2luIG1ldGhvZCBmcm9tIHRoZSBzdG9yZVxuICBzdG9yZS5sb2dpbihwYXNzd29yZC52YWx1ZSk7XG59O1xuXG4vLyBIYW5kbGUgbmF2aWdhdGlvbiB0byBmb3Jnb3QgcGFzc3dvcmQgcGFnZVxuY29uc3QgbmF2aWdhdGVUb0ZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuICAvLyBTZXQgdGhlIHJlY292ZXJ5IHBhZ2Ugc3RhdGUgaW4gdGhlIHN0b3JlIGFuZCBwcm9jZWVkIHRvIHRoZSByZWNvdmVyeSBwYWdlXG4gIHN0b3JlLmlzUmVjb3ZlcnlQYWdlID0gdHJ1ZTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dJblBhc3N3b3JkVGVtcGxhdGUudnVlIn0=