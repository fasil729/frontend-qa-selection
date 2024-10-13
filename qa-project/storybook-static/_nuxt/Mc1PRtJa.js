import{_ as s}from"./C0g1f3eE.js";import"./Bp0l9591.js";import"./CtXiy-54.js";import"./B5-gTChS.js";import"./QQHtzclr.js";const m={title:"Molecules/SearchBar",component:s,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the search input field",defaultValue:"Search courses..."},maxlength:{control:"number",description:"Maximum length for the search input field",defaultValue:100},iconClass:{control:"text",description:"CSS class for the search icon",defaultValue:"fa-magnifying-glass text-xs"},closeIconClass:{control:"text",description:"CSS class for the optional close icon",defaultValue:"fa-circle-xmark hidden"}}},c=o=>({components:{SearchBar:s},setup(){return{args:o}},template:'<SearchBar v-bind="args" />'}),e=c.bind({});e.args={placeholder:"Search courses...",maxlength:100,iconClass:"fa-magnifying-glass text-xs",closeIconClass:"fa-circle-xmark hidden"};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    SearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<SearchBar v-bind="args" />'
})`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,m as default};
