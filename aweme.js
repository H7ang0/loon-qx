// 来自 https://github.com/H7ang0/loon-qx/blob/main/Scripts/douyin.js
const $ = new API("douyin-shortlink");
const url = $request.url;

(async () => {
    const res = await $.http.get({ url });
    const location = res.headers['Location']?.[0];
    if (location) {
        const itemId = location.match(/video\/(\d+)/)?.[1];
        if (itemId) {
            $done({ 
                status: 302,
                headers: { 
                    Location: `https://www.iesdouyin.com/aweme/v1/web/aweme/detail/?aweme_id=${itemId}`
                }
            });
        }
    }
})();
