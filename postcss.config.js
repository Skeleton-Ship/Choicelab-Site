import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";

const postcssConfig = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 2,
    }),
  ],
};

export default postcssConfig;
