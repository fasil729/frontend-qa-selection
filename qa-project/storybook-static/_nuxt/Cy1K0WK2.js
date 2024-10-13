import{_ as c}from"./CZF3Eaih.js";import"./Bp0l9591.js";import"./D6iWbNBx.js";import"./CRXXI9ef.js";import"./DOpzD10v.js";const g={title:"Organisms/SocialLogin",component:c,tags:["autodocs"],argTypes:{googleIconSrc:{control:{type:"text"},description:"Source for the Google icon",defaultValue:"../../google.png"},facebookIconSrc:{control:{type:"text"},description:"Source for the Facebook icon",defaultValue:"../../facebook.png"},appleIconSrc:{control:{type:"text"},description:"Source for the Apple icon",defaultValue:"../../appl.png"}}},a=r=>({components:{SocialLogin:c},setup(){return{args:r}},template:`
    <div>
      <SocialButton
        :iconSrc="args.googleIconSrc"
        altText="Google Icon"
        buttonText="Continue with Google"
      />
      <SocialButton
        :iconSrc="args.facebookIconSrc"
        altText="Facebook Icon"
        buttonText="Continue with Facebook"
      />
      <SocialButton
        :iconSrc="args.appleIconSrc"
        altText="Apple Icon"
        buttonText="Continue with Apple"
      />
      <Text text=" Terms & Conditions " class="cursor-pointer text-center text-white/40" />
    </div>
  `}),o=a.bind({});o.args={};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    SocialLogin
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div>
      <SocialButton
        :iconSrc="args.googleIconSrc"
        altText="Google Icon"
        buttonText="Continue with Google"
      />
      <SocialButton
        :iconSrc="args.facebookIconSrc"
        altText="Facebook Icon"
        buttonText="Continue with Facebook"
      />
      <SocialButton
        :iconSrc="args.appleIconSrc"
        altText="Apple Icon"
        buttonText="Continue with Apple"
      />
      <Text text=" Terms & Conditions " class="cursor-pointer text-center text-white/40" />
    </div>
  \`
})`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,g as default};
