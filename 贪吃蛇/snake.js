(function (window) {
    // 创建一个蛇身的函数
    let list = [];
    function Snake(width, height, bgi) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = this.direction || 'right';
        // 创建一个数组 保存蛇身的坐标
        this.body = [
            { x: 3, y: 1, bgi: 'url("./zhuye01=0.jpg")' },
            { x: 2, y: 1, bgi: 'url("./zhuye01=0.jpg")' },
            { x: 1, y: 1, bgi: 'url("./zhuye01=0.jpg")' },
        ]
    }
    // 创建一个原型,用来写蛇身
    Snake.prototype.render = function (map) {
        del(map);
        for (let i = 0; i < this.body.length; i++) {
            let div1 = document.createElement('div');
            div1.style.position = 'absolute';
            div1.style.width = this.width + 'px';
            div1.style.height = this.height + 'px';
            div1.style.left = this.body[i].x * this.width + 'px';
            div1.style.top = this.body[i].y * this.height + 'px';
            div1.style.backgroundImage = this.body[i].bgi;
            div1.style.backgroundSize='contain'
            div1.style.borderRadius = '10px'
            map.appendChild(div1);
            list.push(div1);
        }

    }
    function del(map) {
        for (let i = 0; i < list.length; i++) {
            map.removeChild(list[i]);
        }
        list = [];
    }
    Snake.prototype.move = function (map, food) {
        // 先改变蛇身的坐标;
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        // 改变蛇头
        switch (this.direction) {
            case "right":
                this.body[0].x++
                break;
            case "left":
                this.body[0].x--
                break;
            case "top":
                this.body[0].y--
                break;
            case "bottom":
                this.body[0].y++
                break;
        }

        var snakeHeadX = this.body[0].x * this.width;
        var snakeHeadY = this.body[0].y * this.height;
        var foodX = food.x;
        var foodY = food.y;
        var lastSnake = this.body[this.body.length - 1];
        if (snakeHeadX === foodX && snakeHeadY === foodY) {
            //表示吃到了食物
            //长身体(给body添加一个元素,该元素是一个对象,里面有x,y和bgColor)
            //新增的xy是原来蛇尾巴的xy,bgColor随机一个颜色
            this.body.push({
                x: lastSnake.x,
                y: lastSnake.y,
                bgi: 'url("./zhuye01=0.jpg")'
            });
            count++;
            btn.value = '万山绿帽数'+count;
            if(count==30){
                alert('恭喜万山,成为了绿帽王!')
            }
            food.render(map);
        }
    }
    // function getColorForRandom() {
    //     var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];  //下标0-15
    //     var str = "#";
    //     //循环产生 6个 0-15的数.
    //     for (var i = 0; i < 6; i++) {
    //         var num = Math.floor(Math.random() * 16);
    //         //根据这个随机数,在arr数组中去取值.
    //         str += arr[num];
    //     }
    //     return str;   //"#98de00"
    // }
    //调用一下食物对象的render方法. 就会让食物对象重新随机一个坐标重新渲染
    //那就相当于有了一个新食物对象
    window.Snake = Snake;
}(window));