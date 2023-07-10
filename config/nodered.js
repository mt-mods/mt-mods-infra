
module.exports = {
    uiPort: 1880,

    adminAuth: require('node-red-auth-github')({
        clientID: "50fe8cbff0647312dba7",
        clientSecret: "{{ NODERED_GITHUB_CLIENT_SECRET }}",
        baseURL: "https://mt-mods.minetest.ch/nodered/",
        default: {
            permissions: "read"
        },
        users: [{
            username: "BuckarooBanzay",
            permissions: ["*"]
        },{
            username: "OgelGames",
            permissions: ["*"]
        },{
            username: "S-S-X",
            permissions: ["*"]
        },{
            username: "SwissalpS",
            permissions: ["*"]
        },{
            username: "wsor4035",
            permissions: ["*"]
        },{
            username: "Niklp09",
            permissions: ["*"]
        }]
    }),

    debugMaxLength: 1000,

    httpAdminRoot: '/nodered',
    httpNodeRoot: '/nodered',

    functionGlobalContext: {
        secrets: {
            discord_cdb_review_channel: "{{ DISCORD_CDB_REVIEW_WEBHOOK }}"
        },
        dgram: require('dgram')
    },

    exportGlobalContextKeys: false,
    contextStorage: {
        default: {
            module: "localfilesystem"
        },
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    editorTheme: {
        tours: false,
        projects: {
            enabled: false
        }
    }
};
