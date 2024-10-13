import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/InfoBaner.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import Image from "/_nuxt/components/atoms/Image.vue";
import Text from "/_nuxt/components/atoms/Text.vue";

const _sfc_main = {
  __name: 'InfoBaner',
  props: {
  title: { type: String, required: true },
  imgSrc: {
    type: String,
    default: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
  },
  contentText: { type: String, required: true },
  customClass: { type: String, default: "text-xl" },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, Image, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6",
  "data-v-inspector": "components/molecules/InfoBaner.vue:2:3"
}
const _hoisted_2 = {
  class: "relative flex w-full justify-between transition-all duration-300 opacity-100",
  "data-v-inspector": "components/molecules/InfoBaner.vue:7:5"
}
const _hoisted_3 = { "data-v-inspector": "components/molecules/InfoBaner.vue:14:7" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = _createElementVNode("div", {
      class: "gradient absolute inset-0 opacity-[0.15]",
      "data-v-inspector": "components/molecules/InfoBaner.vue:5:5"
    }, null, -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["Image"], {
        src: $props.imgSrc,
        customClass: "h-20 w-20 object-cover"
      }, null, 8 /* PROPS */, ["src"]),
      _cache[0] || (_cache[0] = _createElementVNode("div", {
        class: "p-4",
        "data-v-inspector": "components/molecules/InfoBaner.vue:12:7"
      }, null, -1 /* HOISTED */)),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["Text"], {
          text: $props.title,
          customClass: "mb-2 text-base font-semibold text-white"
        }, null, 8 /* PROPS */, ["text"]),
        _createVNode($setup["Text"], {
          text: $props.contentText,
          customClass: "text-white/70 whitespace-pre-wrap"
        }, null, 8 /* PROPS */, ["text"])
      ])
    ]),
    _cache[2] || (_cache[2] = _createElementVNode("div", {
      class: "absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0",
      "data-v-inspector": "components/molecules/InfoBaner.vue:26:5"
    }, null, -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "8df9800c"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/InfoBaner.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3BDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BUVo7Ozs7Ozs7Ozs7O0VBeENFLEtBQUssRUFBQyx1SkFBdUo7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBSzdLLEtBQUssRUFBQyw4RUFBOEU7RUFBQyxrQkFBZ0IsRUFBQzs7cUJBTWpHLGtCQUFnQixFQUFDLHlDQUF5Qzs7O3dCQVpuRSxvQkEyQk0sT0EzQk4sVUEyQk07OEJBeEJKLG9CQUFzSDtNQUFqSCxLQUFLLEVBQUMsMENBQTBDO01BQUMsa0JBQWdCLEVBQUM7O0lBRXZFLG9CQWtCTSxPQWxCTixVQWtCTTtNQWZKLGFBQTREO1FBQXBELEdBQUcsRUFBRSxhQUFNO1FBQUUsV0FBVyxFQUFDOztnQ0FFakMsb0JBQWtGO1FBQTdFLEtBQUssRUFBQyxLQUFLO1FBQUMsa0JBQWdCLEVBQUM7O01BRWxDLG9CQVVNLE9BVk4sVUFVTTtRQVRKLGFBR0U7VUFGQyxJQUFJLEVBQUUsWUFBSztVQUNaLFdBQVcsRUFBQzs7UUFHZCxhQUdFO1VBRkMsSUFBSSxFQUFFLGtCQUFXO1VBQ2xCLFdBQVcsRUFBQzs7Ozs4QkFJbEIsb0JBRU87TUFETCxLQUFLLEVBQUMseUZBQXlGO01BQUMsa0JBQWdCLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkluZm9CYW5lci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGgtMzIganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvMjAgYmctYmxhY2sgcHgtOCBweS02IG9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG10LTAgbWItNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjE1XVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlOjU6NVwiPjwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG9wYWNpdHktMTAwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWU6Nzo1XCJcbiAgICA+XG4gICAgICA8SW1hZ2UgOnNyYz1cImltZ1NyY1wiIGN1c3RvbUNsYXNzPVwiaC0yMCB3LTIwIG9iamVjdC1jb3ZlclwiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZToxMjo3XCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWU6MTQ6N1wiPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIDp0ZXh0PVwidGl0bGVcIlxuICAgICAgICAgIGN1c3RvbUNsYXNzPVwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dFxuICAgICAgICAgIDp0ZXh0PVwiY29udGVudFRleHRcIlxuICAgICAgICAgIGN1c3RvbUNsYXNzPVwidGV4dC13aGl0ZS83MCB3aGl0ZXNwYWNlLXByZS13cmFwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgb3BhY2l0eS0wXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWU6MjY6NVwiXG4gICAgPjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2F0b21zL0ltYWdlLnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL2F0b21zL1RleHQudnVlXCI7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBpbWdTcmM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJodHRwczovL2RldmVsb3AuYWxhZGlhLmlvL19udXh0L2ltYWdlLkNoUTNiaVc5LnBuZ1wiLFxuICB9LFxuICBjb250ZW50VGV4dDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGN1c3RvbUNsYXNzOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJ0ZXh0LXhsXCIgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZSJ9