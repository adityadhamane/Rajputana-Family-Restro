$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});




// Search items

function filterMenu() {
    // Get the input value and convert it to lowercase
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    // Get all dish items
    const dishes = document.querySelectorAll("#menu-dish .dish-box-wp");

    // Loop through each dish item
    dishes.forEach(dish => {
        // Get the dish title
        const dishTitle = dish.querySelector(".h3-title").textContent.toLowerCase();

        // Check if the dish title includes the search input
        if (dishTitle.includes(searchInput)) {
            // Show the item if it matches
            dish.style.display = "block";
        } else {
            // Hide the item if it doesn't match
            dish.style.display = "none";
        }
    });
}

if (dishTitle.includes(searchInput)) {
    dish.classList.remove("hidden");
} else {
    dish.classList.add("hidden");
}


// add to cart 

            // let cart = [];

            // function addToCart(dishName, dishPrice) 
            // {
            //     const existingItem = cart.find(item => item.name === dishName);
            //     if (existingItem) 
            //     {
            //         existingItem.quantity += 1;
            //     } 
            //     else 
            //     {
            //         cart.push({ name: dishName, price: dishPrice, quantity: 1 });
            //     }
            //     updateCart();
            // }

            // function removeFromCart(dishName) 
            // {
            //     cart = cart.filter(item => item.name !== dishName);
            //     updateCart();
            // }

            // function changeQuantity(dishName, increment) 
            // {
            //     const item = cart.find(item => item.name === dishName);
            //     if (item) {
            //         item.quantity += increment;
            //         if (item.quantity <= 0) 
            //         {
            //             removeFromCart(dishName);
            //         } 
            //         else                   
            //         {
            //             updateCart();
            //         }
            //     }
            // }

            // function updateCart() {
            //     const cartItemsContainer = document.getElementById("cartItemsContainer");
            //     const cartTotalElement = document.getElementById("cartTotal");
            //     const cartNumberElement = document.querySelector(".cart-number");
            //     cartItemsContainer.innerHTML = "";
            
            //     if (cart.length === 0) {
            //         cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            //         cartNumberElement.textContent = "0";
            //         cartTotalElement.textContent = "0";
            //         return;
            //     }
            
            //     let total = 0;
            //     cart.forEach(item => {
            //         total += item.price * item.quantity;
                
            //         const cartItem = document.createElement("div");
            //         cartItem.classList.add("cart-item");
            //         cartItem.innerHTML = `
            //             <div class="cart-item-details">
            //                 <p>${item.name}</p>
            //                 <p>Price: Rs. ${item.price}</p>
            //                 <p>Total: Rs. ${item.price * item.quantity}</p>
            //             </div>
            //             <div class="cart-item-controls">
            //                 <button onclick="changeQuantity('${item.name}', -1)">-</button>
            //                 <span>${item.quantity}</span>
            //                 <button onclick="changeQuantity('${item.name}', 1)">+</button>
            //             </div>
            //         `;
            //         cartItemsContainer.appendChild(cartItem);
            //     });
            
            //     cartNumberElement.textContent = cart.length;
            //     cartTotalElement.textContent = total;
            // }

            // function toggleCartModal() 
            // {
            //     const cartModal = document.getElementById("cartModal");
            //     cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
            // }

            // function checkout() 
            // {
            //     if (cart.length === 0) {
            //         alert("Your cart is empty!");
            //         return;
            //     }
            //     alert("Thank you for your purchase!");
            //     cart = [];
            //     updateCart();
            //     toggleCartModal();
            // }

        


