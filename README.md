# 哔哩 客户端视频缓存转换工具

## 安装

### 环境需求

- Node version > 12
- ffmpeg 下载解压并添加到环境变量中


1. 克隆代码
    `git clone https://github.com/stevenhobs/bili-video-convert.git bili-video-convert`

2. 进入 `bili-video-convert` 文件夹编辑  `config.json`

    ```json
    {
        "DownloadPath":"D:\\videos\\bili_download",	\\客户端设置的缓存路径
        "MergedVideoPath":"D:/videos/convert", 	\\输出的路径，务必保证文件夹已经存在
    }
    ```

3. 在工程路径下运行 `npm start` 或者 `yarn start`



*欢迎提 issues*
