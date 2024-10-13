import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/EmailSignUPForm.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add";
import { store } from "/_nuxt/store/store.js"; // Import your store
import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import Text from "/_nuxt/components/atoms/Text.vue";

// Define reactive variables for form inputs

const _sfc_main = {
  __name: 'EmailSignUPForm',
  setup(__props, { expose: __expose }) {
  __expose();

const userName = ref("");
const userSurname = ref("");
const userEmail = ref("");
const password = ref("");
const confirmPassword = ref("");

// Handle the signup logic
const handleSignUp = () => {
  // Validate input and set details in the store
  console.log("for debugging in handle signup");
  const isValid = store.setSignUpDetails({
    name: userName.value,
    surname: userSurname.value,
    email: userEmail.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });

  // If the signup details are valid, set the email and proceed
};

const __returned__ = { userName, userSurname, userEmail, password, confirmPassword, handleSignUp, ref, get store() { return store }, InputBox, ActionButton, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/organisms/EmailSignUPForm.vue:2:3" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["InputBox"], {
      modelValue: $setup.userName,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.userName) = $event)),
      placeholder: "Name",
      "icon-class": "fa-user text-base text-black/70"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createVNode($setup["InputBox"], {
      modelValue: $setup.userSurname,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.userSurname) = $event)),
      placeholder: "Surname",
      "icon-class": "fa-user text-base text-black/70"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createVNode($setup["InputBox"], {
      modelValue: $setup.userEmail,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.userEmail) = $event)),
      placeholder: "test@gmail.com",
      type: "email",
      "icon-class": "fa-envelope text-base text-black/70"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createVNode($setup["InputBox"], {
      modelValue: $setup.password,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.password) = $event)),
      placeholder: "Password",
      type: "password",
      "icon-class": "fa-key text-base text-black/70"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createVNode($setup["InputBox"], {
      modelValue: $setup.confirmPassword,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.confirmPassword) = $event)),
      placeholder: "Confirm password",
      type: "password",
      "icon-class": "fa-key text-base text-black/70"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createVNode($setup["ActionButton"], {
      onPointerup: $setup.handleSignUp,
      text: "Enter"
    }),
    _createVNode($setup["Text"], {
      text: " Terms & Conditions ",
      class: "cursor-pointer text-center text-white/40"
    })
  ]))
}


_sfc_main.__hmrId = "a131847c"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/EmailSignUPForm.vue"]])
//# sourceMappingURL=data:application/json;base64,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O01BSHZCLDZEQUdlLGVBQVE7TUFDakIsV0FBVyxFQUFDLE1BQU07TUFDbEIsWUFBVSxFQUFDOztJQUViLGFBSUU7TUFYTixZQVFlLGtCQUFXO01BUjFCLDZEQVFlLGtCQUFXO01BQ3BCLFdBQVcsRUFBQyxTQUFTO01BQ3JCLFlBQVUsRUFBQzs7SUFFYixhQUtFO01BakJOLFlBYWUsZ0JBQVM7TUFieEIsNkRBYWUsZ0JBQVM7TUFDbEIsV0FBVyxFQUFDLGdCQUFnQjtNQUM1QixJQUFJLEVBQUMsT0FBTztNQUNaLFlBQVUsRUFBQzs7SUFFYixhQUtFO01BdkJOLFlBbUJlLGVBQVE7TUFuQnZCLDZEQW1CZSxlQUFRO01BQ2pCLFdBQVcsRUFBQyxVQUFVO01BQ3RCLElBQUksRUFBQyxVQUFVO01BQ2YsWUFBVSxFQUFDOztJQUViLGFBS0U7TUE3Qk4sWUF5QmUsc0JBQWU7TUF6QjlCLDZEQXlCZSxzQkFBZTtNQUN4QixXQUFXLEVBQUMsa0JBQWtCO01BQzlCLElBQUksRUFBQyxVQUFVO01BQ2YsWUFBVSxFQUFDOztJQUViLGFBQXVEO01BQXhDLFdBQVMsRUFBRSxtQkFBWTtNQUFFLElBQUksRUFBQzs7SUFDN0MsYUFHRTtNQUZBLElBQUksRUFBQyxzQkFBMEI7TUFDL0IsS0FBSyxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJFbWFpbFNpZ25VUEZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxTaWduVVBGb3JtLnZ1ZToyOjNcIj5cbiAgICA8SW5wdXRCb3hcbiAgICAgIHYtbW9kZWw9XCJ1c2VyTmFtZVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgaWNvbi1jbGFzcz1cImZhLXVzZXIgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgIC8+XG4gICAgPElucHV0Qm94XG4gICAgICB2LW1vZGVsPVwidXNlclN1cm5hbWVcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTdXJuYW1lXCJcbiAgICAgIGljb24tY2xhc3M9XCJmYS11c2VyIHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAvPlxuICAgIDxJbnB1dEJveFxuICAgICAgdi1tb2RlbD1cInVzZXJFbWFpbFwiXG4gICAgICBwbGFjZWhvbGRlcj1cInRlc3RAZ21haWwuY29tXCJcbiAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICBpY29uLWNsYXNzPVwiZmEtZW52ZWxvcGUgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgIC8+XG4gICAgPElucHV0Qm94XG4gICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgaWNvbi1jbGFzcz1cImZhLWtleSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgLz5cbiAgICA8SW5wdXRCb3hcbiAgICAgIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICBpY29uLWNsYXNzPVwiZmEta2V5IHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAvPlxuICAgIDxBY3Rpb25CdXR0b24gQHBvaW50ZXJ1cD1cImhhbmRsZVNpZ25VcFwiIHRleHQ9XCJFbnRlclwiIC8+XG4gICAgPFRleHRcbiAgICAgIHRleHQ9XCIgVGVybXMgJmFtcDsgQ29uZGl0aW9ucyBcIlxuICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7IC8vIEltcG9ydCB5b3VyIHN0b3JlXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL21vbGVjdWxlcy9JbnB1dEJveC52dWVcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4uL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcblxuLy8gRGVmaW5lIHJlYWN0aXZlIHZhcmlhYmxlcyBmb3IgZm9ybSBpbnB1dHNcbmNvbnN0IHVzZXJOYW1lID0gcmVmKFwiXCIpO1xuY29uc3QgdXNlclN1cm5hbWUgPSByZWYoXCJcIik7XG5jb25zdCB1c2VyRW1haWwgPSByZWYoXCJcIik7XG5jb25zdCBwYXNzd29yZCA9IHJlZihcIlwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IHJlZihcIlwiKTtcblxuLy8gSGFuZGxlIHRoZSBzaWdudXAgbG9naWNcbmNvbnN0IGhhbmRsZVNpZ25VcCA9ICgpID0+IHtcbiAgLy8gVmFsaWRhdGUgaW5wdXQgYW5kIHNldCBkZXRhaWxzIGluIHRoZSBzdG9yZVxuICBjb25zb2xlLmxvZyhcImZvciBkZWJ1Z2dpbmcgaW4gaGFuZGxlIHNpZ251cFwiKTtcbiAgY29uc3QgaXNWYWxpZCA9IHN0b3JlLnNldFNpZ25VcERldGFpbHMoe1xuICAgIG5hbWU6IHVzZXJOYW1lLnZhbHVlLFxuICAgIHN1cm5hbWU6IHVzZXJTdXJuYW1lLnZhbHVlLFxuICAgIGVtYWlsOiB1c2VyRW1haWwudmFsdWUsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxuICAgIGNvbmZpcm1QYXNzd29yZDogY29uZmlybVBhc3N3b3JkLnZhbHVlLFxuICB9KTtcblxuICAvLyBJZiB0aGUgc2lnbnVwIGRldGFpbHMgYXJlIHZhbGlkLCBzZXQgdGhlIGVtYWlsIGFuZCBwcm9jZWVkXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxTaWduVVBGb3JtLnZ1ZSJ9