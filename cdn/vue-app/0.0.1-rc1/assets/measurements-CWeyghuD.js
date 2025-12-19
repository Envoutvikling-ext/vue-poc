import{l as F,m as h,B as V,n as _,p as $,c as x,a as v,d as g,r as m,q as N,w as u,b as o,g as r,u as a,f as c,j as b,h as S,s as w,i as P,_ as k,k as I,P as C,Q as z}from"./style-DWUxCpUn.js";var B={name:"BaseEditableHolder",extends:F,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(t){this.d_value=t}},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var e;(e=this.$pcForm)!==null&&e!==void 0&&e.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,e){var i,p;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(i=(p=this.formField).onChange)===null||i===void 0||i.call(p,{originalEvent:e,value:t})},findNonEmpty:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.find(h)}},computed:{$filled:function(){return h(this.d_value)},$invalid:function(){var t,e;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,e;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(e=this.$pcForm)===null||e===void 0||(e=e.initialValues)===null||e===void 0?void 0:e[this.$formName])},$formValue:function(){var t,e;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},E={name:"BaseInput",extends:B,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},M=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,T={root:function(t){var e=t.instance,i=t.props;return["p-inputtext p-component",{"p-filled":e.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-inputtext-fluid":e.$fluid}]}},j=V.extend({name:"inputtext",style:M,classes:T}),A={name:"BaseInputText",extends:E,style:j,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function s(n){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(n)}function O(n,t,e){return(t=D(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function D(n){var t=U(n,"string");return s(t)=="symbol"?t:t+""}function U(n,t){if(s(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(s(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var f={name:"InputText",extends:A,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return $(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return _(O({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},H=["value","name","disabled","aria-invalid","data-p"];function Q(n,t,e,i,p,l){return v(),x("input",$({type:"text",class:n.cx("root"),value:n.d_value,name:n.name,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,"data-p":l.dataP,onInput:t[0]||(t[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},l.attrs),null,16,H)}f.render=Q;const q={class:"card flex flex-col items-center gap-4"},K=g({__name:"ManualMeasurements",setup(n){const t=m(null),e=m(null),i=m(null);return(p,l)=>(v(),N(a(b),null,{title:u(()=>[...l[3]||(l[3]=[c("Manual Measurements",-1)])]),subtitle:u(()=>[...l[4]||(l[4]=[c("This could be the new manual measurements!",-1)])]),content:u(()=>[o("div",q,[r(a(f),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=d=>t.value=d),type:"text",size:"small",placeholder:"Small"},null,8,["modelValue"]),r(a(f),{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=d=>e.value=d),type:"text",placeholder:"Normal"},null,8,["modelValue"]),r(a(f),{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=d=>i.value=d),type:"text",size:"large",placeholder:"Large"},null,8,["modelValue"])])]),_:1}))}}),L=["src"],W=g({__name:"App",setup(n){return(t,e)=>(v(),x("main",null,[r(a(b),null,{title:u(()=>[...e[0]||(e[0]=[c("This is the Measurements module",-1)])]),content:u(()=>[e[1]||(e[1]=o("p",null,"Shared component | Hello World component:",-1)),r(S),e[2]||(e[2]=o("p",null,"Measurements Module --> ManualMeasurements component:",-1)),r(K),e[3]||(e[3]=o("p",null,"Some fdfd icons:",-1)),e[4]||(e[4]=o("i",{class:"pi pi-check"},null,-1)),e[5]||(e[5]=o("i",{class:"pi pi-times"},null,-1)),e[6]||(e[6]=o("span",{class:"pi pi-search"},null,-1)),e[7]||(e[7]=o("span",{class:"pi pi-user"},null,-1)),e[8]||(e[8]=o("p",null,"PrimeVue button:",-1)),r(a(w),{icon:"pi pi-search",label:"Søk"}),e[9]||(e[9]=o("p",null,"Image example:",-1)),o("img",{src:a(P),alt:"Example"},null,8,L)]),_:1})]))}}),G=k(W,[["__scopeId","data-v-73bb3548"]]),y=I(G);y.use(C,{theme:{preset:z}});y.mount("#app-measurements");
