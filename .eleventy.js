const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function (eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPlugin(mathjaxPlugin);
    return {
        passthroughFileCopy: true,
        dir: {
            input: "static",
            output: "public"
        }
    }
};