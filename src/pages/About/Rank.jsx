import React from "react";


import $ from "jquery";
const Rank = () => {


  document.addEventListener("scroll", function () {
    var element = document.querySelector(".rankSec");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 2100) {
      element?.classList.add("activeAnime");
    }
    var screenWidth = window.innerWidth;
    if (screenWidth < 768 && element) {
      if (scrollPosition > 1500) {
        element?.classList.add("activeAnime");
        element?.classList.add("opacity-1");
      }
    }
  });

  $(document).ready(function () {
    var animationTriggered = false;

    $(window).scroll(function () {
      if (
        (!animationTriggered && $(window).scrollTop() > 2000) ||
        (!animationTriggered && $(window).scrollTop() > 2300)
      ) {
        animationTriggered = true;

        $(".rankBox").each(function (index) {
          var rankBox = $(this);
          var targetValue = parseInt(
            rankBox.find(".count").attr("data-target")
          );
          var duration = 2000;
          var startValue = 0;
          var startTime = null;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var increment = ((targetValue - startValue) / duration) * progress;
            rankBox.find(".count").text(Math.floor(startValue + increment));

            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              rankBox.find(".count").text(targetValue);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  });
  return (
    <>
      <div className="rankSec mainAbout p50-top p50-sm-bottom ">
        <div className="container">
          <div className="startAbout">
            <div className="row align-items-center justify-conten-center">
              <div className="col-lg-12 col-12 m30-bottom">
                <div className="bannerContent fw-bold text-md-start text-center animate__animated">
                  <div
                    className="fs-lg-20 fs-md-16 fs-12 d-flex align-items-center  justify-content-center m10-bottom text-center"
                    style={{ color: "#fff" }}
                  >
                    <span className="m10-right text-center">
                      <i class="fa-solid fa-circle fs-md-12 fs-8"></i>
                    </span>
                    <span className="text-center">
                      STUDENT’S BRIGHT FUTURE MAKER
                    </span>
                  </div>
                  <div
                    className="fs-lg-40 fs-md-30 fs-20  text-center"
                    style={{ color: "#fff" }}
                  >
                    Why we are
                  </div>
                </div>

                <div class="container">
                  <div class="row justify-content-between">
                    <div class="col-12 col-lg-2 ">
                      <div class="text-center  fs-lg-20 fs-md-16 fs-12">
                        <p class="counter-count">100</p>
                        <h5 style={{ color: "#fff" }}>Students trained</h5>
                      </div>
                    </div>

                    <div class="col-12 col-lg-2">
                      <div class="text-center fs-lg-20 fs-md-16 fs-12">
                        <p class="counter-count">80</p>
                        <h5 style={{ color: "#fff" }}>Approved Courses</h5>
                      </div>
                    </div>

                    <div class="col-12 col-lg-2">
                      <div class="text-center fs-lg-20 fs-md-16 fs-12">
                        <p class="counter-count">30</p>
                        <h5 style={{ color: "#fff" }}>Job Placements </h5>
                      </div>
                    </div>

                    <div class="col-12 col-lg-2">
                      <div class="text-center fs-lg-20 fs-md-16 fs-12">
                        <p class="counter-count">2</p>
                        <h5 style={{ color: "#fff" }}>Centers</h5>
                      </div>
                    </div>
                    <div class="col-12 col-lg-2">
                      <div class="text-center fs-lg-20 fs-md-16 fs-12">
                        <p class="counter-count">400</p>
                        <h5 style={{ color: "#fff" }}>Certification</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;

// export const AnimationCount = () => {
//   useEffect(() => {
//     $(window).scroll(function () {
//       var scrollPosition = $(window).scrollTop();
//       var threshold = 2300; // Scroll position at which the animation should start
//       var rankBoxes = $(".rankBox");

//       if (scrollPosition > threshold) {
//         rankBoxes.each(function (index) {
//           var rankBox = $(this);
//           var targetValue = parseInt(
//             rankBox.find(".count").attr("data-target")
//           );
//           var duration = 2000;
//           var startValue = 0;
//           var startTime = null;

//           function updateCounter(timestamp) {
//             if (!startTime) startTime = timestamp;
//             var progress = timestamp - startTime;
//             var increment = ((targetValue - startValue) / duration) * progress;
//             rankBox.find(".count").text(Math.floor(startValue + increment));

//             if (progress < duration) {
//               requestAnimationFrame(updateCounter);
//             } else {
//               rankBox.find(".count").text(targetValue);
//             }
//           }

//           requestAnimationFrame(updateCounter);
//         });
//       }
//     });
//   }, []);

//   return null;
// };

// $(".counter-count").each(function () {
//   $(this)
//     .prop("Counter", 0)
//     .animate(
//       {
//         Counter: $(this).text(),
//       },
//       {
//         //chnage count up speed here
//         duration: 4000,
//         easing: "swing",
//         step: function (now) {
//           $(this).text(Math.ceil(now));
//         },
//       }
//     );
// });
