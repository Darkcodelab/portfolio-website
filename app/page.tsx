import Image from "next/image";
import SectionHeading from "./components/shared/section-heading";

export default function Home() {
  return (
    <main className="bg-primarybg text-white">
      <section className="px-2 py-4 pb-8 container mx-auto flex flex-col-reverse items-center justify-center gap-0 lg:pb-0 lg:flex-row lg:gap-32">
        <div className="text-center lg:text-left">
          <h1 className="text-md leading-relaxed">
            <span className="text-sm">Hi, I am</span>
            <span className="text-primaryfg text-4xl font-bold block mb-6 md:text-5xl">
              Deepan Chakravarthi
            </span>
          </h1>
          <p className="max-w-[600px] mt-8 text-secondaryfg">
            I build websites that look great and turn visitors into customers
            with user-focused designs and seamless functionality.
          </p>
          <a
            href="mailto:contact@darkcodelab.in"
            className="inline-block bg-primaryfg text-primarybg py-3 rounded-full px-8 mt-8"
          >
            Let&apos;s talk
          </a>
        </div>
        <div>
          <video width={350} height={350} autoPlay loop muted>
            <source src="/videos/code-typing.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="bg-secondarybg bg-[url('/images/goovy-lines.png')] bg-contain">
        <section className="container mx-auto px-2 py-4 ">
          <SectionHeading title="About Me" />
          <div className="bg-[rgba(0,0,0,0.7)] text-secondaryfg p-8 rounded-xl max-w-[700px] mx-auto text-center lg:text-left">
            <p>
              <Image
                width={100}
                height={100}
                src="/images/logo.png"
                alt="Deepan Chakravarthi"
                className="mx-auto rounded-full mb-4"
              />
            </p>
            <p className="my-4">
              I am a web developer passionate about helping businesses thrive
              online. With years of experience in{" "}
              <span className="text-primaryfg">
                crafting high-performing websites
              </span>
              , I understand that your website isn&apos;t just a digital
              storefront—it&apos;s a tool to drive growth and connect with your
              audience.
            </p>
            <p className="my-4">
              My approach combines{" "}
              <span className="text-primaryfg">
                clean, modern design with smart functionality{" "}
              </span>
              to create websites that are not only visually appealing but also
              effective in{" "}
              <span className="text-primaryfg">
                converting visitors into loyal customers
              </span>
              . From small startups to established businesses, I work closely
              with my clients to understand their unique goals and deliver
              tailored solutions that make an impact.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
