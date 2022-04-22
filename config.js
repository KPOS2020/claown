module.exports = {
    app: {
        px: 'XXX',
        token: 'OTY3MTM4Nzc4MTQzNjcwMzA0.YmL8LQ.xREaMJ_A1zYACOO4jHURoPy2BrY',
        playing: '!'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
