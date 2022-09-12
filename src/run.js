import { input } from './lib/Input.js'
import FS from 'fs'
import path from 'path'
import { table, log } from 'console'
import { parseSeries } from './lib/ParseVideoInfo.js'
import { getConfig } from './lib/Config.js'

table(['Bilibili 视频合并小工具', ' 作者：王砚冰'])
log('>> 在当前目录下可以自定义 config.json 文件加载默认路径')
let { DownloadPath: dlPathStr, MergedVideoPath: mvPathStr } = getConfig()

// dlPathStr || (dlPathStr = await input('请输入视频缓存路径：'))
// mvPathStr || (mvPathStr = await input('请输入视频输出路径：'))
path.isAbsolute(dlPathStr) || (dlPathStr = path.resolve(dlPathStr))
path.isAbsolute(mvPathStr) || (mvPathStr = path.resolve(mvPathStr))
table([
    ['缓存路径：', dlPathStr],
    ['输出路径：', mvPathStr],
])
FS.existsSync(mvPathStr) || FS.mkdirSync(mvPathStr)
try {
    const videoLists = FS.readdirSync(dlPathStr)
    for (const item of videoLists) {
        const seriesPath = path.join(dlPathStr, item)
        const seriesName = JSON.parse(
            FS.readFileSync(path.join(seriesPath, 'info.json'))
        )?.Title
        parseSeries(seriesPath, path.join(mvPathStr, `${seriesName}`))
    }
} catch (error) {
    console.error(error)
}
