import{_ as a}from"./B2IoXdmP.js";import{s as e}from"./DOpzD10v.js";import"./Bp0l9591.js";import"./CP3Eyfab.js";import"./C5iYK7m3.js";import"./D6iWbNBx.js";import"./7_dNtT0Y.js";import"./CS_IUcd5.js";import"./B5-gTChS.js";import"./AlswhQCl.js";import"./DlAUqK2U.js";import"./COS_L-Hs.js";import"./BOSF4D8f.js";const y={title:"Templates/APasswordRecoveryTemplate",component:a},s={render:n=>({components:{APasswordRecoveryTemplate:a},setup(){return e.isUserLoggedIn=!1,e.isRecoveryPage=!0,e.isPasswordResetPage=!1,{args:n,navigateToResetPassword:()=>{e.isUserLoggedIn=!0,e.isRecoveryPage=!1,e.isPasswordResetPage=!0}}},template:'<APasswordRecoveryTemplate v-bind="args" />'})};var r,o,t;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      APasswordRecoveryTemplate
    },
    setup() {
      store.isUserLoggedIn = false;
      store.isRecoveryPage = true;
      store.isPasswordResetPage = false;
      const navigateToResetPassword = () => {
        store.isUserLoggedIn = true;
        store.isRecoveryPage = false;
        store.isPasswordResetPage = true;
      };
      return {
        args,
        navigateToResetPassword
      };
    },
    template: '<APasswordRecoveryTemplate v-bind="args" />'
  })
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const A=["Default"];export{s as Default,A as __namedExportsOrder,y as default};
