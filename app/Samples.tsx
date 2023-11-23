"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const samples = [
  {
    image: require("~/public/samples/sample-1.jpg").default,
    source: "https://upperquad.com/",
  },
  {
    image: require("~/public/samples/sample-2.jpg").default,
    source: "https://www.we-go.it/en/",
  },
  {
    image: require("~/public/samples/sample-3.jpg").default,
    source: "https://www.myorthos.com/",
  },
  {
    image: require("~/public/samples/sample-4.jpg").default,
    source: "https://okcclabs.com/",
  },
  {
    image: require("~/public/samples/sample-5.jpg").default,
    source: "https://store.sidlee.com/",
  },
  {
    image: require("~/public/samples/sample-6.jpg").default,
    source: "https://www.alcre.co.kr/",
  },
  {
    image: require("~/public/samples/sample-7.jpg").default,
    source: "https://tbh.studiovoila.com/",
  },
  {
    image: require("~/public/samples/sample-8.jpg").default,
    source: "https://night-life-wcopilot.webflow.io/",
  },
  {
    image: require("~/public/samples/sample-9.jpg").default,
    source: "https://www.skydweller.aero/",
  },
  {
    image: require("~/public/samples/sample-10.jpg").default,
    source: "https://www.aegiq.com/",
  },
  {
    image: require("~/public/samples/sample-11.jpg").default,
    source: "https://kirlian.xyz/",
  },
  {
    image: require("~/public/samples/sample-12.jpg").default,
    source: "https://www.saastock.com/saastock-2023/",
  },
];

export default function Samples() {
  return (
    <section className="px-3 space-y-3">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          dissableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {samples.map((sample, index) => (
          <SwiperSlide key={index}>
            <Link
              href={sample.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={sample.source}
                src={sample.image}
                className="mx-auto"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center text-muted-foreground">
        <small>
          Source:{" "}
          <Link
            href={"https://htmlburger.com/blog/modern-website-design-examples/"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            https://htmlburger.com/blog/modern-website-design-examples/
          </Link>
        </small>
      </div>
    </section>
  );
}
