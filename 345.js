// 获取当前日期和时间
function getCurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();       // 年
    var month = now.getMonth() + 1;     // 月
    var day = now.getDate();            // 日
    var hour = now.getHours();          // 小时
    var minute = now.getMinutes();      // 分钟
    var second = now.getSeconds();      // 秒
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    var currentdate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return currentdate;
}

// 获取用户地理位置
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("您的位置：纬度 " + latitude + ", 经度 " + longitude);
        }, function(error) {
            console.error("获取地理位置失败：" + error.message);
        });
    } else {
        alert("您的浏览器不支持HTML5 Geolocation API");
    }
}

// 将信息和时间插入到HTML中
function displayInfo() {
    var dateTime = getCurrentDateTime();
    var infoElement = document.getElementById('info');
    infoElement.textContent = '当前时间：' + dateTime + '\n' + '地理位置信息：待获取...';

    // 尝试获取地理位置信息
    getLocation();
}

// 当页面加载完成后立即显示信息
window.onload = displayInfo;