import{_ as s}from"./DeRt06Tv.js";import"./Bp0l9591.js";import"./QQHtzclr.js";const d={title:"Molecules/OtpField",component:s,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder for each OTP input field",defaultValue:""},maxLength:{control:"number",description:"Maximum length of each OTP input field",defaultValue:1},customClass:{control:"text",description:"Custom class for styling input fields",defaultValue:"flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"}}},a=o=>({components:{OtpField:s},setup(){return{args:o}},template:'<OtpField v-bind="args" />'}),e=a.bind({});e.args={placeholder:"",maxLength:1,customClass:"flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    OtpField
  },
  setup() {
    return {
      args
    };
  },
  template: '<OtpField v-bind="args" />'
})`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,d as default};
