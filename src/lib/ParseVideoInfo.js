import { log } from 'console'
import fs from 'fs'
import path from 'path'
import { merge } from './FFmpeg.js'
function parseSeries(series_dir, outDir) {
    fs.existsSync(outDir) || fs.mkdirSync(outDir)
    fs.opendir(series_dir, {}, (err, dir) => {
        let dirent
        while ((dirent = dir.readSync()))
            if (dirent?.isDirectory() && !outDir.endsWith(dirent.name)) {
                const videoName = JSON.parse(
                    fs.readFileSync(
                        path.join(series_dir, dirent.name, 'info.json')
                    )
                )?.EpisodeTitle
                merge(
                    path.join(series_dir, dirent.name, 'video.m4s'),
                    path.join(series_dir, dirent.name, 'audio.m4s'),
                    videoName,
                    outDir
                )
            }
    })
}

export { parseSeries }
