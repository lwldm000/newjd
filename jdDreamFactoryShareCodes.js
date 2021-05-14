/*
京喜工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',
  'Sz2oS9zo11SEvR593Bex6g==@N65gxIAwuVA3p-Du05UXUg==@SM8a-mS15WpNaFcNpTX0Zg==@CntxZMVPRPrnRwDGEdKCng==@pH6VKO0hEAGgJJF1oyMhVQ==@jvPgYjr4eezesZhIicoQRg==@nI0EvC7t1MQV_YTaQKS4cA==@Gy9KrAI8iGF03ENq55vY3w==@77U7hJcIxAsrYWfQPd3qAg==@OpdZTI0kWvpwhhmKak9nTQ==@kYG2iukfwBw2HkULET49tg==@npVP727-ATXQMoSbYwvfeg==@nI0EvC7t1MQV_YTaQKS4cA==',

]
// 判断github action里面是否有京喜工厂互助码
if (process.env.DREAM_FACTORY_SHARE_CODES) {
  if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('&');
  } else if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('\n');
  } else {
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split();
  }
} else if (process.env.DREAM_FACTORY_SHARE_CODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
