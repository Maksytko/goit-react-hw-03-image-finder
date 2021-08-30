(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3G4Bb"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2QuTf"}},14:function(e,t,a){e.exports={Button:"Button_Button__2uROi"}},21:function(e,t,a){},22:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),i=(a(21),a(10)),l=a(3),s=a(4),u=a(6),m=a(5),h=(a.p,a(22),a(12)),g=a.n(h),d=a(1),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={text:""},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleFormSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",name:"text",value:this.state.text,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),a}(n.Component),b=a(13),f=a.n(b),j=a(8),y=a.n(j);var O=function(e){var t=e.imageUrl,a=e.onClick;return Object(d.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:"",className:y.a.ImageGalleryItemImage,onClick:a})})},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){e.images!==this.props.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("ul",{className:f.a.ImageGallery,children:this.props.images.map((function(t){return Object(d.jsx)(O,{imageUrl:t.webformatURL,onClick:e.props.onImgClick},t.id)}))})}}]),a}(n.Component),x=a(14),k=a.n(x);var I=function(e){var t=e.onClick;return e.images.length>0?Object(d.jsx)("button",{className:k.a.Button,type:"button",onClick:t,children:"Load more"}):null},S=a(15),C=a(9),_=a.n(C),w=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeydown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(S.createPortal)(Object(d.jsx)("div",{className:_.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:_.a.Modal,children:Object(d.jsx)("img",{src:this.props.image,alt:""})})}),w)}}]),a}(n.Component),M=a(16),G=a.n(M),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)(G.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),B="https://pixabay.com/api",L="22330011-89d1f89aeaa9d6f980eea326f",U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",images:[],loading:!1,modal:!1,imgForModal:""},e.page=1,e.onClick=function(){e.setState({loading:!0}),e.page=e.page+1,fetch("".concat(B,"/?q=").concat(e.state.name,"&page=").concat(e.page,"&key=").concat(L,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t.hits))}}))})).finally(e.setState({loading:!1}))},e.onSubmit=function(t){e.setState({name:t.trim()})},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.onImgClick=function(t){var a=e.state.images.find((function(e){return e.webformatURL===t.target.getAttribute("src")}));e.setState({imgForModal:a.largeImageURL,modal:!0})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=t.name,o=this.state.name;o!==n&&(this.setState({loading:!0}),this.page=1,fetch("".concat(B,"/?q=").concat(o,"&page=").concat(this.page,"&key=").concat(L,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({images:e.hits})})).finally(this.setState({loading:!1})))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{onSubmit:this.onSubmit}),Object(d.jsx)(v,{images:this.state.images,onImgClick:this.onImgClick}),this.state.modal&&Object(d.jsx)(F,{image:this.state.imgForModal,toggleModal:this.toggleModal}),this.state.loading?Object(d.jsx)(N,{}):Object(d.jsx)(I,{onClick:this.onClick,images:this.state.images})]})}}]),a}(n.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),T()},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2aMrr",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__23Tt0"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__g8pae",Modal:"Modal_Modal__xRM2r"}}},[[44,1,2]]]);
//# sourceMappingURL=main.093005a8.chunk.js.map