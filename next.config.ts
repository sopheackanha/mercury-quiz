// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
// };



// export default nextConfig;

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
