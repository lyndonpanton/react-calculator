(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Buttons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),Calculator=function(_React$Component){function Calculator(props){var _this;return Object(_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this.handleClick=function(icon){var changeError=_this.props.changeError,value=String(_this.state.value),memory=_this.state.memory;switch(icon){case"mc":_this.setState({memory:0}),changeError("Ok");break;case"m+":isNaN(value[value.length-1])?changeError("equation must end in a number"):(_this.setState({memory:memory+eval(value)}),changeError("Ok"));break;case"m-":isNaN(value[value.length-1])?changeError("equation must end in a number"):(_this.setState({memory:memory-eval(value)}),changeError("Ok"));break;case"mr":_this.setState({value:memory}),changeError("Ok");break;case"c":_this.setState({value:""}),changeError("Ok");break;case"/":case"x":case"-":case"+":case"^":case"%":""===value?changeError("eqautions must start with a number"):isNaN(value[value.length-1])?changeError("eqautions must not have two consecutive operands"):(_this.setState({value:value+icon}),changeError("Ok"));break;case"7":case"8":case"9":case"4":case"5":case"6":case"1":case"2":case"3":case"0":_this.setState({value:value+icon}),changeError("Ok");break;case"<=":_this.setState({value:value.slice(0,value.length-1)});break;case".":isNaN(value[value.length-1])?changeError("decimal point can only be added after a number"):(_this.setState({value:value+icon}),changeError("Ok"));break;case"=":isNaN(value[value.length-1])?changeError("equation must end in a number"):(value=value.replace("x","*").replace("^","**"),_this.setState({value:eval(value)}),changeError("Ok"));break;default:changeError("button not recognised")}},_this.state={icons:["mc","m+","m-","mr","c","/","x","<=","7","8","9","-","4","5","6","+","1","2","3","^","%","0",".","="],memory:0,value:""},_this}return Object(_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(_Users_lyndonpanton_Desktop_Work_Projects_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){var e=this.state,a=e.icons,t=e.value;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator",style:{margin:"20px auto",border:"#FF8200 solid 3px",borderRadius:"3px",width:"250px",height:"400px",backgroundColor:"#1A1A1A"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_6__.a,{icons:a,value:t}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_7__.a,{icons:a,handleClick:this.handleClick}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},function(e,a,t){"use strict";var r=t(0),_=t.n(r);a.a=function(e){return _.a.createElement("div",{className:"display",style:{margin:"20px auto",border:"#000000 solid 2px",borderRadius:"3px",width:"90%",height:"50px",backgroundColor:"#225522"}},_.a.createElement("output",{style:{display:"block",overflowX:"scroll",padding:"0 5px",textAlign:"right",fontFamily:"monospace",fontSize:"3.3em",color:"#EEEEEE"}},e.value))}},function(e,a,t){"use strict";var r=t(1),_=t(2),n=t(4),o=t(3),c=t(5),l=t(0),s=t.n(l),i=function(e){var a=e.buttonKey,t=e.icon,r=e.handleClick;return s.a.createElement("button",{key:a,style:{borderRadius:"2px",width:"48px",height:"40px",backgroundColor:"#DDDDDD",fontFamily:"Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif",fontSize:"1.5em",color:"#222222"},onClick:function(){r(t)}},t)},u=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this,a=this.props.icons.map((function(a,t){return s.a.createElement(i,{buttonKey:t,icon:a,handleClick:e.props.handleClick})}));return s.a.createElement("div",{className:"buttons",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",margin:"0 auto",border:"#FF8A00 solid 1px",borderRadius:"3px",padding:"5px 0 0",width:"90%",height:"280px"}},a)}}]),a}(s.a.Component);a.a=u},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),_=t.n(r),n=t(7),o=t.n(n),c=t(1),l=t(2),s=t(4),i=t(3),u=t(5),p=function(e){var a=e.name;return _.a.createElement("header",{style:{backgroundColor:"#800080"}},_.a.createElement("h1",{style:{margin:"0",padding:"8px",textAlign:"center"}},a))},d=function(e){var a,t;"Ok"===e.error?(a="#088808",t="#00CCCC"):(a="#CC0000",t="#FFAA44");var r={margin:"20px auto",border:t+" solid 2px",borderRadius:"4px",padding:0,backgroundColor:a,width:"250px",textAlign:"center"};return _.a.createElement("div",{className:"warning",style:r},_.a.createElement("p",{style:{margin:"10px 0 2px",padding:0}},e.error))},m=t(8),E=function(e){var a=e.author,t=e.copyright,r=e.date;return _.a.createElement("footer",{style:{padding:"10px 0",backgroundColor:"#7722FF",color:"#FFFFFF"}},_.a.createElement("p",{style:{textAlign:"center"}},"\xa9 ",r," ",a," | ",t))},h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).changeError=function(e){t.setState({error:e})},t.state={author:"Lyndon Panton",copyright:"All Rights Reserved",date:(new Date).getFullYear(),error:"Ok",name:"React Calculator"},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.author,t=e.copyright,r=e.date,n=e.error,o=e.name;return _.a.createElement("div",{className:"app",style:{color:"#FFFFFF"}},_.a.createElement("header",null,_.a.createElement(p,{name:o}),_.a.createElement("main",{style:{padding:"15px 0",backgroundColor:"#454545"}},_.a.createElement(d,{error:n}),_.a.createElement(m.a,{error:n,changeError:this.changeError})),_.a.createElement(E,{author:a,copyright:t,date:r})))}}]),a}(_.a.Component);t(16);o.a.render(_.a.createElement(h,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b48ec5b5.chunk.js.map