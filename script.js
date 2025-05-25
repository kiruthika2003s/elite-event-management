
window.addEventListener('scroll', function() {
    document.querySelectorAll('.scroll-fade').forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.classList.add('visible');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            galleryItems.forEach((item) => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";  // Show matched items
                } else {
                    item.style.display = "none";   // Hide unmatched items
                }
            });
        });
    });
});
var app = angular.module("contactApp", []);
app.controller("ContactController", function($scope) {
    $scope.formData = {}; 
    $scope.formSubmitted = false;

    $scope.submitForm = function() {
        if ($scope.eventForm.$valid) {
            console.log("Form Data Submitted:", $scope.formData);
            $scope.formSubmitted = true;
        }
    };
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    
    fetch("https://formsubmit.co/elitevents16@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("contactForm").reset(); // Clear form
            document.getElementById("successMessage").style.display = "block"; // Show success message
        } else {
            alert("❌ Error submitting form. Please try again.");
        }
    })
    .catch(error => {
        alert("❌ Network error. Please check your connection.");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            filterLinks.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");
            galleryItems.forEach((item) => {
                item.style.display = (filter === "all" || item.classList.contains(filter)) ? "block" : "none";
            });
        });
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const galleryItems = document.querySelectorAll(".gallery-item");

        filterButtons.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove("active"));
                // Add active class to current button
                this.classList.add("active");

                const filter = this.getAttribute("data-filter");

                galleryItems.forEach(item => {
                    if (filter === "all" || item.classList.contains(filter)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    });




