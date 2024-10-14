import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/OtpField.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import InputField from "/_nuxt/components/atoms/InputField.vue";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";

// Props and Emits
const otpLength = 6; // Number of OTP digits

// Local OTP state initialized with empty values

const _sfc_main = {
  __name: 'OtpField',
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;
const otp = ref(Array(otpLength).fill(""));

// Handle input for each OTP field and emit full OTP to parent
const handleInput = (event, index) => {
  const value = event.target.value;

  // Update the specific OTP digit
  otp.value[index] = value;

  // Emit the full OTP string
  emit("update:modelValue", otp.value.join(""));
};

const __returned__ = { emit, otpLength, otp, handleInput, InputField, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,  createBlock as _createBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "relative mb-4 flex h-10 w-full justify-between text-xl text-black",
  "data-v-inspector": "components/molecules/OtpField.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" OTP inputs "),
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($setup.otp, (digit, index) => {
      return (_openBlock(), _createBlock($setup["InputField"], {
        key: index,
        id: index,
        value: $setup.otp[index],
        onInput: $event => ($setup.handleInput($event, index)),
        maxlength: "1",
        placeholder: "",
        "custom-class": "flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
      }, null, 8 /* PROPS */, ["id", "value", "onInput"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}


_sfc_main.__hmrId = "0d5e7ab4"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/molecules/OtpField.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBbUJBLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7QUFFekIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUVSLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzs7QUFFdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7O0FBSDFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQWtDO0FBSS9DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDbkQsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7QUFFbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUM3QixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7QUFFMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7Ozs7OztFQXBDRyxLQUFLLEVBQUMsbUVBQW1FO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBRDdGLG9CQWNNLE9BZE4sVUFjTTtJQVhKLG1DQUFtQjt1QkFDbkIsb0JBU0UsaUJBZE4sWUFNK0IsVUFBRyxFQU5sQyxDQU1jLEtBQUssRUFBRSxLQUFLOzRCQUR0QixhQVNFO1FBUEMsR0FBRyxFQUFFLEtBQUs7UUFDVixFQUFFLEVBQUUsS0FBSztRQUNULEtBQUssRUFBRSxVQUFHLENBQUMsS0FBSztRQUNoQixPQUFLLGFBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSztRQUNqQyxTQUFTLEVBQUMsR0FBRztRQUNiLFdBQVcsRUFBQyxFQUFFO1FBQ2QsY0FBWSxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPdHBGaWVsZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBtYi00IGZsZXggaC0xMCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRleHQteGwgdGV4dC1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9PdHBGaWVsZC52dWU6MjozXCJcbiAgPlxuICAgIDwhLS0gT1RQIGlucHV0cyAtLT5cbiAgICA8SW5wdXRGaWVsZFxuICAgICAgdi1mb3I9XCIoZGlnaXQsIGluZGV4KSBpbiBvdHBcIlxuICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgIDppZD1cImluZGV4XCJcbiAgICAgIDp2YWx1ZT1cIm90cFtpbmRleF1cIlxuICAgICAgQGlucHV0PVwiaGFuZGxlSW5wdXQoJGV2ZW50LCBpbmRleClcIlxuICAgICAgbWF4bGVuZ3RoPVwiMVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICBjdXN0b20tY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctd2hpdGUgdGV4dC1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTpzY2FsZS05MFwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJqc1wiPlxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uL2F0b21zL0lucHV0RmllbGQudnVlXCI7XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5cbi8vIFByb3BzIGFuZCBFbWl0c1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFtcInVwZGF0ZTptb2RlbFZhbHVlXCJdKTtcbmNvbnN0IG90cExlbmd0aCA9IDY7IC8vIE51bWJlciBvZiBPVFAgZGlnaXRzXG5cbi8vIExvY2FsIE9UUCBzdGF0ZSBpbml0aWFsaXplZCB3aXRoIGVtcHR5IHZhbHVlc1xuY29uc3Qgb3RwID0gcmVmKEFycmF5KG90cExlbmd0aCkuZmlsbChcIlwiKSk7XG5cbi8vIEhhbmRsZSBpbnB1dCBmb3IgZWFjaCBPVFAgZmllbGQgYW5kIGVtaXQgZnVsbCBPVFAgdG8gcGFyZW50XG5jb25zdCBoYW5kbGVJbnB1dCA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgLy8gVXBkYXRlIHRoZSBzcGVjaWZpYyBPVFAgZGlnaXRcbiAgb3RwLnZhbHVlW2luZGV4XSA9IHZhbHVlO1xuXG4gIC8vIEVtaXQgdGhlIGZ1bGwgT1RQIHN0cmluZ1xuICBlbWl0KFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgb3RwLnZhbHVlLmpvaW4oXCJcIikpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL21vbGVjdWxlcy9PdHBGaWVsZC52dWUifQ==