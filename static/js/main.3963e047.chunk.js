(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2FpDx",SearchForm:"Searchbar_SearchForm__1O91N",SearchFormButton:"Searchbar_SearchFormButton__3VPZu",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__23CCJ",SearchFormInput:"Searchbar_SearchFormInput__2W0TW"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2reBt",Modal:"Modal_Modal__2wxRT"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2WB83",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1UdDD"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3ixqg"}},28:function(e,t,a){e.exports={Button:"Button_Button__2fXdf"}},30:function(e,t,a){e.exports={LoaderContainer:"Loader_LoaderContainer__20djP"}},36:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(36),a(18)),i=a(4),l=a(5),u=a(7),h=a(6),m=a(15),d=a.n(m),g=a(1),b=document.querySelector("#modal-root"),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.openModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.openModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:d.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:d.a.Modal,children:Object(g.jsx)("img",{src:this.props.largeImg,alt:""})})}),b)}}]),a}(n.Component),p=j,f=a(9),y=(a(38),a(10)),O=a.n(y),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;""!==a.trim()?(e.props.onSubmit(a),e.setState({query:""})):f.b.error("Please, type the query")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:O.a.Searchbar,children:Object(g.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(g.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:O.a.SearchFormInput,type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"Search img and photos"})]})})}}]),a}(n.Component),v=S,x=a(27),I=a.n(x),_=function(e){var t=e.children,a=e.onClick;return Object(g.jsx)("ul",{className:I.a.ImageGallery,onClick:a,children:t})},w=a(16),k=a.n(w),C=function(e){return e.images.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags;return Object(g.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:n,className:k.a.ImageGalleryItemImage,id:t})},t)}))},F=a(28),M=a.n(F),N=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load more"})};function B(e){var t=e.message;return Object(g.jsx)("h1",{children:t})}var L=a(29),G=a.n(L),q=a(30),D=a.n(q),E=(a(59),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:D.a.LoaderContainer,children:Object(g.jsx)(G.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),a}(n.Component)),P=E,Q=a(17),U=a.n(Q),T=a(31),A=a(13),R=a.n(A);R.a.defaults.baseURL="https://pixabay.com/api/",R.a.defaults.params={key:"22940348-1b20cc5115637f53696a8a841",image_type:"photo",orientation:"horizontal",per_page:12};var W=function(){var e=Object(T.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,n=t.page,e.next=3,R.a.get("",{params:{q:a,page:n}}).then((function(e){return e.data.hits}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=W,K=(a(79),"idle"),z="pending",H="resolved",V="rejected",X=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,status:K,error:null,largeImg:"",showModal:!1,imagesEnded:!1,imagesNotFiended:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){"IMG"===t.target.nodeName&&e.toggleModal();var a=e.state.images.find((function(e){return e.id===Number(t.target.id)}));e.setState({largeImg:a.largeImageURL})},e.handleSearchbarSubmit=function(t){e.setState({searchQuery:t,page:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.page,n=t.searchQuery;J({searchQuery:n,page:a}).then((function(t){0===t.length?e.setState((function(){return{imagesEnded:!0,imagesNotFiended:0===e.state.images.length}})):(e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1,imagesEnded:!1,imagesNotFiended:!1}})),e.setState({status:z}))})).catch((function(t){e.setState({error:t,status:V}),f.b.error("Sorry, try again")})).finally((function(){e.setState({status:H},(function(){return e.windowScroll()}))}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"windowScroll",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.showModal,r=e.largeImg;return a===K?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{onSubmit:this.handleSearchbarSubmit}),";",Object(g.jsx)(f.a,{autoClose:3e3})]}):a===z?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{onSubmit:this.handleSearchbarSubmit}),";",Object(g.jsx)(P,{})]}):a===V?Object(g.jsx)(B,{message:"Please, try again"}):a===H?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(v,{onSubmit:this.handleSearchbarSubmit}),this.state.imagesNotFiended?Object(g.jsx)(B,{message:"Images not founded. Please, try again"}):null,Object(g.jsx)(_,{onClick:this.openModal,children:Object(g.jsx)(C,{images:t})}),!this.state.imagesEnded&&Object(g.jsx)(N,{onClick:this.fetchImages}),n&&Object(g.jsx)(p,{largeImg:r,openModal:this.toggleModal}),Object(g.jsx)(f.a,{autoClose:3e3})]})}):void 0}}]),a}(n.Component),Z=X;c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Z,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.3963e047.chunk.js.map