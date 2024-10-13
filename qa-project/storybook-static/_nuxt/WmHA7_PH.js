import{_ as a}from"./5M667CXU.js";import"./Bp0l9591.js";import"./C5iYK7m3.js";import"./D6iWbNBx.js";const d={title:"Organisms/OtpHeader",component:a,tags:["autodocs"],argTypes:{imgSrc:{control:{type:"text"},description:"Source of the image to display",defaultValue:"../../image.png"},mainText:{control:{type:"text"},description:"Main header text",defaultValue:"Aladia company"},subText:{control:{type:"text"},description:"Sub header text",defaultValue:"Thanks for joining Aladia"},instructionText:{control:{type:"text"},description:"Instruction text for entering the OTP",defaultValue:"Please enter below the 6-digit code we sent you through your registration e-mail:"}}},o=i=>({components:{OtpHeader:a},setup(){return{args:i}},template:`
    <div>
      <OtpHeader 
        :imgSrc="args.imgSrc" 
        :mainText="args.mainText"
        :subText="args.subText"
        :instructionText="args.instructionText"
      />
    </div>
  `}),e=o.bind({});e.args={imgSrc:"../../image.png",mainText:"Aladia company",subText:"Thanks for joining Aladia",instructionText:"Please enter below the 6-digit code we sent you through your registration e-mail:"};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    OtpHeader
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div>
      <OtpHeader 
        :imgSrc="args.imgSrc" 
        :mainText="args.mainText"
        :subText="args.subText"
        :instructionText="args.instructionText"
      />
    </div>
  \`
})`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,d as default};
