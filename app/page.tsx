import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Story } from "@/components/sections/story";
import { Movement } from "@/components/sections/movement";

import Faqs from "@/components/sections/faqs";
import InfiniteLogos from "@/components/sections/infinitelogos";
import Hero from "@/components/factory/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfiniteLogos />
      <Story />
      <div className="overflow-hidden">
        <Movement />
      </div>
      <Faqs />
    </div>
  );
}
