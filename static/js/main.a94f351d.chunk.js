(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2reBt",Modal:"Modal_Modal__2wxRT"}},13:function(e,t,a){e.exports={App:"Container_App__1ktml"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3ixqg"}},16:function(e,t,a){e.exports={Button:"Button_Button__2fXdf"}},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),s=(a(21),a(11)),i=a(3),l=a(4),u=a(6),h=a(5),m=a(13),g=a.n(m),d=a(0);var p=function(e){var t=e.children;return Object(d.jsx)("div",{className:g.a.App,children:t})},b=a(7),j=a.n(b),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",webformatURL:"",largeImageURL:"",id:""},e.hendleChange=function(t){e.setState({text:t.currentTarget.value.toLowerCase()})},e.hendleSubmit=function(t){t.preventDefault(),""!==e.state.text.trim()?(e.props.onSubmit(e.state.text),e.reset()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},e.reset=function(){e.setState({text:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.hendleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:j.a.button,children:Object(d.jsx)("span",{className:j.a.lable})}),Object(d.jsx)("input",{value:this.state.text,onChange:this.hendleChange,className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),v=f,O=a(9),x=a.n(O);var y=function(e){var t=e.webformatURL,a=e.user,n=e.openModal,r=e.largeImageURL;return Object(d.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:a,"data-source":r,className:x.a.image,onClick:n})})},_=a(14),I=a.n(_);var S=function(e){var t=e.images,a=e.openModal;return Object(d.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,n=e.id,r=e.user,o=e.largeImageURL;return Object(d.jsx)(y,{user:r,webformatURL:t,largeImageURL:o,openModal:a},n)}))})},w=a(15),k=a.n(w),C=(a(43),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(k.a,{type:"Watch",color:"#00BFFF",height:200,width:200,timeout:3e3})}}]),a}(n.Component)),L=a(10),M=a.n(L),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleKeyClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:M.a.Overlay,onClick:this.handleKeyClick,children:Object(d.jsx)("div",{className:M.a.Modal,children:Object(d.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),a}(n.Component),R=F,U=a(16),N=a.n(U),G=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})};var B={fetchImages:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"22940348-1b20cc5115637f53696a8a841";return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=").concat(a)).then((function(e){if(e.ok)return e.json()}))}},D=B,A="idle",E="pending",T="resolved",K="rejected",W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",page:1,images:[],loading:!1,error:null,status:A,showModal:!1,largeImageURL:"",webformatURL:"",id:""},e.handleFormSubmit=function(t){e.setState({text:t,page:1})},e.openModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.btnFetch=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.text,n=this.state.text,r=t.page,o=this.state.page;a!==n&&this.setState({images:[],page:1,status:E}),a===n&&r===o||this.fetchImages(n,o)}},{key:"fetchImages",value:function(e,t){var a=this;D.fetchImages(e,t).then((function(e){if(a.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e.hits)),status:T}})),1!==t&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),0===e.total)return Promise.reject(new Error("WRONG!Try again;)"))})).catch((function(e){return a.setState({error:e,status:K})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.status,r=e.showModal,o=e.largeImageURL,c=n===T&&t.length>11;return Object(d.jsxs)(p,{children:[Object(d.jsx)(v,{onSubmit:this.handleFormSubmit}),n===A&&Object(d.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u0438\u0441\u043a"}),n===K&&Object(d.jsx)("h1",{children:a.message}),c&&Object(d.jsx)(S,{images:t,openModal:this.openModal}),n===E&&Object(d.jsx)(C,{}),0!==t.length&&Object(d.jsx)(G,{onClick:this.btnFetch}),r&&Object(d.jsx)(R,{onClose:this.toggleModal,largeImageURL:o})]})}}]),a}(n.Component),J=W;c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2FpDx",SearchForm:"Searchbar_SearchForm__1O91N",SearchFormButton:"Searchbar_SearchFormButton__3VPZu",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__23CCJ",SearchFormInput:"Searchbar_SearchFormInput__2W0TW"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2E3Fw",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3ZJkz"}}},[[44,1,2]]]);
//# sourceMappingURL=main.a94f351d.chunk.js.map