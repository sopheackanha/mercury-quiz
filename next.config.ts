// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
// };



// export default nextConfig;

// this i'm tryna solve error with no API, URL stuff in vercel pel deploy
// i saw a youtube vid tver tam ke but that's not how it work
// it just the turbopack hz webpack thingy
// as a result i got this, but not affect code:
//  ⚠ Webpack is configured while Turbopack is not, which may cause problems.
//  ⚠ See instructions if you need to configure Turbopack:
//   https://nextjs.org/docs/app/api-reference/next-config-js/turbopack

import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import webpack from "webpack";
import dotenv from "dotenv";

const env = dotenv.config({ path: "./.env.local" }).parsed;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config: Configuration) {
    if (env) {
      config.plugins!.push(new webpack.EnvironmentPlugin(env));
    }
    return config;
  },
};

export default nextConfig;
