 

import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import tslint from "rollup-plugin-tslint";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import json from '@rollup/plugin-json';
import rollupPluginPeerDepsExternal from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize';

const __dirname = path.resolve();

const paths = {  
    input: path.join(__dirname, '/src/main.ts'),
    output: path.join(__dirname, '/lib'),
}

const externalAry = [
    "lodash",
    "antd",
    "antd/es/locale/zh_CN",
    "antd/dist/antd.css",
    "antd/es/style/themes/default.less",
    "moment",
    "moment/locale/zh-cn",
    "echarts",
    "prop-types",
    "snowflake-id",
    "win-trade-base",
    "@lugia/lugiax",
    "@ant-design/icons",
    "react",
    "react-dom",
    "react-transition-group",
    "react-dnd",
    "react-dnd-html5-backend",
    "react-loadable",
    "react-resizable",
    "umi",
    "@ant-design/pro-table",
    "@ant-design/pro-layout",
    "ahooks",
  ];


export default {
    input: './src/main.ts',
    output: [ // 输出 commonjs 规范的代码
        // {
        //   file: path.join(paths.output, 'index.js'),
        //   format: 'cjs',
        //   name: pkg.name,
        // },
        // 输出 es 规范的代码
        {
          file: path.join(paths.output, 'index.esm.js'),
          format: 'es',
          name: pkg.name,
        },
    ],
    plugins: [
        rollupPluginPeerDepsExternal({}),
        tslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
        }),
        typescript({
            tsconfig: path.resolve(__dirname, './tsconfig.json'), // 导入本地ts配置
            extensions: [
                '.js',
                '.ts',
                '.tsx'
              ]
        }),  // 会自动读取 文件tsconfig.json配置
        json({
            compact: true
        }),
        babel({
            exclude: 'node_modules/**', // 只转译我们的源代码
            extensions: ['.ts', '.tsx'],
        }),
        resolve({
            preferBuiltins: true,
            mainFields: ['browser'],
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        commonjs({ include: /node_modules/ }),
        postcss({
            /** css module */
            modules: true,
            minimize: false,
            use : [
              ['less', { javascriptEnabled: true }]
            ],
        }),
        filesize(),
    ],
    external: externalAry,
    watch: {
        include: 'src/**'
    },
}