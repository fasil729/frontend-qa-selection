import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/InputBox.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import Icon from "/_nuxt/components/atoms/Icon.vue";
import InputField from "/_nuxt/components/atoms/InputField.vue";


const _sfc_main = {
  __name: 'InputBox',
  props: {
  modelValue: { type: String, default: "" }, // Required for two-way binding
  iconClass: { type: String, required: true },
  placeholder: { type: String, required: true },
  inputType: { type: String, default: "text" },
},
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

// Emit update event to parent with the new value
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const __returned__ = { props, emit, handleInput, Icon, InputField }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   createCommentVNode as _createCommentVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "group relative mt-8 flex h-10 w-full rounded transition-all bg-white justify-center",
  "data-v-inspector": "components/molecules/InputBox.vue:2:3"
}
const _hoisted_2 = {
  class: "flex w-10 items-center justify-center text-xl",
  "data-v-inspector": "components/molecules/InputBox.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["Icon"], { "icon-class": $props.iconClass }, null, 8 /* PROPS */, ["icon-class"])
    ]),
    _createCommentVNode(" Pass value via modelValue and listen to the input event "),
    _createVNode($setup["InputField"], {
      value: $props.modelValue,
      onInput: $setup.handleInput,
      maxlength: "100",
      placeholder: $props.placeholder,
      customClass: "h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all",
      type: $props.inputType
    }, null, 8 /* PROPS */, ["value", "placeholder", "type"])
  ]))
}


_sfc_main.__hmrId = "5ea350b2"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/InputBox.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BS1o7O0FBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBa0M7O0FBRS9DLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7S0FDdkMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7O0VBbENHLEtBQUssRUFBQyxxRkFBcUY7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBRXhHLEtBQUssRUFBQywrQ0FBK0M7RUFBQyxrQkFBZ0IsRUFBQzs7Ozt3QkFIOUUsb0JBZ0JNLE9BaEJOLFVBZ0JNO0lBYkosb0JBRU0sT0FGTixVQUVNO01BREosYUFBZ0Msa0JBQXpCLFlBQVUsRUFBRSxnQkFBUzs7SUFHOUIsZ0ZBQWdFO0lBQ2hFLGFBT0U7TUFOQyxLQUFLLEVBQUUsaUJBQVU7TUFDakIsT0FBSyxFQUFFLGtCQUFXO01BQ25CLFNBQVMsRUFBQyxLQUFLO01BQ2QsV0FBVyxFQUFFLGtCQUFXO01BQ3pCLFdBQVcsRUFBQyxxRkFBcUY7TUFDaEcsSUFBSSxFQUFFIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJJbnB1dEJveC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJncm91cCByZWxhdGl2ZSBtdC04IGZsZXggaC0xMCB3LWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZSBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEJveC52dWU6MjozXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvSW5wdXRCb3gudnVlOjU6NVwiPlxuICAgICAgPEljb24gOmljb24tY2xhc3M9XCJpY29uQ2xhc3NcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBQYXNzIHZhbHVlIHZpYSBtb2RlbFZhbHVlIGFuZCBsaXN0ZW4gdG8gdGhlIGlucHV0IGV2ZW50IC0tPlxuICAgIDxJbnB1dEZpZWxkXG4gICAgICA6dmFsdWU9XCJtb2RlbFZhbHVlXCJcbiAgICAgIEBpbnB1dD1cImhhbmRsZUlucHV0XCJcbiAgICAgIG1heGxlbmd0aD1cIjEwMFwiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICBjdXN0b21DbGFzcz1cImgtZnVsbCBmbGV4LTEgcm91bmRlZCBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIHRleHQtYmxhY2sgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgIDp0eXBlPVwiaW5wdXRUeXBlXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL0ljb24udnVlXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL0lucHV0RmllbGQudnVlXCI7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBtb2RlbFZhbHVlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LCAvLyBSZXF1aXJlZCBmb3IgdHdvLXdheSBiaW5kaW5nXG4gIGljb25DbGFzczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHBsYWNlaG9sZGVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW5wdXRUeXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJ0ZXh0XCIgfSxcbn0pO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoW1widXBkYXRlOm1vZGVsVmFsdWVcIl0pO1xuXG4vLyBFbWl0IHVwZGF0ZSBldmVudCB0byBwYXJlbnQgd2l0aCB0aGUgbmV3IHZhbHVlXG5jb25zdCBoYW5kbGVJbnB1dCA9IChldmVudCkgPT4ge1xuICBlbWl0KFwidXBkYXRlOm1vZGVsVmFsdWVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEJveC52dWUifQ==