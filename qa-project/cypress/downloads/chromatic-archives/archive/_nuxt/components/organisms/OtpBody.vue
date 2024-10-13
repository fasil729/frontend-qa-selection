import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/OtpBody.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import OtpField from "/_nuxt/components/molecules/OtpField.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";

// Local state to store entered OTP

const _sfc_main = {
  __name: 'OtpBody',
  setup(__props, { expose: __expose }) {
  __expose();

const enteredOtp = ref("");

// Function to handle OTP submission
const handleOtpSubmit = () => {
  if (enteredOtp.value.length === 6) {
    // Verify the entered OTP with the store's static OTP
    store.verifyOtp(enteredOtp.value);

  } else {
    alert("Please enter the full 6-digit OTP.");
  }
};

const __returned__ = { enteredOtp, handleOtpSubmit, ref, get store() { return store }, OtpField, Text, ActionButton }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/organisms/OtpBody.vue:2:3" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" OTP Input Fields "),
    _createVNode($setup["OtpField"], {
      modelValue: $setup.enteredOtp,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.enteredOtp) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    _createCommentVNode(" Helper Text "),
    _createVNode($setup["Text"], { text: "You didn't receive any email?" }),
    _createCommentVNode(" Submit Button "),
    _createVNode($setup["ActionButton"], {
      text: "Enter",
      onPointerup: $setup.handleOtpSubmit
    })
  ]))
}


_sfc_main.__hmrId = "3456fef3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/OtpBody.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDOztBQUV4RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7O0FBQ2hDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ3JCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDOztBQUVyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFDRixDQUFDOzs7Ozs7Ozs7O3FCQS9CTSxrQkFBZ0IsRUFBQyxzQ0FBc0M7Ozt3QkFBNUQsb0JBU00sT0FUTixVQVNNO0lBUkoseUNBQXlCO0lBQ3pCLGFBQWlDO01BSHJDLFlBR3VCLGlCQUFVO01BSGpDLDZEQUd1QixpQkFBVTs7SUFFN0Isb0NBQW9CO0lBQ3BCLGFBQTZDLGtCQUF2QyxJQUFJLEVBQUMsK0JBQStCO0lBRTFDLHNDQUFzQjtJQUN0QixhQUEwRDtNQUE1QyxJQUFJLEVBQUMsT0FBTztNQUFFLFdBQVMsRUFBRSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiT3RwQm9keS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9PdHBCb2R5LnZ1ZToyOjNcIj5cbiAgICA8IS0tIE9UUCBJbnB1dCBGaWVsZHMgLS0+XG4gICAgPE90cEZpZWxkIHYtbW9kZWw9XCJlbnRlcmVkT3RwXCIgLz5cblxuICAgIDwhLS0gSGVscGVyIFRleHQgLS0+XG4gICAgPFRleHQgdGV4dD1cIllvdSBkaWRuJ3QgcmVjZWl2ZSBhbnkgZW1haWw/XCIgLz5cblxuICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICA8QWN0aW9uQnV0dG9uIHRleHQ9XCJFbnRlclwiIEBwb2ludGVydXA9XCJoYW5kbGVPdHBTdWJtaXRcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cImpzXCI+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgT3RwRmllbGQgZnJvbSAnLi4vbW9sZWN1bGVzL090cEZpZWxkLnZ1ZSc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9hdG9tcy9UZXh0LnZ1ZSc7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4uL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlJztcblxuLy8gTG9jYWwgc3RhdGUgdG8gc3RvcmUgZW50ZXJlZCBPVFBcbmNvbnN0IGVudGVyZWRPdHAgPSByZWYoXCJcIik7XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBPVFAgc3VibWlzc2lvblxuY29uc3QgaGFuZGxlT3RwU3VibWl0ID0gKCkgPT4ge1xuICBpZiAoZW50ZXJlZE90cC52YWx1ZS5sZW5ndGggPT09IDYpIHtcbiAgICAvLyBWZXJpZnkgdGhlIGVudGVyZWQgT1RQIHdpdGggdGhlIHN0b3JlJ3Mgc3RhdGljIE9UUFxuICAgIHN0b3JlLnZlcmlmeU90cChlbnRlcmVkT3RwLnZhbHVlKTtcblxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHRoZSBmdWxsIDYtZGlnaXQgT1RQLlwiKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvb3JnYW5pc21zL090cEJvZHkudnVlIn0=