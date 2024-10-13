import{r as o}from"./Bp0l9591.js";import{_ as m}from"./Dq7sfnNU.js";import{s as d}from"./DOpzD10v.js";import"./CP3Eyfab.js";import"./C5iYK7m3.js";import"./D6iWbNBx.js";import"./Big1ZEaW.js";import"./B5-gTChS.js";import"./QQHtzclr.js";import"./AlswhQCl.js";import"./DlAUqK2U.js";const _={title:"Templates/APasswordResetTemplate",component:m},s={render:p=>({components:{APasswordResetTemplate:m},setup(){const e=o(""),r=o("");return{args:p,password:e,confirmPassword:r,resetPassword:()=>{d.resetPassword(e.value,r.value)}}},template:'<APasswordResetTemplate v-bind="args" />'})};var t,a,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      APasswordResetTemplate
    },
    setup() {
      const password = ref('');
      const confirmPassword = ref('');
      const resetPassword = () => {
        store.resetPassword(password.value, confirmPassword.value);
      };
      return {
        args,
        password,
        confirmPassword,
        resetPassword
      };
    },
    template: '<APasswordResetTemplate v-bind="args" />'
  })
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["Default"];export{s as Default,b as __namedExportsOrder,_ as default};
