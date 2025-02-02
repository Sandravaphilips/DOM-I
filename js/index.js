const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Shall we begin?
// NAVIGATION
let navigation = document.querySelector('nav');
navigation.children[0].textContent = "Services";
navigation.children[1].textContent = "Product";
navigation.children[2].textContent = "Vision";
navigation.children[3].textContent = "Features";
navigation.children[4].textContent = "About";
navigation.children[5].textContent = "Contact";

// ADDING ELEMENTS TO NAVIGATION
let newElement = document.createElement('a');
navigation.appendChild(newElement);
newElement.textContent = "Download";

let newElement1 = document.createElement('a');
navigation.prepend(newElement1);
newElement1.textContent = "Home";


// CHANGING THE LINKS' COLOUR
let links = Array.from(document.querySelectorAll('a'));
links.forEach(p => p.style.color = "green");

// CTA
let title = document.querySelector('h1');
title.innerHTML = "DOM </br> IS </br> AWESOME";

let button = document.querySelector('button');
button.textContent = "Get Started";

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', "./img/header-img.png");

// MAIN CONTENT
let mainContentHeaders = Array.from(document.querySelectorAll('h4'));
mainContentHeaders[0].textContent = "Features";
mainContentHeaders[1].textContent = "About";
mainContentHeaders[2].textContent = "Services";
mainContentHeaders[3].textContent = "Product";
mainContentHeaders[4].textContent = "Vision";

let mainContentParagraphs = Array.from(document.querySelectorAll('p'));
mainContentParagraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', './img/mid-page-accent.jpg');

// CONTACT
let contact = document.querySelector('.contact');
contact.children[0].textContent = 'Contact';
contact.children[1].innerHTML = '123 Way 456 Street <br>Somewhere, USA';
contact.children[2].textContent = '1 (888) 888-8888';
contact.children[3].textContent = 'sales@greatidea.io';

// FOOTER
let footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';

