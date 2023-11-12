import React from "react";
import { styles } from "../styles";
import a from "../assets/overview/a.jpg" ;
import b from "../assets/overview/b.jpg" ;
const Works = () => {
  function FastClick(e, t) {
    function n(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var i;
    (t = t || {}),
      (this.trackingClick = !1),
      (this.trackingClickStart = 0),
      (this.targetElement = null),
      (this.touchStartX = 0),
      (this.touchStartY = 0),
      (this.lastTouchIdentifier = 0),
      (this.touchBoundary = t.touchBoundary || 10),
      (this.layer = e),
      (this.tapDelay = t.tapDelay || 200),
      FastClick.notNeeded(e) ||
        (deviceIsAndroid &&
          (e.addEventListener("mouseover", n(this.onMouse, this), !0),
          e.addEventListener("mousedown", n(this.onMouse, this), !0),
          e.addEventListener("mouseup", n(this.onMouse, this), !0)),
        e.addEventListener("click", n(this.onClick, this), !0),
        e.addEventListener("touchstart", n(this.onTouchStart, this), !1),
        e.addEventListener("touchmove", n(this.onTouchMove, this), !1),
        e.addEventListener("touchend", n(this.onTouchEnd, this), !1),
        e.addEventListener("touchcancel", n(this.onTouchCancel, this), !1),
        Event.prototype.stopImmediatePropagation ||
          ((e.removeEventListener = function (t, n, i) {
            var a = Node.prototype.removeEventListener;
            "click" === t
              ? a.call(e, t, n.hijacked || n, i)
              : a.call(e, t, n, i);
          }),
          (e.addEventListener = function (t, n, i) {
            var a = Node.prototype.addEventListener;
            "click" === t
              ? a.call(
                  e,
                  t,
                  n.hijacked ||
                    (n.hijacked = function (e) {
                      e.propagationStopped || n(e);
                    }),
                  i
                )
              : a.call(e, t, n, i);
          })),
        "function" == typeof e.onclick &&
          ((i = e.onclick),
          e.addEventListener(
            "click",
            function (e) {
              i(e);
            },
            !1
          ),
          (e.onclick = null)));
  }

  function atvImg() {
    function e(e, t, n, i, a, s) {
      var c = o.scrollTop || r.scrollTop,
        l = o.scrollLeft,
        d = t ? e.touches[0].pageX : e.pageX,
        u = t ? e.touches[0].pageY : e.pageY,
        h = n.getBoundingClientRect(),
        v = n.clientWidth || n.offsetWidth || n.scrollWidth,
        p = n.clientHeight || n.offsetHeight || n.scrollHeight,
        m = 320 / v,
        f = 0.52 - (d - h.left - l) / v,
        g = 0.52 - (u - h.top - c) / p,
        k = u - h.top - c - p / 2,
        C = d - h.left - l - v / 2,
        E = (f - C) * (0.07 * m),
        y = (k - g) * (0.1 * m),
        S = "rotateX(" + y + "deg) rotateY(" + E + "deg)",
        I = Math.atan2(k, C),
        T = (180 * I) / Math.PI - 90;
      0 > T && (T += 360),
        -1 != n.firstChild.className.indexOf(" over") &&
          (S += " scale3d(1.07,1.07,1.07)"),
        (n.firstChild.style.transform = S),
        (s.style.background =
          "linear-gradient(" +
          T +
          "deg, rgba(255,255,255," +
          ((u - h.top - c) / p) * 0.4 +
          ") 0%,rgba(255,255,255,0) 80%)"),
        (s.style.transform =
          "translateX(" +
          f * a -
          0.1 +
          "px) translateY(" +
          g * a -
          0.1 +
          "px)");
      for (var w = a, F = 0; a > F; F++)
        (i[F].style.transform =
          "translateX(" +
          f * w * ((2.5 * F) / m) +
          "px) translateY(" +
          g * a * ((2.5 * F) / m) +
          "px)"),
          w--;
    }

    function t(e, t) {
      t.firstChild.className += " over";
    }

    function n(e, t, n, i, a) {
      var o = t.firstChild;
      (o.className = o.className.replace(" over", "")),
        (o.style.transform = ""),
        (a.style.cssText = "");
      for (var r = 0; i > r; r++) n[r].style.transform = "";
    }
    var i = document,
      a = i.documentElement,
      o = i.getElementsByTagName("body")[0],
      r = i.getElementsByTagName("html")[0],
      s = window,
      c = i.querySelectorAll(".atvImg"),
      l = c.length,
      d = "ontouchstart" in s || navigator.msMaxTouchPoints;
    if (!(0 >= l))
      for (var u = 0; l > u; u++) {
        var h = c[u],
          v = h.querySelectorAll(".atvImg-layer"),
          p = v.length;
        if (!(0 >= p)) {
          for (; h.firstChild; ) h.removeChild(h.firstChild);
          var m = i.createElement("div"),
            f = i.createElement("div"),
            g = i.createElement("div"),
            k = i.createElement("div"),
            C = [];
          (h.id = "atvImg__" + u),
            (m.className = "atvImg-container"),
            (f.className = "atvImg-shine"),
            (g.className = "atvImg-shadow"),
            (k.className = "atvImg-layers");
          for (var E = 0; p > E; E++) {
            var y = i.createElement("div"),
              S = v[E].getAttribute("data-img");
            (y.className = "atvImg-rendered-layer"),
              y.setAttribute("data-layer", E),
              (y.style.backgroundImage = "url(" + S + ")"),
              k.appendChild(y),
              C.push(y);
          }
          m.appendChild(g),
            m.appendChild(k),
            m.appendChild(f),
            h.appendChild(m);
          var I = h.clientWidth || h.offsetWidth || h.scrollWidth;
          (h.style.transform = "perspective(" + 3 * I + "px)"),
            d
              ? ((s.preventScroll = !1),
                (function (i, a, o, r) {
                  h.addEventListener("touchmove", function (t) {
                    s.preventScroll && t.preventDefault(), e(t, !0, i, a, o, r);
                  }),
                    h.addEventListener("touchstart", function (e) {
                      (s.preventScroll = !0), t(e, i);
                    }),
                    h.addEventListener("touchend", function (e) {
                      (s.preventScroll = !1), n(e, i, a, o, r);
                    });
                })(h, C, p, f))
              : !(function (i, a, o, r) {
                  h.addEventListener("mousemove", function (t) {
                    e(t, !1, i, a, o, r);
                  }),
                    h.addEventListener("mouseenter", function (e) {
                      t(e, i);
                    }),
                    h.addEventListener("mouseleave", function (e) {
                      n(e, i, a, o, r);
                    });
                })(h, C, p, f);
        }
      }
  }
  var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget =
      deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
  (FastClick.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;
      case "input":
        if ((deviceIsIOS && "file" === e.type) || e.disabled) return !0;
        break;
      case "label":
      case "video":
        return !0;
    }
    return /\bneedsclick\b/.test(e.className);
  }),
    (FastClick.prototype.needsFocus = function (e) {
      switch (e.nodeName.toLowerCase()) {
        case "textarea":
          return !0;
        case "select":
          return !deviceIsAndroid;
        case "input":
          switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
              return !1;
          }
          return !e.disabled && !e.readOnly;
        default:
          return /\bneedsfocus\b/.test(e.className);
      }
    }),
    (FastClick.prototype.sendClick = function (e, t) {
      var n, i;
      document.activeElement &&
        document.activeElement !== e &&
        document.activeElement.blur(),
        (i = t.changedTouches[0]),
        (n = document.createEvent("MouseEvents")),
        n.initMouseEvent(
          this.determineEventType(e),
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        (n.forwardedTouchEvent = !0),
        e.dispatchEvent(n);
    }),
    (FastClick.prototype.determineEventType = function (e) {
      return deviceIsAndroid && "select" === e.tagName.toLowerCase()
        ? "mousedown"
        : "click";
    }),
    (FastClick.prototype.focus = function (e) {
      var t;
      deviceIsIOS &&
      e.setSelectionRange &&
      0 !== e.type.indexOf("date") &&
      "time" !== e.type
        ? ((t = e.value.length), e.setSelectionRange(t, t))
        : e.focus();
    }),
    (FastClick.prototype.updateScrollParent = function (e) {
      var t, n;
      if (((t = e.fastClickScrollParent), !t || !t.contains(e))) {
        n = e;
        do {
          if (n.scrollHeight > n.offsetHeight) {
            (t = n), (e.fastClickScrollParent = n);
            break;
          }
          n = n.parentElement;
        } while (n);
      }
      t && (t.fastClickLastScrollTop = t.scrollTop);
    }),
    (FastClick.prototype.getTargetElementFromEventTarget = function (e) {
      return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
    }),
    (FastClick.prototype.onTouchStart = function (e) {
      var t, n, i;
      if (e.targetTouches.length > 1) return !0;
      if (
        ((t = this.getTargetElementFromEventTarget(e.target)),
        (n = e.targetTouches[0]),
        deviceIsIOS)
      ) {
        if (((i = window.getSelection()), i.rangeCount && !i.isCollapsed))
          return !0;
        if (!deviceIsIOS4) {
          if (n.identifier === this.lastTouchIdentifier)
            return e.preventDefault(), !1;
          (this.lastTouchIdentifier = n.identifier), this.updateScrollParent(t);
        }
      }
      return (
        (this.trackingClick = !0),
        (this.trackingClickStart = e.timeStamp),
        (this.targetElement = t),
        (this.touchStartX = n.pageX),
        (this.touchStartY = n.pageY),
        e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
        !0
      );
    }),
    (FastClick.prototype.touchHasMoved = function (e) {
      var t = e.changedTouches[0],
        n = this.touchBoundary;
      return Math.abs(t.pageX - this.touchStartX) > n ||
        Math.abs(t.pageY - this.touchStartY) > n
        ? !0
        : !1;
    }),
    (FastClick.prototype.onTouchMove = function (e) {
      return this.trackingClick
        ? ((this.targetElement !==
            this.getTargetElementFromEventTarget(e.target) ||
            this.touchHasMoved(e)) &&
            ((this.trackingClick = !1), (this.targetElement = null)),
          !0)
        : !0;
    }),
    (FastClick.prototype.findControl = function (e) {
      return void 0 !== e.control
        ? e.control
        : e.htmlFor
        ? document.getElementById(e.htmlFor)
        : e.querySelector(
            "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
          );
    }),
    (FastClick.prototype.onTouchEnd = function (e) {
      var t,
        n,
        i,
        a,
        o,
        r = this.targetElement;
      if (!this.trackingClick) return !0;
      if (e.timeStamp - this.lastClickTime < this.tapDelay)
        return (this.cancelNextClick = !0), !0;
      if (
        ((this.cancelNextClick = !1),
        (this.lastClickTime = e.timeStamp),
        (n = this.trackingClickStart),
        (this.trackingClick = !1),
        (this.trackingClickStart = 0),
        deviceIsIOSWithBadTarget &&
          ((o = e.changedTouches[0]),
          (r =
            document.elementFromPoint(
              o.pageX - window.pageXOffset,
              o.pageY - window.pageYOffset
            ) || r),
          (r.fastClickScrollParent = this.targetElement.fastClickScrollParent)),
        (i = r.tagName.toLowerCase()),
        "label" === i)
      ) {
        if ((t = this.findControl(r))) {
          if ((this.focus(r), deviceIsAndroid)) return !1;
          r = t;
        }
      } else if (this.needsFocus(r))
        return e.timeStamp - n > 100 ||
          (deviceIsIOS && window.top !== window && "input" === i)
          ? ((this.targetElement = null), !1)
          : (this.focus(r),
            this.sendClick(r, e),
            (deviceIsIOS4 && "select" === i) ||
              ((this.targetElement = null), e.preventDefault()),
            !1);
      return deviceIsIOS &&
        !deviceIsIOS4 &&
        ((a = r.fastClickScrollParent),
        a && a.fastClickLastScrollTop !== a.scrollTop)
        ? !0
        : (this.needsClick(r) || (e.preventDefault(), this.sendClick(r, e)),
          !1);
    }),
    (FastClick.prototype.onTouchCancel = function () {
      (this.trackingClick = !1), (this.targetElement = null);
    }),
    (FastClick.prototype.onMouse = function (e) {
      return this.targetElement
        ? e.forwardedTouchEvent
          ? !0
          : e.cancelable &&
            (!this.needsClick(this.targetElement) || this.cancelNextClick)
          ? (e.stopImmediatePropagation
              ? e.stopImmediatePropagation()
              : (e.propagationStopped = !0),
            e.stopPropagation(),
            e.preventDefault(),
            !1)
          : !0
        : !0;
    }),
    (FastClick.prototype.onClick = function (e) {
      var t;
      return this.trackingClick
        ? ((this.targetElement = null), (this.trackingClick = !1), !0)
        : "submit" === e.target.type && 0 === e.detail
        ? !0
        : ((t = this.onMouse(e)), t || (this.targetElement = null), t);
    }),
    (FastClick.prototype.destroy = function () {
      var e = this.layer;
      deviceIsAndroid &&
        (e.removeEventListener("mouseover", this.onMouse, !0),
        e.removeEventListener("mousedown", this.onMouse, !0),
        e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1);
    }),
    (FastClick.notNeeded = function (e) {
      var t, n;
      if ("undefined" == typeof window.ontouchstart) return !0;
      if ((n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
        if (!deviceIsAndroid) return !0;
        if ((t = document.querySelector("meta[name=viewport]"))) {
          if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
          if (n > 31 && window.innerWidth <= window.screen.width) return !0;
        }
      }
      return "none" === e.style.msTouchAction ? !0 : !1;
    }),
    (FastClick.attach = function (e, t) {
      return new FastClick(e, t);
    }),
    "undefined" != typeof define && define.amd
      ? define(function () {
          return FastClick;
        })
      : "undefined" != typeof module && module.exports
      ? ((module.exports = FastClick.attach),
        (module.exports.FastClick = FastClick))
      : (window.FastClick = FastClick),
    document.addEventListener("touchstart", function () {}, !0),
    atvImg();
  return (
    <>
      <div className="container experience my-6">
        <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
          Works / Projects
        </h1>
      </div>
      <div className="container">
      <div className="card">
          <div className="card__item">
            <h2 className="card__item-title">Vacation</h2>
            <a
              href="https://dribbble.com/shots/2792589-Time-for-a-vacation"
              title="Time for a vacation"
            >
              <div className="atvImg">
                <img src=""/>
                <div
                  className="atvImg-layer"
                  data-img={a}
                ></div>
              </div>
            </a>
          </div>
          <div className="card__item">
            <h2 className="card__item-title">Engineering</h2>
            <a
              href="https://dribbble.com/shots/2787693-Singha-Durbar"
              title="Singha Durbar"
            >
              <div className="atvImg">
                <img src="" />

                <div
                  className="atvImg-layer"
                  data-img={b}
                ></div>
              </div>
            </a>
          </div>
          {/* <div className="card__item">
              <h2 className="card__item-title">Little Miss Sunshine</h2>
              <a
                href="https://dribbble.com/shots/3002552-Little-Miss-Sunshine"
                title="Little Miss Sunshine"
              >
                <div className="atvImg">
                  <img src="https://d13yacurqjgara.cloudfront.net/users/1085581/screenshots/3002552/little_miss_sunshine-01.png" />

                  <div
                    className="atvImg-layer"
                    data-img="https://d13yacurqjgara.cloudfront.net/users/1085581/screenshots/3002552/little_miss_sunshine-01.png"
                  ></div>
                </div>
              </a>
            </div> */}
          <div className="container mx-5 my-4 overview">
            I'm a skilled computer science final year student at Birla Institute
            of technology Mesra. I'm MERN developer with problem solving skill.
            I usually solve codeforces, leetcode, gfg etc. I'm quick learner and
            collaborate closely with others. I also have intrest in devops, app
            development, AI and ML.
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
