//rewrite"
//https?:\/\/.+\.(tiktokv|byteoversea|ipstatp|tiktokcdn|ibytedtos|sgsnssdk)\.com\/.+ url script-request-header https://raw.githubusercontent.com/LSSCP/S1u2r3g4e5c6o7n8f/master/JS/tiktok.js



function replaceQueryString (str) {
    const re1 = new RegExp('(?<=&mcc_mnc=)46002','gi')
    const re2 = new RegExp('(?<=&sim_region=)CN','gi')
    const re3 = new RegExp('(?<=&(access|ac)=)4g', 'gi')
    const re4 = new RegExp('(?<=carrier_region=)CN','gi')
    return str.replace(re1,'').replace(re2,'').replace(re3,'mobile').replace(re4,'JP')
}

var req = $request.url;
modifiedurl=replaceQueryString(req)

$done({url: modifiedurl});
