import{r,_ as z,R as n,b as s,c as G,P as e,q as J,f as K}from"./index-eA6KknhS.js";import{u as Q,s as U,t as W}from"./DefaultLayout-D92C7C-N.js";import{g as X,e as Y}from"./getRTLPlacement-C_Bss-a0.js";var C=r.forwardRef(function(t,L){var S=t.children,d=t.animation,M=d===void 0?!0:d,H=t.className,q=t.container,m=t.content,v=t.delay,l=v===void 0?0:v,b=t.fallbackPlacements,x=b===void 0?["top","right","bottom","left"]:b,h=t.offset,F=h===void 0?[0,6]:h,y=t.onHide,g=t.onShow,P=t.placement,O=P===void 0?"top":P,w=t.trigger,i=w===void 0?["hover","focus"]:w,f=t.visible,_=z(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),o=r.useRef(null),c=r.useRef(null),j=Q(L,o),R=r.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),p=U(),A=p.initPopper,k=p.destroyPopper,B=p.updatePopper,E=r.useState(!1),D=E[0],T=E[1],N=r.useState(f),u=N[0],a=N[1],I=typeof l=="number"?{show:l,hide:l}:l,V={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:x}},{name:"offset",options:{offset:F}}],placement:X(O,c.current)};return r.useEffect(function(){a(f)},[f]),r.useEffect(function(){return u&&(T(!0),o.current&&(o.current.classList.remove("fade","show"),k()),setTimeout(function(){c.current&&o.current&&(M&&o.current.classList.add("fade"),A(c.current,o.current,V),o.current.style.removeProperty("display"),o.current.classList.add("show"),g&&g())},I.show)),function(){o.current&&(o.current.classList.remove("show"),y&&y(),Y(function(){o.current&&(o.current.style.display="none"),k(),T(!1)},o.current))}},[u]),r.useEffect(function(){B()},[m]),n.createElement(n.Fragment,null,n.cloneElement(S,s(s(s(s(s({},u&&{"aria-describedby":R.current}),{ref:c}),(i==="click"||i.includes("click"))&&{onClick:function(){return a(!u)}}),(i==="focus"||i.includes("focus"))&&{onFocus:function(){return a(!0)},onBlur:function(){return a(!1)}}),(i==="hover"||i.includes("hover"))&&{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}})),n.createElement(W,{container:q,portal:!0},D&&n.createElement("div",s({className:G("tooltip","bs-tooltip-auto",H),id:R.current,ref:j,role:"tooltip",style:{display:"none"}},_),n.createElement("div",{className:"tooltip-arrow"}),n.createElement("div",{className:"tooltip-inner"},m))))});C.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:J,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:K,visible:e.bool};C.displayName="CTooltip";export{C};
