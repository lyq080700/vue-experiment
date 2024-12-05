/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  //为了支持自定义样式使得不与tailwindcss冲突
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use custom base style (src/theme/base.css)
    preflight: false, // https://tailwindcss.com/docs/preflight#disabling-preflight
  },
  plugins: [],
};
