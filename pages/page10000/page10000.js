var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:398.4375rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be87ed552.jpg","content":"","parentCompid":"carousel1","style":""},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be88a6967.jpg","content":"","parentCompid":"carousel1","style":""}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:206.25rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:175.78125rpx;width:721.875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:14.0625rpx;top:25.78125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937cc29d69b6.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:89.0625rpx;width:89.0625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:39.84375rpx;top:58.59375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be888d656.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10031"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10031\\\/page10031\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:135.9375rpx;top:70.3125rpx;margin-right:0;","content":"宏石装饰","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10031"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10031\\\/page10031\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:135.9375rpx;top:98.4375rpx;margin-right:0;","content":"All About Us ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10031"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10031\\\/page10031\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:0.3;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:70.3125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:295.3125rpx;top:70.3125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937bfc871c63.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:89.0625rpx;width:89.0625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:375rpx;top:58.59375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be87dff69.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10032"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10032\\\/page10032\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:475.78125rpx;top:70.3125rpx;margin-right:0;","content":"商务合作","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10032"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10032\\\/page10032\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:87.500005960464rpx;width:276.5625rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:473.4375rpx;top:98.4375rpx;margin-right:0;","content":"Business Cooperation","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10032"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10032\\\/page10032\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:140.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:32.8125rpx;margin-right:0;","content":"精品案例","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:65.625rpx;margin-right:0;","content":"Excellent works","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:649.21875rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937c16e533bc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10003"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10003\\\/page10003\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10003"},"animations":[],"page_form":"","compId":"free_vessel3","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel3","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10003\\\/page10003\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:461.71875rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:53.90625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be88e2a31.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10040"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10040\\\/page10040\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:285.9375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be895709a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10043"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10043\\\/page10043\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:517.96875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be89a8204.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10042"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10042\\\/page10042\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:53.90625rpx;top:234.375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8b870e0.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10041"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10041\\\/page10041\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:91.40625rpx;top:161.71875rpx;margin-right:0;","content":"地中海","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10040"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10040\\\/page10040\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:325.78125rpx;top:161.71875rpx;margin-right:0;","content":"建欧","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10043"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10043\\\/page10043\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:560.15625rpx;top:161.71875rpx;margin-right:0;","content":"简约现代","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10042"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10042\\\/page10042\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:91.40625rpx;top:398.4375rpx;margin-right:0;","content":"中式","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10041"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10041\\\/page10041\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:285.9375rpx;top:234.375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8a1abfb.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10045"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":8,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10045\\\/page10045\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:152.34375rpx;width:187.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:517.96875rpx;top:234.375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8b63fbc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10046"},"animations":[],"compId":"data.content[9]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":9,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10046\\\/page10046\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:328.125rpx;top:398.4375rpx;margin-right:0;","content":"美式","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10045"},"animations":[],"compId":"data.content[10]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":10,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10045\\\/page10045\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:548.4375rpx;top:396.09375rpx;margin-right:0;","content":"更多","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10046"},"animations":[],"compId":"data.content[11]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":11,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10046\\\/page10046\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"none","inner-page-link":"prePage"},"animations":[],"page_form":"","compId":"free_vessel4"},"free_vessel5":{"type":"free-vessel","style":"width:750rpx;height:140.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:32.8125rpx;margin-right:0;","content":"产品功能","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel5","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:65.625rpx;margin-right:0;","content":"Product Details","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel5","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:649.21875rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937c16e533bc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10001"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel5","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10001\\\/page10001\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10001"},"animations":[],"page_form":"","compId":"free_vessel5","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel5","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10001\\\/page10001\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel6":{"type":"free-vessel","style":"width:750rpx;height:140.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:58.59375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:70.3125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8c28b5d.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10025"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10025\\\/page10025\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:70.3125rpx;top:63.28125rpx;margin-right:0;","content":"小知识","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10025"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10025\\\/page10025\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:58.59375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:246.09375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8ac5edc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10026"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10026\\\/page10026\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:58.59375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:428.90625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8b87492.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10027"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10027\\\/page10027\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:58.59375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:614.0625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937be8be5a63.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10028"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10028\\\/page10028\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:246.09375rpx;top:63.28125rpx;margin-right:0;","content":"资讯","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10026"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10026\\\/page10026\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:433.59375rpx;top:63.28125rpx;margin-right:0;","content":"社区","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10027"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10027\\\/page10027\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:614.0625rpx;top:63.28125rpx;margin-right:0;","content":"会员","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10028"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10028\\\/page10028\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel6"},"free_vessel7":{"type":"free-vessel","style":"width:750rpx;height:140.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:32.8125rpx;margin-right:0;","content":"最新资讯","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:65.625rpx;margin-right:0;","content":"Latest news","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:649.21875rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937c16e533bc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10002"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel7","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10002"},"animations":[],"page_form":"","compId":"free_vessel7","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel7","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"list_vessel8":{"type":"list-vessel","style":"opacity:1;height:351.5625rpx;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:339.84375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:262.5rpx;width:656.25rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:44.53125rpx;top:0.016236305236816rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_1500776656597408d0075d6.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"img","ifMust":false,"action":"none","inner-page-link":"prePage"},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:281.25rpx;margin-right:0;","content":"绿地海珀兰轩样板间已经做好，请实地考察","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"tittle","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel8","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"zixun","id":"list-222761409371","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"page10029","margin":"3","name":"列表","source":"38779","vesselAutoheight":0,"mode":0,"height":"150px"},"animations":[],"page_form":"","compId":"list_vessel8","list_style":"margin-bottom:7.03125rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-222761409371","is_more":1,"param":"{\"id\":\"list-222761409371\",\"form\":\"zixun\",\"page\":1,\"app_id\":\"RCc6Rs6DlQ\",\"is_count\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"38779\"}}","form":"zixun"},"free_vessel9":{"type":"free-vessel","style":"width:750rpx;height:140.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:32.8125rpx;margin-right:0;","content":"产品展示","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel9","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(163, 163, 163);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:53.90625rpx;top:65.625rpx;margin-right:0;","content":"Join Online","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel9","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:649.21875rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5937c16e533bc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel9","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10021"},"animations":[],"page_form":"","compId":"free_vessel9","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel9","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel10":{"type":"free-vessel","style":"width:750rpx;height:339.84375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:262.5rpx;width:656.25rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:44.53125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_1500776620597408acade83.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel10","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:281.25rpx;margin-right:0;","content":"服务咨询热线;17788175456","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel10","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10021"},"animations":[],"page_form":"","compId":"free_vessel10","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel10","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"picture11":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:164.0625rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_596c86e22fd2c.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture11","parentCompid":"picture11"},"has_tabbar":1},
    need_login: false,
    page_router: 'page10000',
    page_form: 'none',
      list_compids_params: [{"compid":"list_vessel8","param":{"id":"list-222761409371","form":"zixun","page":1,"app_id":"RCc6Rs6DlQ","is_count":0,"idx_arr":{"idx":"category","idx_value":"38779"}}}],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      requesting: false,
  requestNum: 1,
  onLoad: function (e) {
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
    appInstance.setPageUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    this.getCartList();
    if(appInstance.globalData.firstPage){
      appInstance.globalData.firstPage = false;
      appInstance.globalData.urlLocationId = e.location_id;
    }
  },
  dataInitial: function(){
    appInstance.dataInitial();
  },
  onShareAppMessage: function(){
    var pageRouter = this.page_router,
        pagePath = '/pages/'+pageRouter+'/'+pageRouter;

    // 统计用户分享APP
    appInstance.countUserShareApp();

    pagePath += this.dataId ? '?detail='+this.dataId : '';
    return {
      title: appInstance.getAppTitle() || '即速应用',
      desc: appInstance.getAppDescription() || '即速应用，拖拽生成app，无需编辑代码，一键打包微信小程序',
      path: pagePath
    }
  },
  onShow: function(){
    var that = this;
    setTimeout(function(){
      appInstance.setPageUserInfo();
    });

    //用于判断当前页面是否需要验证手机号
    if (this.need_login && !appInstance.getUserInfo().phone) {
      appInstance.turnToPage('/pages/bindCellphone/bindCellphone');
    }
  },
  onReachBottom : function() {
    for(let i in this.data){
      if(/^bbs[\d]+$/.test(i)){
        appInstance.bbsScrollFuc(i);
      }
    }
  },
  onUnload: function () {
    let downcountArr = this.downcountArr;
    if(downcountArr && downcountArr.length){
      for (var i = 0; i < downcountArr.length; i++) {
        downcountArr[i].clear();
      }
    }
  },
  tapPrevewPictureHandler:function(e){
    appInstance.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function(){
    for (let i in this.data) {
      if(/suspension/.test(i)){
        let suspension = this.data[i],
            newdata = {};

        if(this.data.has_tabbar == 1){
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom - 56)*2.34;
        }else{
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom)*2.34;
        }
        this.setData(newdata);
      }
    }
  },
  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.requesting || !this.data[compid].is_more) {
      return;
    }
    this.requesting = true;
    appInstance.pageScrollFunc(compid, curpage);
  },
  goodsScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.requesting || !this.data[compid].is_more) {
      return;
    }
    this.requesting = true;
    appInstance.goodsScrollFunc(compid, curpage);
  },
  franchiseeScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.requesting || !this.data[compid].is_more) {
      return;
    }
    this.requesting = true;
    appInstance.franchiseeScrollFunc(compid, curpage);
  },
  seckillScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.requesting || !this.data[compid].is_more) {
      return;
    }
    this.requesting = true;
    appInstance.seckillScrollFunc(compid, curpage);
  },
  changeCount: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.changeCount(dataset);
  },
  inputChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.inputChange(dataset, value);
  },
  bindDateChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindDateChange(dataset, value);
  },
  bindTimeChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindTimeChange(dataset, value);
  },
  bindSelectChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindSelectChange(dataset, value);
  },
  bindScoreChange: function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.bindScoreChange(dataset);
  },
  submitForm: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.submitForm(dataset);
  },
  udpateVideoSrc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.udpateVideoSrc(dataset);
  },
  tapMapDetail: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.tapMapDetail(dataset);
  },
  uploadFormImg: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.uploadFormImg(dataset);
  },
  deleteUploadImg:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.deleteUploadImg(dataset);
  },
  listVesselTurnToPage: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.listVesselTurnToPage(dataset);
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    let openVerifyPhone = e.currentTarget.dataset.openVerifyPhone; // 是否开启短信验证
    if(openVerifyPhone){
      if(!appInstance.getUserInfo().phone) {
        appInstance.turnToPage('/pages/bindCellphone/bindCellphone');
      } else {
        appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
      }
    } else {
      appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
    }
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    let goodsType = e.currentTarget.dataset.goodsType;
    switch(+goodsType){
      case 0:
      case 1: appInstance.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id +'&contact=' + contact);
        break;
      case 3: appInstance.turnToPage('/pages/toStoreDetail/toStoreDetail?detail=' + id);
        break;
    }
  },
  turnToFranchiseeDetail: function(e){
    let dataset = e.currentTarget.dataset,
        id = dataset.id;
    appInstance.turnToPage('/pages/franchiseeDetail/franchiseeDetail?detail=' + id);
  },
  turnToSeckillDetail: function (e) {
    let id = e.currentTarget.dataset.id,
        contact = e.currentTarget.dataset.contact;
    appInstance.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id +'&goodsType=seckill&contact=' + contact);
  },
  sortListFunc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.sortListFunc(dataset);
  },
  bbsInputComment: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList:{},
  bindSearchTextChange : function(e){
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  searchList:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.searchList(dataset);
  },
  selectLocal:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = typeof(this.data[id].hidden) == undefined ? false : !this.data[id].hidden;
    newdata[id].provinces = ['请选择'];  newdata[id].citys =['请选择']; newdata[id].districts = ['请选择']
    newdata[id].provinces_ids =[null]; newdata[id].city_ids =[null]; newdata[id].district_ids = [null];
    for(var i in newdata[id].areaList){
      newdata[id].provinces.push(newdata[id].areaList[i].name);
      newdata[id].provinces_ids.push(newdata[id].areaList[i].region_id);
    }
    newdata[id].newlocal = '';
    this.setData(newdata);
  },
  cancelCity:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = !this.data[id].hidden;
    newdata[id].province = '';
    newdata[id].city = '';
    newdata[id].district = '';
    this.setData(newdata);
  },
  bindCityChange:function(e){
    const val = e.detail.value;
    let id = e.currentTarget.dataset.id,
        newdata = this.data,
        cityList = newdata[id].areaList;
        if(!newdata[id].newlocal){
          if(newdata[id].value[0] == val[0]){
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[val[1]];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }else{
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[0];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[0].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[0].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }          
          // newdata[id].district = newdata[id].district == '请选择'? '' :newdata[id].district
          this.setData(newdata)
    }
  },
  submitCity:function(e){
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    if(!newdata[id].districts){
      appInstance.showModal({content: '您未选择城市!'});
      newdata[id].province = '';
      newdata[id].city = '';
      newdata[id].district = '';
    }else{
      newdata[id].hidden = !this.data[id].hidden;
      newdata[id].newlocal = newdata[id].province + ' ' + newdata[id].city + ' ' +      newdata[id].district;
      newdata[id].value = [0,0,0];
      appInstance.citylocationList(e.currentTarget.dataset, newdata[id].region_id);
    }
    this.setData(newdata);
  },
  getCityList:function (province, id){
    let cityList = [], cityList_id = [];
    for(let i in province){
      if(typeof(province[i]) == 'object'){
        cityList.push(province[i].name)
        cityList_id.push(province[i].region_id);
      }else{
        cityList[1] = province.name;
        cityList_id[1]=province.region_id;
      }
    }
    if(id){
      return cityList_id;
    }else{
      return cityList;
    }

  },
  

  
  
  tapGoodsTradeHandler: function(event) {
    appInstance.tapGoodsTradeHandler(event);
  },
  tapInnerLinkHandler: function(event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function(event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function(event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  },
  tapGetCouponHandler: function(event) {
    appInstance.tapGetCouponHandler(event);
  },
  tapCommunityHandler: function(event) {
    appInstance.tapCommunityHandler(event);
  },
  turnToCommunityPage: function(event){
    let id = event.currentTarget.dataset.id;
    appInstance.turnToPage('/pages/communityPage/communityPage?detail=' + id);
  },
  tapToFranchiseeHandler: function(event){
    appInstance.tapToFranchiseeHandler(event);
  },
  tapToTransferPageHandler: function(event){
    appInstance.tapToTransferPageHandler(event);
  },
  tapToSeckillHandler: function(event){
    appInstance.tapToSeckillHandler(event);
  },
  tapFranchiseeLocation: function(event){
    appInstance.tapFranchiseeLocation(event);
  },
  showAddShoppingcart: function(event) {
    var that = this,
        goods_id = event.currentTarget.dataset.id;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/getGoods',
      data: {
        data_id: goods_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          var goods = res.data[0].form_data,
              defaultSelect = goods.model_items[0],
              goodsModel = [],
              selectModels = [],
              goodprice = 0,
              goodstock = 0,
              goodid ,
              selectText = '';
          if(goods.model_items.length){
            goodprice = defaultSelect.price;
            goodstock = defaultSelect.stock;
            goodid = defaultSelect.id;
          }else{
            goodprice = goods.price;
            goodstock = goods.stock;
          }
          for(let key in goods.model){
            if(key){
              let model = goods.model[key];
              goodsModel.push(model);
              selectModels.push(model.subModelId[0]);
              selectText += '“' + model.subModelName[0] + '” ';
            }
          }
          goods.model = goodsModel;
          if (goods.goods_type == 3){
            var businesssTimeString = '';
            if (goods.business_time && goods.business_time.business_time) {
              var goodBusinesssTime = goods.business_time.business_time;
              for (var i = 0; i < goodBusinesssTime.length; i++) {
                businesssTimeString += goodBusinesssTime[i].start_time.substring(0, 2) + ':' + goodBusinesssTime[i].start_time.substring(2, 4) + '-' + goodBusinesssTime[i].end_time.substring(0, 2) + ':' + goodBusinesssTime[i].end_time.substring(2, 4) + '/';
              }
              businesssTimeString = '出售时间：' + businesssTimeString.substring(0, businesssTimeString.length - 1);
              that.setData({

              })
            }
	  	      that.getCartList();
            that.setData({
              'addTostoreShoppingCartShow': true,
              businesssTimeString: businesssTimeString
            })
          }else{
            that.setData({
              'addShoppingCartShow': true
            })
          }
          that.setData({
            goodsInfo: goods ,
            'selectGoodsModelInfo.price': goodprice,
            'selectGoodsModelInfo.stock': goodstock,
            'selectGoodsModelInfo.buyCount': 1,
            'selectGoodsModelInfo.buyTostoreCount': 0,
            'selectGoodsModelInfo.cart_id':'',
            'selectGoodsModelInfo.models': selectModels,
            'selectGoodsModelInfo.modelId': goodid ,
            'selectGoodsModelInfo.models_text' : selectText
          });
        }
      }
    });
  },
  hiddeAddShoppingcart: function(){
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
  },
  selectGoodsSubModel: function(e){
    let dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {},
        selectModels = this.data.selectGoodsModelInfo.models,
        model = this.data.goodsInfo.model,
        text = '';

    selectModels[modelIndex] = model[modelIndex].subModelId[submodelIndex];

    for (let i = 0; i < selectModels.length; i++) {
      let selectSubModelId = model[i].subModelId;
      for (let j = 0; j < selectSubModelId.length; j++) {
        if( selectModels[i] == selectSubModelId[j] ){
          text += '“' + model[i].subModelName[j] + '” ';
        }
      }
    }
    data['selectGoodsModelInfo.models'] = selectModels;
    data['selectGoodsModelInfo.models_text'] = text;

    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    let selectModelIds = this.data.selectGoodsModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};
    data['selectGoodsModelInfo.buyCount'] = 1;
    data['selectGoodsModelInfo.buyTostoreCount'] = 0;
    for (let i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        data['selectGoodsModelInfo.stock'] = modelItems[i].stock;
        data['selectGoodsModelInfo.price'] = modelItems[i].price;
        data['selectGoodsModelInfo.modelId'] = modelItems[i].id;
        break;
      }
    }
    this.setData(data);
  },
  // 电商
  clickGoodsMinusButton: function(e){
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyCount;
    if(count <= 1){
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count - 1
    });
  },
  clickGoodsPlusButton: function(e){
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
        count = selectGoodsModelInfo.buyCount,
        stock = selectGoodsModelInfo.stock;

    if(count >= stock) {
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
          goods_id: this.data.goodsInfo.id,
          model_id: this.data.selectGoodsModelInfo.modelId || '',
          num: this.data.selectGoodsModelInfo.buyCount,
          sub_shop_app_id : ''
        };

    appInstance.sendRequest({
      url: '/index.php?r=AppShop/addCart',
      data: param,
      success: function(res){
        setTimeout(function() {
          appInstance.showToast({
            title:'添加成功',
            icon:'success'
          });
        } , 50);
        that.hiddeAddShoppingcart();
      }
    })
  },

  // 到店

  clickTostoreMinusButton: function (e) {
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyTostoreCount;
    if (count <= 0) {
      return;
    }
    if (count <= 1) {
      appInstance.sendRequest({
        hideLoading: true,
        url: '/index.php?r=AppShop/deleteCart',
        method: 'post',
        data: {
          cart_id_arr: [that.data.selectGoodsModelInfo.cart_id],
          sub_shop_app_id: that.franchiseeId || ''
        },
        fail: function (res) {
          that.setData({
            addToShoppingCartCount: currentGoodsNum,
            cartGoodsNum: currentCartNum,
            cartGoodsTotalPrice: currentTotalPrice
          });
        }
      });
      this.setData({
        'selectGoodsModelInfo.buyTostoreCount': count - 1
      });
      this.getCartList();
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('mins');
  },
  clickTostorePlusButton: function (e) {
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
      count = selectGoodsModelInfo.buyTostoreCount,
      stock = selectGoodsModelInfo.stock;

    if (count >= stock) {
      appInstance.showModal({
        content: '库存不足'
      });
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('plus');
  },
  sureAddTostoreShoppingCart: function (type) {
    var that = this,
        goodsNum = this.data.selectGoodsModelInfo.buyTostoreCount;
    if(type == 'plus'){
      goodsNum = goodsNum + 1;
    }else{
      goodsNum = goodsNum - 1;
    }
     var param = {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        goods_id: this.data.goodsInfo.id,
        model_id: this.data.selectGoodsModelInfo.modelId || '',
        num: goodsNum,
        sub_shop_app_id: ''
      };

    // appInstance.sendRequest({
    //   url: '/index.php?r=AppShop/addCart',
    //   data: param,
    //   success: function (res) {
    //     var data = res.data;
    //     that.setData({
    //       'selectGoodsModelInfo.cart_id': data
    //     })
    //     that.getCartList();
    //   }
    // })
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/addCart',
      data: param,
      success: function (res) {
        if (res.data.status == 0) {
          var data = res.data.data;
          that.setData({
            'selectGoodsModelInfo.cart_id': data,
            'selectGoodsModelInfo.buyTostoreCount': goodsNum
          })
          that.getCartList();
        } else {
          if (res.data.status == 401 || res.data.status == 2) {
              // 未登录
              app.login();
              return;
            }
          that.setData({
            'selectGoodsModelInfo.buyTostoreCount': 0
          });
          appInstance.showModal({
            content: res.data.data
          })
        }
      }
    })
  },
  readyToPay: function () {
    if (this.data.cartGoodsNum <= 0 || !this.data.tostoreTypeFlag) return;
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/previewOrderDetail/previewOrderDetail' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getValidateTostore: function(){
    var that = this;
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/precheckShoppingCart',
      data: {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        sub_shop_app_id: that.franchiseeId || '',
        parent_shop_app_id: that.franchiseeId ? appInstance.getAppId() : ''
      },
      success: function (res) {
        if (res.data.status == 0){
          that.readyToPay();
        } else if (res.data.status == 401 || res.data.status == 2) {
            // 未登录
            appInstance.login();
            return;
        } else if (res.data.status == 1){
            appInstance.showModal({
              content: res.data.data,
              confirm: function () {
                that.goToShoppingCart();
              }
            })
        }else{
          appInstance.showModal({
            content: res.data.data
          })
        }    
      }
    })
  },
  goToShoppingCart: function () {
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/shoppingCart/shoppingCart' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getCartList: function () {
    var that = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/cartList',
      data: {
        page: 1,
        page_size: 100,
        sub_shop_app_id: this.franchiseeId || '' 
      },
      success: function (res) {
        var price = 0,
          num = 0,
          addToShoppingCartCount = 0,
          tostoreTypeFlag = false;

        for (var i = res.data.length - 1; i >= 0; i--) {
          var data = res.data[i];
          price += +data.num * +data.price;
          num += +data.num;
          if (data.goods_type == 3) {
            tostoreTypeFlag = true;
          }
          if (that.goodsId == data.goods_id) {
            addToShoppingCartCount = data.num;
            that.cart_id = data.id;
          }
        }
        that.setData({
          tostoreTypeFlag: tostoreTypeFlag,
          cartGoodsNum: num,
          cartGoodsTotalPrice: price.toFixed(2),
          addToShoppingCartCount: addToShoppingCartCount,

        });
      }
    })
  },
  stopPropagation: function(){},
  turnToSearchPage:function(e){
    if (e.target.dataset.param) {
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch?param=' + e.target.dataset.param);
    }else{
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch?form=' + e.target.dataset.form);
    }
  },
  previewImage : function(event) {
    appInstance.previewImage({current : event.currentTarget.dataset.src});
  }
};
Page(pageData);
