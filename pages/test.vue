<template>
  <div class="smooth-scroll">
    <div class="description panel blue">
      <div>
        <h1>Locomotive Scroll + ScrollTrigger</h1>
        <p>
          Demonstrates how ScrollTrigger can be used with a smooth scrolling library like
          Locomotive Scroll, including scrubbing and pinning.
        </p>
        <div class="scroll-down">
          Scroll down
          <div class="arrow"></div>
        </div>
      </div>
    </div>

    <section class="panel red">
      <p>
        <span class="line line-1"></span>This line's animation will begin when it enters
        the viewport and finish when its top edge hits the top of the viewport, staying
        perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>
      </p>
    </section>

    <section class="panel orange">
      <p>
        <span class="line line-2"></span>This orange panel gets pinned when its top edge
        hits the top of the viewport, then the line's animation is linked with the scroll
        position until it has traveled 100% of the viewport's height (<code
          >end: "+=100%"</code
        >), then the orange panel is unpinned and normal scrolling resumes. Padding is
        added automatically to push the rest of the content down so that it catches up
        with the scroll when it unpins. You can set <code>pinSpacing: false</code> to
        prevent that if you prefer.
      </p>
    </section>

    <section class="panel purple">
      <p>
        <span class="line line-3"></span>This panel gets pinned in a similar way, and has
        a more involved animation that's wrapped in a timeline, fading the background
        color and animating the transforms of the paragraph in addition to the line, all
        synced with the scroll position perfectly.
      </p>
    </section>

    <section class="panel gray">DONE!</section>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import {onMounted } from "vue";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
onMounted(() => {
  const locoScroll = new LocomotiveScroll({
     el: document.querySelector(".smooth-scroll"),
    smooth: true,
    lerp: 0.12,
    smartphone: {
      smooth: true,
    },

  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    // pinType: document.querySelector(".smooth-scroll").style.transform
    //   ? "transform"
    //   : "fixed",
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => console.log(self.direction),
    },
    scaleX: 0,
    x: 200,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
    .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
});
</script>

<style scoped>
.panel {
  height: 100vh;
}
.line {
  width: 100%;
  max-width: 800px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: rgb(175, 72, 72);
}
</style>
