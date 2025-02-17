// 来自 https://github.com/H7ang0/loon-qx/blob/main/Scripts/douyin-image.js
const $ = new API("douyin-image");
const url = $request.url;

if (url.includes('/image/') || url.includes('/sticker/')) {
    const body = JSON.parse($response.body);
    if (body.url_list) {
        body.url_list = body.url_list.map(cleanImageUrl);
        $done({ body: JSON.stringify(body) });
    }
}

function cleanImageUrl(url) {
    return url.replace(/(image|webp|gif)\?.*/, '$1')
             .replace(/@\d+w_\d+h/, '')
             .replace(/\/watermark\//, '/origin/');
}
