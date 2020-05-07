import axios from 'axios'

/**
 * 登陆
 */

export const login = data => axios.post('/v5/login', data);

/**
 * 退出
 */

export const signout = () => axios.get('/v5/signout');

/**
 * 获取用户信息
 */

export const getAdminInfo = () => axios.get('/v5/info');

/**
 * 用户注册量
 */

export const userCount = date => axios.get('/v6/user/' + date + '/count',{
	params:date
});

/**
 * 某一天订单数量
 */

export const orderCount = date => axios.get('/v6/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => axios.get('/v6/admin/' + date + '/count',{
	params:date
});

/**
 * 管理员数量
 */

export const adminCount = () => axios.get('/v5/count');

/**
 * 管理员列表
 */

export const adminList = data => axios.get('/v5/all', {
	params:data
});


/**
 * 获取定位城市
 */

export const cityGuess = () => axios.get('/v3/cities', {
	params: {
		type: 'guess' 
	}
});

/**
 * 添加商铺
 */

export const addShop = data => axios.post('/v2/addshop', data);

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => axios.get('/v3/pois', {
	params:	{
		type: 'search',
		city_id: cityid,
		keyword: value
	}
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = shop_id => axios.get('/v2/shopmenu/' + shop_id);

/**
 * 添加食品种类
 */

export const addCategory = data => axios.post('/v2/addCategory', data);


/**
 * 添加食品
 */

export const addFood = data => axios.post('/v2/addfood', data);


/**
 * category 种类列表
 */

export const foodCategory = () => axios.get('/v2/getCategories');

/**
 * 获取餐馆列表
 */
export const getResturants = data => axios.get('/v2/shops', {
	params:data
});

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = shop_id => axios.get('/v2/shop/' + shop_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => axios.get('/v2/shops/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => axios.post('/v2/updateshop', data);

/**
 * 删除餐馆
 */

export const deleteResturant = shop_id => axios.delete('/v2/shop/' + shop_id);

/**
 * 获取食品列表
 */

export const getFoods = data => axios.get('/v2/foods', {
	params:data
});

/**
 * 获取食品数量
 */

export const getFoodsCount = data => axios.get('/v2/foods/count', {
	params:data
});


/**
 * 获取menu列表
 */

export const getMenu = data => axios.get('/v2/shopmenu/' + data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => axios.get('/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => axios.post('/v2/updatefood', data);

/**
 * 删除食品
 */

export const deleteFood = food_id => axios.delete('/v2/food/' + food_id);

/**
 * 获取用户列表
 */

export const getUserList = data => axios.get('/v1/users/list', {
	params:data
});

/**
 * 获取用户数量
 */

export const getUserCount = data => axios.get('/v1/users/count', {
	params: data
});

/**
 * 获取订单列表
 */

export const getOrderList = data => axios.get('/v2/orders', {
	params: data
});

/**
 * 获取订单数量
 */

export const getOrderCount = data => axios.get('/v2/orders/count', {
	params:data
});

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => axios.get('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => axios.get('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => axios.get('/v1/users/city/count');
