module.exports = {
    async rewrites() {
        return [
            {
                source      : '/api/google-search/:query',
                destination : 'https://suggestqueries.google.com/complete/search?client=chrome&q=:query',
            }
        ]
    },
}