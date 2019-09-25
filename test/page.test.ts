import path from 'path'
import createPageRouter from '../page/createPageRouter'
import View from '../page/view'
import http from 'http'
import express from 'express'
import puppeteer from 'puppeteer'
import { Options } from '../type'
import getConfig from '../config'

jest.setTimeout(20000)

process.env.NODE_ENV = 'test'
let PORT = 3333
const ROOT = path.join(__dirname, 'project')
const options: Options = {
  config: {
    root: ROOT, // 项目根目录
    port: PORT, // server 端口号
    logger: null, // 不出 log
    devtool: '', // 不出 source-map
    ReactViews: {
      beautify: false, // 不美化
      transformViews: false // 已有转换，无须再做
    },
    routes: 'routes', // 服务端路由目录
    layout: 'Layout', // 自定义 Layout
    webpackLogger: false, // 关闭 webpack logger
    webpackDevMiddleware: true // 在内存里编译
  }
}

describe('page test', () => {
  // it('', () => {

  // })
})
