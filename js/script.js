// ================================
// RIGHT CLICK DISABLED
// ================================

// 'addEventListener' listens for a specific thing to happen
// 'contextmenu' event that fires when you right click
// 'function(e)' runs when that event happens
// 'e' represents the event itself

document.addEventListener('contextmenu', function(e) {

  // this stops the normal right click menu from appearing
  e.preventDefault();

  // this shows a popup alert to the user
  alert('!! COPYRIGHT -BELONGS TO xD_H0T_GURL_xD 2011 !!');

});


// ================================
// CURSOR SPARKLE TRAIL
// ================================

// 'mousemove' fires every time the mouse moves
document.addEventListener('mousemove', function(e) {

  // Math.random() gives a number between 0 and 1
  // we only spawn a sparkle 30% of the time so it's not overwhelming
  if (Math.random() > 0.7) {

    // list of sparkle emojis to randomly pick from
    const sparkles = ['⭐', '✨', '💫', '🌟'];

    // create a brand new div element in the page
    const star = document.createElement('div');

    // pick a random sparkle from our list above
    star.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];

    // style it so it sits exactly where the mouse is
    star.style.position   = 'fixed';
    star.style.left       = e.clientX + 'px';
    star.style.top        = e.clientY + 'px';
    star.style.fontSize   = '16px';
    star.style.pointerEvents = 'none'; // so it doesn't interfere with clicking
    star.style.zIndex     = '9999';    // sits on top of everything else

    // add the sparkle to the page
    document.body.appendChild(star);

    // remove it after 800 milliseconds so the page doesn't fill up with stars
    setTimeout(function() {
      star.remove();
    }, 800);

  }

});