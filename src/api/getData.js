import fetch from '@/config/fetch'
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
 * api请求量
 */

// export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

// export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

// export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/v6/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/v6/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/v6/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('/v5/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('/v5/count');

/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('/v3/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */

export const addShop = data => fetch('/v2/addshop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v3/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = shop_id => fetch('/v2/shopmenu/' + shop_id);

/**
 * 添加食品种类
 */

export const addCategory = data => fetch('/v2/addCategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('/v2/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = () => fetch('/v2/getCategories');

/**
 * 获取餐馆列表
 */

export const getResturants = data => fetch('/v2/shops', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = shop_id => fetch('/v2/shop/' + shop_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => fetch('/v2/shops/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => fetch('/v2/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = shop_id => fetch('/v2/shop/' + shop_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => fetch('/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

export const getUserList = data => fetch('/v1/users/list', data);

/**
 * 获取用户数量
 */

export const getUserCount = data => fetch('/v1/users/count', data);

/**
 * 获取订单列表
 */

export const getOrderList = data => fetch('/v2/orders', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => fetch('/v2/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('/v1/users/city/count');
