import{_ as i}from"./BOSF4D8f.js";import"./Bp0l9591.js";import"./B5-gTChS.js";import"./D6iWbNBx.js";const g={title:"Molecules/IconWithText",component:i,tags:["autodocs"],argTypes:{iconWidth:{control:{type:"text"}},iconHeight:{control:{type:"text"}},text:{control:{type:"text"}},textClass:{control:{type:"text"}}}},p=m=>({components:{IconWithText:i},setup(){return{args:m}},template:'<IconWithText v-bind="args" />'}),t=p.bind({});t.args={iconWidth:"16",iconHeight:"16",text:"Default Text",textClass:""};const e=p.bind({});e.args={iconWidth:"24",iconHeight:"24",text:"Customized Text",textClass:"font-bold text-blue-500"};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    IconWithText
  },
  setup() {
    return {
      args
    };
  },
  template: '<IconWithText v-bind="args" />'
})`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,a,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    IconWithText
  },
  setup() {
    return {
      args
    };
  },
  template: '<IconWithText v-bind="args" />'
})`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const h=["Default","Customized"];export{e as Customized,t as Default,h as __namedExportsOrder,g as default};
