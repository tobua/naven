/*! For license information please see main.js.LICENSE.txt */
  grid-column: ${({sidebar:e})=>e?3:2} / 5;
  ${({css:e})=>e}
`,E=({css:e,children:t,sidebar:n=!1})=>g.default.createElement(b,{css:e,sidebar:n},t),h=f(n(67294)),S=f(n(70917)),v=f(n(38573)),y={phone:500,tablet:1e3},T=new Proxy({},{get:(e,t)=>"Phone"===t?`@media (max-width: ${y.phone}px)`:"Tablet"===t?`@media (max-width: ${y.tablet}px)`:"@media screen"}),C={tiny:"5px",small:"10px",medium:"20px",large:"40px"},O=({space:e})=>e||0===e?0===e?null:"string"==typeof e?`margin-bottom: ${e};`:`margin-bottom: ${e}px;`:`margin-bottom: ${C.medium};`,N=e=>e||0===e?0===e?{}:"string"==typeof e?{marginBottom:e}:{marginBottom:`${e}px`}:{marginBottom:C.medium},R=f(n(80047)),A=f(n(50531)),I={highlight:"#2196F3",interact:"#E91E63",white:"#FFF",black:"#000",contrast:"#FFF",warning:"#FF9800",error:"#F44336",Gray:{300:"#E0E0E0",500:"#9E9E9E",700:"#616161"}},w=(e,t)=>{const n=A.default(e);return`rgba(${n.red}, ${n.green}, ${n.blue}, ${t})`},D={Popup:8,Notification:9},x=e=>{e.colors&&(e=>{R.default(I,e)})(e.colors),e.breakpoints&&(e=>{Object.assign(y,e,{clone:!1})})(e.breakpoints),e.space&&(e=>{Object.assign(C,e,{clone:!1})})(e.breakpoints)},k=({root:e})=>S.css`
  ${v.default}

  html {
    font-family: -apple-system, Helvetica, Arial, sans-serif;
  }

  body {
    margin: ${C.small};
  }

  ${e} {
    display: grid;
    row-gap: ${C.medium};
    grid-template-columns:
      auto minmax(0, 250px) 980px minmax(0, 250px)
      auto;

    ${T.Tablet} {
      grid-template-columns: 0 0 1fr 0 0;
    }
  }
`,L=({root:e="#root"})=>h.default.createElement(S.Global,{styles:k({root:e})}),P=f(n(67294)),M=f(n(58509)),F=f(n(70917)),U=f(n(24524)),B={};_(B,{Accordion:()=>se,Alert:()=>at,Anchor:()=>zt,Badge:()=>Be,Button:()=>Ve,Checkbox:()=>K,Code:()=>jt,DatePicker:()=>Ut,Dropdown:()=>J,Heading:()=>ne,Image:()=>st,InlineCode:()=>Ht,Input:()=>Y,Link:()=>$e,List:()=>Tt,Loader:()=>Re,Notification:()=>ge,Paragraph:()=>bt,Popup:()=>ft,Radio:()=>Q,Spacer:()=>G,Tabs:()=>Le,Text:()=>Et,TextLink:()=>qe,Tooltip:()=>kt,addNotification:()=>fe});const G=f(n(24524)).default.hr`
  height: ${({size:e="medium"})=>C[e]};
  border: none;
  margin: 0;
`,Y=f(n(24524)).default.input`
  padding: ${C.small};
  border: 1px solid ${I.black};
  border-radius: ${C.small};

  &:focus {
    border-width: 2px;
    /* Offset shift due to border size change. */
    margin-top: -1px;
    margin-bottom: -1px;
    outline: none;
  }

  ${({css:e})=>e}
`,H=f(n(67294)),j=f(n(24524)),V=()=>(65536*(1+Math.random())|0).toString(16).substring(1),z=j.default.input`
  border: 1px solid ${I.black};
  border-radius: ${C.tiny};
  appearance: none;
  margin: 0;

  &:before {
    content: '';
    display: flex;
    width: ${C.medium};
    height: ${C.medium};
  }

  &:checked {
    background: ${I.black};
  }

  &:focus {
    outline: none;
  }
`,$=j.default.input`
  border: 1px solid ${I.black};
  border-radius: ${C.medium};
  appearance: none;
  margin: 0;

  &:before {
    content: '';
    display: flex;
    width: ${C.medium};
    height: ${C.medium};
  }

  &:checked {
    background: ${I.black};
  }

  &:focus {
    border-width: 2px;
    border-color: ${I.Gray[500]};
    outline: none;

    &:before {
      height: calc(${C.medium} - 2px);
      width: calc(${C.medium} - 2px);
    }
  }
`,q=j.default.div`
  display: flex;
  align-items: center;
  ${({css:e})=>e}

  &:focus {
    outline: none;
    font-weight: bold;

    input {
      border-width: 2px;
      border-color: ${I.Gray[500]};
      outline: none;

      &:before {
        height: calc(${C.medium} - 2px);
        width: calc(${C.medium} - 2px);
      }
    }
  }
`,W=j.default.label`
  margin-left: ${C.small};
  cursor: pointer;
`,K=e=>{var{label:t,id:n=V(),wrapperCss:r=null}=e,a=m(e,["label","id","wrapperCss"]);return H.default.createElement(q,{tabIndex:0,css:r},H.default.createElement(z,d({tabIndex:-1,id:n,type:"checkbox"},a)),H.default.createElement(W,{htmlFor:n},t))},Q=e=>{var{label:t,id:n=V(),wrapperCss:r=null}=e,a=m(e,["label","id","wrapperCss"]);return H.default.createElement(q,{tabIndex:0,css:r},H.default.createElement($,d({tabIndex:-1,id:n,type:"radio"},a)),H.default.createElement(W,{htmlFor:n},t))},Z=f(n(67294)),X=f(n(13178)),J=e=>{var t=m(e,[]);return Z.default.createElement(X.default,d({},t))},ee=f(n(67294)),te=f(n(24524)),ne=f(n(24524)).default.h1`
  font-size: ${({as:e="h1"})=>"h1"===e?"30px":"h2"===e?"24px":"20px"};
  margin-bottom: ${({noSpace:e})=>e?"0":"20px"};
  ${({code:e})=>e?"font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;":""}
`,re=te.default.div`
  display: flex;
  flex-direction: column;
`,ae=te.default.div`
  display: flex;
`,ie=te.default.div`
  display: flex;
`,oe=te.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${C.small};
`,se=({titles:e,headers:t,children:n,initialOpen:r=0})=>{const[a,i]=ee.useState(r);return ee.default.createElement(re,null,n.map(((n,r)=>ee.default.createElement(oe,{key:r},ee.default.createElement(ae,{onClick:()=>i(r)},e&&e.length?ee.default.createElement(ne,{as:"h3",noSpace:!0},e[r]):t[r]),ee.default.createElement(ie,{open:r===a},n)))))},le=f(n(67294)),ce=f(n(24524)),ue=[];let de;const pe=ce.default.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${C.small};
  z-index: ${D.Notification};
  max-width: 50%;
`,me=ce.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,_e=ce.default.div`
  display: flex;
  background-color: white;
  border: 1px solid ${I.highlight};
  margin-top: ${C.small};
  padding: ${C.medium};
  min-width: 30%;
`,fe=({message:e,duration:t=8,type:n})=>{ue.push({message:e,type:n}),de&&de(),setTimeout((()=>{ue.shift(),de&&de()}),1e3*t)},ge=()=>{const[,e]=le.useState(0);return de=le.useCallback((()=>e((e=>e+1))),[]),ue.length?le.default.createElement(pe,null,le.default.createElement(me,null,ue.map(((e,t)=>le.default.createElement(_e,{key:t},e.message))))):null},be=f(n(67294)),Ee=f(n(24524)),he=f(n(67294)),Se=f(n(24524));var ve,ye;(ye=ve||(ve={}))[ye.big=0]="big",ye[ye.small=1]="small";const Te=Se.default.svg`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 2s linear infinite;
  width: ${({size:e})=>0===e?50:25}px;
  height: ${({size:e})=>0===e?50:25}px;
`,Ce=e=>0===e?"M90.258 70.129C82.87 84.876 67.618 95 50 95 25.147 95 5 74.853 5 50S25.147 5 50 5c17.617 0 32.87 10.124 40.258 24.871l4.473-2.237C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-4.473-2.237z":"M85.785 67.892C79.218 81.002 65.66 90 50 90c-22.091 0-40-17.909-40-40s17.909-40 40-40c15.66 0 29.218 8.999 35.785 22.108l8.946-4.474C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-8.946-4.474z",Oe=({size:e=0})=>he.default.createElement(Te,{viewBox:"0 0 100 100",size:e},he.default.createElement("path",{fill:"#000",fillRule:"evenodd",d:Ce(e),clipRule:"evenodd"})),Ne=Ee.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`,Re=({small:e})=>be.default.createElement(Ne,null,be.default.createElement(Oe,{size:e?ve.small:ve.big})),Ae=f(n(67294)),Ie=f(n(24524)),we=Ie.default.div`
  display: flex;
  flex-direction: column;
`,De=Ie.default.div`
  display: flex;
  margin-bottom: ${C.medium};
`,xe=Ie.default.div`
  display: flex;
  cursor: pointer;
  margin-right: ${C.medium};

  :hover,
  :focus {
    color: ${I.interact};
    outline: none;
  }
`,ke=Ie.default.div`
  display: flex;
`,Le=({items:e,initialTab:t=0})=>{const[n,r]=Ae.useState(t),{content:a}=e[n];return Ae.default.createElement(we,null,Ae.default.createElement(De,null,e.map(((e,t)=>Ae.default.createElement(xe,{key:t,tabIndex:0,onKeyUp:e=>"Enter"===e.key&&r(t),onClick:()=>r(t)},e.title)))),Ae.default.createElement(ke,null,a))},Pe=f(n(67294)),Me=f(n(24524)),Fe=Me.default.div`
  position: relative;
  display: inline-flex;
  ${({css:e})=>e}
`,Ue=Me.default.div`
  position: absolute;
  min-width: ${({hasContent:e})=>e?"auto":C.small};
  height: ${({hasContent:e})=>e?C.medium:C.small};
  border-radius: ${C.small};
  background: ${I.highlight};
  right: -${({hasContent:e})=>e?C.small:C.tiny};
  top: -${({hasContent:e})=>e?C.small:C.tiny};
  color: ${I.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({hasContent:e})=>e?C.tiny:0};
  ${({css:e})=>e}
`,Be=({children:e,count:t=null,css:n,cssDot:r})=>Pe.default.createElement(Fe,{css:n},Pe.default.createElement(Ue,{css:r,hasContent:!!t},t),e),Ge=f(n(67294)),Ye=f(n(24524)),He=({highlight:e=!1,interact:t=!1},n)=>w(e?I.highlight:t?I.interact:I.Gray[700],n),je=Ye.default.button`
  padding: ${C.small};
  background-color: ${e=>He(e,.8)};
  border: none;
  outline: none;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  border-radius: ${C.tiny};
  color: ${I.white};
  text-decoration: ${({disabled:e})=>e?"line-through":""};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${e=>He(e,1)};
  }

  ${({css:e})=>e}
`,Ve=e=>{var{highlight:t=!1,interact:n=!1,children:r}=e,a=m(e,["highlight","interact","children"]);return Ge.default.createElement(je,d(d({},{highlight:t,interact:n}),a),r)},ze=f(n(24524)),$e=ze.default.a`
  text-decoration: none;
`,qe=ze.default.a`
  cursor: pointer;
  color: ${I.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${I.interact};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${I.interact};
  }
`,We=f(n(67294)),Ke=f(n(70917)),Qe=f(n(24524)),Ze=f(n(67294)),Xe=f(n(24524)).default.svg`
  ${({css:e})=>e}
`,Je=e=>{var t=m(e,[]);return Ze.default.createElement(Xe,d(d({},t),{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 120 120"}),Ze.default.createElement("g",{stroke:"#000",strokeWidth:"20",clipPath:"url(#clip0)"},Ze.default.createElement("path",{d:"M7.071 6.929L113.137 112.995"}),Ze.default.createElement("path",{d:"M6.929 112.995L112.995 6.929"})),Ze.default.createElement("defs",null,Ze.default.createElement("clipPath",{id:"clip0"},Ze.default.createElement("path",{fill:"#fff",d:"M0 0H120V120H0z"}))))},et=f(n(67294)),tt=()=>et.default.createElement("svg",{width:"200",height:"100",viewBox:"0 0 500 250",fill:"none",xmlns:"http://www.w3.org/2000/svg"},et.default.createElement("path",{d:"M5.18399 97C10.464 95.848 15.216 95.272 19.44 95.272C23.664 95.272 27.168 95.368 29.952 95.56V102.76C32.352 100.744 35.52 99.112 39.456 97.864C43.488 96.52 47.328 95.848 50.976 95.848C60.384 95.848 66.96 98.056 70.704 102.472C74.544 106.888 76.464 114.52 76.464 125.368V153.016C80.208 154.456 82.848 156.088 84.384 157.912L82.944 169H49.824L48.384 157.912C49.728 156.088 52.368 154.456 56.304 153.016V124.504C56.304 119.32 55.44 115.864 53.712 114.136C52.08 112.312 49.104 111.4 44.784 111.4C40.464 111.4 36.144 112.936 31.824 116.008V153.016C35.568 154.456 38.208 156.088 39.744 157.912L38.304 169H5.18399L3.74399 157.912C5.08799 156.088 7.72799 154.456 11.664 153.016V112.984C8.30399 111.832 5.66399 110.2 3.74399 108.088L5.18399 97Z",fill:"black"}),et.default.createElement("path",{d:"M92.2646 107.656C92.2646 106.216 92.3126 104.68 92.4086 103.048C101.337 98.248 110.937 95.848 121.209 95.848C131.481 95.848 138.825 97.816 143.241 101.752C147.753 105.592 150.009 112.024 150.009 121.048V151.72C153.369 152.392 156.009 153.208 157.929 154.168V166.696C153.033 169 146.025 170.152 136.905 170.152C135.945 167.656 135.129 164.632 134.457 161.08C130.329 167.128 122.841 170.152 111.993 170.152C105.561 170.152 100.041 168.28 95.4326 164.536C90.9206 160.792 88.6646 155.704 88.6646 149.272C88.6646 142.84 90.7766 137.8 95.0006 134.152C99.3206 130.408 105.705 128.536 114.153 128.536H129.849V121.624C129.849 114.136 125.865 110.392 117.897 110.392C114.921 110.392 112.473 110.68 110.553 111.256C110.361 115.288 109.785 118.408 108.825 120.616H94.7126C93.0806 117.256 92.2646 112.936 92.2646 107.656ZM118.185 155.464C123.081 155.464 126.969 154.024 129.849 151.144V139.336H119.769C112.857 139.336 109.401 141.976 109.401 147.256C109.401 149.656 110.121 151.624 111.561 153.16C113.097 154.696 115.305 155.464 118.185 155.464Z",fill:"black"}),et.default.createElement("path",{d:"M274.6 239.7H225.1L151.3 64.2C136.3 59.4 126.25 53.55 121.15 46.65L125.65 12H229.15L233.65 46.65C229.75 51.45 223.3 55.8 214.3 59.7L238.6 127.65C244 141.75 247.9 155.7 250.3 169.5L251.2 175.8H257.5C259.9 160.8 264.1 145.05 270.1 128.55L293.95 61.95C282.85 57.75 275.05 52.65 270.55 46.65L275.05 12H374.05L378.55 46.65C373.15 53.55 363.25 59.4 348.85 64.2L274.6 239.7Z",fill:"black"}),et.default.createElement("path",{d:"M383.054 170.152C371.534 170.152 362.846 167.08 356.99 160.936C351.23 154.792 348.35 145.864 348.35 134.152C348.35 127.048 349.358 120.952 351.374 115.864C353.39 110.68 356.126 106.696 359.582 103.912C366.302 98.536 374.126 95.848 383.054 95.848C391.982 95.848 398.798 98.152 403.502 102.76C408.302 107.272 410.702 115.432 410.702 127.24C410.702 134.152 407.294 137.608 400.478 137.608H369.23C369.614 143.656 371.15 147.928 373.838 150.424C376.622 152.92 380.99 154.168 386.942 154.168C390.206 154.168 393.326 153.784 396.302 153.016C399.278 152.248 401.438 151.48 402.782 150.712L404.798 149.56L409.118 161.08C408.542 161.752 407.678 162.616 406.526 163.672C405.47 164.632 402.686 165.976 398.174 167.704C393.758 169.336 388.718 170.152 383.054 170.152ZM392.126 124.792C392.318 123.448 392.414 121.816 392.414 119.896C392.414 117.976 391.646 115.96 390.11 113.848C388.574 111.64 385.886 110.536 382.046 110.536C378.302 110.536 375.422 111.688 373.406 113.992C371.39 116.296 370.046 120.184 369.374 125.656L392.126 124.792Z",fill:"black"}),et.default.createElement("path",{d:"M419.543 97C424.823 95.848 429.575 95.272 433.799 95.272C438.023 95.272 441.527 95.368 444.311 95.56V102.76C446.711 100.744 449.879 99.112 453.815 97.864C457.847 96.52 461.687 95.848 465.335 95.848C474.743 95.848 481.319 98.056 485.063 102.472C488.903 106.888 490.823 114.52 490.823 125.368V153.016C494.567 154.456 497.207 156.088 498.743 157.912L497.303 169H464.183L462.743 157.912C464.087 156.088 466.727 154.456 470.663 153.016V124.504C470.663 119.32 469.799 115.864 468.071 114.136C466.439 112.312 463.463 111.4 459.143 111.4C454.823 111.4 450.503 112.936 446.183 116.008V153.016C449.927 154.456 452.567 156.088 454.103 157.912L452.663 169H419.543L418.103 157.912C419.447 156.088 422.087 154.456 426.023 153.016V112.984C422.663 111.832 420.023 110.2 418.103 108.088L419.543 97Z",fill:"black"})),nt=Qe.default.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${C.small};
  border-radius: ${C.small};
  border: 1px solid
    ${({type:e})=>((e,t)=>"warning"===e?t[1]:"error"===e?t[2]:t[0])(e,[I.Gray[500],I.warning,I.error])};
`,rt=Qe.default.div`
  position: absolute;
  height: 100%;
  display: flex;
  right: ${C.small};
  cursor: pointer;
  width: ${C.small};
  height: ${C.small};
`,at=({type:e="info",closeable:t=!1,children:n})=>{const[r,a]=We.useState(!1);return t&&r?null:We.default.createElement(nt,{type:e},t&&We.default.createElement(rt,{onClick:()=>a(!0)},We.default.createElement(Je,{css:Ke.css`
              flex: 1;
            `})),n)},it=f(n(67294)),ot=f(n(24524)).default.img`
  display: flex;
`,st=({src:e})=>it.default.createElement(ot,{src:e}),lt=f(n(67294)),ct=f(n(24524)),ut=f(n(58509)),dt=ct.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: ${I.white};
  z-index: ${D.Popup};
`,pt=ct.default.div`
  position: relative;
  width: 100%;
`,mt=ct.default.div`
  position: absolute;
  top: ${C.medium};
  right: ${C.medium};
  cursor: pointer;
  width: ${C.medium};
  height: ${C.medium};
`,_t=ct.default.div`
  overflow: auto;
  height: calc(100% - 2 * ${C.medium});
  padding: ${C.medium};
`,ft=({show:e=!0,onClose:t,children:n})=>{const r=lt.useRef();return lt.useEffect((()=>{r.current&&e?ut.disableBodyScroll(r.current):ut.clearAllBodyScrollLocks()}),[e]),lt.default.createElement(lt.default.Fragment,null,e?lt.default.createElement(dt,null,lt.default.createElement(pt,null,lt.default.createElement(mt,{onClick:t},lt.default.createElement(Je,null)),lt.default.createElement(_t,{ref:r},n))):null)},gt=f(n(24524)),bt=gt.default.p`
  display: flex;
  ${O}
`,Et=gt.default.span`
  display: inline-flex;
`,ht=f(n(67294)),St=f(n(24524)),vt=St.default.ul`
  display: flex;
  flex-direction: ${({horizontal:e})=>e?"row":"column"};
  flex-wrap: ${({wrap:e})=>e?"wrap":"inherit"};
  ${({css:e})=>e}
`,yt=St.default.li`
  padding: ${C.small};
  ${({css:e})=>e}
`,Tt=e=>{var{horizontal:t,children:n,elementProps:r}=e,a=m(e,["horizontal","children","elementProps"]);return ht.default.createElement(vt,d({horizontal:t},a),n.map(((e,t)=>ht.default.createElement(yt,d({key:t},r),e))))},Ct=f(n(67294)),Ot=f(n(88764)),Nt=f(n(24524)).default.div`
  display: inline-flex;
`,Rt={marginLeft:10,padding:10,backgroundColor:"white",borderRadius:5,borderWidth:1,borderStyle:"solid",borderColor:"black"},At={position:"absolute",padding:0,display:"flex",alignItems:"center",top:-9,right:-9,cursor:"pointer",background:"white",width:20,height:20,borderRadius:40,border:"1px solid black",boxShadow:"1px 1px 2px gray",outline:"none"},It=e=>({position:"absolute",left:4,display:"flex",height:2,width:10,background:"black",transform:`rotate(${e}deg)`}),wt={position:"absolute",left:-2,bottom:-3,height:12,width:11,background:"white"},Dt={width:10,height:10,marginLeft:5,background:"white",borderLeft:"1px solid black",borderBottom:"1px solid black",transform:"rotate(45deg)"},xt=({children:e,referenceElement:t,open:n,setOpen:r,arrow:a,close:i})=>{const[o,s]=Ct.useState(null),[l,c]=Ct.useState(null),{styles:u,attributes:p}=Ot.usePopper(t,o,{modifiers:[{name:"arrow",options:{element:l}}],placement:"right"});return Ct.default.createElement("div",d({ref:s,style:d(d({},u.popper),{opacity:n?1:0,pointerEvents:n?"inherit":"none",zIndex:1})},p.popper),Ct.default.createElement("div",{style:Rt},e),a&&Ct.default.createElement("div",{ref:c,style:u.arrow},Ct.default.createElement("div",{style:Dt})),i&&Ct.default.createElement("button",{style:At,type:"button",onClick:()=>{r(!1)},onKeyUp:e=>{"Escape"===e.key&&r(!1)}},Ct.default.createElement("span",{style:wt}),Ct.default.createElement("span",{style:It(45)}),Ct.default.createElement("span",{style:It(-45)})))},kt=({content:e,arrow:t=!0,close:n=!1,children:r,css:a})=>{const[i,o]=Ct.useState(null),[s,l]=Ct.useState(!1),[c,u]=Ct.useState(!1);return c&&!s&&l(!0),Ct.default.createElement(Ct.default.Fragment,null,Ct.default.createElement(Nt,{ref:o,role:"button",tabIndex:0,"aria-label":"Open tooltip",onMouseEnter:()=>u(!0),onKeyUp:e=>{"Enter"===e.key&&u(!c)},onClick:()=>u(!c),css:a},r),s&&Ct.default.createElement(xt,{referenceElement:i,arrow:t,close:n,open:c,setOpen:u},e))},Lt=f(n(67294)),Pt=f(n(70917)),Mt=f(n(9198));f(n(44308));class Ft extends Lt.Component{render(){const{value:e,onClick:t}=this.props;return Lt.default.createElement(Y,{value:e,onClick:t,onChange:()=>{}})}}const Ut=({initialDate:e=new Date,styleOverrides:t=""})=>{const[n,r]=Lt.useState(e);return Lt.default.createElement(Lt.default.Fragment,null,Lt.default.createElement(Pt.Global,{styles:Pt.css(t)}),Lt.default.createElement(Mt.default,{selected:n,onChange:e=>r(e),customInput:Lt.default.createElement(Ft,null)}))},Bt=f(n(24524)),Gt=f(n(67294)),Yt=f(n(98714)),Ht=Bt.default.code`
  background-color: ${I.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
`,jt=({space:e,children:t,language:n="typescript"})=>Gt.default.createElement(Yt.default,{language:n,customStyle:d({},N(e))},t),Vt=f(n(67294)),zt=({name:e})=>Vt.default.createElement("a",{id:e}),$t={links:[{name:"HTML",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"CSS",url:"https://sass-lang.com/"},{name:"JavaScript",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}]},qt={rows:[{title:{name:"JSX"},links:[{name:"React",url:"https://reactjs.org"}]},{title:{name:"CSS-in-JS"},links:[{name:"Emotion",url:"https://emotion.sh"}]},{title:{name:"TypeScript"},links:[{name:"TypeScript",url:"https://www.typescriptlang.org"},{name:"Documentation",url:"https://www.typescriptlang.org/docs/home.html"}]},{title:{name:"Components"},links:[{name:"Layout",url:"/layout"},{name:"Elements",url:"/elements"}]}]},Wt={top:[{title:{name:"JSX"},links:[{name:"React",url:"https://reactjs.org"}]},{title:{name:"CSS-in-JS"},links:[{name:"Emotion",url:"https://emotion.sh"}]},{title:{name:"TypeScript"},links:[{name:"TypeScript",url:"https://www.typescriptlang.org"},{name:"Documentation",url:"https://www.typescriptlang.org/docs/home.html"}]},{title:{name:"Components"},links:[{name:"Layout",url:"/layout"},{name:"Elements",url:"/elements"}]}]},Kt=U.default.nav`
  grid-column: 2 / 5;
  position: relative;

  ${T.Phone} {
    flex-direction: column;
    overflow: auto;
    display: ${({showNavigation:e})=>e?"flex":"none"};
    ${({showNavigation:e})=>e?`height: calc(100vh - ${C.medium} - 2 * ${C.small});`:""}
  }
`,Qt=U.default.aside`
  grid-column: 2 / 3;
`,Zt=F.css`
  ${T.Phone} {
    flex: 1;
    flex-direction: column;
  }
`,Xt=F.css`
  padding: 0;
  margin-right: ${C.small};

  ${T.Phone} {
    margin-bottom: ${C.medium};
  }
`,Jt=U.default.div`
  height: ${({isOpen:e})=>e?"auto":0};
  background: #fff;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  ${T.Phone} {
    position: relative;
    height: auto;
    top: inherit;
    margin-top: ${C.medium};
  }
`,en=U.default.div`
  display: flex;
  flex-direction: column;
  padding: ${C.medium} 0;

  ${T.Phone} {
    padding: 0;
  }
`,tn=U.default.div`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;

    & > a {
      color: ${I.interact};
    }
  }
`,nn=({children:e})=>{const[t,n]=P.useState(!1);return P.default.createElement(tn,{tabIndex:0,onMouseEnter:()=>n(!0),onFocus:()=>n(!0),onMouseLeave:()=>n(!1),onBlur:()=>n(!1)},e[0],e[1].props.children&&P.default.createElement(Jt,{isOpen:t},P.default.createElement(en,null,e[1])))},rn=()=>P.default.createElement(Qt,null,P.default.createElement("nav",null,"Sidebar"));let an=null;const on=({data:e=Wt})=>{const t=P.useRef(),[n,r]=P.useState(!1);return an=r,P.useEffect((()=>{t.current&&n?M.disableBodyScroll(t.current):M.clearAllBodyScrollLocks()}),[n]),P.default.createElement(Kt,{ref:t,showNavigation:n},P.default.createElement(Tt,{css:Zt,elementProps:{css:Xt},horizontal:!0},e.top.map((e=>P.default.createElement(nn,{key:e.title.name},P.default.createElement(qe,{href:e.title.url},e.title.name),P.default.createElement(P.default.Fragment,null,e.links&&e.links.length&&e.links.map((e=>P.default.createElement(qe,{key:e.name,href:e.url},e.name)))))))))},sn=f(n(67294)),ln=f(n(24524)),cn=ln.default.footer(`\n  padding: 0 ${C.small};\n  grid-column: 3 / 4;\n\n  display: flex;\n  flex-wrap: wrap;\n`,(e=>e.css)),un=ln.default.div("\n  flex-basis: 25%;\n",(e=>e.css)),dn=({data:e=qt,wrapperStyle:t,rowStyle:n,children:r})=>r?sn.default.createElement(cn,{css:t},r):sn.default.createElement(cn,{css:t},e.rows.map(((e,t)=>sn.default.createElement(un,{key:t,css:n},sn.default.createElement(qe,{href:e.title.url},e.title.name),sn.default.createElement(Tt,null,e.links.map(((e,t)=>sn.default.createElement(qe,{key:t,href:e.url},e.name)))))))),pn=f(n(67294)),mn=f(n(70917)),_n=f(n(24524)),fn=f(n(67294)),gn=f(n(24524)).default.svg`
  ${({css:e})=>e}
`,bn=e=>{var t=m(e,[]);return fn.default.createElement(gn,d(d({},t),{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 120 120"}),fn.default.createElement("g",{stroke:"#000",strokeWidth:"20",clipPath:"url(#clip0)"},fn.default.createElement("path",{d:"M0 10L120 10"}),fn.default.createElement("path",{d:"M40 110L120 110"}),fn.default.createElement("path",{d:"M20 60L120 60"})),fn.default.createElement("defs",null,fn.default.createElement("clipPath",{id:"clip0"},fn.default.createElement("path",{fill:"#fff",d:"M0 0H120V120H0z"}))))},En=_n.default.header`
  grid-column: 2 / 5;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
`,hn=_n.default.img`
  color: blue;
  max-height: 100%;
`,Sn=_n.default.nav`
  color: black;
  grid-column: 2 / 3;
  justify-self: end;
`,vn=_n.default.p`
  font-size: ${C.medium};
  font-weight: bold;
  align-self: center;
`,yn=_n.default($e)`
  justify-self: start;
  display: flex;
  height: ${C.large};
`,Tn=_n.default.div`
  display: flex;
`,Cn=()=>{const[e,t]=pn.useState(!1),n=()=>{t(!e),(e=>{an(e)})(!e)},r=mn.css`
    cursor: pointer;
    width: ${C.medium};
    height: ${C.medium};
    display: none;

    ${T.Phone} {
      display: flex;
    }
  `;return pn.default.createElement(Tn,null,e?pn.default.createElement(Je,{onClick:n,css:r}):pn.default.createElement(bn,{onClick:n,css:r}))},On=({logo:e=null,title:t,link:n,children:r})=>{let a=pn.default.createElement(tt,null);return e||r?(e&&(a=pn.default.createElement(hn,{src:e})),r&&(a=r),pn.default.createElement(yn,{href:n},a)):pn.default.createElement(vn,null,t)},Nn=({data:e=$t,logo:t=null,title:n="naven",link:r="/",children:a})=>pn.default.createElement(En,null,pn.default.createElement(On,{logo:t,title:n,link:r},a),pn.default.createElement(Sn,null,pn.default.createElement(Cn,null),pn.default.createElement(Tt,{css:mn.css`
          ${T.Phone} {
            display: none;
          }
        `,horizontal:!0},e.links.map((e=>pn.default.createElement(qe,{key:e.url,href:e.url},e.name)))))),Rn=f(n(24524)),An=Rn.default.div`
  display: flex;
  overflow: auto;
`,In=Rn.default.div`
  display: flex;
  flex-direction: column;
`,wn=Rn.default.div`
  display: flex;
`,Dn=Rn.default.div`
  grid-column: 3;
  ${({css:e})=>e}
`,xn=Rn.default.div`
  grid-column: 1 / 6;
  ${({css:e})=>e}
//# sourceMappingURL=main.js.map