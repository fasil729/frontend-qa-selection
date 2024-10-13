import{_ as r}from"./wTEH9NnZ.js";import"./Bp0l9591.js";import"./DOpzD10v.js";import"./DeRt06Tv.js";import"./QQHtzclr.js";import"./D6iWbNBx.js";import"./AlswhQCl.js";import"./DlAUqK2U.js";const y={title:"Organisms/OtpBody",component:r,tags:["autodocs"],argTypes:{buttonText:{control:{type:"text"},description:"Text displayed on the action button",defaultValue:"Enter"},text:{control:{type:"text"},description:"Text displayed for email verification",defaultValue:"You didn't receive any email?"}}},s=a=>({components:{OtpBody:r},setup(){return{args:a}},template:`
    <div>
      <OtpBody :buttonText="args.buttonText" :text="args.text" />
    </div>
  `}),t=s.bind({});t.args={buttonText:"Enter",text:"You didn't receive any email?"};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    OtpBody
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div>
      <OtpBody :buttonText="args.buttonText" :text="args.text" />
    </div>
  \`
})`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,y as default};
