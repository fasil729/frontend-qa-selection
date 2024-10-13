import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/EmailLogIn.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { store } from "/_nuxt/store/store.js";

import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import DividedWithText from "/_nuxt/components/molecules/DividedWithText.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";


const _sfc_main = {
  __name: 'EmailLogIn',
  setup(__props, { expose: __expose }) {
  __expose();

const email = ref("");

const handleEnter = () => {
  console.log("Entering handleEnter with email:", email.value); // Debugging

  if (email.value.trim() !== "") {
    store.setEmail(email.value); // Store the email
  } else {
    alert("Please enter a valid email address");
  }
};

const __returned__ = { email, handleEnter, ref, get store() { return store }, InputBox, InfoBaner, DividedWithText, Text, ActionButton }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  createCommentVNode as _createCommentVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/organisms/EmailLogIn.vue:2:3" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["InfoBaner"], {
      title: "Welcome to Aladia",
      "content-text": "Create or access your account from here"
    }),
    _createVNode($setup["Text"], {
      text: "Enter your email",
      class: "mb-6 text-center text-white"
    }),
    _createCommentVNode(" Correct usage of v-model "),
    _createVNode($setup["InputBox"], {
      modelValue: $setup.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.email) = $event)),
      "icon-class": "fa-envelope text-base text-black/70",
      placeholder: "Email Address"
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createCommentVNode(" Ensure ActionButton is clickable with pointerup "),
    _createVNode($setup["ActionButton"], {
      onPointerup: $setup.handleEnter,
      text: "Enter"
    }),
    _createVNode($setup["DividedWithText"])
  ]))
}


_sfc_main.__hmrId = "7fabd26d"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/EmailLogIn.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXVCQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7QUFFckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQzFELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUM1RCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7O0FBRXhELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5FLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQUNGLENBQUM7Ozs7Ozs7Ozs7cUJBekNNLGtCQUFnQixFQUFDLHlDQUF5Qzs7O3dCQUEvRCxvQkFrQk0sT0FsQk4sVUFrQk07SUFqQkosYUFHRTtNQUZBLEtBQUssRUFBQyxtQkFBbUI7TUFDekIsY0FBWSxFQUFDOztJQUVmLGFBQW9FO01BQTlELElBQUksRUFBQyxrQkFBa0I7TUFBQyxLQUFLLEVBQUM7O0lBRXBDLGlEQUFpQztJQUNqQyxhQUlFO01BYk4sWUFVZSxZQUFLO01BVnBCLDZEQVVlLFlBQUs7TUFDZCxZQUFVLEVBQUMscUNBQXFDO01BQ2hELFdBQVcsRUFBQzs7SUFHZCx3RUFBd0Q7SUFDeEQsYUFBc0Q7TUFBdkMsV0FBUyxFQUFFLGtCQUFXO01BQUUsSUFBSSxFQUFDOztJQUU1QyxhQUFtQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRW1haWxMb2dJbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9FbWFpbExvZ0luLnZ1ZToyOjNcIj5cbiAgICA8SW5mb0JhbmVyXG4gICAgICB0aXRsZT1cIldlbGNvbWUgdG8gQWxhZGlhXCJcbiAgICAgIGNvbnRlbnQtdGV4dD1cIkNyZWF0ZSBvciBhY2Nlc3MgeW91ciBhY2NvdW50IGZyb20gaGVyZVwiXG4gICAgLz5cbiAgICA8VGV4dCB0ZXh0PVwiRW50ZXIgeW91ciBlbWFpbFwiIGNsYXNzPVwibWItNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgLz5cblxuICAgIDwhLS0gQ29ycmVjdCB1c2FnZSBvZiB2LW1vZGVsIC0tPlxuICAgIDxJbnB1dEJveFxuICAgICAgdi1tb2RlbD1cImVtYWlsXCJcbiAgICAgIGljb24tY2xhc3M9XCJmYS1lbnZlbG9wZSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgIC8+XG5cbiAgICA8IS0tIEVuc3VyZSBBY3Rpb25CdXR0b24gaXMgY2xpY2thYmxlIHdpdGggcG9pbnRlcnVwIC0tPlxuICAgIDxBY3Rpb25CdXR0b24gQHBvaW50ZXJ1cD1cImhhbmRsZUVudGVyXCIgdGV4dD1cIkVudGVyXCIgLz5cblxuICAgIDxEaXZpZGVkV2l0aFRleHQgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvSW5wdXRCb3gudnVlXCI7XG5pbXBvcnQgSW5mb0JhbmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWVcIjtcbmltcG9ydCBEaXZpZGVkV2l0aFRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvRGl2aWRlZFdpdGhUZXh0LnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWVcIjtcblxuY29uc3QgZW1haWwgPSByZWYoXCJcIik7XG5cbmNvbnN0IGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkVudGVyaW5nIGhhbmRsZUVudGVyIHdpdGggZW1haWw6XCIsIGVtYWlsLnZhbHVlKTsgLy8gRGVidWdnaW5nXG5cbiAgaWYgKGVtYWlsLnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgIHN0b3JlLnNldEVtYWlsKGVtYWlsLnZhbHVlKTsgLy8gU3RvcmUgdGhlIGVtYWlsXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9vcmdhbmlzbXMvRW1haWxMb2dJbi52dWUifQ==