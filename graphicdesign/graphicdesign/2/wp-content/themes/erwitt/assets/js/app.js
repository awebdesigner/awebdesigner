/**
 * Swiper 3.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: December 13, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?s.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T))},e)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes||a.attributes,childList:"undefined"==typeof a.childList||a.childList,characterData:"undefined"==typeof a.characterData||a.characterData}),T.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev())}}function p(){var e="onwheel",a=e in document;if(!a){var t=document.createElement("div");t.setAttribute(e,"return;"),a="function"==typeof t[e]}return!a&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=u(e);if(T.params.mousewheelForceToAxis)if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var r=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,i=T.isBeginning,n=T.isEnd;if(r>=T.minTranslate()&&(r=T.minTranslate()),r<=T.maxTranslate()&&(r=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(r),T.updateProgress(),T.updateActiveIndex(),(!i&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===r||r===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(a<0)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext(),T.emit("onScroll",T,e);else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e){var a=10,t=40,s=800,r=0,i=0,n=0,o=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(r=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(r=i,i=0),n=r*a,o=i*a,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||o)&&e.deltaMode&&(1===e.deltaMode?(n*=t,o*=t):(n*=s,o*=s)),n&&!r&&(r=n<1?-1:1),o&&!i&&(i=o<1?-1:1),{spinX:r,spinY:i,pixelX:n,pixelY:o}}function m(e,t){e=a(e);var s,r,i,n=T.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):T.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var g={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=s&&s.virtualTranslate;s=s||{};var f={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))f[v]=s[v];else{f[v]={};for(var w in s[v])f[v][w]=s[v][w]}for(var y in g)if("undefined"==typeof s[y])s[y]=g[y];else if("object"==typeof s[y])for(var x in g[y])"undefined"==typeof s[y][x]&&(s[y][x]=g[y][x]);var T=this;if(T.params=s,T.originalParams=f,T.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(T.$=a,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a)T.params[s]=a[s];T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0)}},T.params.breakpoints&&T.setBreakpoint(),T.container=a(e),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new t(this,s))}),b}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0,T.params.setWrapperSize=!1),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,T.params.setWrapperSize=!1,"undefined"==typeof h&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=a(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=a(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=a(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor()},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor()},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab"},T.unsetGrabCursor=function(){T.container[0].style.cursor=""},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},T.preloadImages=function(){function e(){"undefined"!=typeof T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return"undefined"==typeof T.autoplayTimeoutId&&(!!T.params.autoplay&&(!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void i())))},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,i()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?i():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0])}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++)if("undefined"!=typeof a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&T.wrapper.css("height",t+"px")},T.updateContainerSize=function(){var e,a;e="undefined"!=typeof T.params.width?T.params.width:T.container[0].clientWidth,a="undefined"!=typeof T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var m,c,g;"column"===T.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),m=c+g*n/l,u.css({"-webkit-box-ordinal-group":m,"-moz-box-ordinal-group":m,"-ms-flex-order":m,"-webkit-order":m,order:m})):(g=Math.floor(e/p),c=e-g*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==g&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup===0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup===0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var h;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(h=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&h.push(T.snapGrid[e]);T.snapGrid=h}if(!T.params.centeredSlides){for(h=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&h.push(T.snapGrid[e]);T.snapGrid=h,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,r=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++)T.slides[e]&&!s&&(r+=T.slides[e].swiperSlideSize,t++,r>T.size&&(s=!0));for(a=T.activeIndex-1;a>=0;a--)T.slides[a]&&!s&&(r+=T.slides[a].swiperSlideSize,t++,r>T.size&&(s=!0))}else for(e=T.activeIndex+1;e<T.slides.length;e++)T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;return t},T.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=T.translate||0),0!==T.slides.length){"undefined"==typeof T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],r=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+T.slidesSizesGrid[t],o=i>=0&&i<T.size||n>0&&n<=T.size||i<=0&&n>=T.size;o&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}s.progress=T.rtl?-r:r}}},T.updateProgress=function(e){"undefined"==typeof e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)"undefined"!=typeof T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);T.params.normalizeSlideIndex&&(e<0||"undefined"==typeof e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex())},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10)},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var e=T.slides.eq(T.activeIndex);e.addClass(T.params.slideActiveClass),s.loop&&(e.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=e.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var r=e.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===r.length&&(r=T.slides.eq(-1),r.addClass(T.params.slidePrevClass)),s.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),r.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var i,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(i=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),i>T.slides.length-1-2*T.loopedSlides&&(i-=T.slides.length-2*T.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==T.params.paginationType&&(i=n+i)):i="undefined"!=typeof T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){a(this).index()===i&&a(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(i).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(i+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(i+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed)}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,i+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]))}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0])}},T.update=function(e){function a(){T.rtl?-T.translate:T.translate;s=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(s),T.updateActiveIndex(),T.updateClasses()}if(T)if(T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),e){var t,s;T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(t=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0),t||a())}else T.params.autoHeight&&T.updateAutoHeight()},T.onResize=function(e){T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var r=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(r),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],i=T.support.touch?r:document,n=!!T.params.nested;if(T.browser.ie)r[t](T.touchEvents.start,T.onTouchStart,!1),i[t](T.touchEvents.move,T.onTouchMove,n),i[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};r[t](T.touchEvents.start,T.onTouchStart,o),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,o)}(s.simulateTouch&&!T.device.ios&&!T.device.android||s.simulateTouch&&!T.support.touch&&T.device.ios)&&(r[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1))}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&r[t]("click",T.preventClicks,!0);
},T.attachEvents=function(){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev()},T.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},T.updateClickedSlide=function(e){var t=n(e,"."+T.params.slideClass),s=!1;if(t)for(var r=0;r<T.slides.length;r++)T.slides[r]===t&&(s=!0);if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=a(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var i,o=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;i=parseInt(a(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?o<T.loopedSlides-l/2||o>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),o=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(o)},0)):T.slideTo(o):o>T.slides.length-l?(T.fixLoop(),o=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(o)},0)):T.slideTo(o)}else T.slideTo(o)}};var S,C,z,M,P,E,I,k,D,L,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,Y;T.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),X="touchstart"===e.type,X||!("which"in e)||3!==e.which){if(T.params.noSwiping&&n(e,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||n(e,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=T.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,P=void 0,Y=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(B)&&(r=!1),document.activeElement&&a(document.activeElement).is(B)&&document.activeElement.blur(),r&&e.preventDefault()}T.emit("onTouchStart",T,e)}}}},T.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!X||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return T.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(T.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,T.touches.startY=T.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,e),!(e.targetTouches&&e.targetTouches.length>1)){if(T.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,T.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof P){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?P=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,P=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle)}if(P&&T.emit("onTouchMoveOpposite",T,e),"undefined"==typeof Y&&T.browser.ieTouch&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(Y=!0)),S){if(P)return void(S=!1);if(Y||!T.browser.ieTouch){T.allowClick=!1,T.emit("onSliderMove",T,e),e.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&e.stopPropagation(),C||(s.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),L=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var r=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;r*=T.params.touchRatio,T.rtl&&(r=-r),T.swipeDirection=r>0?"prev":"next",E=r+I;var i=!0;if(r>0&&E>T.minTranslate()?(i=!1,T.params.resistance&&(E=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+r,T.params.resistanceRatio))):r<0&&E<T.maxTranslate()&&(i=!1,T.params.resistance&&(E=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-r,T.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&E<I&&(E=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&E>I&&(E=I),T.params.threshold>0){if(!(Math.abs(r)>T.params.threshold||k))return void(E=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,E=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(E),T.setWrapperTranslate(E))}}}}},T.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&T.emit("onTouchEnd",T,e),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(e),T.emit("onTap",T,e),s<300&&t-H>300&&(D&&clearTimeout(D),D=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!a(e.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,e))},300)),s<300&&t-H<300&&(D&&clearTimeout(D),T.emit("onDoubleTap",T,e))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||E===I)return void(S=C=!1);S=C=!1;var r;if(r=T.params.followFinger?T.rtl?T.translate:-T.translate:-E,T.params.freeMode){if(r<-T.minTranslate())return void T.slideTo(T.activeIndex);if(r>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var i=G.pop(),n=G.pop(),o=i.position-n.position,l=i.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(T.velocity=0)}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var m,c=!1,g=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-g&&(u=T.maxTranslate()-g),m=T.maxTranslate(),c=!0,L=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>g&&(u=T.minTranslate()+g),m=T.minTranslate(),c=!0,L=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var h,f=0;for(f=0;f<T.snapGrid.length;f+=1)if(T.snapGrid[f]>-u){h=f;break}u=Math.abs(T.snapGrid[h]-u)<Math.abs(T.snapGrid[h-1]-u)||"next"===T.swipeDirection?T.snapGrid[h]:T.snapGrid[h-1],T.rtl||(u=-u)}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&c?(T.updateProgress(m),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&L&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(m),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)"undefined"!=typeof T.slidesGrid[v+T.params.slidesPerGroup]?r>=T.slidesGrid[v]&&r<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):r>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var x=(r-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var r=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(r),T.params.normalizeSlideIndex)for(var i=0;i<T.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*T.slidesGrid[i])&&(e=i);return!(!T.params.allowSwipeToNext&&r<T.translate&&r<T.minTranslate())&&(!(!T.params.allowSwipeToPrev&&r>T.translate&&r>T.maxTranslate()&&(T.activeIndex||0)!==e)&&("undefined"==typeof a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-r===T.translate||!T.rtl&&r===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(r),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(r),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(r),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0)))},T.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var o,l=T.maxTranslate()-T.minTranslate();o=0===l?0:(e-T.minTranslate())/l,o!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0)},T.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)o(e[a]);o(T.container[0],{childList:!1}),o(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var e=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=e.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>e.length&&(T.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<T.loopedSlides&&r.push(i),t<e.length&&t>=e.length-T.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)T.wrapper.append(a(r[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)T.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1)},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var r=0;T.isHorizontal()||(r=s,s=0);var i=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var t=T.slides.eq(e),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.virtualTranslate&&0!==e){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&a(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)T.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;T.params.cube.shadow&&(T.isHorizontal()?(e=T.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(e)),e.css({height:T.width+"px"})):(e=T.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),T.container.append(e))));for(var s=0;s<T.slides.length;s++){var r=T.slides.eq(s),i=90*s,n=Math.floor(i/360);T.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*T.size,d=0):(s-1)%4===0?(l=0,d=4*-n*T.size):(s-2)%4===0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4===0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-i)+"deg) rotateY("+(T.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),r.transform(u),T.params.cube.slideShadows){var m=T.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=T.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),r.append(m)),0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),m.length&&(m[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())e.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/h,w=T.params.cube.shadowOffset;e.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)")}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=T.translate,t=T.isHorizontal()?-e+T.width/2:-e+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,r=T.params.coverflow.depth,i=0,n=T.slides.length;i<n;i++){var o=T.slides.eq(i),l=T.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,m=T.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=T.isHorizontal()?0:T.params.coverflow.stretch*d,h=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(u)<.001&&(u=0),Math.abs(m)<.001&&(m=0);var f="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+m+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=-Math.abs(Math.round(d))+1,T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(T.browser.ie){var y=T.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(e),r=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass(T.params.lazyStatusLoadingClass);var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset"),o=e.attr("data-sizes");T.loadImage(e[0],i||r,n,o,!1,function(){if(r?(e.css("background-image",'url("'+r+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),o&&(e.attr("sizes",o),e.removeAttr("data-sizes")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1)}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');T.lazy.loadImageInSlide(p.index(),!1)}}T.emit("onLazyImageReady",T,s[0],e[0])}),T.emit("onLazyImageLoad",T,s[0],e[0])})}},load:function(){var e,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(a(this).index())});else if(t>1)for(e=T.activeIndex;e<T.activeIndex+t;e++)T.slides[e]&&T.lazy.loadImageInSlide(e);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(T.activeIndex+r+Math.max(s,r),T.slides.length),n=Math.max(T.activeIndex-Math.max(r,s),0);for(e=T.activeIndex+t;e<i;e++)T.slides[e]&&T.lazy.loadImageInSlide(e);for(e=n;e<T.activeIndex;e++)T.slides[e]&&T.lazy.loadImageInSlide(e)}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,r=-T.minTranslate()*a.moveDivider,i=-T.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop}(),enableDraggable:function(){var e=T.scrollbar,t=T.support.touch?e.track:document;a(e.track).on(e.draggableEvents.start,e.dragStart),a(t).on(e.draggableEvents.move,e.dragMove),a(t).on(e.draggableEvents.end,e.dragEnd)},disableDraggable:function(){var e=T.scrollbar,t=T.support.touch?e.track:document;a(e.track).off(e.draggableEvents.start,e.dragStart),a(t).off(e.draggableEvents.move,e.dragMove),a(t).off(e.draggableEvents.end,e.dragEnd)},set:function(){if(T.params.scrollbar){var e=T.scrollbar;e.track=a(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&e.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(e.track=T.container.find(T.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=T.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=T.size/T.virtualSize,e.moveDivider=e.divider*(e.trackSize/T.size),e.dragSize=e.trackSize*e.divider,T.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",T.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),i=-T.controller.spline.interpolate(-e)),i&&"container"!==T.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),i=(e-T.minTranslate())*r+a.minTranslate()),T.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,T),a.updateActiveIndex()}var r,i,n=T.params.control;if(T.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){
a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=T.params.control;if(T.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},T.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#",""),s=T.slides.eq(T.activeIndex).attr("data-hash");t!==s&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(e){var t=e?"off":"on";a(window)[t]("hashchange",T.hashnav.onHashCange)},setHash:function(){if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=T.slides.length;t<s;t++){var r=T.slides.eq(t),i=r.attr("data-hash")||r.attr("data-history");if(i===e&&!r.hasClass(T.params.slideDuplicateClass)){var n=r.index();T.slideTo(n,a,T.params.runCallbacksOnInit,!0)}}T.params.hashnavWatchState&&T.hashnav.attachEvents()}},destroy:function(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0)}},T.history={init:function(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length,t=e[a-2],s=e[a-1];return{key:t,value:s}},setHistory:function(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=T.slides.length;s<r;s++){var i=T.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(T.params.slideDuplicateClass)){var o=i.index();T.slideTo(o,e,t)}}else T.slideTo(0,e,t)}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,a(document).off("keydown",l)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,a(document).on("keydown",l)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":p()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var e=T.container;return"container"!==T.params.mousewheelEventsTarged&&(e=a(T.params.mousewheelEventsTarged)),e.off(T.mousewheel.event,d),!0},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var e=T.container;return"container"!==T.params.mousewheelEventsTarged&&(e=a(T.params.mousewheelEventsTarged)),e.on(T.mousewheel.event,d),!0},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,T.progress)}),T.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);m(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY,i=Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2));return i},onGestureStart:function(e){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(e)}return t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=a(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)?(t.gesture.image.transition(0),void(t.isScaling=!0)):void(t.gesture.image=void 0)},onGestureChange:function(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(e,t){var s=e.zoom;if(s.gesture.slide||(s.gesture.slide=e.clickedSlide?a(e.clickedSlide):e.slides.eq(e.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+e.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,u,m,c,g,h,f,v,w,y,x,T;"undefined"==typeof s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,m=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=m*s.scale,h=c*s.scale,f=Math.min(x/2-g/2,0),v=Math.min(T/2-h/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(e){var t=e?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(e,s){a(s).find("."+T.params.zoomContainerClass).length>0&&a(s)[t](T.touchEvents.move,T.zoom.onTouchMove)}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom)}},init:function(){T.zoom.attachEvents()},destroy:function(){T.zoom.attachEvents(!0)}},T._plugins=[];for(var A in T.plugins){var O=T.plugins[A](T,T.params[A]);O&&T._plugins.push(O)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=c(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(T.params.nextButton)?(T.onClickNext(e),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):a(e.target).is(T.params.prevButton)&&(T.onClickPrev(e),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),a(e.target).is("."+T.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),a(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var e=a(this);T.a11y.makeFocusable(e),T.a11y.addRole(e,"button"),T.a11y.addLabel(e,T.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&a(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&a(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};t.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in i.fn||(i.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});

/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */

(function (factory) {
  'use strict';

  if(typeof module === 'object' && typeof module.exports === 'object') {
	factory(require('jquery'), window, document);
  } else {
	factory(jQuery, window, document);
  }
}(function ( $, window, document, undefined ) {
  'use strict';

  /** Abort if browser does not support pushState */
  if(!window.history.pushState) {
	// setup a dummy fn, but don't intercept on link clicks
	$.fn.smoothState = function() { return this; };
	$.fn.smoothState.options = {};
	return;
  }

  /** Abort if smoothState is already present **/
  if($.fn.smoothState) { return; }

  var
	/** Used later to scroll page to the top */
	$body = $('html, body'),

	/** Used in debug mode to console out useful warnings */
	consl = window.console,

	/** Plugin default options, will be exposed as $fn.smoothState.options */
	defaults = {

	  /** If set to true, smoothState will log useful debug information instead of aborting */
	  debug: false,

	  /** jQuery selector to specify which anchors smoothState should bind to */
	  anchors: 'a',

	  /** Regex to specify which href smoothState should load. If empty, every href will be permitted. */
	  hrefRegex: '',

	  /** jQuery selector to specify which forms smoothState should bind to */
	  forms: 'form',

	  /** If set to true, smoothState will store form responses in the cache. */
	  allowFormCaching: false,

	  /** Minimum number of milliseconds between click/submit events. Events ignored beyond this rate are ignored. */
	  repeatDelay: 500,

	  /** A selector that defines what should be ignored by smoothState */
	  blacklist: '.no-smoothState',

	  /** If set to true, smoothState will prefetch a link's contents on hover */
	  prefetch: false,

	  /** The name of the event we will listen to from anchors if we're prefetching */
	  prefetchOn: 'mouseover touchstart',

	  /** jQuery selector to specify elements which should not be prefetched */
	  prefetchBlacklist: '.no-prefetch',

	  /** The response header field name defining the request's final URI. Useful for resolving redirections. */
	  locationHeader: 'X-SmoothState-Location',

	  /** The number of pages smoothState will try to store in memory */
	  cacheLength: 0,

	  /** Class that will be applied to the body while the page is loading */
	  loadingClass: 'is-loading',

	  /** Scroll to top after onStart and scroll to hash after onReady */
	  scroll: true,

	  /**
	   * A function that can be used to alter the ajax request settings before it is called
	   * @param  {Object} request - jQuery.ajax settings object that will be used to make the request
	   * @return {Object}         Altered request object
	   */
	  alterRequest: function (request) {
		return request;
	  },

	  /**
	   * A function that can be used to alter the state object before it is updated or added to the browsers history
	   * @param  {Object} state - An object that will be assigned to history entry
	   * @param  {string} title - The history entry's title. For reference only
	   * @param  {string} url   - The history entry's URL. For reference only
	   * @return {Object}         Altered state object
	   */
	  alterChangeState: function (state, title, url) {
		return state;
	  },

	  /** Run before a page load has been activated */
	  onBefore: function ($currentTarget, $container) {},

	  /** Run when a page load has been activated */
	  onStart: {
		duration: 0,
		render: function ($container) {}
	  },

	  /** Run if the page request is still pending and onStart has finished animating */
	  onProgress: {
		duration: 0,
		render: function ($container) {}
	  },

	  /** Run when requested content is ready to be injected into the page  */
	  onReady: {
		duration: 0,
		render: function ($container, $newContent) {
		  $container.html($newContent);
		}
	  },

	  /** Run when content has been injected and all animations are complete  */
	  onAfter: function($container, $newContent) {}
	},

	/** Utility functions that are decoupled from smoothState */
	utility = {

	  /**
	   * Checks to see if the url is external
	   * @param   {string}    url - url being evaluated
	   * @see     http://stackoverflow.com/questions/6238351/fastest-way-to-detect-external-urls
	   *
	   */
	  isExternal: function (url) {
		var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
		if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
		  return true;
		}
		if (typeof match[2] === 'string' &&
		  match[2].length > 0 &&
		  match[2].replace(new RegExp(':(' + {'http:': 80, 'https:': 443}[window.location.protocol] +
			')?$'), '') !== window.location.host) {
		  return true;
		}
		return false;
	  },

	  /**
	   * Strips the hash from a url and returns the new href
	   * @param   {string}    href - url being evaluated
	   *
	   */
	  stripHash: function(href) {
		return href.replace(/#.*/, '');
	  },

	  /**
	   * Checks to see if the url is an internal hash
	   * @param   {string}    href - url being evaluated
	   * @param   {string}    prev - previous url (optional)
	   *
	   */
	  isHash: function (href, prev) {
		prev = prev || window.location.href;

		var hasHash = (href.indexOf('#') > -1) ? true : false,
			samePath = (utility.stripHash(href) === utility.stripHash(prev)) ? true : false;

		return (hasHash && samePath);
	  },

	  /**
	   * Translates a url string into a $.ajax settings obj
	   * @param  {Object|String} request url or settings obj
	   * @return {Object}        settings object
	   */
	  translate: function(request) {
		  var defaults = {
			dataType: 'html',
			type: 'GET'
		  };
		  if(typeof request === 'string') {
			request = $.extend({}, defaults, { url: request });
		  } else {
			request = $.extend({}, defaults, request);
		  }
		  return request;
	  },

	  /**
	   * Checks to see if we should be loading this URL
	   * @param   {string}    url - url being evaluated
	   * @param   {string}    blacklist - jquery selector
	   *
	   */
	  shouldLoadAnchor: function ($anchor, blacklist, hrefRegex) {
		var href = $anchor.prop('href');
		// URL will only be loaded if it's not an external link, hash, or
		// blacklisted
		return (
			!utility.isExternal(href) &&
			!utility.isHash(href) &&
			!$anchor.is(blacklist) &&
			!$anchor.prop('target')) &&
			(
			  typeof hrefRegex === undefined ||
			  hrefRegex === '' ||
			  $anchor.prop('href').search(hrefRegex) !== -1
			);
	  },

	  /**
	   * Resets an object if it has too many properties
	   *
	   * This is used to clear the 'cache' object that stores
	   * all of the html. This would prevent the client from
	   * running out of memory and allow the user to hit the
	   * server for a fresh copy of the content.
	   *
	   * @param   {object}    obj
	   * @param   {number}    cap
	   *
	   */
	  clearIfOverCapacity: function (cache, cap) {
		// Polyfill Object.keys if it doesn't exist
		if (!Object.keys) {
		  Object.keys = function (obj) {
			var keys = [],
			  k;
			for (k in obj) {
			  if (Object.prototype.hasOwnProperty.call(obj, k)) {
				keys.push(k);
			  }
			}
			return keys;
		  };
		}

		if (Object.keys(cache).length > cap) {
		  cache = {};
		}

		return cache;
	  },

	  /**
	   * Stores a document fragment into an object
	   * @param   {object}           object - object where it will be stored
	   * @param   {string}           url - name of the entry
	   * @param   {string|document}  doc - entire html
	   * @param   {string}           id - the id of the fragment
	   * @param   {object}           [state] - the history entry's object
	   * @param   {string}           [destUrl] - the destination url
	   * @return  {object}           updated object store
	   */
	  storePageIn: function (object, url, doc, id, state, destUrl) {
		var $html = $( '<html></html>' ).append( $(doc) );
		if (typeof state === 'undefined') {
		  state = {};
		}
		if (typeof destUrl === 'undefined') {
		  destUrl = url;
		}
		object[url] = { // Content is indexed by the url
		  status: 'loaded',
		  // Stores the title of the page, .first() prevents getting svg titles
		  title: $html.find('title').first().text(),
		  html: $html.find('#' + id), // Stores the contents of the page
		  doc: doc, // Stores the whole page document
		  state: state, // Stores the history entry for comparisons,
		  destUrl: destUrl // URL, which will be pushed to history stack
		};
		return object;
	  },

	  /**
	   * Triggers an 'allanimationend' event when all animations are complete
	   * @param   {object}    $element - jQuery object that should trigger event
	   * @param   {string}    resetOn - which other events to trigger allanimationend on
	   *
	   */
	  triggerAllAnimationEndEvent: function ($element, resetOn) {

		resetOn = ' ' + resetOn || '';

		var animationCount = 0,
		  animationstart = 'animationstart webkitAnimationStart oanimationstart MSAnimationStart',
		  animationend = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
		  eventname = 'allanimationend',
		  onAnimationStart = function (e) {
			if ($(e.delegateTarget).is($element)) {
			  e.stopPropagation();
			  animationCount++;
			}
		  },
		  onAnimationEnd = function (e) {
			if ($(e.delegateTarget).is($element)) {
			  e.stopPropagation();
			  animationCount--;
			  if(animationCount === 0) {
				$element.trigger(eventname);
			  }
			}
		  };

		$element.on(animationstart, onAnimationStart);
		$element.on(animationend, onAnimationEnd);

		$element.on('allanimationend' + resetOn, function(){
		  animationCount = 0;
		  utility.redraw($element);
		});
	  },

	  /** Forces browser to redraw elements */
	  redraw: function ($element) {
		$element.height();
	  }
	},

	/** Handles the popstate event, like when the user hits 'back' */
	onPopState = function ( e ) {
	  if(e.state !== null) {
		var url = window.location.href,
		  $page = $('#' + e.state.id),
		  page = $page.data('smoothState'),
		  diffUrl = (page.href !== url && !utility.isHash(url, page.href)),
		  diffState = (e.state !== page.cache[page.href].state);

		if(diffUrl || diffState) {
		  if (diffState) {
			page.clear(page.href);
		  }
		  page.load(url, false);
		}
	  }
	},

	/** Constructor function */
	Smoothstate = function ( element, options ) {
	  var
		/** Container element smoothState is run on */
		$container = $(element),

		/** ID of the main container */
		elementId = $container.prop('id'),

		/** If a hash was clicked, we'll store it here so we
		 *  can scroll to it once the new page has been fully
		 *  loaded.
		 */
		targetHash = null,

		/** Used to prevent fetching while we transition so
		 *  that we don't mistakenly override a cache entry
		 *  we need.
		 */
		isTransitioning = false,

		/** Variable that stores pages after they are requested */
		cache = {},

		/** Variable that stores data for a history entry */
		state = {},

		/** Url of the content that is currently displayed */
		currentHref = window.location.href,

		/**
		 * Clears a given page from the cache, if no url is provided
		 * it will clear the entire cache.
		 * @param  {String} url entry that is to be deleted.
		 */
		clear = function(url) {
		  url = url || false;
		  if(url && cache.hasOwnProperty(url)) {
			delete cache[url];
		  } else {
			cache = {};
		  }
		  $container.data('smoothState').cache = cache;
		},

		/**
		 * Fetches the contents of a url and stores it in the 'cache' variable
		 * @param  {String|Object}   request  - url or request settings object
		 * @param  {Function}        callback - function that will run as soon as it finishes
		 */
		fetch = function (request, callback) {

		  // Sets a default in case a callback is not defined
		  callback = callback || $.noop;

		  // Allows us to accept a url string or object as the ajax settings
		  var settings = utility.translate(request);

		  // Check the length of the cache and clear it if needed
		  cache = utility.clearIfOverCapacity(cache, options.cacheLength);

		  // Don't prefetch if we have the content already or if it's a form
		  if(cache.hasOwnProperty(settings.url) && typeof settings.data === 'undefined') {
			return;
		  }

		  // Let other parts of the code know we're working on getting the content
		  cache[settings.url] = { status: 'fetching' };

		  // Make the ajax request
		  var ajaxRequest = $.ajax(settings);

		  // Store contents in cache variable if successful
		  ajaxRequest.done(function (html) {
			utility.storePageIn(cache, settings.url, html, elementId);
			$container.data('smoothState').cache = cache;
		  });

		  // Mark as error to be acted on later
		  ajaxRequest.fail(function () {
			cache[settings.url].status = 'error';
		  });

		  if (options.locationHeader) {
			ajaxRequest.always(function(htmlOrXhr, status, errorOrXhr){
			  // Resolve where the XHR is based on done() or fail() argument positions
			  var xhr = (htmlOrXhr.statusCode ? htmlOrXhr : errorOrXhr),
				  redirectedLocation = xhr.getResponseHeader(options.locationHeader);

			  if (redirectedLocation) {
				cache[settings.url].destUrl = redirectedLocation;
			  }
			});
		  }

		  // Call fetch callback
		  if(callback) {
			ajaxRequest.always(callback);
		  }
		},

		repositionWindow = function(){
		  // Scroll to a hash anchor on destination page
		  if(targetHash) {
			var $targetHashEl = $(targetHash, $container);
			if($targetHashEl.length){
			  var newPosition = $targetHashEl.offset().top;
			  $body.scrollTop(newPosition);
			}
			targetHash = null;
		  }
		},

		/** Updates the contents from cache[url] */
		updateContent = function (url) {
		  // If the content has been requested and is done:
		  var containerId = '#' + elementId,
			  $newContent = cache[url] ? $(cache[url].html.html()) : null;

		  if($newContent.length) {

			// Update the title
			document.title = cache[url].title;

			var new_html = document.createElement('html');
			new_html.innerHTML = cache[url].doc;
			document.body.className = $(new_html).find('body')[0].className;

			// Update current url
			$container.data('smoothState').href = url;

			// Remove loading class
			if(options.loadingClass) {
			  $body.removeClass(options.loadingClass);
			}

			// Call the onReady callback and set delay
			options.onReady.render($container, $newContent);

			$container.one('ss.onReadyEnd', function(){

			  // Allow prefetches to be made again
			  isTransitioning = false;

			  // Run callback
			  options.onAfter($container, $newContent);

			  if (options.scroll) {
				repositionWindow();
			  }
			  
			  bindPrefetchHandlers($container);

			});

			window.setTimeout(function(){
			  $container.trigger('ss.onReadyEnd');
			}, options.onReady.duration);

		  } else if (!$newContent && options.debug && consl) {
			// Throw warning to help debug in debug mode
			consl.warn('No element with an id of ' + containerId + ' in response from ' + url + ' in ' + cache);
		  } else {
			// No content availble to update with, aborting...
			window.location = url;
		  }
		},

		/**
		 * Loads the contents of a url into our container
		 * @param   {string}    url
		 * @param   {bool}      push - used to determine if we should
		 *                      add a new item into the history object
		 * @param   {bool}      cacheResponse - used to determine if
		 *                      we should allow the cache to forget this
		 *                      page after thid load completes.
		 */
		load = function (request, push, cacheResponse) {

		  var settings = utility.translate(request);

		  /** Makes these optional variables by setting defaults. */
		  if (typeof push === 'undefined') {
			push = true;
		  }
		  if (typeof cacheResponse === 'undefined') {
			cacheResponse = true;
		  }

		  var
			/** Used to check if the onProgress function has been run */
			hasRunCallback = false,

			callbBackEnded = false,

			/** List of responses for the states of the page request */
			responses = {

			  /** Page is ready, update the content */
			  loaded: function () {
				var eventName = hasRunCallback ? 'ss.onProgressEnd' : 'ss.onStartEnd';

				if (!callbBackEnded || !hasRunCallback) {
				  $container.one(eventName, function(){
					updateContent(settings.url);
					if (!cacheResponse) {
					  clear(settings.url);
					}
				  });
				}
				else if (callbBackEnded) {
				  updateContent(settings.url);
				}

				if (push) {
				  var destUrl = cache[settings.url].destUrl;

				  /** Prepare a history entry */
				  state = options.alterChangeState({ id: elementId }, cache[settings.url].title, destUrl);

				  /** Update the cache to include the history entry for future comparisons */
				  cache[settings.url].state = state;

				  /** Add history entry */
				  window.history.pushState(state, cache[settings.url].title, destUrl);
				}

				if (callbBackEnded && !cacheResponse) {
				  clear(settings.url);
				}
			  },

			  /** Loading, wait 10 ms and check again */
			  fetching: function () {

				if (!hasRunCallback) {

				  hasRunCallback = true;

				  // Run the onProgress callback and set trigger
				  $container.one('ss.onStartEnd', function(){

					// Add loading class
					if (options.loadingClass) {
					  $body.addClass(options.loadingClass);
					}

					options.onProgress.render($container);

					window.setTimeout(function (){
					  $container.trigger('ss.onProgressEnd');
					  callbBackEnded = true;
					}, options.onProgress.duration);

				  });
				}

				window.setTimeout(function () {
				  // Might of been canceled, better check!
				  if (cache.hasOwnProperty(settings.url)){
					responses[cache[settings.url].status]();
				  }
				}, 10);
			  },

			  /** Error, abort and redirect */
			  error: function (){
				if(options.debug && consl) {
				  consl.log('There was an error loading: ' + settings.url);
				} else {
				  window.location = settings.url;
				}
			  }
			};

		  if (!cache.hasOwnProperty(settings.url)) {
			fetch(settings);
		  }

		  // Run the onStart callback and set trigger
		  options.onStart.render($container);

		  window.setTimeout(function(){
			if (options.scroll) {
			  $body.scrollTop(0);
			}
			$container.trigger('ss.onStartEnd');
		  }, options.onStart.duration);

		  // Start checking for the status of content
		  responses[cache[settings.url].status]();
		},

		/**
		 * Binds to the hover event of a link, used for prefetching content
		 * @param   {object}    event
		 */
		hoverAnchor = function (event) {
		  var request,
			  $anchor = $(event.currentTarget);

		  if (utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex) && !isTransitioning) {
			event.stopPropagation();
			request = utility.translate($anchor.prop('href'));
			request = options.alterRequest(request);
			fetch(request);
		  }
		},

		/**
		 * Binds to the click event of a link, used to show the content
		 * @param   {object}    event
		 */
		clickAnchor = function (event) {

		  // Ctrl (or Cmd) + click must open a new tab
		  var $anchor = $(event.currentTarget);
		  if (!event.metaKey && !event.ctrlKey && utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex)) {

			// stopPropagation so that event doesn't fire on parent containers.
			event.stopPropagation();
			event.preventDefault();

			// Apply rate limiting.
			if (!isRateLimited()) {

			  // Set the delay timeout until the next event is allowed.
			  setRateLimitRepeatTime();

			  var request = utility.translate($anchor.prop('href'));
			  isTransitioning = true;
			  targetHash = $anchor.prop('hash');

			  // Allows modifications to the request
			  request = options.alterRequest(request);

			  options.onBefore($anchor, $container);

			  load(request);
			}
		  }
		},

		/**
		 * Binds to form submissions
		 * @param  {Event} event
		 */
		submitForm = function (event) {
		  var $form = $(event.currentTarget);

		  if (!$form.is(options.blacklist)) {

			event.preventDefault();
			event.stopPropagation();

			// Apply rate limiting.
			if (!isRateLimited()) {

			  // Set the delay timeout until the next event is allowed.
			  setRateLimitRepeatTime();

			  var request = {
				url: $form.prop('action'),
				data: $form.serialize(),
				type: $form.prop('method')
			  };

			  isTransitioning = true;
			  request = options.alterRequest(request);

			  if (request.type.toLowerCase() === 'get') {
				request.url = request.url + '?' + request.data;
			  }

			  // Call the onReady callback and set delay
			  options.onBefore($form, $container);

			  load(request, undefined, options.allowFormCaching);
			}
		  }
		},

		/**
		 * DigitalMachinist (Jeff Rose)
		 * I figured to keep these together with this above functions since they're all related.
		 * Feel free to move these somewhere more appropriate if you have such places.
		 */
		rateLimitRepeatTime = 0,
		isRateLimited = function () {
		  var isFirstClick = (options.repeatDelay === null);
		  var isDelayOver = (parseInt(Date.now()) > rateLimitRepeatTime);
		  return !(isFirstClick || isDelayOver);
		},
		setRateLimitRepeatTime = function () {
		  rateLimitRepeatTime = parseInt(Date.now()) + parseInt(options.repeatDelay);
		},
		
		/**
		 * Binds prefetch events
		 * @param   {object}    event
		 */
		bindPrefetchHandlers = function ($element) {
					
		  if (options.anchors && options.prefetch) {
			$element.find(options.anchors).not(options.prefetchBlacklist).on(options.prefetchOn, null, hoverAnchor);
		  }
		},
		
		/**
		 * Binds all events and inits functionality
		 * @param   {object}    event
		 */
		bindEventHandlers = function ($element) {

		  if (options.anchors) {
			$element.on('click', options.anchors, clickAnchor);

			bindPrefetchHandlers($element);
		  }

		  if (options.forms) {
			$element.on('submit', options.forms, submitForm);
		  }
		},

		/** Restart the container's css animations */
		restartCSSAnimations = function () {
		  var classes = $container.prop('class');
		  $container.removeClass(classes);
		  utility.redraw($container);
		  $container.addClass(classes);
		};

	  /** Merge defaults and global options into current configuration */
	  options = $.extend( {}, $.fn.smoothState.options, options );

	  /** Sets a default state */
	  if(window.history.state === null) {
		state = options.alterChangeState({ id: elementId }, document.title, currentHref);

		/** Update history entry */
		window.history.replaceState(state, document.title, currentHref);
	  } else {
		state = {};
	  }

	  /** Stores the current page in cache variable */
	  utility.storePageIn(cache, currentHref, document.documentElement.outerHTML, elementId, state);

	  /** Bind all of the event handlers on the container, not anchors */
	  utility.triggerAllAnimationEndEvent($container, 'ss.onStartEnd ss.onProgressEnd ss.onEndEnd');

	  /** Bind all of the event handlers on the container, not anchors */
	  bindEventHandlers($container);


	  /** Public methods */
	  return {
		href: currentHref,
		cache: cache,
		clear: clear,
		load: load,
		fetch: fetch,
		restartCSSAnimations: restartCSSAnimations
	  };
	},

	/** Returns elements with smoothState attached to it */
	declaresmoothState = function ( options ) {
	  return this.each(function () {
		var tagname = this.tagName.toLowerCase();
		// Checks to make sure the smoothState element has an id and isn't already bound
		if(this.id && tagname !== 'body' && tagname !== 'html' && !$.data(this, 'smoothState')) {
		  // Makes public methods available via $('element').data('smoothState');
		  $.data(this, 'smoothState', new Smoothstate(this, options));
		} else if (!this.id && consl) {
		  // Throw warning if in debug mode
		  consl.warn('Every smoothState container needs an id but the following one does not have one:', this);
		} else if ((tagname === 'body' || tagname === 'html') && consl) {
		  // We dont support making th html or the body element the smoothstate container
		  consl.warn('The smoothstate container cannot be the ' + this.tagName + ' tag');
		}
	  });
	};

  /** Sets the popstate function */
  window.onpopstate = onPopState;

  /** Makes utility functions public for unit tests */
  $.smoothStateUtility = utility;

  /** Defines the smoothState plugin */
  $.fn.smoothState = declaresmoothState;

  /* expose the default options */
  $.fn.smoothState.options = defaults;

}));
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
/*! VelocityJS.org (1.3.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;f<g&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(a.hasOwnProperty(f)&&(e=c.apply(a[f],d),e===!1))break}else if(h)for(;f<g&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(a.hasOwnProperty(f)&&(e=c.call(a[f],f,a[f]),e===!1))break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d)));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}var b=this[0],d=a(b),e=this.offset(),f=/^(?:body|html)$/i.test(d.nodeName)?{top:0,left:0}:c(d).offset();return e.top-=parseFloat(b.style.marginTop)||0,e.left-=parseFloat(b.style.marginLeft)||0,d.style&&(f.top+=parseFloat(d.style.borderTopWidth)||0,f.left+=parseFloat(d.style.borderLeftWidth)||0),{top:e.top-f.top,left:e.left-f.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=t.timestamp&&a!==!0?a:(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls),c=t.State.calls.length);for(var f=0;f<c;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],o=h[3],q=!!o,r=null;o||(o=t.State.calls[f][3]=b-16);for(var s=Math.min((b-o)/j.duration,1),u=0,w=i.length;u<w;u++){var y=i[u],z=y.element;if(g(z)){var A=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var B=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(B,function(a,b){v.setPropertyValue(z,"display",b)})}v.setPropertyValue(z,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(z,"visibility",j.visibility);for(var C in y)if(y.hasOwnProperty(C)&&"element"!==C){var D,E=y[C],F=p.isString(E.easing)?t.Easings[E.easing]:E.easing;if(p.isString(E.pattern)){var G=1===s?function(a,b){return E.endValue[b]}:function(a,b){var c=E.startValue[b],d=E.endValue[b]-c;return c+d*F(s,j,d)};D=E.pattern.replace(/{(\d+)}/g,G)}else if(1===s)D=E.endValue;else{var H=E.endValue-E.startValue;D=E.startValue+H*F(s,j,H)}if(!q&&D===E.currentValue)continue;if(E.currentValue=D,"tween"===C)r=D;else{var I;if(v.Hooks.registered[C]){I=v.Hooks.getRoot(C);var J=g(z).rootPropertyValueCache[I];J&&(E.rootPropertyValue=J)}var K=v.setPropertyValue(z,C,E.currentValue+(n<9&&0===parseFloat(D)?"":E.unitType),E.rootPropertyValue,E.scrollData);v.Hooks.registered[C]&&(v.Normalizations.registered[I]?g(z).rootPropertyValueCache[I]=v.Normalizations.registered[I]("extract",null,K[1]):g(z).rootPropertyValueCache[I]=K[1]),"transform"===K[0]&&(A=!0)}}j.mobileHA&&g(z).transformCache.translate3d===d&&(g(z).transformCache.translate3d="(0px, 0px, 0px)",A=!0),A&&v.flushTransformCache(z)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],s,Math.max(0,o+j.duration-b),o,r),1===s&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility));var n=g(l);if(f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&n){n.isAnimating=!1,n.rootPropertyValueCache={};var o=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=n.transformCache[b];n.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(o=!0,delete n.transformCache[b])}),f.mobileHA&&(o=!0,delete n.transformCache.translate3d),o&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(p){setTimeout(function(){throw p},1)}h&&f.loop!==!0&&h(e),n&&f.loop===!0&&!b&&(m.each(n.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360===0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var q=0,r=t.State.calls.length;q<r;q++)if(t.State.calls[q]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(p.isArray(a)||p.isNumber(a.length)&&!p.isString(a)&&!p.isFunction(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,n<=8&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(n<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:3,patch:2},debug:!1,timestamp:!0};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates)if(v.Hooks.templates.hasOwnProperty(c)){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates)if(v.Hooks.templates.hasOwnProperty(c)){d=v.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;v.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(n<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){var d="border-box"===v.getPropertyValue(b,"boxSizing").toString().toLowerCase();if(d===(c||!1)){var e,f,g=0,h="width"===a?["Left","Right"]:["Top","Bottom"],i=["padding"+h[0],"padding"+h[1],"border"+h[0]+"Width","border"+h[1]+"Width"];for(e=0;e<i.length;e++)f=parseFloat(v.getPropertyValue(b,i[e])),isNaN(f)||(g+=f);return c?-g:g}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}n&&!(n>9)||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var c=0;c<v.Lists.transformsBase.length;c++)!function(){var a=v.Lists.transformsBase[c];v.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<v.Lists.colors.length;e++)!function(){var a=v.Lists.colors[e];v.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!n||n>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(n<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(n<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();v.Normalizations.registered.innerWidth=b("width",!0),v.Normalizations.registered.innerHeight=b("height",!0),v.Normalizations.registered.outerWidth=b("width"),v.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(p.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(n<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(p.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(n<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(n<=8)e=m.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(i=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a)));var j=function(){i&&v.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?o.getPropertyValue(c):o[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(e=m(a).position()[c]+"px")}return e}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i)){var p=g(a);if(p&&p.isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0])}return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],n<=8)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var l=g(a);l&&l.isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((n||t.State.isAndroid&&!t.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(v.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;m.each(g(a).transformCache,function(c){return f=g(a).transformCache[c],"transformPerspective"===c?(h=f,!0):(9===n&&"rotateZ"===c&&(c="rotate"),void(b+=c+f+" "))}),h&&(b="perspective"+h+" "+b)}v.setPropertyValue(a,"transform",b)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=v.getPropertyValue(f,b));else{var h=v.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return i?y.promise||null:n}function e(a,e){function f(f){var n,o;if(i.begin&&0===A)try{i.begin.call(q,q)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===D){var w,x,B,C=/^x$/i.test(i.axis)?"Left":"Top",E=parseFloat(i.offset)||0;i.container?p.isWrapped(i.container)||p.isNode(i.container)?(i.container=i.container[0]||i.container,w=i.container["scroll"+C],B=w+m(a).position()[C.toLowerCase()]+E):i.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+C]],x=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===C?"Top":"Left")]],B=m(a).offset()[C.toLowerCase()]+E),l={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:B,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:C,alternateValue:x}},element:a},t.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===D){if(n=g(a),!n)return;if(!n.tweensContainer)return void m.dequeue(a,i.queue);"none"===n.opts.display&&(n.opts.display="auto"),"hidden"===n.opts.visibility&&(n.opts.visibility="visible"),n.opts.loop=!1,n.opts.begin=null,n.opts.complete=null,u.easing||delete i.easing,u.duration||delete i.duration,i=m.extend({},n.opts,i),o=m.extend(!0,{},n?n.tweensContainer:null);for(var F in o)if(o.hasOwnProperty(F)&&"element"!==F){var G=o[F].startValue;o[F].startValue=o[F].currentValue=o[F].endValue,o[F].endValue=G,p.isEmptyObject(u)||(o[F].easing=i.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(o[F]),a)}l=o}else if("start"===D){n=g(a),n&&n.tweensContainer&&n.isAnimating===!0&&(o=n.tweensContainer);var H=function(b,c){var d,f,g;return p.isFunction(b)&&(b=b.call(a,e,z)),p.isArray(b)?(d=b[0],!p.isArray(b[1])&&/^[\d-]/.test(b[1])||p.isFunction(b[1])||v.RegEx.isHex.test(b[1])?g=b[1]:p.isString(b[1])&&!v.RegEx.isHex.test(b[1])&&t.Easings[b[1]]||p.isArray(b[1])?(f=c?b[1]:j(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),p.isFunction(d)&&(d=d.call(a,e,z)),p.isFunction(g)&&(g=g.call(a,e,z)),[d||0,f,g]},K=function(e,f){var g,j=v.Hooks.getRoot(e),k=!1,q=f[0],r=f[1],s=f[2];if(!(n&&n.isSVG||"tween"===j||v.Names.prefixCheck(j)[1]!==!1||v.Normalizations.registered[j]!==d))return void(t.debug&&console.log("Skipping ["+j+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!s&&0!==q&&(s=0),i._cacheValues&&o&&o[e]?(s===d&&(s=o[e].endValue+o[e].unitType),k=n.rootPropertyValueCache[j]):v.Hooks.registered[e]?s===d?(k=v.getPropertyValue(a,j),s=v.getPropertyValue(a,e,k)):k=v.Hooks.templates[j][1]:s===d&&(s=v.getPropertyValue(a,e));var u,w,x,y=!1,z=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]};if(p.isString(s)&&p.isString(q)){g="";for(var A=0,B=0,C=[],D=[];A<s.length&&B<q.length;){var E=s[A],F=q[B];if(/[\d\.]/.test(E)&&/[\d\.]/.test(F)){for(var G=E,H=F,J=".",K=".";++A<s.length;){if(E=s[A],E===J)J="..";else if(!/\d/.test(E))break;G+=E}for(;++B<q.length;){if(F=q[B],F===K)K="..";else if(!/\d/.test(F))break;H+=F}G===H?g+=G:(g+="{"+C.length+"}",C.push(parseFloat(G)),D.push(parseFloat(H)))}else{if(E!==F)break;g+=E,A++,B++}}A===s.length&&B===q.length||(t.debug&&console.error('Trying to pattern match mis-matched strings ["'+q+'", "'+s+'"]'),g=d),g&&(C.length?(t.debug&&console.log('Pattern found "'+g+'" -> ',C,D,s,q),s=C,q=D,w=x=""):g=d)}g||(u=z(e,s),s=u[0],x=u[1],u=z(e,q),q=u[0].replace(/^([+-\/*])=/,function(a,b){return y=b,""}),w=u[1],s=parseFloat(s)||0,q=parseFloat(q)||0,"%"===w&&(/^(fontSize|lineHeight)$/.test(e)?(q/=100,w="em"):/^scale/.test(e)?(q/=100,w=""):/(Red|Green|Blue)$/i.test(e)&&(q=q/100*255,w="")));var L=function(){var d={myParent:a.parentNode||c.body,position:v.getPropertyValue(a,"position"),fontSize:v.getPropertyValue(a,"fontSize")},e=d.position===I.lastPosition&&d.myParent===I.lastParent,f=d.fontSize===I.lastFontSize;I.lastParent=d.myParent,I.lastPosition=d.position,I.lastFontSize=d.fontSize;var g=100,h={};if(f&&e)h.emToPx=I.lastEmToPx,h.percentToPxWidth=I.lastPercentToPxWidth,h.percentToPxHeight=I.lastPercentToPxHeight;else{var i=n&&n.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(i),d.myParent.appendChild(i),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(i,b,"hidden")}),t.CSS.setPropertyValue(i,"position",d.position),t.CSS.setPropertyValue(i,"fontSize",d.fontSize),t.CSS.setPropertyValue(i,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(i,b,g+"%")}),t.CSS.setPropertyValue(i,"paddingLeft",g+"em"),h.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(i,"width",null,!0))||1)/g,h.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(i,"height",null,!0))||1)/g,h.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(i,"paddingLeft"))||1)/g,d.myParent.removeChild(i)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),h.remToPx=I.remToPx,h.vwToPx=I.vwToPx,h.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),a),h};if(/[\/*]/.test(y))w=x;else if(x!==w&&0!==s)if(0===q)w=x;else{h=h||L();var M=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(x){case"%":s*="x"===M?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:s*=h[x+"ToPx"]}switch(w){case"%":s*=1/("x"===M?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:s*=1/h[w+"ToPx"]}}switch(y){case"+":q=s+q;break;case"-":q=s-q;break;case"*":q*=s;break;case"/":q=s/q}l[e]={rootPropertyValue:k,startValue:s,currentValue:s,endValue:q,unitType:w,easing:r},g&&(l[e].pattern=g),t.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(l[e]),a)};for(var L in s)if(s.hasOwnProperty(L)){var M=v.Names.camelCase(L),N=H(s[L]);if(v.Lists.colors.indexOf(M)>=0){var O=N[0],P=N[1],Q=N[2];if(v.RegEx.isHex.test(O)){for(var R=["Red","Green","Blue"],S=v.Values.hexToRgb(O),T=Q?v.Values.hexToRgb(Q):d,U=0;U<R.length;U++){var V=[S[U]];P&&V.push(P),T!==d&&V.push(T[U]),K(M+R[U],V)}continue}}K(M,N)}l.element=a}l.element&&(v.Values.addClass(a,"velocity-animating"),J.push(l),n=g(a),n&&(""===i.queue&&(n.tweensContainer=l,n.opts=i),n.isAnimating=!0),A===z-1?(t.State.calls.push([J,q,i,null,y.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):A++)}var h,i=m.extend({},t.defaults,u),l={};switch(g(a)===d&&t.init(a),parseFloat(i.delay)&&i.queue!==!1&&m.queue(a,i.queue,function(b){t.velocityQueueEntryFlag=!0,g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:b}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":
i.duration=r;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}t.mock!==!1&&(t.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(t.mock)||1,i.delay*=parseFloat(t.mock)||1)),i.easing=j(i.easing,i.duration),i.begin&&!p.isFunction(i.begin)&&(i.begin=null),i.progress&&!p.isFunction(i.progress)&&(i.progress=null),i.complete&&!p.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=t.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,i.queue===!1?i.delay?setTimeout(f,i.delay):f():m.queue(a,i.queue,function(a,b){return b===!0?(y.promise&&y.resolver(q),!0):(t.velocityQueueEntryFlag=!0,void f(a))}),""!==i.queue&&"fx"!==i.queue||"inprogress"===m.queue(a)[0]||m.dequeue(a)}var h,i,n,o,q,s,u,x=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));p.isWrapped(this)?(i=!1,o=0,q=this,n=this):(i=!0,o=1,q=x?arguments[0].elements||arguments[0].e:arguments[0]);var y={promise:null,resolver:null,rejecter:null};if(i&&t.Promise&&(y.promise=new t.Promise(function(a,b){y.resolver=a,y.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,u=arguments[0].options||arguments[0].o):(s=arguments[o],u=arguments[o+1]),q=f(q),!q)return void(y.promise&&(s&&u&&u.promiseRejectEmpty===!1?y.resolver():y.rejecter()));var z=q.length,A=0;if(!/^(stop|finish|finishAll)$/i.test(s)&&!m.isPlainObject(u)){var B=o+1;u={};for(var C=B;C<arguments.length;C++)p.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?p.isString(arguments[C])||p.isArray(arguments[C])?u.easing=arguments[C]:p.isFunction(arguments[C])&&(u.complete=arguments[C]):u.duration=arguments[C]}var D;switch(s){case"scroll":D="scroll";break;case"reverse":D="reverse";break;case"finish":case"finishAll":case"stop":m.each(q,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||u!==!0&&!p.isString(u)||(m.each(m.queue(b,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(u)?u:"",[]))});var E=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||void m.each(q,function(c,d){if(d===e)if((u===!0||p.isString(u))&&(m.each(m.queue(d,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(u)?u:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&m.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),E.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(m.each(E,function(a,b){l(b,!0)}),y.promise&&y.resolver(q)),a();default:if(!m.isPlainObject(s)||p.isEmptyObject(s)){if(p.isString(s)&&t.Redirects[s]){h=m.extend({},u);var F=h.duration,G=h.delay||0;return h.backwards===!0&&(q=m.extend(!0,[],q).reverse()),m.each(q,function(a,b){parseFloat(h.stagger)?h.delay=G+parseFloat(h.stagger)*a:p.isFunction(h.stagger)&&(h.delay=G+h.stagger.call(b,a,z)),h.drag&&(h.duration=parseFloat(F)||(/^(callout|transition)/.test(s)?1e3:r),h.duration=Math.max(h.duration*(h.backwards?1-a/z:(a+1)/z),.75*h.duration,200)),t.Redirects[s].call(b,b,h||{},a,z,q,y.promise?y:d)}),a()}var H="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return y.promise?y.rejecter(new Error(H)):console.log(H),a()}D="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(q,function(a,b){p.isNode(b)&&e(b,a)}),h=m.extend({},t.defaults,u),h.loop=parseInt(h.loop,10);var K=2*h.loop-1;if(h.loop)for(var L=0;L<K;L++){var M={delay:h.delay,progress:h.progress};L===K-1&&(M.display=h.display,M.visibility=h.visibility,M.complete=h.complete),w(q,"reverse",M)}return a()};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={},n={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in n)if(n.hasOwnProperty(c)){l[c]=a.style[c];var d=v.getPropertyValue(a,c);n[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},t(a,n,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),e!==f-1?i.complete=null:i.complete=function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,k,i)}}),t}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)});
(function($){
	"use strict";

	window.erwittCursorNextText = $('.overlay-next').data('text');
	window.erwittCursorPreviousText = $('.overlay-previous').data('text');
	window.erwittCursorCloseText = $('.overlay-close').data('text');

	function openSubnav() {
		var $el = $(this);
		if($el.data('nav-showed') == '1') {
			return false;
		}
		var $dropdown = $el.find('ul').first();
		$dropdown.velocity('stop').velocity({opacity: 1}, {duration: 150, display: 'block', complete: function(){
		$el.data('nav-showed', '1');
		}});
		var moveLeft = '',
			position = $dropdown.parent().offset(),
			dropdownPosition = position.left;
		dropdownPosition = dropdownPosition - ($dropdown.width() / 2);

		$dropdown.css('margin-left', 0);

		if((position.left + $dropdown.width()) > $(window).width()) {
			moveLeft = (position.left + $dropdown.width()) - $(window).width();
		} else {
			moveLeft = '';
		}

		if($dropdown.length > 0) {
			if($dropdown.parent().hasClass('first-level')) {
				$dropdown.css('margin-left', ($dropdown.width() / -2) - moveLeft);
			} else {
				if($dropdown.parent().outerWidth()*2 + $dropdown.parent().offset().left > $(window).width()) {
					$dropdown.addClass('dropdown-left');
				} else {
					$dropdown.removeClass('dropdown-left');
				}
			}
		}
	}

	function hideSubnav() {
		var $el = $(this);
		var $dropdown = $el.find('ul').first();
		$dropdown.velocity('stop').velocity({opacity: 0}, {duration: 150,  display: 'none', complete: function(){
			$el.data('nav-showed', '0');
		}});
	}

	function zoomBlogImages() {
		$('.blog-post .blog-post-img').each(function(){
			var $that = $(this),
				$wrapper = $that.find('.img-wrapper'),
				$img = $that.find('img');
			$that.parent().find('.blog-post-header').on('mouseenter', function(){
				var imgHeight = $img.height();
				$wrapper.css('height', imgHeight).css('margin-top', -(imgHeight/2));
				$img.css('opacity', '1');
				$img.css('margin-top', -(imgHeight/2));
			});
			$that.parent().find('.blog-post-header').on('mouseleave', function(){
				$wrapper.css('height', '60px').css('margin-top', '-30px');
				$img.css('opacity', '0');
			});
				
		});
	}

	function setContentGallery() {
		$('.single-post-content').each(function(){
			var $that = $(this),
				$gallery = $that.find('.gallery');
			if($that.hasClass('full-width-gallery')) {
				$gallery.css('left', 0);
				var	windowWidth = $(window).width(),
					galleryWidth = $gallery.width(),
					position = $gallery.offset(),
					rowWidth = windowWidth - galleryWidth,
				offsetLeft = position.left - rowWidth/2;
				$gallery.css('left', -(offsetLeft));
			}
			
		});
	}

	function setContactForm() {
		$('.wpcf7-form').each(function(){
			var $that = $(this);
			$that.find('> div:not(:first-of-type())').addClass('contact-input ef-input');
		});
		$('.ef-input').each(function(){
			var $that = $(this);
			if($that.find('.wpcf7-form-control').hasClass('wpcf7-validates-as-required')) {
				$that.addClass('input-required');
			}
			$that.on('focus', 'input, textarea, select', function(){
				if($that.find('input, textarea, select').val().length === 0) {
					$that.find('label').addClass('hide-label');
				} else {
					$that.find('label').addClass('hide-label');
				}
			});
			$that.on('blur', 'input, textarea, select', function(){
				if($that.find('input, textarea, select').val().length === 0) {
					$that.find('label').removeClass('hide-label');
				} else {
					$that.find('label').addClass('hide-label');
				}
			});
			$that.on('keyup', function() {
				if($that.find('span').hasClass('wpcf7-not-valid-tip')) {
				if ($that.find('input, textarea, select').val().length > 0) {
					$that.find('input, textarea, select').removeClass('wpcf7-not-valid');
				} else {
					$that.find('input, textarea, select').addClass('wpcf7-not-valid');
				}
			}
			});
			
		});
	}

	function showMobileOverlay() {
		$('.burger-nav').on('click', function(e){
			e.preventDefault();
			$('body').toggleClass('no-scroll');
			$('.mobile-navbar-helper').toggleClass('open-overlay');
			$('.mobile-overlay').toggleClass('show-mobile-nav');
			$('.burger-nav').toggleClass('burger-animate');
		});
	}

	$(window).on('loaded', function(){
		$('.desktop-menu > li:not(.current-menu-item) > a').addClass('link-hover');
		zoomBlogImages();

		$('.desktop-menu .menu-item-has-children').hover(openSubnav, hideSubnav);
		$('.desktop-menu > .menu-item-has-children').addClass('first-level');

		if($('.main-navigation').hasClass('nav-light')) {
			$('.nav-logo-light').hide();
			$('.nav-logo-dark').css('opacity', 1);
		}
		if($('.main-navigation').hasClass('nav-dark')) {
			$('.nav-logo-dark').hide();
			$('.nav-logo-light').css('opacity', 1);
		}

		if($('.main-navigation').hasClass('nav-logo-center')) {
			var windowWidth = $(window).width() /2,
				logoWidth = $('.nav-logo').width() /2;
			if($('.main-navigation').hasClass('show-burger')) {
				$('.nav-items-left').css('max-width', windowWidth - logoWidth - 20);
				$('.nav-items-right').css('max-width', windowWidth - logoWidth - 85);
			} else {
				$('.nav-items').css('max-width', windowWidth - logoWidth - 20);
			}
		}

		if($('.nav-items').hasClass('nav-items-center')) {
			var windowWidth = $(window).width() /2,
				navWidth = $('.nav-items-center').width() /2;
			if($('.main-navigation').hasClass('show-burger')) {
				$('.nav-items-left, .nav-logo-left .nav-logo').css('max-width', windowWidth - navWidth - 20);
				$('.nav-items-right, .nav-logo-right .nav-logo').css('max-width', windowWidth - navWidth - 85);
			} else {
				$('.nav-items-left, .nav-items-right, .nav-logo').css('max-width', windowWidth - navWidth - 20);
			}
		}

		$('blockquote').prepend('<span class="quote-icon"><svg version="1.1" class="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="30px" width="30px" viewBox="0 0 75.999 75.999" style="enable-background:new 0 0 75.999 75.999;" xml:space="preserve"><path d="M14.579,5C6.527,5,0,11.716,0,20c0,8.285,6.527,15,14.579,15C29.157,35,19.438,64,0,64v7C34.69,71,48.286,5,14.579,5z M56.579,5C48.527,5,42,11.716,42,20c0,8.285,6.527,15,14.579,15C71.157,35,61.438,64,42,64v7C76.69,71,90.286,5,56.579,5z"/></svg><span>');

		$('.burger-info').on('click', function(){
			$('.overlay-info').toggleClass('open-overlay-info');
			$('body').toggleClass('no-scroll-y');
			$('.overlay-info-helper').toggleClass('open-overlay');
		});

		setContentGallery();
		showMobileOverlay();
		setContactForm();

	});
	var resizeTimer;
	$(window).on('resize', function(){
		if($('.main-navigation').hasClass('nav-logo-center')) {
			var windowWidth = $(window).width() /2,
				logoWidth = $('.nav-logo').width() /2;
			if($('.main-navigation').hasClass('show-burger')) {
				$('.nav-items-left').css('max-width', windowWidth - logoWidth - 20);
				$('.nav-items-right').css('max-width', windowWidth - logoWidth - 85);
			} else {
				$('.nav-items').css('max-width', windowWidth - logoWidth - 20);
			}
		}
		if($('.nav-items').hasClass('nav-items-center')) {
			var windowWidth = $(window).width() /2,
				navWidth = $('.nav-items-center').width() /2;
			if($('.main-navigation').hasClass('show-burger')) {
				$('.nav-items-left, .nav-logo-left .nav-logo').css('max-width', windowWidth - navWidth - 20);
				$('.nav-items-right, .nav-logo-right .nav-logo').css('max-width', windowWidth - navWidth - 85);
			} else {
				$('.nav-items-left, .nav-items-right, .nav-logo').css('max-width', windowWidth - navWidth - 20);
			}
		}

	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		setContentGallery();

		// Run code here, resizing has "stopped"
	}, 250);
	});

	$('#transition-wrapper').on('mouseenter', '.share', function(){
		$(this).addClass('show-share');
	});
	$('#transition-wrapper').on('mouseleave', '.share', function(){
		$(this).removeClass('show-share');
	});

	$('#transition-wrapper').on('click', '.share-inner a', function(e) {
		e.preventDefault();
		var winHeight = 300;
		var winWidth = 500;
		var winTop = (screen.height / 2) - (winHeight / 2);
		var winLeft = (screen.width / 2) - (winWidth / 2);
		window.open(this.href, this.title, 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
	});

	$(window).on('loaded', function(){
	var cursor            = document.getElementById("overlay-cursor"),
		distancePosition  = 0,
		distancePositionY = 0,
		needForRAF        = true;

	function mouseMove(e) {
		e.preventDefault();
		distancePosition = e.clientX;
		distancePositionY = e.clientY;
		cursor.style.display = 'block';
		if (needForRAF) {
			needForRAF = false;
			requestAnimationFrame(update);
		}
		// update();
	}

	function update() {
		needForRAF = true;
		cursor.style.left = distancePosition + "px";
		cursor.style.top = distancePositionY + "px";
	}

	$('.erwitt-overlay').on("mousemove", mouseMove);

	$('.erwitt-overlay').on('mouseenter', '.overlay-previous', function(){
		if(!$('.erwitt-overlay').hasClass('first-slide')) {
			$('.overlay-cursor').text(window.erwittCursorPreviousText);
		} else {
			$('.overlay-cursor').text('');
		}
	});
	$('.erwitt-overlay').on('mouseenter', '.overlay-next', function(){
		if(!$('.erwitt-overlay').hasClass('last-slide')) {
			$('.overlay-cursor').text(window.erwittCursorNextText);
		} else {
			$('.overlay-cursor').text('');
		}
	});
	$('.erwitt-overlay').on('mouseenter', '.overlay-close', function(){
		$('.overlay-cursor').text(window.erwittCursorCloseText);
	});
	$('.erwitt-overlay').on('click', '.slide-text a', function(e){
		e.preventDefault();
		$('.erwitt-overlay').addClass('close');
		$('.overlay-cursor').hide(0);
		$('.erwitt-overlay-inner').data('swiper').destroy();
		setTimeout(function(){
			$('.erwitt-overlay').removeClass('show').removeClass('close');
			$('.erwitt-overlay-inner').html('');
		},350);
	});
	$('.erwitt-overlay').on('mouseenter', '.overlay-helper', function(){
		$('.overlay-cursor').text('');
	});
	});


})(jQuery);


(function($){
	$(window).on('loaded', function(){
		$('.index-content').on('click', '.sw-box', function(e){
			e.preventDefault();
			var that = this;
			var elements = $('.swiper-slide span');
			var counter = 0;
			var current = $(this).data('index');
			
			elements.each(function(i, el){
				if(!$(el).parent().hasClass('swiper-slide-duplicate')) {
					markup += '<div class="swiper-slide"><div style="background-image: url('+el.href+')"></div></div>';
					if($(that).data('href') == $(el).data('href')) {
						current = counter;
					}
					counter += 1;
				}
			});
			var overlay = $('.erwitt-overlay');
			var markup = $('.overlay-content').html();
			
			overlay.find('.erwitt-overlay-inner').html('');
			overlay.find('.erwitt-overlay-inner').html('<div class="swiper-wrapper"></div>');
			overlay.find('.erwitt-overlay-inner .swiper-wrapper').html(markup);
			overlay.addClass('show');
			var overlayTimer;
			var overlaySwiper = new Swiper('.erwitt-overlay-inner', {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 0,
				runCallbacksOnInit: false,
				initialSlide: current,
				preloadImages: false,
				updateOnImagesReady: false,
				lazyLoading: false,
				loop: false,
				mousewheelControl: true,
				mousewheelEventsTarged: '.erwitt-overlay',
				keyboardControl: true,
				slideToClickedSlide: false,
				breakpoints: {
					640: {
						slidesOffsetBefore: 0,
						spaceBetween: 25,
						centeredSlides: true,
					}
				},
				onTransitionEnd: function(swiper){
					window.bLazy.revalidate();

				},
				onInit: function(swiper){
					window.bLazy.revalidate();
					$('.overlay-helper').html('');
					if($('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active').length > 0) {
						var el = $('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active div').clone();
						$('.overlay-helper').html(el);
						$('.overlay-helper iframe').addClass('show');
						$('.overlay-helper iframe').attr('src', $('.overlay-helper iframe').data('src'));
					}

					if(swiper.progress == 1) {
						$('.erwitt-overlay').addClass('last-slide');
						if($('.overlay-cursor').text() == window.erwittCursorNextText) {
							$('.overlay-cursor').text('');
						}
					} else if (swiper.progress == 0) {
						$('.erwitt-overlay').addClass('first-slide');
						if($('.overlay-cursor').text() == window.erwittCursorPreviousText) {
							$('.overlay-cursor').text('');
						}
					} else {
						$('.erwitt-overlay').removeClass('first-slide').removeClass('last-slide');
					}
				},
				onSlideChangeStart: function(swiper){
					if(swiper.progress == 1) {
						if($('.erwitt-overlay-inner .swiper-slide-text.swiper-slide-active').length > 0) {
							var el = $('.erwitt-overlay-inner .swiper-slide-text.swiper-slide-active .slide-text').clone();
							$('.overlay-helper').html(el);
						} else {
							$('.overlay-helper').html('');
						}
					} else {
						$('.overlay-helper').html('');
					}
					if(swiper.progress == 1) {
						$('.erwitt-overlay').addClass('last-slide');
						if($('.overlay-cursor').text() == window.erwittCursorNextText) {
							$('.overlay-cursor').text('');
						}
					} else if (swiper.progress == 0) {
						$('.erwitt-overlay').addClass('first-slide');
						if($('.overlay-cursor').text() == window.erwittCursorPreviousText) {
							$('.overlay-cursor').text('');
						}
					} else {
						$('.erwitt-overlay').removeClass('first-slide').removeClass('last-slide');
					}
				},

				onSlideChangeEnd: function(swiper){
					var parent = $('.sw-box[data-index="'+swiper.activeIndex+'"').parent();
					if(parent.offset()) {
						window.scrollTo(0, parent.offset().top);
					}
					if($('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active').length > 0) {
						var el = $('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active div').clone();
						$('.overlay-helper').html(el);
						$('.overlay-helper iframe').addClass('show');
						$('.overlay-helper iframe').attr('src', $('.overlay-helper iframe').data('src'));
					}

				}
			});
		});

		$('.unfold-index').on('click', function(e){
			e.preventDefault();
			$(this).parent().parent().removeClass('fold-index');
			window.bLazy.revalidate();
		})
	});
})(jQuery);
(function($){
	'use strict';

	$(window).load(function(){
		$(window).trigger('loaded');

		$('.transition-wrapper').on('click', '.show-details', function(e){
			e.preventDefault();
			if($('body').hasClass("show-details")) {
				$('body').removeClass('show-details');
			} else {
				$('body').addClass('show-details');
			}
		});

	});

	$(window).on('loaded', function(){
		$('.transition-wrapper').css('opacity', 1);
		var swiper = new Swiper('.slider1', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 100,
			loop: true,
			// freeMode: true,
			preloadImages: true,
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: false,
			runCallbacksOnInit: false,
			onInit: function(){
				window.bLazy.load(document.querySelectorAll('.b-lazy'), true);
				$('.slider1').data('swiper').update(true);
				$('.portfolio-title').html($('.swiper-slide-active .slide-title').html());
				$('.portfolio-categories').html($('.swiper-slide-active .slide-categories').html());
				$('.portfolio-categories a').addClass('link-hover');
			},
			onTransitionStart: function(){
				$('.portfolio-title-wrapper').addClass('transition');
			},
			onTransitionEnd: function(){
				$('.portfolio-title-wrapper').removeClass('transition');
				$('.portfolio-title').html($('.swiper-slide-active .slide-title').html());
				$('.portfolio-categories').html($('.swiper-slide-active .slide-categories').html());
				$('.portfolio-categories a').addClass('link-hover');
			},
			breakpoints: {
				640: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				}
			}
		});
		if($('.slider2').length > 0) {
		var swiper2 = new Swiper('.slider2', {
			slidesPerView: 'auto',
			centeredSlides: false,
			spaceBetween: 100,
			loop: false,
			preloadImages: false,
			updateOnImagesReady: false,
			runCallbacksOnInit: false,
			paginationType: 'fraction',
			pagination: '.portfolio-counter',
			paginationFractionRender: function (swiper, currentClassName, totalClassName) {
				return '<span class="' + currentClassName + '"></span>' +
						$('.portfolio-counter').data('word') +
						'<span class="' + totalClassName + '"></span>';
			},
			onTransitionEnd: function(){
				window.bLazy.revalidate();
			},
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: false,
			slidesOffsetBefore: 50,
			breakpoints: {
				1025: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				},
				640: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				}
			}
		});
		}

		var swiper3 = new Swiper('.slider3', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 100,
			loop: true,
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: false,
			onInit: function(){
				$('.slider3').data('swiper').update(true);
				window.bLazy.load(document.querySelectorAll('.b-lazy'), true);
				$('.portfolio-title').html($('.swiper-slide-active .slide-title').html());
				$('.portfolio-categories').html($('.swiper-slide-active .slide-categories').html());
				$('.portfolio-categories a').addClass('link-hover');
			},
			onTransitionStart: function(){
				$('.portfolio-title-wrapper').addClass('transition');
			},
			onTransitionEnd: function(){
				$('.portfolio-title-wrapper').removeClass('transition');
				$('.portfolio-title').html($('.swiper-slide-active .slide-title').html());
				$('.portfolio-categories').html($('.swiper-slide-active .slide-categories').html());
				$('.portfolio-categories a').addClass('link-hover');
			},
			breakpoints: {
				640: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				}
			}
		});
		$('.erwitt-overlay').on('click', '.overlay-next', function(){
			$('.erwitt-overlay-inner').data('swiper').slideNext();
		});
		$('.erwitt-overlay').on('click', '.overlay-previous', function(){
			$('.erwitt-overlay-inner').data('swiper').slidePrev();
		});
		var canClose = true;
		$('.erwitt-overlay .overlay-close, .erwitt-overlay .overlay-mobile-close').on('click', function(){
			if(canClose === false)
				return false;
			canClose = false;
			$('.erwitt-overlay').addClass('close');
			$('.overlay-cursor').hide(0);
			$('.erwitt-overlay-inner').data('swiper').destroy();
			setTimeout(function(){
				$('.erwitt-overlay').removeClass('show').removeClass('close');
				$('.erwitt-overlay-inner').html('');
				$('.overlay-helper').html('');
				canClose = true;
			},350);
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				if(!$('.erwitt-overlay').hasClass('show')) {
					return false;
				}
				if(canClose === false)
					return false;
				canClose = false;
				$('.erwitt-overlay').addClass('close');
				$('.overlay-cursor').hide(0);

				$('.erwitt-overlay-inner').data('swiper').destroy();
				setTimeout(function(){
					$('.erwitt-overlay').removeClass('show').removeClass('close');
					$('.erwitt-overlay-inner').html('');
					$('.overlay-helper').html('');
					canClose = true;
				},350);
			}
		});
		
		$('.content').on('click', '.sw-box', function(e){
			e.preventDefault();
			var that = this;
			var elements = $('.swiper-slide span[data-rel="'+$(that).data('rel')+'"]');
			var counter = 0;
			var current = 0;
			elements.each(function(i, el){
				if(!$(el).parent().hasClass('swiper-slide-duplicate')) {
					markup += '<div class="swiper-slide"><div style="background-image: url('+el.href+')"></div></div>';
					if($(that).data('href') == $(el).data('href')) {
						current = counter;
					}
					counter += 1;
				}
			});
			var overlay = $('.erwitt-overlay');
			var markup = $('.overlay-content').html();

			overlay.find('.erwitt-overlay-inner').html('<div class="swiper-wrapper"></div>');
			overlay.find('.erwitt-overlay-inner .swiper-wrapper').html(markup);
			overlay.addClass('show');

			var overlayTimer;
			var overlaySwiper = new Swiper('.erwitt-overlay-inner', {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 0,
				runCallbacksOnInit: false,
				initialSlide: current,
				loop: false,
				zoom: true,
				mousewheelControl: true,
				mousewheelEventsTarged: '.erwitt-overlay',
				keyboardControl: true,
				slideToClickedSlide: false,
				breakpoints: {
					640: {
						slidesOffsetBefore: 0,
						spaceBetween: 25,
						centeredSlides: true,
					}
				},
				onInit: function(swiper){
					$('.overlay-helper').html('');
					if($('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active').length > 0) {
						var el = $('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active div').clone();
						$('.overlay-helper').html(el);
						$('.overlay-helper iframe').addClass('show');
						$('.overlay-helper iframe').attr('src', $('.overlay-helper iframe').data('src'));
					}
					if(swiper2) {
						clearTimeout(overlayTimer);
						overlayTimer = setTimeout(function(){
							if($('.swiper-slide-description').length > 0) {
								swiper2.slideTo(swiper.realIndex + 1, 0);
							} else {
								swiper2.slideTo(swiper.realIndex, 0);
							}
						}, 400);
					}

					if(swiper.progress == 1) {
						$('.erwitt-overlay').addClass('last-slide');
						if($('.overlay-cursor').text() == window.erwittCursorNextText) {
							$('.overlay-cursor').text('');
						}
					} else if (swiper.progress == 0) {
						$('.erwitt-overlay').addClass('first-slide');
						if($('.overlay-cursor').text() == window.erwittCursorPreviousText) {
							$('.overlay-cursor').text('');
						}
					} else {
						$('.erwitt-overlay').removeClass('first-slide').removeClass('last-slide');
					}

				},
				onSlideChangeStart: function(swiper){
					if(swiper2) {
						if($('.swiper-slide-description').length > 0) {
							swiper2.slideTo(swiper.realIndex + 1, 0);
						} else {
							swiper2.slideTo(swiper.realIndex, 0);
						}
					}
					if(swiper.progress == 1) {
						if($('.erwitt-overlay-inner .swiper-slide-text.swiper-slide-active').length > 0) {
							var el = $('.erwitt-overlay-inner .swiper-slide-text.swiper-slide-active .slide-text').clone();
							$('.overlay-helper').html(el);
						} else {
							$('.overlay-helper').html('');
						}
					} else {
						$('.overlay-helper').html('');
					}

					if(swiper.progress == 1) {
						$('.erwitt-overlay').addClass('last-slide');
						if($('.overlay-cursor').text() == window.erwittCursorNextText) {
							$('.overlay-cursor').text('');
						}
					} else if (swiper.progress == 0) {
						$('.erwitt-overlay').addClass('first-slide');
						if($('.overlay-cursor').text() == window.erwittCursorPreviousText) {
							$('.overlay-cursor').text('');
						}
					} else {
						$('.erwitt-overlay').removeClass('first-slide').removeClass('last-slide');
					}
				},

				onSlideChangeEnd: function(swiper){
					if($('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active').length > 0) {
						var el = $('.erwitt-overlay-inner .swiper-oembed.swiper-slide-active div').clone();
						$('.overlay-helper').html(el);
						$('.overlay-helper iframe').addClass('show');
						$('.overlay-helper iframe').attr('src', $('.overlay-helper iframe').data('src'));
					}
				}
			});


		});



		var swiper4 = new Swiper('.slider4', {
			slidesPerView: 'auto',
			centeredSlides: false,
			spaceBetween: 100,
			loop: true,
			// freeMode: true,
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: false,
			breakpoints: {
				640: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				},
				1025: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				}
			},
			onTransitionEnd: function(){
				window.bLazy.revalidate();
			},
			onSlideChangeStart: function(swiper){
				$('.slider4-title.active').removeClass('active');
				$('.slider4-title:eq('+swiper.realIndex+')').addClass('active');
			}
		});


		var swiper5 = new Swiper('.slider5', {
			slidesPerView: 'auto',
			centeredSlides: false,
			spaceBetween: 100,
			// loop: true,
			// freeMode: true,
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: true,
			breakpoints: {
				1025: {
					slidesOffsetBefore: 0,
					spaceBetween: 25,
					centeredSlides: true,
				}
			},
			onSlideChangeStart: function(swiper){
				$('.slider5-title.active').removeClass('active');
				$('.slider5-title:eq('+swiper.realIndex+')').addClass('active');
			}
		});
		var swiper5titles = new Swiper('.slider5-titles', {
			slidesPerView: 'auto',
			direction: 'vertical',
			centeredSlides: true,
			mousewheelControl: true,
			keyboardControl: true,
			slideToClickedSlide: true,
			nextButton: '.arrow-bottom',
			prevButton: '.arrow-top',
			onSlideChangeStart: function(swiper){
				$('.slider5-title.active').removeClass('active');
				$('.slider5-title:eq('+swiper.realIndex+')').addClass('active');
			}
		});

		swiper5.params.control = swiper5titles;
		swiper5titles.params.control = swiper5;

		$('.transition-wrapper').on('mouseenter', '.show-thumbnails', function(){
			$('.thumbnails').css('display', 'block');
		});
		$('.transition-wrapper').on('click', '.show-thumbnails', function(e){
			e.preventDefault();
			$('.thumbnails').addClass('show');
			window.bLazy.revalidate();
		});

		$('.thumbnails').on('click', '.thumbnails-inner', function(e){
			e.preventDefault();
			if(e.target.classList[0] != 'img-wrapper' && e.target.classList[0] != 'b-lazy') {
				$('.thumbnails').addClass('close');
				setTimeout(function(){
					$('.thumbnails').removeClass('show').removeClass('close');
				},350);
			}
		});

	});

})(jQuery);



(function($) {
	'use strict';
	var $page = $('#transition-wrapper'),
	options = {
		debug: false,
		prefetch: false,
		cacheLength: 2,
		blacklist: 'form, .comment-reply-link',
		onStart: {
			duration: 350, // Duration of our animation
			render: function ($container) {
				$container.addClass('is-exiting');
				smoothState.restartCSSAnimations();
				$('.transition-wrapper').css('opacity', 0);
			}
		},
		onReady: {
			duration: 0,
			render: function ($container, $newContent) {
				$container.removeClass('is-exiting');
				$container.html($newContent);
				$('#custom_style').remove();
				createStyles($('.custom-styles').text());
				$(window).trigger('loaded');

				if($('.main-navigation').hasClass('nav-light')) {
					$('.nav-logo-light').hide();
					$('.nav-logo-dark').css('opacity', 1);
				}
				if($('.main-navigation').hasClass('nav-dark')) {
					$('.nav-logo-dark').hide();
					$('.nav-logo-light').css('opacity', 1);
				}
				$('body').removeClass('no-scroll');
			}
		}
	};

	var smoothState = $page.smoothState(options).data('smoothState');
	$(document).ready(function(){
		createStyles($('.custom-styles').text());
		window.bLazy = new Blazy({
			offset: 300,
			success: function(element){
				setTimeout(function(){
					var parent = element.parentNode;
					parent.className = parent.className.replace(/\bloading\b/,'');
					// parent.parentNode.classList += ' loaded';
				}, 100);
			}
		});
	});
	$(window).on('loaded', function(){
		window.addEventListener('mouseover', function onFirstHover(e) {
			window.USER_CAN_HOVER = true;
			window.removeEventListener('mouseover', onFirstHover, false);
			document.body.className += " can-hover";
		}, false);

		window.bLazy = new Blazy({
			offset: 300,
			success: function(element){
				setTimeout(function(){
					var parent = element.parentNode;
					parent.className = parent.className.replace(/\bloading\b/,'');
					parent.parentNode.classList += ' loaded';
				}, 100);
			}
		});
		if("function" == typeof $.fn.wpcf7InitForm) {
			$('div.wpcf7 > form').wpcf7InitForm();
		}				
	});

	function createStyles(styleString) {
		var style = document.createElement('style');
		style.id = 'custom_style';
		style.type = 'text/css';
		style.innerHTML = styleString;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

})(jQuery);