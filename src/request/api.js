//pollution接口统一管理
import { post } from './http.js'
//登录
export const userLogin = params => post('/api/user/login', params);
//退出
export const userLogout = params => post('/api/user/logout', params);
//修改密码
export const userPassword = params => post('/api/user/password', params);
//上传图片
export const headUpload = params => post('/api/files/headUpload', params);
//文章列表
export const articleList = params => post('/api/article/list', params);
//文章列表-删除
export const articleDelete = params => post('/api/article/delete', params);
//新增文章
export const articleInsert = params => post('/api/article/insert', params);
//修改文章
export const articleUpdate = params => post('/api/article/update', params);
//设置上下架
export const articlesetState = params => post('/api/article/setState', params);
//频道
export const channelList = params => post('/api/channel/list', params);
//根据频道id获取一级栏目列表
export const columnLsitP = params => post('/api/column/listP', params);
//根据栏目id获取下级栏目列表
export const columnLsitSun = params => post('/api/column/listSun', params);
//栏目列表
export const columnList = params => post('/api/column/list', params);
//删除栏目
export const columnDelete = params => post('/api/column/delete', params);
//新增栏目
export const columnInsert = params => post('/api/column/insert', params);
//修改栏目
export const columnUpdate = params => post('/api/column/update', params);
//报修记录
export const repairList = params => post('/api/repair/list', params);
//根据id获取报修详情
export const repairGet = params => post('/api/repair/get', params);
//反馈回复
export const repairBackInsert = params => post('/api/repairBack/insert', params);
//意见收集
export const feedList = params => post('/api/feed/list', params);
//轮播图列表
export const lbtList = params => post('/api/lbt/list', params);
//轮播图删除
export const lbtDelete = params => post('/api/lbt/delete', params);
//排序
export const lbtshortLbt = params => post('/api/lbt/shortLbt', params);
//添加轮播图文章列表
export const articleListLbtArticle = params => post('/api/article/ListLbtArticle', params);
//新增轮播图
export const lbtInsert = params => post('/api/lbt/insert', params);
//修改轮播图
export const lbtUpdate = params => post('/api/lbt/update', params);
//文章回显
export const articleGet = params => post('/api/article/get', params);

//运营位管理列表
export const applicationList = params => post('/api/application/list', params);
//运营位管理删除
export const applicationDelete = (params,token) => post('/api/application/delete', params,token);
//运营位管理添加
export const applicationInsert = (params,token) => post('/api/application/insert', params,token);
//运营位管理修改
export const applicationUpdate = (params,token) => post('/api/application/update', params,token);
//运营位管理-应用分组
export const applicationGroup = params => post('/api/application/group', params);
//运营位管理-链接类型
export const applicationType = params => post('/api/application/type', params);
//文档列表
export const wordList = params => post('/api/word/list', params);
//文档删除
export const wordDelete = params => post('/api/word/delete', params);
//文档新增
export const wordInsert = params => post('/api/word/insert', params);
//文档修改
export const wordUpdate = params => post('/api/word/update', params);
//促销信息列表
export const goodsList = params => post('/api/goods/list', params);
//促销信息删除
export const goodsDelete = params => post('/api/goods/delete', params);
//促销信息新增
export const goodsInsert = params => post('/api/goods/insert', params);
//促销信息修改
export const goodsUpdate = params => post('/api/goods/update', params);
//根据频道（界面）名称获取栏目（分类）列表
export const columngetListByChannelName = params => post('/api/column/getListByChannelName', params);
//转换pdf
export const changePdf = params => post('/api/pdf/pdfToImg', params);
