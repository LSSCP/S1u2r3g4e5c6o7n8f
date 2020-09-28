//rewrite"
//https?:\/\/.+\.(tiktokv|byteoversea|ipstatp|tiktokcdn|ibytedtos|sgsnssdk)\.com\/.+ url script-request-header https://raw.githubusercontent.com/LSSCP/S1u2r3g4e5c6o7n8f/master/JS/tiktok.js


var req = $request.url;

function replaceQueryString (str) {

    const re1 = new RegExp('(?<=&mcc_mnc=)46002','gi')
    const re2 = new RegExp('(?<=&(sim|carrier)_region=)CN','gi')
    const re3 = new RegExp('(?<=&(access|ac)=)4g', 'gi')
    return str.replace(re1,'').replace(re2,'').replace(re3,'mobile')
}


murl = replaceQueryString(req);
console.log(murl);
$done({url: murl});
