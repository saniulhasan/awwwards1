


class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = "#$%&*@!?/[]{}+=-";
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => (this.resolve = resolve));
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || "";
                    const to = newText[i] || "";
                    const start = Math.floor(Math.random() * 20);
                    const end = start + Math.floor(Math.random() * 20);
                    this.queue.push({ from, to, start, end });
                }
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = "";
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        output += this.chars[Math.floor(Math.random() * this.chars.length)];
                    } else {
                        output += from;
                    }
                }
                this.el.innerText = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
        }

        function createRotatingLetters() {
            const futureWord = document.getElementById('future-word');
            const todayWord = document.getElementById('today-word');
            
            const futureText = "FUTURE";
            const todayText = "TODAY";
            
            // Create individual letter elements for FUTURE
            futureText.split('').forEach(letter => {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'rotating-letter';
                letterSpan.textContent = letter;
                futureWord.appendChild(letterSpan);
            });
            
            // Create individual letter elements for TODAY
            todayText.split('').forEach(letter => {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'rotating-letter';
                letterSpan.textContent = letter;
                todayWord.appendChild(letterSpan);
            });
        }

        function initScrollDetection() {
            let scrollTimeout;
            let hasScrolled = false;
            
            function handleScroll() {
                if (!hasScrolled) {
                    hasScrolled = true;
                    document.querySelector('.main_content').style.display = 'block';
                    
                    // Optionally fade out the final-text
                    gsap.to('#scroll-indicator', {
                        opacity: 0,
                        duration: 0.1,
                        onComplete: () => {
                            document.querySelector('#scroll-indicator').style.display = 'none';
                        }
                    });
                }
                
                // Clear existing timeout
                clearTimeout(scrollTimeout);
                
                // Set a new timeout to hide the scroll indicator after scrolling stops
                scrollTimeout = setTimeout(() => {
                    document.getElementById('scroll-indicator').style.display = 'none';
                }, 1000);
            }
            
            // Listen for scroll events
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Also listen for wheel events for immediate response
            window.addEventListener('wheel', handleScroll, { passive: true });
            
            // Listen for touch events on mobile
            window.addEventListener('touchmove', handleScroll, { passive: true });
        }

        const tl = gsap.timeline();

        tl.to(".text_1", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_1", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_2", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_2", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_3", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_3", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_4", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_4", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_5", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_5", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_6", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_6", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_7", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_7", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_8", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_8", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_9", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_9", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_10", {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_10", {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out"
        })
        .to(".text_11", {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_11", {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_12", {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_12", {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_13", {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_13", {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_14", {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_14", {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_15", {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".text_15", {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
        })
        .to(".loader", {
            autoAlpha: 0,
            duration: 0.6,
        })
        .to(".final-text", { 
            opacity: 1, 
            duration: 0.5, 
            onComplete: function() {
                startScramble();
                initScrollDetection();
            }
        });

        function startScramble() {
            const elements = document.querySelectorAll('.scramble');
            let delay = 0;
            elements.forEach((el, i) => {
                const fx = new TextScramble(el);
                setTimeout(() => fx.setText(el.dataset.text), i * 600);
            });
            
            setTimeout(createRotatingLetters, 1800);
        }


// FINAL-TEXT ZOOM OUT ON SCROLL
// Make sure plugin registered (you already have this earlier, but safe to do here)
gsap.registerPlugin(ScrollTrigger);

// Ensure final-text transforms from center
gsap.set(".final-text", { transformOrigin: "50% 50%", scale: 1 });

// This function will create the scroll triggers — call it only after .main_content is visible
function setupScrollTriggers() {
  // prevent double-creating triggers
  ScrollTrigger.getAll().forEach(t => {
    // If you created other triggers you want to keep, refine this check.
    if (t.vars.trigger === "#two" || t.vars.trigger === "#three") t.kill();
  });

  // Zoom OUT when entering #two (.demo)
  gsap.to(".final-text", {
    scale: 0.8,
    opacity: 1,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#two",
      start: "top center",   // when top of #two hits center of viewport
      end: "bottom center",  // when bottom of #two hits center
      scrub: true,
      // markers: true, // <-- enable to debug start/end positions
      invalidateOnRefresh: true
    }
  });

  // Restore (remove zoom-out) when entering #three (.demot)
  gsap.to(".final-text", {
    scale: .9,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#three",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
      invalidateOnRefresh: true
    }
  });

  // refresh so ScrollTrigger recalculates now that triggers exist and content is visible
  ScrollTrigger.refresh();
}

// Modify your initScrollDetection to create the triggers when main_content is first shown
function initScrollDetection() {
  let scrollTimeout;
  let hasScrolled = false;

  function handleScroll() {
    if (!hasScrolled) {
      hasScrolled = true;

      // show main content (you already do this)
      document.querySelector('.main_content').style.display = 'block';

      // IMPORTANT: set up scroll triggers now that the sections are visible
      setupScrollTriggers();

      // Optionally fade out the final-text scroll indicator
      gsap.to('#scroll-indicator', {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          document.querySelector('#scroll-indicator').style.display = 'none';
        }
      });
    }

    clearTimeout(scrollTimeout);

    // hide scroll indicator after scrolling stops
    scrollTimeout = setTimeout(() => {
      const el = document.getElementById('scroll-indicator');
      if (el) el.style.display = 'none';
    }, 1000);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('wheel', handleScroll, { passive: true });
  window.addEventListener('touchmove', handleScroll, { passive: true });
}

// If you prefer triggers created immediately after loader finishes (instead of on first scroll),
// call setupScrollTriggers() inside the onComplete of your loader timeline.
// Your current onComplete calls startScramble() and initScrollDetection(); that is fine.
// But if you want immediate triggers once final-text appears, add setupScrollTriggers() there as well.
// e.g. in your timeline onComplete:
// onComplete: function() {
//    startScramble();
//    initScrollDetection();
//    // setupScrollTriggers(); // uncomment if you want to init right away (only when .main_content is visible)
// }


document.querySelector("#img-two").addEventListener("mouseenter", function () {
    document.querySelector("body").style.backgroundColor = "#1a354e";
})

document.querySelector("#img-two").addEventListener("mouseleave", function () {
    document.querySelector("body").style.backgroundColor = "#000";
})
