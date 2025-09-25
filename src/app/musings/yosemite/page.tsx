"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function YosemiteMusing() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);
  const fadeIn = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <header>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Thoughts on a Yosemite Long Run
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="mt-2 text-sm opacity-70"
          >
            September 6, 2025
          </motion.p>
        </header>

        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="prose prose-neutral dark:prose-invert mt-8"
        >
          <p>
            Over the course of training for my first official ultramarathon, I thought it might be appropriate to venture to exotic places to complete my long runs.
            I had previously done a long loop in Yosemite from the valley, so I thought I&#39;d return, with a slightly modified route. A few of my friends I had told had asked me &quot;why?,&quot; or &quot;that&#39;s so much effort,&quot; or things along those lines.
            A theme of &quot;if not now, then when&quot; was something I mused over the drive.
            <br />
            <br />

            I left late on the Friday evening prior, and pioneered my idea to camp in the back of my 2015 Honda CR-V. If you put the back seats down, and lay out a mattress, a 6&#39;2" person can barely fit diagonally.
            It&#39;s not the most comfortable night of sleep, but it saves the convenience of setting up a hammock or tent.
            </p>
            <br />
            <p>
            I decided to begin rather late in the day, entering the park around 6am, and starting my &quot;run&quot;(powerhike) at 7am. I ascended the mist trail, pausing to take a few pictures here and there.
            </p>
            

        </motion.section>

        {/* Half-width image with caption */}
        <div className="my-6 w-full">
          <figure className="w-full md:w-3/4 mx-auto rounded-2xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800">
            <img
              src="/images/musings/IMG_6935.jpg"
              alt="A hiker looking upon Nevada Falls"
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2 text-sm opacity-75 text-center">
              A hiker looking upon Nevada Falls.
            </figcaption>
          </figure>
        </div>
        <br />
        <p>
          The route I had picked took me over Cloud&#39;s rest, about ~ 6000 feet from the valley. I couldn&#39;t help but notice the significant smoke present.
          The garnet fire was raging nearby, affecting my route into the park, and smoke had blown into the valley and the Yosemite high country.
          A few days later, AQIs of 800+ would force evacuation of park employees.
        </p>

        {/* IMG_6937 figure at text width */}
        <figure className="mx-auto max-w-prose my-6">
          <img
            src="/images/musings/IMG_6937.jpg"
            alt="Trail view near Cloud&#39;s Rest"
            className="w-full h-auto rounded-xl"
          />
          <figcaption className="mt-2 text-sm opacity-75 text-center">
            From the trail towards Cloud&#39;s Rest.
          </figcaption>
        </figure>

        {/* User sentence placeholder below 6937 */}
        <p >
          {/* Replace this with your sentence */}
          I stopped to eat my peanut butter and jelly bagel atop Cloud&#39;s Rest. I noted that this was probably the worst visibility over the many times I had been there.
        </p>

        {/* Bagel figure later */}
        <figure className="mx-auto max-w-prose my-6">
          <img
            src="/images/musings/Bagel.jpg"
            alt="Bagel on a granite overlook"
            className="w-full h-auto rounded-xl"
          />
   
        </figure>
        <p >
          I continue onwards, towards Tenaya Lake. I met a ton of people during this time, most of which did not respond to my hello/nods. I stopped trying shortly after.
          After taking the junction towards Sunrise Lakes, I met far fewer people, mostly backpackers with whom I had small conversations.    </p>


        {/* Small two-up gallery (6947, 6950) with captions and lightbox */}
        <div className="mx-auto max-w-prose my-4 grid grid-cols-2 gap-3">
          <figure className="m-0">
            <button
              type="button"
              onClick={() => setLightbox({ src: "/images/musings/IMG_6947.jpg", alt: "Trail section with granite and pines" })}
              className="block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
              aria-label="Expand image IMG_6947"
            >
              <img
                src="/images/musings/IMG_6947.jpg"
                alt="Trail section with granite and pines"
                className="w-full h-auto rounded-lg cursor-zoom-in"
              />
            </button>
            <figcaption className="mt-2 text-xs opacity-75 text-center">A Sunrise Lake(I forget which one)</figcaption>
          </figure>

          <figure className="m-0">
            <button
              type="button"
              onClick={() => setLightbox({ src: "/images/musings/IMG_6950.jpg", alt: "High country view with smoke in distance" })}
              className="block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
              aria-label="Expand image IMG_6950"
            >
              <img
                src="/images/musings/IMG_6950.jpg"
                alt="High country view with smoke in distance"
                className="w-full h-auto rounded-lg cursor-zoom-in"
              />
            </button>
            <figcaption className="mt-2 text-xs opacity-75 text-center">Yosemite high country with smoke</figcaption>
          </figure>
        </div>
        <p >
          My path takes me through some burn areas. I later read that this was a result of the 2014 Meadow fire, which closed the Sunrise Lakes area, Merced Lake, and my favorite Clouds Rest.
          It&#39;s a little sad to see so much burn damage. It&#39;s nice to see small trees and greenery recover as well.
        </p>

        <figure className="mx-auto max-w-prose my-6">
          <img
            src="/images/musings/IMG_6959.jpg"
            alt="Trail view near Cloud's Rest"
            className="w-full h-auto rounded-xl"
          />
          <figcaption className="mt-2 text-sm opacity-75 text-center">
            Burned areas along the path back to the valley.
          </figcaption>
        </figure>

        <p >
          I fill up water a short while later at a very idyllic stream. Something about the beauty, total lack of other people, and the serenity quite moves me.
          I began to wonder where the water comes from, despite having very little snow left to melt. I have read in the past about the Lyell Glacier and how it has shrunk over the last several years.
          The events and scenery of the day weigh on my mind heavily in this moment. I feel a little guilty for appreciating the beauty, despite having spent considerable resources to arrive at this place.
          If I truly find this place so beautiful, am I treating it appropriately by driving here?
        </p>

        {/* Video clip */}
        <section className="mt-8">
          <figure className="rounded-2xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto"
              poster="/images/musings/yosemite/valley-morning.jpg"
            >
              <source src="/videos/musings/output.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption className="px-4 py-2 text-sm opacity-75">
              A stream I found quite beautiful.
            </figcaption>
          </figure>
        </section>
        <br />

        <p >
          As I move along past the stream, I can&#39;t seem to shake various thoughts of my impact on this area. 
          Maybe perhaps imperceptibly, I am contributing to warming just to come see it. It saddens me that I struggle to reconcile my personal appreciation of this place and the idea that I must negatively impact it to see it.
          It&#39;s not evident to me what the right way to think about it is. As I near the end of my day, I encounter several people forming almost a line descending the mist trail.
          I stop to consider what the total impact of all of us here in the park is. Do we all deserve to admire this beautiful place?
        </p>


        <p >
        
        </p>
       
        {/* Large concluding image (full-bleed) */}
        <div className="my-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <figure>
            <img
              src="/images/musings/IMG_6956.jpg"
              alt="View from the trail near the end of the day"
              className="w-full h-auto max-h-[80vh] object-cover"
            />
          
          </figure>
        </div>

        {/* Lightbox modal */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white rounded-full px-3 py-1 text-sm shadow"
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto rounded-xl" />
              <div className="mt-2 text-center text-sm opacity-80 text-white">{lightbox.alt}</div>
            </div>
          </div>
        )}

        <p>
          <b>A few asides:</b> 
          <br />
          <br />
          My 2015 CR-V emits ~ 310 grams of CO2 per mile. Assuming a round trip of 350 miles from Yosemite to my home, that&#39;s about 109 kg of CO2 emitted from my trip, from driving alone.
          That&#39;s equivalent to approximately 6.5 gallons of milk, meaning that there&#39;s a whole lot of milk I need to avoid consuming to offset this trip.
        </p>
        <p>
        <br />
         I don&#39;t mean to say that we should not explore and visit our wonderful Earth. I just wonder if there&#39;s a way I can do a little better. Perhaps use amtrak, choose more local routes.
        </p>
        <br />
        <p>
         <b>An excellent read about the Lyell Glacier:</b>  
        </p>
        {/* External reading link card */}
        <div className="mx-auto max-w-prose my-6">
          <a
            href="https://story.californiasunday.com/lyell-glacier-yosemite/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-medium">
                  The retreat of Yosemite’s Lyell Glacier
                </div>
                <p className="mt-1 text-sm opacity-80">
                  California Sunday Magazine – a feature on Lyell Glacier’s changes over time.
                </p>
              </div>
              <span className="shrink-0 opacity-60">↗</span>
            </div>
          </a>
        </div>
        <p>
         <b>My Strava Recording:</b>  
        </p>

        {/* Strava activity link card */}
        <div className="mx-auto max-w-prose my-6">
          <a
            href="https://www.strava.com/activities/15723506327"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-medium">Strava activity: Yosemite long run</div>
                <p className="mt-1 text-sm opacity-80">Route, splits, and stats from this day.</p>
              </div>
              <span className="shrink-0 opacity-60">↗</span>
            </div>
          </a>
        </div>
      </article>
    </main>
  );
}
