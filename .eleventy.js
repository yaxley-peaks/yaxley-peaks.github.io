const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function (eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("static/**/*.jpg");
    eleventyConfig.addPassthroughCopy("static/**/*.png");
    eleventyConfig.addPlugin(mathjaxPlugin);
    return {
        dir: {
            input: "static",
            output: "public"
        }
    }
};