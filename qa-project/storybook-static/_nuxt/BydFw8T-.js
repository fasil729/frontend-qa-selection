import{_ as n}from"./B-IqHRuK.js";import"./Bp0l9591.js";import"./D6iWbNBx.js";const c={title:"Organisms/SocialLoginBody",component:n,tags:["autodocs"],argTypes:{email:{control:{type:"text"},description:"Email address to display",defaultValue:"test@gmail.com"}}},i=s=>({components:{SocialLoginBody:n},setup(){return{args:s}},template:`
    <div>
      <SocialLoginBody :email="args.email" />
    </div>
  `}),o=i.bind({});o.args={email:"test@gmail.com"};var a,e,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    SocialLoginBody
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div>
      <SocialLoginBody :email="args.email" />
    </div>
  \`
})`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const d=["Default"];export{o as Default,d as __namedExportsOrder,c as default};
