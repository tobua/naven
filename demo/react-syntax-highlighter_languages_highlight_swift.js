(self.webpackChunk=self.webpackChunk||[]).push([[3180],{26306:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function i(e){return a("(?=",e,")")}function a(...e){return e.map((e=>n(e))).join("")}function t(...e){return"("+e.map((e=>n(e))).join("|")+")"}const u=e=>a(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(u),o=["init","self"].map(u),r=["Any","Self"],l=["associatedtype",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough","fileprivate(set)","fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout","internal(set)","internal","in","is","lazy","let","mutating","nonmutating","open(set)","open","operator","optional","override","postfix","precedencegroup","prefix","private(set)","private","protocol","public(set)","public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias","unowned(safe)","unowned(unsafe)","unowned","var","weak","where","while","willSet"],c=["false","nil","true"],b=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],F=t(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),d=t(F,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),g=a(F,d,"*"),f=t(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFFFD]/),m=t(f,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=a(f,m,"*"),E=a(/[A-Z]/,m,"*"),y=["autoclosure",a(/convention\(/,t("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",a(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],A=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];e.exports=function(e){const n=e.COMMENT("/\\*","\\*/",{contains:["self"]}),F={className:"keyword",begin:a(/\./,i(t(...s,...o))),end:t(...s,...o),excludeBegin:!0},f={begin:a(/\./,t(...l)),relevance:0},C=l.filter((e=>"string"==typeof e)).concat(["_|0"]),v={variants:[{className:"keyword",begin:t(...l.filter((e=>"string"!=typeof e)).concat(r).map(u),...o)}]},_={$pattern:t(/\b\w+(\(\w+\))?/,/#\w+/),keyword:C.concat(b).join(" "),literal:c.join(" ")},N=[F,f,v],D=[{begin:a(/\./,t(...p)),relevance:0},{className:"built_in",begin:a(/\b/,t(...p),/(?=\()/)}],h={begin:/->/,relevance:0},B=[h,{className:"operator",relevance:0,variants:[{begin:g},{begin:`\\.(\\.|${d})+`}]}],M="([0-9a-fA-F]_*)+",k={className:"number",relevance:0,variants:[{begin:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{begin:`\\b0x(${M})(\\.(${M}))?([pP][+-]?(([0-9]_*)+))?\\b`},{begin:/\b0o([0-7]_*)+\b/},{begin:/\b0b([01]_*)+\b/}]},S=(e="")=>({className:"subst",variants:[{begin:a(/\\/,e,/[0\\tnr"']/)},{begin:a(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),x=(e="")=>({className:"subst",begin:a(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),O=(e="")=>({className:"subst",label:"interpol",begin:a(/\\/,e,/\(/),end:/\)/}),I=(e="")=>({begin:a(e,/"""/),end:a(/"""/,e),contains:[S(e),x(e),O(e)]}),L=(e="")=>({begin:a(e,/"/),end:a(/"/,e),contains:[S(e),O(e)]}),$={className:"string",variants:[I(),I("#"),I("##"),I("###"),L(),L("#"),L("##"),L("###")]},T=[{begin:a(/`/,w,/`/)},{className:"variable",begin:/\$\d+/},{className:"variable",begin:`\\$${m}+`}],K=[{begin:/(@|#)available\(/,end:/\)/,keywords:{$pattern:/[@#]?\w+/,keyword:A.concat(["@available","#available"]).join(" ")},contains:[...B,k,$]},{className:"keyword",begin:a(/@/,t(...y))},{className:"meta",begin:a(/@/,w)}],j={begin:i(/\b[A-Z]/),relevance:0,contains:[{className:"type",begin:a(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,m,"+")},{className:"type",begin:E,relevance:0},{begin:/[?!]+/,relevance:0},{begin:/\.\.\./,relevance:0},{begin:a(/\s+&\s+/,i(E)),relevance:0}]},P={begin:/</,end:/>/,keywords:_,contains:[...N,...K,h,j]};j.contains.push(P);for(const e of $.variants){const n=e.contains.find((e=>"interpol"===e.label));n.keywords=_;const i=[...N,...D,...B,k,$,...T];n.contains=[...i,{begin:/\(/,end:/\)/,contains:["self",...i]}]}return{name:"Swift",keywords:_,contains:[e.C_LINE_COMMENT_MODE,n,{className:"function",beginKeywords:"func",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:_,contains:["self",...N,k,$,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],illegal:/\[|%/},{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:_,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...N]},{beginKeywords:"import",end:/$/,contains:[e.C_LINE_COMMENT_MODE,n],relevance:0},...N,...D,...B,k,$,...T,...K,j]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_swift.js.map