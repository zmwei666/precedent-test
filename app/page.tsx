import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing xDAN -AI
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>xDAN -AI</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            world class AI startup  ｜ Leaderboard of OpenLLM
          </Balancer>
        </p>
        {/*<div*/}
        {/*  className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"*/}
        {/*  style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}*/}
        {/*>*/}
        {/*  <a*/}
        {/*    className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"*/}
        {/*    href={DEPLOY_URL}*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <svg*/}
        {/*      className="h-4 w-4 group-hover:text-black"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      fill="currentColor"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        d="M12 4L20 20H4L12 4Z"*/}
        {/*        stroke="currentColor"*/}
        {/*        strokeWidth="2"*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*    <p>Deploy to Vercel</p>*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"*/}
        {/*    href="https://github.com/steven-tey/precedent"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Github />*/}
        {/*    <p>*/}
        {/*      <span className="hidden sm:inline-block">Star on</span> GitHub{" "}*/}
        {/*      <span className="font-semibold">{nFormatter(stars)}</span>*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "我们的产品",
    description:
      "  xDAN -AI 站在AI创新的前沿，具有创新产品   忘不了AI Note 、 网红元宇宙 和 课堂笔记",
      // "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  demo: (
      <div className="flex items-center justify-center space-x-40">
          <Image alt="Auth.js logo" src="/memory.jpg" width={70} height={70} />
          <Image alt="Prisma logo" src="/universe.png" width={70} height={70} />
          <Image alt="classnotes" src="/classnotes.png" width={70} height={70} />
      </div>
  ),
  },
    {
        title: "公司业务",
        description:
            "xDAN -AI Focus on solving the problem of human memory",
        demo: (
            <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
                <span className="font-mono font-semibold">人类第二层记忆</span>
                <span className="font-mono font-semibold">法律AI大模型</span>
                <span className="font-mono font-semibold">政务大脑</span>
                <span className="font-mono font-semibold">The second memory</span>
                <span className="font-mono font-semibold">AI big model law</span>
                <span className="font-mono font-semibold">E-government brain</span>
            </div>
        ),
    },

    {
        title: "技术方向",
        description:
            "Reshape the AI drive application pattern, creating unprecedented possibilities for AI and human intelligence fusion to pave the way",
        demo: (
            <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
                <span className="font-mono font-semibold">LLM Service</span>
                <span className="font-mono font-semibold">数据合成</span>
                <span className="font-mono font-semibold">行业大模型</span>
                <span className="font-mono font-semibold">The second memory</span>
                <span className="font-mono font-semibold">AI big model law</span>
                <span className="font-mono font-semibold">E-government brain</span>
            </div>
        ),
    },
    {
        title: "产品完善",
        description:
            "xDAN -AI：每日百分百更新迭代，引领未来人工智能创新之路！",
        demo: <WebVitals />,
    },
  // {
  //   title: "One-click Deploy",
  //   description:
  //     "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
  //   demo: (
  //     <a href={DEPLOY_URL}>
  //       <Image
  //         src="https://vercel.com/button"
  //         alt="Deploy with Vercel"
  //         width={120}
  //         height={30}
  //         unoptimized
  //       />
  //     </a>
  //   ),
  // },
  {
    title: "关于我们",
    description:
      "xDAN -AI已经崭露头角，是一家引领人工智能（AI）研发的世界级初创公司。希望在更多领域上与AI结合，为人们带来便利。",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="xdan" src="/xdan.jpg" width={100} height={100} />
      </div>
    ),
  },

];
