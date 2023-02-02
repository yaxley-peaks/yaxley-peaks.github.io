module.exports = function (eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("css")
    return {
        pathPrefix: "/thing/",
        passthroughFileCopy: true,
        dir: {
            input: "static",
            output: "public/things"
        }
    }
};