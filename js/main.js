function switchTheme(){"dark"==([...document.documentElement.classList].includes("dark")?"dark":"light")?(localStorage.theme="light",document.documentElement.classList.remove("dark"),document.getElementById("light").classList.add("hidden"),document.getElementById("dark").classList.remove("hidden")):(localStorage.theme="dark",document.documentElement.classList.add("dark"),document.getElementById("dark").classList.add("hidden"),document.getElementById("light").classList.remove("hidden"))}function toggleSidebar(){let e=document.getElementById("sidebar");[...e.classList].includes("translate-x-0")?(document.body.style.removeProperty("overflow"),e.classList.remove("translate-x-0"),e.classList.add("-translate-x-full")):(document.body.style.setProperty("overflow","hidden"),e.classList.remove("-translate-x-full"),e.classList.add("translate-x-0"))}function toggleMobileMenu(){let e=document.querySelector("#mobile-menu div.nav-links");[...e.classList].includes("h-screen")?(document.body.classList.remove("overflow-hidden","relative"),document.documentElement.classList.remove("overscroll-none"),e.classList.remove("h-screen"),e.classList.add("h-0")):(document.body.classList.add("overflow-hidden","relative"),document.documentElement.classList.add("overscroll-none"),e.classList.remove("h-0"),e.classList.add("h-screen"))}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".nav-links a");let t=window.location.href,d=[...e].filter(e=>e.href===(t||t+"/"));if(void 0!==d)if(Array.isArray(d))for(var s of d)s.className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";else d.className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),document.getElementById("dark").classList.add("hidden")):(document.documentElement.classList.remove("dark"),document.getElementById("light").classList.add("hidden")),document.getElementById("switch-theme").addEventListener("click",switchTheme),document.getElementById("toggle-sidebar").addEventListener("click",toggleSidebar),document.getElementById("toggle-mobile-menu").addEventListener("click",toggleMobileMenu)});