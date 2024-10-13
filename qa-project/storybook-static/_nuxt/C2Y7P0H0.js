import{_ as d}from"./Big1ZEaW.js";import"./Bp0l9591.js";import"./B5-gTChS.js";import"./QQHtzclr.js";const f={title:"Molecules/InputBox",component:d,tags:["autodocs"],argTypes:{iconType:{control:{type:"text"}},placeholder:{control:{type:"text"}},iconClass:{control:{type:"text"}},inputType:{control:{type:"select",options:["text","email","password"]}}}},o=g=>({components:{InputBox:d},setup(){return{args:g}},template:'<InputBox v-bind="args" />'}),e=o.bind({});e.args={iconType:"user",placeholder:"Enter your email",iconClass:"fa fa-envelope",inputType:"email"};const t=o.bind({});t.args={iconType:"lock",placeholder:"Enter your password",iconClass:"fa fa-lock",inputType:"password"};const n=o.bind({});n.args={iconType:"text",placeholder:"Type something...",iconClass:"fa fa-comment",inputType:"text"};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    InputBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputBox v-bind="args" />'
})`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    InputBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputBox v-bind="args" />'
})`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,i,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    InputBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputBox v-bind="args" />'
})`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const B=["Default","PasswordInput","TextInput"];export{e as Default,t as PasswordInput,n as TextInput,B as __namedExportsOrder,f as default};
