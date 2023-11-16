module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.js',
                        '.ts',
                        '.tsx',
                        '.json'
                    ],
                    alias: {
                        '@tests': ['./tests/'],
                        '@components': './src/components',
                        '@assets': './src/assets',
                        '@theme': './src/theme',
                        '@constants': './src/constants',
                        '@helpers': './src/helpers',
                        '@languages': './src/languages',
                        '@hooks': './src/hooks',
                        '@navigation': './src/navigation',
                        '@zustand': './src/zustand',
                        '@screens': './src/screens',
                        '@sockets': './src/sockets',
                        '@types': './src/types',
                        '@utils': './src/utils',
                        '@styles': './src/styles'
                    }
                }
            ],
            'react-native-reanimated/plugin'
        ]
    }
}
