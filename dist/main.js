(()=>{"use strict";function e(e){let t,n;t=document.createElement("h2"),t.setAttribute("class","section"),t.textContent="Restaurant Name",e.appendChild(t),t=document.createElement("div"),t.setAttribute("class","section"),n=document.createElement("p"),n.textContent="This is a testamonial.  It says some things about how great this restaurant is.  It was kind of short, so here is another sentence.",t.appendChild(n),n=document.createElement("div"),n.textContent="- The Quoter",n.setAttribute("class","quoter"),t.appendChild(n),e.appendChild(t),t=document.createElement("div"),t.setAttribute("class","section"),n=document.createElement("h4"),n.textContent="Hours",t.appendChild(n),n=(()=>{let e,t,n=document.createElement("table");e=document.createElement("tr"),t=document.createElement("th"),t.textContent="Day",e.appendChild(t),t=document.createElement("th"),t.textContent="Open",e.appendChild(t),t=document.createElement("th"),t.textContent="Close",e.appendChild(t),n.appendChild(e);let d=(n,d,a)=>(e=document.createElement("tr"),t=document.createElement("th"),t.textContent=n,e.appendChild(t),t=document.createElement("td"),t.textContent=d,e.appendChild(t),t=document.createElement("td"),t.textContent=a,e.appendChild(t),e);return e=d("Sunday","8AM","8PM"),n.appendChild(e),e=d("Monday","6AM","6PM"),n.appendChild(e),e=d("Tuesday","6AM","6PM"),n.appendChild(e),e=d("Wednesday","6AM","6PM"),n.appendChild(e),e=d("Thursday","6AM","10PM"),n.appendChild(e),e=d("Friday","6AM","10PM"),n.appendChild(e),e=d("Saturday","8AM","10PM"),n.appendChild(e),n})(),t.appendChild(n),e.appendChild(t),t=document.createElement("div"),t.setAttribute("class","section"),n=document.createElement("h4"),n.textContent="Location",t.appendChild(n),n=document.createElement("p"),n.textContent="123 Street Road, Townville, ST",t.appendChild(n),e.appendChild(t)}function t(e){let t,n;t=document.createElement("h2"),t.setAttribute("class","section"),t.textContent="Menu",e.appendChild(t),t=document.createElement("h3"),t.setAttribute("class","section"),t.textContent="Appetizers",e.appendChild(t),t=document.createElement("h3"),t.setAttribute("class","section"),t.textContent="Main Dishes",e.appendChild(t),t=document.createElement("h3"),t.setAttribute("class","section"),t.textContent="Sides",e.appendChild(t),t=document.createElement("h3"),t.setAttribute("class","section"),t.textContent="Beverages",e.appendChild(t),t=((e,d,a,c,i)=>{let l;return t=document.createElement("div"),t.setAttribute("class","section card"),n=document.createElement("img"),n.setAttribute("src","../img/drink.png"),n.setAttribute("alt","A drink"),t.appendChild(n),n=document.createElement("div"),n.setAttribute("class","cardLabel"),l=document.createElement("h5"),l.textContent="Drink",n.appendChild(l),l=document.createElement("h5"),l.textContent="$2",n.appendChild(l),l=n,n=document.createElement("div"),n.setAttribute("class","cardDesc"),n.appendChild(l),l=document.createElement("p"),l.textContent="A generic desrciption for a generic drink. Adding more words makes the spacing look better.",n.appendChild(l),t.appendChild(n),t})(),e.appendChild(t)}(()=>{const n=document.getElementById("home-tab"),d=document.getElementById("menu-tab"),a=document.getElementById("contact-tab"),c=document.getElementById("content");let i=e=>{for(;c.firstChild;)c.removeChild(c.firstChild);e(c)};i(e),n.addEventListener("click",(()=>i(e))),d.addEventListener("click",(()=>i(t))),a.addEventListener("click",(()=>i()))})()})();