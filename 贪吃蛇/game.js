(function (window) {
    let that = null;
    function Game(map) {
        this.snake = new Snake();
        this.food = new Food();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        this.food.render(this.map)
        this.snake.render(this.map)
        // this.snake.move(this.map)
        snakeAutoMove()
        moveFX();
       
    }

    // 设置一个定时器,令蛇自动蠕动;
    function snakeAutoMove() {
        let timer;
        btn1.onclick = function () {
            timer = setInterval(function () {
                this.snake.move(this.map, this.food)
                let snakeHeadX = this.snake.body[0].x * this.snake.width
                let snakeHeadY = this.snake.body[0].y * this.snake.height
                if (snakeHeadX < 0 || snakeHeadY < 0 || snakeHeadX >= this.map.offsetWidth || snakeHeadY >= this.map.offsetHeight) {
                    alert('Game over!')
                    clearInterval(timer);
                    return;
                }
                this.snake.render(this.map)
            }.bind(that),
                200)
        }
        btn2.onclick = function() {
            clearInterval(timer)
        }
    }

    // 设置键盘事件
    function moveFX() {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37:
                    //如果你当前的方向不等于右(上下左),可以向左
                    if (this.snake.direction != "right") {
                        this.snake.direction = "left";
                    }
                    break;
                case 38:
                    if (this.snake.direction != "bottom") {
                        this.snake.direction = "top";
                    }
                    break;
                case 39:
                    if (this.snake.direction != "left") {
                        this.snake.direction = "right";
                    }
                    break;
                case 40:
                    if (this.snake.direction != "top") {
                        this.snake.direction = "bottom";
                    }
                    break;
            }
        }.bind(that);
    }
    window.Game = Game;
})(window)