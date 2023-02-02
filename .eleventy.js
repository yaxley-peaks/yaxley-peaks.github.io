module.exports = function (eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("css")
    return {
        passthroughFileCopy: true,
        dir: {
            input: "static",
            output: "public/things"
        }
    }
};