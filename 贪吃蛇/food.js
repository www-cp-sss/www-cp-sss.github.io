(function (window) {
    let list = []
    function Food(width, height, x, y, bgi) {
        this.width = width || 20;
        this.height = height || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.bgi = bgi || 'url("./timg (2).jpg")';
    }
    // 创建一个食物的原型
    Food.prototype.render = function (map) {
        del(map);
        // 创建一个新的div
        let div1 = document.createElement('div')
        // 创建随机坐标;
        this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = Math.floor(Math.random() * map.offsetHeight / this.height) * this.height;
        div1.style.position = 'absolute';
        div1.style.left = this.x + 'px';
        div1.style.top = this.y + 'px';
        div1.style.width = this.width + 'px'
        div1.style.height = this.height + 'px'
        div1.style.backgroundImage = this.bgi;
        div1.style.backgroundSize = 'contain'
        div1.style.borderRadius = '10px'
        map.appendChild(div1)
        list.push(div1)
    }

    function del(map) {
        for (let i = 0; i < list.length; i++) {
            map.removeChild(list[i]);
        }
        list = [];
    }
    window.Food = Food;
})(window);
