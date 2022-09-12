import { exec } from 'child_process'
import { log } from 'console'
import { existsSync } from 'fs'
import { join } from 'path'
function merge(origin_video, origin_audio, outFileName, outDir) {
    if (!outFileName.endsWith('.mp4')) outFileName += '.mp4'
    const outPath = join(outDir, outFileName)
    if (existsSync(outPath)) return
    const command = `ffmpeg -i "${origin_video}" -i "${origin_audio}" -c:v copy -c:a copy "${outPath}"`
    exec(command, (err, out, stderr) => {
        if (err != null) {
            log(err)
            throw Error('合并出错')
        }
        log('>> ', outFileName, '合并完成！')
    })
}

export { merge }
