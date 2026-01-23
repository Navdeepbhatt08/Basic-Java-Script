var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (dets) {
  var rectangelLocation = rect.getBoundingClientRect();
  var insiderectval = dets.clientX - rectangelLocation.left;

  if (insiderectval < rectangelLocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectangelLocation.width / 2,
      155,
      0,
      insiderectval 
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
        rectangelLocation.width / 2,
        rectangelLocation.width,
        0,
        155,
        insiderectval 
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0,0,${blueColor})`,
        ease: Power4,
      });
  }
});
