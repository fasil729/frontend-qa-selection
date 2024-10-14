import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/SignUpSuccessTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { store } from "/_nuxt/store/store.js";
import Text from "/_nuxt/components/atoms/Text.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import Image from "/_nuxt/components/atoms/Image.vue";
// import NextIconSection from "~/components/molecules/NextIconSection.vue";


const _sfc_main = {
  __name: 'SignUpSuccessTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const handleActionButton = async () => {
  store.isSuccessPage = false;
};

const __returned__ = { handleActionButton, get store() { return store }, Text, ActionButton, Image }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/SignUpSuccessTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/SignUpSuccessTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" <NextIconSection text=\"Back to Otp\" /> "),
      _createVNode($setup["Text"], {
        text: "Test Name",
        class: "text-white text-center p-3 m-5"
      }),
      _createVNode($setup["Text"], {
        text: "Thanks for joining Aladia",
        class: "text-white/70 text-center m-5 p-3"
      }),
      _createVNode($setup["Image"], { class: "m-6 p-5" }),
      _createVNode($setup["ActionButton"], {
        onPointerup: $setup.handleActionButton,
        text: "Enter Marketplace",
        class: "text-white p-3 m-3"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "2d469582"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/SignUpSuccessTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFFM0UsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7RUE5QkcsS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFHcEksS0FBSyxFQUFDLDRGQUE0RjtFQUFDLGtCQUFnQixFQUFDOzs7O3dCQUp4SCxvQkFtQk0sT0FuQk4sVUFtQk07SUFoQkosb0JBZU0sT0FmTixVQWVNO01BWkosaUVBQStDO01BQy9DLGFBQWdFO1FBQTFELElBQUksRUFBQyxXQUFXO1FBQUMsS0FBSyxFQUFDOztNQUM3QixhQUdFO1FBRkEsSUFBSSxFQUFDLDJCQUEyQjtRQUNoQyxLQUFLLEVBQUM7O01BRVIsYUFBMEIsbUJBQWxCLEtBQUssRUFBQyxTQUFTO01BQ3ZCLGFBSUU7UUFIQyxXQUFTLEVBQUUseUJBQWtCO1FBQzlCLElBQUksRUFBQyxtQkFBbUI7UUFDeEIsS0FBSyxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTaWduVXBTdWNjZXNzVGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmFja2Ryb3AtYmx1ci1bNXB4XSBiZy1vcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1NpZ25VcFN1Y2Nlc3NUZW1wbGF0ZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTYgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1NpZ25VcFN1Y2Nlc3NUZW1wbGF0ZS52dWU6NTo1XCJcbiAgICA+XG4gICAgICA8IS0tIDxOZXh0SWNvblNlY3Rpb24gdGV4dD1cIkJhY2sgdG8gT3RwXCIgLz4gLS0+XG4gICAgICA8VGV4dCB0ZXh0PVwiVGVzdCBOYW1lXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMyBtLTVcIiAvPlxuICAgICAgPFRleHRcbiAgICAgICAgdGV4dD1cIlRoYW5rcyBmb3Igam9pbmluZyBBbGFkaWFcIlxuICAgICAgICBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC1jZW50ZXIgbS01IHAtM1wiXG4gICAgICAvPlxuICAgICAgPEltYWdlICBjbGFzcz1cIm0tNiBwLTVcIiAvPlxuICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICBAcG9pbnRlcnVwPVwiaGFuZGxlQWN0aW9uQnV0dG9uXCJcbiAgICAgICAgdGV4dD1cIkVudGVyIE1hcmtldHBsYWNlXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHAtMyBtLTNcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9JbWFnZS52dWVcIjtcbi8vIGltcG9ydCBOZXh0SWNvblNlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmV4dEljb25TZWN0aW9uLnZ1ZVwiO1xuXG5jb25zdCBoYW5kbGVBY3Rpb25CdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gIHN0b3JlLmlzU3VjY2Vzc1BhZ2UgPSBmYWxzZTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvU2lnblVwU3VjY2Vzc1RlbXBsYXRlLnZ1ZSJ9