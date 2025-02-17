// 来自 https://github.com/H7ang0/loon-qx/blob/main/Scripts/aweme.js
const $ = new API("aweme-clean");
const url = $request.url;

if (url.includes('/aweme/v1/feed') || url.includes('/aweme/v1/detail')) {
    const body = JSON.parse($response.body);
    if (body.aweme_list) {
        body.aweme_list.forEach(processVideoItem);
        $done({ body: JSON.stringify(body) });
    }
}

function processVideoItem(item) {
    if (item.video) {
        // 替换无水印视频地址
        item.video.play_addr.url_list = item.video.play_addr.url_list.map(url => 
            url.replace(/\/playwm\//, '/play/')
              .replace(/(\?|&)watermark=.*?(&|$)/, '')
        );
        // 去除商业化水印
        delete item.video.download_addr;
    }
}
