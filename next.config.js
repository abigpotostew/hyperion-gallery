module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/wallet': { page: '/wallet' },
            '/gallery': { page: '/gallery' },
            '/token': { page: '/token'},
        }
    },
    trailingSlash:true,
}
