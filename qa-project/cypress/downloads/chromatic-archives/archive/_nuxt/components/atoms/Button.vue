import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Button.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { renderSlot as _renderSlot, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";
const _hoisted_1 = {
  class: "relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-white",
  "data-v-inspector": "components/atoms/Button.vue:2:3"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("button", _hoisted_1, [
    _renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main.__hmrId = "ccb798b3";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/biniyam/aladia/frontend-qa-selection/qa-project/components/atoms/Button.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxVQUFNLFFBQVE7Ozs7Ozs7O0VBUFYsT0FBTTtBQUFBLEVBQXlGLG9CQUFpQjs7O3VCQURsSCxvQkFJUyxVQUpULFlBSVM7QUFBQSxJQURQLFlBQVE7QUFBQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZ3JvdXAtaG92ZXI6dGV4dC1ibGFjayB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnZ1ZToyOjNcIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIG9uQ2xpY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnZ1ZSJ9