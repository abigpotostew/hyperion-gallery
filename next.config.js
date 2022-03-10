module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/wallet': { page: '/wallet', query: { account: '...' } },
            '/gallery': { page: '/gallery' },
            '/token': { page: '/token', query: { id: '...' }},
            '/share': { page: '/share', query: { account: '...' } },
        }
    },
    trailingSlash:true,
}
