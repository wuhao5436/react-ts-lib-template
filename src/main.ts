import { HelloWorld } from './components/helloWorld'

import { version } from '../package.json'

console.log(`当前组件库使用版本为${version}`);

export * from './constant'

export * from './utils'

export * from './hooks'

export {
  HelloWorld,
}
