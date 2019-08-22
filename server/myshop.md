## 开发记录


#### 数据库部分

- mysql控制台创建数据库

    > create database myshop;

- 表设计

    > **admin表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |username|VARCHAR(20)|NO|-|NO|用户名|
    |password|CHAR(20)|NO|-|NO|密码|
    |mobile|CHAR(11)|NO|-|NO|手机号|
    |email|VARCHAR(32)|NO|-|NO|邮箱|
    |status|CHAR(1)|NO|-|NO|状态|
    |role_id|INTERGER|NO|-|NO|角色id|
    |add_time|DATETIME|NO|-|NO|添加时间|
    |is_super|CHAR(1)|NO|-|NO|是否超级管理员|

    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |role_id|role_id|unique|

    > **role表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |title|VARCHAR(100)|NO|-|NO|标题|
    |describtion|VARCHAR(255)|NO|-|NO|描述|
    |status|CHAR(1)|NO|-|NO|状态|
    |add_time|DATETIME|NO|-|NO|添加时间|

    > **role_access表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |access_id|INTERGER|NO|-|NO|权限id|
    |role_id|INTERGER|NO|-|yes|角色id|


    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |role_id|role_id|unique|



    > **access表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |module_name|VARCHAR(255)|NO|-|NO|模块名称|
    |action_name|VARCHAR(255)|NO|-|NO|操作名称|
    |type|CHAR(20)|NO|-|NO|模板|
    |url|VARCHAR(255)|NO|-|NO|模板|
    |module_id|VARCHAR(20)|NO|-|NO|模块id|    
    |status|CHAR(1)|NO|-|NO|状态|
    |sort|INTERGER(20)|NO|-|NO|排序|
    |describtion|VARCHAR(255)|NO|-|NO|描述|
    |add_time|DATATIME|NO|-|NO|添加时间|            


    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |module_id|module_id|unique|


    > **foucs**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |title|VARCHAR(255)|NO|-|NO|模块名称|
    |type|CHAR(20)|NO|-|NO|模板|
    |focus_img|CHAR(20)|NO|-|NO|商品图片|
    |url|VARCHAR(255)|NO|-|NO|模板|
    |status|CHAR(1)|NO|-|NO|状态|
    |sort|INTERGER(20)|NO|-|NO|排序|
    |add_time|DATATIME|NO|-|NO|添加时间|            


    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |module_id|module_id|unique|



    > **User表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |username|VARCHAR(20)|NO|-|NO|用户名|
    |nickname|VARCHAR(30)|NO|-|NO|昵称|
    |avatar|VARCHAR(100)|NO|-|NO|头像|
    |password|CHAR(20)|NO|-|NO|密码|
    |mobile|CHAR(11)|NO|-|NO|手机号|
    |email|VARCHAR(32)|NO|-|NO|邮箱|
    |user_type|CHAR(1)|NO|-|NO|用户type:*,0=员工,c=客户,p=合作伙伴,T=临时用户,A=管理员|
    |status|CHAR(1)|NO|-|NO|状态|
    |role_id|INTERGER|NO|-|NO|角色id|
    |add_time|DATETIME|NO|-|NO|添加时间|
    |is_super|CHAR(1)|NO|-|NO|是否超级管理员|

    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |username|username|unique|
    |mobile|mobile|unique|
    |emial|emial|unique|

    > **goods表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |title|VARCHAR(255)|NO|-|NO|商品主标题|
    |sub_title|VARCHAR(255)|NO|-|NO|商品副标题|
    |goods_sn|INTERGER(30)|NO|-|NO|条码|
    |cate_id|INTERGER|NO|-|NO|分类id|
    |click_count|INTERGER(20)|NO|-|NO|选择数量|
    |goods_number|INTERGER|NO|-|NO|商品数量|
    |shop_price|INTERGER|NO|-|NO|购买价格|
    |market_price|INTERGER(20)|NO|-|NO|进货价格|
    |relation_goods|CHAR(20)|NO|-|NO|相关产品|
    |goods_attr|CHAR(20)|NO|-|NO|产品属性|
    |goods_version|CHAR(20)|NO|-|NO|版本|
    |goods_img|CHAR(20)|NO|-|NO|商品图片|
    |goods_gift|CHAR(20)|NO|-|NO|礼物|
    |goods_fitting|CHAR(20)|NO|-|NO|适配|
    |goods_keywords|CHAR(20)|NO|-|NO|关键字|
    |goods_desc|VARCHAR(255)|NO|-|NO|商品描述|
    |goods_sort|INTERGER(20)|NO|-|NO|排序|
    |is_delete|CHAR(1)|NO|-|NO|是否已删除|
    |is_hot|CHAR(1)|NO|-|NO|是否热品|
    |is_best|CHAR(1)|NO|-|NO|是否畅销品|
    |is_new|CHAR(1)|NO|-|NO|是否新品|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |goods_type_id|INTERGER(20)|NO|-|NO|规格ID|
    |status|CHAR(1)|NO|-|NO|状态|


    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |good_sn|good_sn|unique|
    |cate_id|cate_id|unique|


    > **goods_cate表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |title|VARCHAR(255)|NO|-|NO|商品分类|
    |cate_img|CHAR(20)|NO|-|NO|分类图片|
    |filter_attr|CHAR(20)|NO|-|NO|是否超级管理员|
    |link|VARCHAR(255)|NO|-|NO|链接|
    |pid|VARCHAR(20)|NO|-|NO|父级id|
    |template|CHAR(20)|NO|-|NO|模板|
    |sub_title|VARCHAR(255)|NO|-|NO|副标题|
    |keywords|CHAR(20)|NO|-|NO|关键字|
    |describtion|VARCHAR(255)|NO|-|NO|描述|
    |sort|INTERGER(20)|NO|-|NO|排序|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |status|CHAR(1)|NO|-|NO|状态|

    > **goods_type表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|种类id|
    |title|VARCHAR(255)|NO|-|NO|种类名|
    |describtion|VARCHAR(255)|NO|-|NO|描述|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |status|CHAR(1)|NO|-|NO|状态|


    > **goods_type_attribute表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|种类属性id|
    |cate_id|VARCHAR(20)|NO|-|NO|分类id|
    |title|VARCHAR(255)|NO|-|NO|规格名|
    |attr_type|INTERGER|NO|-|yes|属性类型|
    |attr_value|VARCHAR(255)|NO|-|NO|属性值|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |status|CHAR(1)|NO|-|NO|状态|


    > **goods_attr表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|属性id|
    |goods_id|INTERGER|NO|-|yes|商品id|
    |attribute_cate_id|INTERGER|NO|-|yes|属性分类id|
    |attribute_id|INTERGER|NO|-|NO|属性id|
    |attribute_type|INTERGER|NO|-|yes|属性类型|
    |attribute_title|VARCHAR(255)|NO|-|NO|属性标题|
    |attribute_value|VARCHAR(255)|NO|-|NO|属性值|
    |cid|INTERGER|NO|-|NO|分类id|
    |sort|INTERGER(20)|NO|-|NO|排序|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |status|CHAR(1)|NO|-|NO|状态|


    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |goods_id|goods_id|unique|
    |cid|cid|unique|
    |attribute_id|attribute_id|unique|



    > **goods_img表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|用户id|
    |product_id|INTERGER|NO|-|NO|商品id|
    |img_url|VARCHAR(255)|NO|-|NO|图片url地址|
    |color_id|INTERGER|NO|-|NO|商品id|
    |sort|INTERGER(20)|NO|-|NO|排序|
    |add_time|DATATIME|NO|-|NO|添加时间|
    |status|CHAR(1)|NO|-|NO|状态|  
    
    > **Indexes**

    |名称|字段|类型|
    |:--:|:--:|:--:|
    |product_id|product_id|unique|

    > **goods_color表**
    
    |名称|类型|允许空|默认值|主键|说明|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |id|INTERGER|NO|-|yes|颜色id|
    |color_name|VARCHAR(255)|NO|-|yes|颜色名称|
    |color_value|CHAR(6)|NO|-|NO|色值|
    |status|CHAR(1)|NO|-|NO|状态|  

    
