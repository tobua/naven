/*! For license information please see main.js.LICENSE.txt */
  grid-column: ${({sidebar:e})=>e?3:2} / 5;
  ${({css:e})=>e}
`,E=({css:e,children:t,sidebar:n=!1})=>g.default.createElement(b,{css:e,sidebar:n},t),h=f(n(67294)),S=f(n(70917)),v=f(n(38573)),y={phone:500,tablet:1e3},T=new Proxy({},{get:(e,t)=>"Phone"===t?`@media (max-width: ${y.phone}px)`:"Tablet"===t?`@media (max-width: ${y.tablet}px)`:"@media screen"}),C={tiny:"5px",small:"10px",medium:"20px",large:"40px"},O=({space:e=C.medium})=>e||0===e?0===e?null:"string"==typeof e?`margin-bottom: ${e};`:`margin-bottom: ${e}px;`:`margin-bottom: ${C.medium};`,N=e=>e||0===e?0===e?{}:"string"==typeof e?{marginBottom:e}:{marginBottom:`${e}px`}:{marginBottom:C.medium},R=f(n(80047)),A=f(n(50531)),I={highlight:"#2196F3",interact:"#E91E63",white:"#FFF",black:"#000",contrast:"#FFF",warning:"#FF9800",error:"#F44336",Gray:{300:"#E0E0E0",500:"#9E9E9E",700:"#616161"}},w=(e,t)=>{let n=A.default(e);return`rgba(${n.red}, ${n.green}, ${n.blue}, ${t})`},D=f(n(80047)),x=e=>"number"==typeof e?`${e}px`:e,k={corner:0},L=()=>k.corner?`border-radius: ${k.corner}px;`:"",P=()=>k.corner?{borderRadius:x(k.corner)}:{},M=f(n(80047)),F={Content:1,Navigation:7,Popup:8,Notification:9},U=e=>{e.colors&&(e=>{R.default(I,e)})(e.colors),e.breakpoints&&(e=>{Object.assign(y,e,{clone:!1})})(e.breakpoints),e.space&&(e=>{Object.assign(C,e,{clone:!1})})(e.breakpoints),e.look&&(e=>{D.default(k,e)})(e.look),e.layer&&(e=>{M.default(F,e)})(e.layer)},B=({root:e})=>S.css`
  ${v.default}

  body {
    margin: ${C.small};
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    line-height: 1.2;
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
`,G=({root:e="#root"})=>h.default.createElement(S.Global,{styles:B({root:e})}),Y=f(n(67294)),j=f(n(58509)),H=f(n(70917)),V=f(n(24524)),$={};_($,{Accordion:()=>we,Alert:()=>ft,Anchor:()=>Qt,Badge:()=>Qe,Button:()=>tt,Checkbox:()=>re,Code:()=>Wt,DatePicker:()=>$t,Dropdown:()=>ye,Heading:()=>Oe,Image:()=>Et,InlineCode:()=>qt,Input:()=>K,Lazy:()=>Se,Link:()=>rt,List:()=>Dt,Loader:()=>ge,Notification:()=>Ue,Paragraph:()=>Ee,Popup:()=>Nt,Radio:()=>ae,Spacer:()=>W,Table:()=>en,Tabs:()=>$e,Text:()=>he,TextLink:()=>at,Tooltip:()=>Gt,addNotification:()=>Fe});var z,q,W=f(n(24524)).default.hr`
  height: ${({size:e="medium"})=>C[e]};
  border: none;
  margin: 0;
`,K=f(n(24524)).default.input`
  padding: ${C.small};
  border: 1px solid ${I.black};
  ${()=>L()}
  ${O}

  &:focus {
    border-width: 2px;
    /* Offset shift due to border size change. */
    margin-top: -1px;
    margin-bottom: -1px;
    outline: none;
  }

  ${({css:e})=>e}
`,Q=f(n(67294)),Z=f(n(24524)),X=()=>(65536*(1+Math.random())|0).toString(16).substring(1),J=Z.default.input`
  border: 1px solid ${I.black};
  ${()=>L()}
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

  ${({css:e})=>e}
`,ee=Z.default.input`
  border: 1px solid ${I.black};
  border-radius: 100%;
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

  ${({css:e})=>e}
`,te=Z.default.div`
  display: flex;
  align-items: center;
  ${({css:e})=>e}
  ${O}

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
`,ne=Z.default.label`
  margin-left: ${C.small};
  cursor: pointer;
`,re=e=>{var{label:t,id:n=X(),wrapperCss:r,space:a}=e,i=m(e,["label","id","wrapperCss","space"]);return Q.default.createElement(te,{tabIndex:0,css:r,space:a},Q.default.createElement(J,d({tabIndex:-1,id:n,type:"checkbox"},i)),Q.default.createElement(ne,{htmlFor:n},t))},ae=e=>{var{label:t,id:n=X(),wrapperCss:r,space:a}=e,i=m(e,["label","id","wrapperCss","space"]);return Q.default.createElement(te,{tabIndex:0,css:r,space:a},Q.default.createElement(ee,d({tabIndex:-1,id:n,type:"radio"},i)),Q.default.createElement(ne,{htmlFor:n},t))},ie=f(n(67294)),oe=f(n(67294)),se=f(n(67294)),le=f(n(24524)),ce=f(n(67294)),ue=f(n(24524));(q=z||(z={}))[q.big=0]="big",q[q.small=1]="small";var de,pe=ue.default.svg`
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
`,me=e=>0===e?"M90.258 70.129C82.87 84.876 67.618 95 50 95 25.147 95 5 74.853 5 50S25.147 5 50 5c17.617 0 32.87 10.124 40.258 24.871l4.473-2.237C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-4.473-2.237z":"M85.785 67.892C79.218 81.002 65.66 90 50 90c-22.091 0-40-17.909-40-40s17.909-40 40-40c15.66 0 29.218 8.999 35.785 22.108l8.946-4.474C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-8.946-4.474z",_e=({size:e=0})=>ce.default.createElement(pe,{viewBox:"0 0 100 100",size:e},ce.default.createElement("path",{fill:"#000",fillRule:"evenodd",d:me(e),clipRule:"evenodd"})),fe=le.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`,ge=({small:e})=>se.default.createElement(fe,null,se.default.createElement(_e,{size:e?z.small:z.big})),be=f(n(24524)),Ee=be.default.p`
  display: block;
  ${O}
`,he=be.default.span`
  display: inline;
  ${({bold:e})=>e?"font-weight: bold":null}
`,Se=({imports:e,result:t})=>{let[n,r]=oe.useState(null);return oe.useEffect((()=>{e.then((e=>{r(e)})).catch((()=>r("error")))})),n?"error"===n?oe.default.createElement(Ee,null,"Error loading component."):Array.isArray(n)?t(...n):t(n):oe.default.createElement(ge,null)},ve={indicatorSeparator:e=>d(d({},e),{display:"none"})},ye=e=>{var t=m(e,[]);return ie.default.createElement(Se,{imports:Promise.resolve().then((()=>f(n(13178)))),result:e=>{let n=e.default;return ie.default.createElement(n,d(d({},t),{styles:d(d({},ve),t.styles),theme:{borderRadius:k.corner,colors:{primary:I.highlight}}}))}})},Te=f(n(67294)),Ce=f(n(24524)),Oe=f(n(24524)).default.h1`
  font-size: ${({as:e="h1"})=>"h1"===e?"30px":"h2"===e?"24px":"20px"};
  margin-bottom: ${({noSpace:e})=>e?"0":"20px"};
  ${({code:e})=>e?"font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;":""}
`,Ne=Ce.default.div`
  display: flex;
  flex-direction: column;
  ${({css:e})=>e}
`,Re=Ce.default.div`
  display: flex;
  cursor: pointer;
`,Ae=Ce.default.div`
  display: ${({open:e})=>e?"flex":"none"};
`,Ie=Ce.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${C.small};
`,we=({headers:e,children:t,css:n,initialOpen:r=0})=>{let[a,i]=Te.useState(r);return Te.default.createElement(Ne,{css:n},t.map(((t,n)=>{let r=e[n];return"string"==typeof r&&(r=Te.default.createElement(Oe,{as:"h3",noSpace:!0},r)),Te.default.createElement(Ie,{key:n},Te.default.createElement(Re,{onClick:()=>i(n)},r),Te.default.createElement(Ae,{open:n===a},t))})))},De=f(n(67294)),xe=f(n(24524)),ke=[],Le=xe.default.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${C.small};
  z-index: ${F.Notification};
  max-width: 50%;
`,Pe=xe.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Me=xe.default.div`
  display: flex;
  background-color: white;
  border: 1px solid ${I.highlight};
  margin-top: ${C.small};
  padding: ${C.medium};
  min-width: 30%;
`,Fe=({message:e,duration:t=8,type:n})=>{ke.push({message:e,type:n}),de&&de(),setTimeout((()=>{ke.shift(),de&&de()}),1e3*t)},Ue=()=>{let[,e]=De.useState(0);return de=De.useCallback((()=>e((e=>e+1))),[]),ke.length?De.default.createElement(Le,null,De.default.createElement(Pe,null,ke.map(((e,t)=>De.default.createElement(Me,{key:t},e.message))))):null},Be=f(n(67294)),Ge=f(n(24524)),Ye=Ge.default.div`
  display: flex;
  flex-direction: column;
  ${O}
  ${({css:e})=>e}
`,je=Ge.default.div`
  display: flex;
  margin-bottom: ${C.medium};
`,He=Ge.default.div`
  display: flex;
  cursor: pointer;
  margin-right: ${C.medium};

  :hover,
  :focus {
    color: ${I.interact};
    outline: none;
  }
`,Ve=Ge.default.div`
  display: flex;
`,$e=({items:e,initialTab:t=0,css:n,space:r})=>{let[a,i]=Be.useState(t),{content:o}=e[a];return Be.default.createElement(Ye,{css:n,space:r},Be.default.createElement(je,null,e.map(((e,t)=>Be.default.createElement(He,{key:t,tabIndex:0,onKeyUp:e=>"Enter"===e.key&&i(t),onClick:()=>i(t)},e.title)))),Be.default.createElement(Ve,null,o))},ze=f(n(67294)),qe=f(n(24524)),We=qe.default.div`
  position: relative;
  display: inline-flex;
  ${({css:e})=>e}
`,Ke=qe.default.div`
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
`,Qe=({children:e,count:t=null,css:n,cssDot:r})=>ze.default.createElement(We,{css:n},ze.default.createElement(Ke,{css:r,hasContent:!!t},t),e),Ze=f(n(67294)),Xe=f(n(24524)),Je=({highlight:e=!1,interact:t=!1},n)=>w(e?I.highlight:t?I.interact:I.Gray[700],n),et=Xe.default.button`
  padding: ${C.small};
  background-color: ${e=>Je(e,.8)};
  border: none;
  outline: none;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  ${()=>L()}
  color: ${I.white};
  text-decoration: ${({disabled:e})=>e?"line-through":""};
  ${O}

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${e=>Je(e,1)};
  }

  ${({css:e})=>e}
`,tt=e=>{var{highlight:t=!1,interact:n=!1,children:r}=e,a=m(e,["highlight","interact","children"]);return Ze.default.createElement(et,d(d({},{highlight:t,interact:n}),a),r)},nt=f(n(24524)),rt=nt.default.a`
  text-decoration: none;

  ${({css:e})=>e}
`,at=nt.default.a`
  cursor: pointer;
  color: ${I.black};
  text-decoration: none;
  ${({bold:e})=>e?"font-weight: bold;":""}

  &:hover {
    text-decoration: underline;
    color: ${I.interact};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${I.interact};
  }

  ${({css:e})=>e}
`,it=f(n(67294)),ot=f(n(70917)),st=f(n(24524)),lt=f(n(67294)),ct=f(n(24524)).default.svg`
  ${({css:e})=>e}
`,ut=e=>{var t=m(e,[]);return lt.default.createElement(ct,d(d({},t),{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 120 120"}),lt.default.createElement("g",{stroke:"#000",strokeWidth:"20",clipPath:"url(#clip0)"},lt.default.createElement("path",{d:"M7.071 6.929L113.137 112.995"}),lt.default.createElement("path",{d:"M6.929 112.995L112.995 6.929"})),lt.default.createElement("defs",null,lt.default.createElement("clipPath",{id:"clip0"},lt.default.createElement("path",{fill:"#fff",d:"M0 0H120V120H0z"}))))},dt=f(n(67294)),pt=()=>dt.default.createElement("svg",{width:"200",height:"100",viewBox:"0 0 500 250",fill:"none",xmlns:"http://www.w3.org/2000/svg"},dt.default.createElement("path",{d:"M5.18399 97C10.464 95.848 15.216 95.272 19.44 95.272C23.664 95.272 27.168 95.368 29.952 95.56V102.76C32.352 100.744 35.52 99.112 39.456 97.864C43.488 96.52 47.328 95.848 50.976 95.848C60.384 95.848 66.96 98.056 70.704 102.472C74.544 106.888 76.464 114.52 76.464 125.368V153.016C80.208 154.456 82.848 156.088 84.384 157.912L82.944 169H49.824L48.384 157.912C49.728 156.088 52.368 154.456 56.304 153.016V124.504C56.304 119.32 55.44 115.864 53.712 114.136C52.08 112.312 49.104 111.4 44.784 111.4C40.464 111.4 36.144 112.936 31.824 116.008V153.016C35.568 154.456 38.208 156.088 39.744 157.912L38.304 169H5.18399L3.74399 157.912C5.08799 156.088 7.72799 154.456 11.664 153.016V112.984C8.30399 111.832 5.66399 110.2 3.74399 108.088L5.18399 97Z",fill:"black"}),dt.default.createElement("path",{d:"M92.2646 107.656C92.2646 106.216 92.3126 104.68 92.4086 103.048C101.337 98.248 110.937 95.848 121.209 95.848C131.481 95.848 138.825 97.816 143.241 101.752C147.753 105.592 150.009 112.024 150.009 121.048V151.72C153.369 152.392 156.009 153.208 157.929 154.168V166.696C153.033 169 146.025 170.152 136.905 170.152C135.945 167.656 135.129 164.632 134.457 161.08C130.329 167.128 122.841 170.152 111.993 170.152C105.561 170.152 100.041 168.28 95.4326 164.536C90.9206 160.792 88.6646 155.704 88.6646 149.272C88.6646 142.84 90.7766 137.8 95.0006 134.152C99.3206 130.408 105.705 128.536 114.153 128.536H129.849V121.624C129.849 114.136 125.865 110.392 117.897 110.392C114.921 110.392 112.473 110.68 110.553 111.256C110.361 115.288 109.785 118.408 108.825 120.616H94.7126C93.0806 117.256 92.2646 112.936 92.2646 107.656ZM118.185 155.464C123.081 155.464 126.969 154.024 129.849 151.144V139.336H119.769C112.857 139.336 109.401 141.976 109.401 147.256C109.401 149.656 110.121 151.624 111.561 153.16C113.097 154.696 115.305 155.464 118.185 155.464Z",fill:"black"}),dt.default.createElement("path",{d:"M274.6 239.7H225.1L151.3 64.2C136.3 59.4 126.25 53.55 121.15 46.65L125.65 12H229.15L233.65 46.65C229.75 51.45 223.3 55.8 214.3 59.7L238.6 127.65C244 141.75 247.9 155.7 250.3 169.5L251.2 175.8H257.5C259.9 160.8 264.1 145.05 270.1 128.55L293.95 61.95C282.85 57.75 275.05 52.65 270.55 46.65L275.05 12H374.05L378.55 46.65C373.15 53.55 363.25 59.4 348.85 64.2L274.6 239.7Z",fill:"black"}),dt.default.createElement("path",{d:"M383.054 170.152C371.534 170.152 362.846 167.08 356.99 160.936C351.23 154.792 348.35 145.864 348.35 134.152C348.35 127.048 349.358 120.952 351.374 115.864C353.39 110.68 356.126 106.696 359.582 103.912C366.302 98.536 374.126 95.848 383.054 95.848C391.982 95.848 398.798 98.152 403.502 102.76C408.302 107.272 410.702 115.432 410.702 127.24C410.702 134.152 407.294 137.608 400.478 137.608H369.23C369.614 143.656 371.15 147.928 373.838 150.424C376.622 152.92 380.99 154.168 386.942 154.168C390.206 154.168 393.326 153.784 396.302 153.016C399.278 152.248 401.438 151.48 402.782 150.712L404.798 149.56L409.118 161.08C408.542 161.752 407.678 162.616 406.526 163.672C405.47 164.632 402.686 165.976 398.174 167.704C393.758 169.336 388.718 170.152 383.054 170.152ZM392.126 124.792C392.318 123.448 392.414 121.816 392.414 119.896C392.414 117.976 391.646 115.96 390.11 113.848C388.574 111.64 385.886 110.536 382.046 110.536C378.302 110.536 375.422 111.688 373.406 113.992C371.39 116.296 370.046 120.184 369.374 125.656L392.126 124.792Z",fill:"black"}),dt.default.createElement("path",{d:"M419.543 97C424.823 95.848 429.575 95.272 433.799 95.272C438.023 95.272 441.527 95.368 444.311 95.56V102.76C446.711 100.744 449.879 99.112 453.815 97.864C457.847 96.52 461.687 95.848 465.335 95.848C474.743 95.848 481.319 98.056 485.063 102.472C488.903 106.888 490.823 114.52 490.823 125.368V153.016C494.567 154.456 497.207 156.088 498.743 157.912L497.303 169H464.183L462.743 157.912C464.087 156.088 466.727 154.456 470.663 153.016V124.504C470.663 119.32 469.799 115.864 468.071 114.136C466.439 112.312 463.463 111.4 459.143 111.4C454.823 111.4 450.503 112.936 446.183 116.008V153.016C449.927 154.456 452.567 156.088 454.103 157.912L452.663 169H419.543L418.103 157.912C419.447 156.088 422.087 154.456 426.023 153.016V112.984C422.663 111.832 420.023 110.2 418.103 108.088L419.543 97Z",fill:"black"})),mt=st.default.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${C.small};
  ${()=>L()}
  ${O}
  ${({css:e})=>e}
  border: 1px solid
    ${({type:e})=>((e,t)=>"warning"===e?t[1]:"error"===e?t[2]:t[0])(e,[I.Gray[500],I.warning,I.error])};
`,_t=st.default.div`
  position: absolute;
  height: 100%;
  display: flex;
  right: ${C.small};
  cursor: pointer;
  width: ${C.small};
  height: ${C.small};
`,ft=({type:e="info",closeable:t=!1,space:n,css:r,children:a})=>{let[i,o]=it.useState(!1);return t&&i?null:it.default.createElement(mt,{css:r,space:n,type:e},t&&it.default.createElement(_t,{onClick:()=>o(!0)},it.default.createElement(ut,{css:ot.css`
              flex: 1;
            `})),it.default.createElement(Ee,{space:0},a))},gt=f(n(67294)),bt=f(n(24524)).default.img`
  display: flex;
`,Et=({src:e})=>gt.default.createElement(bt,{src:e}),ht=f(n(67294)),St=f(n(24524)),vt=f(n(58509)),yt=St.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: ${I.white};
  z-index: ${F.Popup};
  ${({css:e})=>e}
`,Tt=St.default.div`
  position: relative;
  width: 100%;
  ${({css:e})=>e}
`,Ct=St.default.div`
  position: absolute;
  top: ${C.medium};
  right: ${C.medium};
  cursor: pointer;
  width: ${C.medium};
  height: ${C.medium};
  ${({css:e})=>e}
`,Ot=St.default.div`
  overflow: auto;
  height: calc(100% - 2 * ${C.medium});
  padding: ${C.medium};
  ${({css:e})=>e}
`,Nt=({show:e=!0,onClose:t,css:n,contentCss:r,scrollContainerCss:a,closeContainerCss:i,closeCss:o,close:s,children:l})=>{let c=ht.useRef();return ht.useEffect((()=>{c.current&&e?vt.disableBodyScroll(c.current):vt.clearAllBodyScrollLocks()}),[e]),ht.default.createElement(ht.default.Fragment,null,e?ht.default.createElement(yt,{css:n},ht.default.createElement(Tt,{css:r},ht.default.createElement(Ct,{css:i,onClick:t},s||ht.default.createElement(ut,{css:o})),ht.default.createElement(Ot,{css:a,ref:c},l))):null)},Rt=f(n(67294)),At=f(n(24524)),It=At.default.ul`
  display: flex;
  flex-direction: ${({horizontal:e})=>e?"row":"column"};
  flex-wrap: ${({wrap:e})=>e?"wrap":"inherit"};
  row-gap: ${({gap:e})=>x(e)};
  column-gap: ${({gap:e})=>x(e)};

  ${O}
  ${({css:e})=>e}
`,wt=At.default.li`
  ${({css:e})=>e}
`,Dt=e=>{var{horizontal:t,children:n,elementProps:r,gap:a=C.small}=e,i=m(e,["horizontal","children","elementProps","gap"]);return Rt.default.createElement(It,d({horizontal:t,gap:a},i),n.map(((e,t)=>Rt.default.createElement(wt,d({key:t},r),e))))},xt=f(n(67294)),kt=f(n(24524)).default.div`
  display: inline-flex;
`,Lt={marginLeft:10,padding:10,backgroundColor:"white",borderRadius:5,borderWidth:1,borderStyle:"solid",borderColor:"black"},Pt={position:"absolute",padding:0,display:"flex",alignItems:"center",top:-9,right:-9,cursor:"pointer",background:"white",width:20,height:20,borderRadius:40,border:"1px solid black",boxShadow:"1px 1px 2px gray",outline:"none"},Mt=e=>({position:"absolute",left:4,display:"flex",height:2,width:10,background:"black",transform:`rotate(${e}deg)`}),Ft={position:"absolute",left:-2,bottom:-3,height:12,width:11,background:"white"},Ut={width:10,height:10,marginLeft:5,background:"white",borderLeft:"1px solid black",borderBottom:"1px solid black",transform:"rotate(45deg)"},Bt=({children:e,referenceElement:t,open:n,setOpen:r,arrow:a,close:i,usePopper:o})=>{let[s,l]=xt.useState(null),[c,u]=xt.useState(null),{styles:p,attributes:m}=o(t,s,{modifiers:[{name:"arrow",options:{element:c}}],placement:"right"});return xt.default.createElement("div",d({ref:l,style:d(d({},p.popper),{opacity:n?1:0,pointerEvents:n?"inherit":"none",zIndex:1})},m.popper),xt.default.createElement("div",{style:Lt},e),a&&xt.default.createElement("div",{ref:u,style:p.arrow},xt.default.createElement("div",{style:Ut})),i&&xt.default.createElement("button",{style:Pt,type:"button",onClick:()=>{r(!1)},onKeyUp:e=>{"Escape"===e.key&&r(!1)}},xt.default.createElement("span",{style:Ft}),xt.default.createElement("span",{style:Mt(45)}),xt.default.createElement("span",{style:Mt(-45)})))},Gt=({content:e,arrow:t=!0,close:r=!1,children:a,css:i})=>{let[o,s]=xt.useState(null),[l,c]=xt.useState(!1),[u,d]=xt.useState(!1);return xt.default.createElement(Se,{imports:Promise.resolve().then((()=>f(n(88764)))),result:({usePopper:n})=>(u&&!l&&c(!0),xt.default.createElement(xt.default.Fragment,null,xt.default.createElement(kt,{ref:s,role:"button",tabIndex:0,"aria-label":"Open tooltip",onMouseEnter:()=>d(!0),onKeyUp:e=>{"Enter"===e.key&&d(!u)},onClick:()=>d(!u),css:i},a),l&&xt.default.createElement(Bt,{referenceElement:o,arrow:t,close:r,open:u,setOpen:d,usePopper:n},e)))})},Yt=f(n(67294)),jt=f(n(70917)),Ht=f(n(24524)).default.div`
  ${O}
  ${({css:e})=>e}
`,Vt=class extends Yt.Component{render(){let{value:e,onClick:t}=this.props;return Yt.default.createElement(K,{value:e,onClick:t,onChange:()=>{}})}},$t=({css:e,initialDate:t=new Date,styleOverrides:r="",space:a})=>{let[i,o]=Yt.useState(t);return Yt.default.createElement(Se,{imports:Promise.all([Promise.resolve().then((()=>f(n(9198)))),Promise.resolve().then((()=>f(n(57739))))]),result:t=>{let n=t.default;return Yt.default.createElement(Ht,{space:a,css:e},Yt.default.createElement(jt.Global,{styles:jt.css(r)}),Yt.default.createElement(n,{style:{marginBottom:20},selected:i,onChange:e=>o(e),customInput:Yt.default.createElement(Vt,null)}))}})},zt=f(n(67294)),qt=f(n(24524)).default.code`
  background-color: ${I.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
`,Wt=e=>{var{space:t,children:r,jsx:a=!1,language:i="typescript",style:o}=e,s=m(e,["space","children","jsx","language","style"]);return zt.default.createElement(Se,{imports:Promise.all([Promise.resolve().then((()=>f(n(40756)))),Promise.resolve().then((()=>f(n(46054)))),Promise.resolve().then((()=>f(n(74346))))]),result:(e,n,l)=>{let c=a?e.Prism:e.default,u=a?l.default:n.default;return zt.default.createElement(c,d({language:i,style:null!=o?o:u,customStyle:d(d(d({},N(t)),P()),{fontFamily:"monospace, monospace"})},s),r)}})},Kt=f(n(67294)),Qt=({name:e})=>Kt.default.createElement("a",{id:e}),Zt=f(n(67294)),Xt=f(n(24524)).default.div`
  display: grid;
  grid-gap: ${C.small};
  grid-template-columns: repeat(${({columns:e})=>e}, 1fr);
  background: ${I.Gray[300]};
  ${()=>L()}
  padding: ${C.small};

  /* First row */
  > *:nth-of-type(-n + ${({columns:e})=>e}) {
    font-weight: bold;
  }

  ${O}
  ${({css:e})=>e}
`,Jt=e=>Math.max(...e.filter(Boolean).map((e=>{var t,n;return null==(n=null==(t=null==e?void 0:e.props)?void 0:t.children)?void 0:n.length}))),en=({children:e,css:t,space:n})=>Zt.default.createElement(Xt,{css:t,space:n,columns:Jt(e)},e),tn={links:[{name:"HTML",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"CSS",url:"https://sass-lang.com/"},{name:"JavaScript",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}]},nn={rows:[{title:{name:"JSX"},links:[{name:"React",url:"https://reactjs.org"}]},{title:{name:"CSS-in-JS"},links:[{name:"Emotion",url:"https://emotion.sh"}]},{title:{name:"TypeScript"},links:[{name:"TypeScript",url:"https://www.typescriptlang.org"},{name:"Documentation",url:"https://www.typescriptlang.org/docs/home.html"}]},{title:{name:"Components"},links:[{name:"Layout",url:"/layout"},{name:"Elements",url:"/elements"}]}]},rn={top:[{title:{name:"JSX"},links:[{name:"React",url:"https://reactjs.org"}]},{title:{name:"CSS-in-JS"},links:[{name:"Emotion",url:"https://emotion.sh"}]},{title:{name:"TypeScript"},links:[{name:"TypeScript",url:"https://www.typescriptlang.org"},{name:"Documentation",url:"https://www.typescriptlang.org/docs/home.html"}]},{title:{name:"Components"},links:[{name:"Layout",url:"/layout"},{name:"Elements",url:"/elements"}]}]},an=V.default.nav`
  grid-column: 2 / 5;
  position: relative;
  z-index: ${F.Navigation};

  ${T.Phone} {
    flex-direction: column;
    overflow: auto;
    display: ${({showNavigation:e})=>e?"flex":"none"};
    ${({showNavigation:e})=>e?`height: calc(100vh - ${C.medium} - 2 * ${C.small});`:""}
  }
`,on=V.default.aside`
  grid-column: 2 / 3;
`,sn=H.css`
  ${T.Phone} {
    flex: 1;
    flex-direction: column;
  }
`,ln=H.css`
  padding: 0;
  margin-right: ${C.small};

  ${T.Phone} {
    margin-bottom: ${C.medium};
  }
`,cn=V.default.div`
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
`,un=V.default.div`
  display: flex;
  flex-direction: column;
  padding: ${C.medium} 0;

  ${T.Phone} {
    padding: 0;
  }
`,dn=V.default.div`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;

    & > a {
      color: ${I.interact};
    }
  }
`,pn=({children:e})=>{let[t,n]=Y.useState(!1);return Y.default.createElement(dn,{tabIndex:0,onMouseEnter:()=>n(!0),onFocus:()=>n(!0),onMouseLeave:()=>n(!1),onBlur:()=>n(!1)},e[0],e[1].props.children&&Y.default.createElement(cn,{isOpen:t},Y.default.createElement(un,null,e[1])))},mn=()=>Y.default.createElement(on,null,Y.default.createElement("nav",null,"Sidebar")),_n=null,fn=({data:e=rn,linkActive:t=(()=>!1)})=>{let n=Y.useRef(),[r,a]=Y.useState(!1);return _n=a,Y.useEffect((()=>{n.current&&r?j.disableBodyScroll(n.current):j.clearAllBodyScrollLocks()}),[r]),Y.default.createElement(an,{ref:n,showNavigation:r},Y.default.createElement(Dt,{css:sn,elementProps:{css:ln},horizontal:!0},e.top.map((e=>Y.default.createElement(pn,{key:e.title.name},Y.default.createElement(at,{href:e.title.url,bold:t(e.title.url)},e.title.name),Y.default.createElement(Y.default.Fragment,null,e.links&&e.links.length&&e.links.map((e=>Y.default.createElement(at,{key:e.name,href:e.url},e.name)))))))))},gn=f(n(67294)),bn=f(n(24524)),En=bn.default.footer(`\n  padding: 0 ${C.small};\n  grid-column: 3 / 4;\n\n  display: flex;\n  flex-wrap: wrap;\n`,(e=>e.css)),hn=bn.default.div("\n  flex-basis: 25%;\n",(e=>e.css)),Sn=({data:e=nn,wrapperStyle:t,rowStyle:n,children:r})=>r?gn.default.createElement(En,{css:t},r):gn.default.createElement(En,{css:t},e.rows.map(((e,t)=>gn.default.createElement(hn,{key:t,css:n},gn.default.createElement(at,{href:e.title.url},e.title.name),gn.default.createElement(Dt,null,e.links.map(((e,t)=>gn.default.createElement(at,{key:t,href:e.url},e.name)))))))),vn=f(n(67294)),yn=f(n(70917)),Tn=f(n(24524)),Cn=f(n(67294)),On=f(n(24524)).default.svg`
  ${({css:e})=>e}
`,Nn=e=>{var t=m(e,[]);return Cn.default.createElement(On,d(d({},t),{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 120 120"}),Cn.default.createElement("g",{stroke:"#000",strokeWidth:"20",clipPath:"url(#clip0)"},Cn.default.createElement("path",{d:"M0 10L120 10"}),Cn.default.createElement("path",{d:"M40 110L120 110"}),Cn.default.createElement("path",{d:"M20 60L120 60"})),Cn.default.createElement("defs",null,Cn.default.createElement("clipPath",{id:"clip0"},Cn.default.createElement("path",{fill:"#fff",d:"M0 0H120V120H0z"}))))},Rn=Tn.default.header`
  grid-column: 2 / 5;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
`,An=Tn.default.img`
  color: blue;
  max-height: 100%;
`,In=Tn.default.nav`
  color: black;
  grid-column: 2 / 3;
  justify-self: end;
`,wn=Tn.default.p`
  font-size: ${C.medium};
  font-weight: bold;
  align-self: center;
`,Dn=Tn.default(rt)`
  justify-self: start;
  display: flex;
  height: ${C.large};
`,xn=Tn.default.div`
  display: flex;
`,kn=()=>{let[e,t]=vn.useState(!1),n=()=>{t(!e),(e=>{_n(e)})(!e)},r=yn.css`
    cursor: pointer;
    width: ${C.medium};
    height: ${C.medium};
    display: none;

    ${T.Phone} {
      display: flex;
    }
  `;return vn.default.createElement(xn,null,e?vn.default.createElement(ut,{onClick:n,css:r}):vn.default.createElement(Nn,{onClick:n,css:r}))},Ln=({logo:e=null,title:t,link:n,children:r})=>{let a=vn.default.createElement(pt,null);return e||r?(e&&(a=vn.default.createElement(An,{src:e})),r&&(a=r),vn.default.createElement(Dn,{href:n},a)):vn.default.createElement(wn,null,t)},Pn=({data:e=tn,logo:t=null,title:n="naven",link:r="/",children:a})=>vn.default.createElement(Rn,null,vn.default.createElement(Ln,{logo:t,title:n,link:r},a),vn.default.createElement(In,null,vn.default.createElement(kn,null),vn.default.createElement(Dt,{css:yn.css`
          ${T.Phone} {
            display: none;
          }
        `,horizontal:!0},e.links.map((e=>vn.default.createElement(at,{key:e.url,href:e.url},e.name)))))),Mn=f(n(24524)),Fn=Mn.default.div`
  display: flex;
  overflow: auto;
  column-gap: ${({gap:e=C.medium})=>x(e)};
  ${O}
`,Un=Mn.default.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({gap:e=C.medium})=>x(e)};
  ${O}
`,Bn=Mn.default.div`
  display: flex;
`,Gn=Mn.default.div`
  grid-column: 3;
  ${({css:e})=>e}
`,Yn=Mn.default.div`
  grid-column: 1 / 6;
  ${({css:e})=>e}
//# sourceMappingURL=main.js.map