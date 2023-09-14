module.exports = function (eleventyConfig) {
    eleventyConfig.setServerOptions({
        watch: ['public/**/*.css'],
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
