import { NextSeo } from "next-seo";
import Layout from "@components/Layout";

import useSiteConfig from "@shared/hooks/useSiteConfig";
import Content from "@features/Content";

const Home = () => {
  const config = useSiteConfig();
  return (
    <Layout>
      <NextSeo
        title={config.title}
        openGraph={{
          title: config.title,
          url: config.url,
          description: config.description,
          images: [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: "Template",
            },
          ],
        }}
      />
      <Content />
    </Layout>
  );
};

export default Home;
