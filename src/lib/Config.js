import fs from 'fs'
import path from 'path'
const configPath = './config.json'
const Config = {
    DownloadPath: '',
    MergedVideoPath: '',
}
fs.existsSync(configPath) || fs.writeFileSync(configPath, JSON.stringify(Config))

function getConfig() {
    const configStr = fs.readFileSync(configPath, 'utf-8')
    Config.DownloadPath = JSON.parse(configStr)?.DownloadPath
    Config.MergedVideoPath = JSON.parse(configStr)?.MergedVideoPath
    return Config
}

export { getConfig }
