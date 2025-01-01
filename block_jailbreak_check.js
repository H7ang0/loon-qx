// block_jailbreak_check.js

// 拦截并修改抖音的越狱检测响应
let body = $response.body;
let obj = JSON.parse(body);

// 修改越狱检测结果
obj.jailbreak = false;

// 返回修改后的响应
$done({body: JSON.stringify(obj)});
