/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let JxncShareCodes = [
    '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',
  '{"smp":"80a30ff4d138ace1813fb77953d45e60","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"eb4693969e6fee34176e7d6eb103633d","active":"jdnc_1_3yuandami210422_2","joinnum":2}@{"smp":"5569d44ba17d89ec2bc892c3c6ea7668","active":"jdnc_1_1yuanhuacha210422_2","joinnum":2}',

]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}
