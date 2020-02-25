class Snake {

    constructor(size) {
        this._size = size;
        this._positionX = positionX;
        this._positionY = positionY;
        this._direction = direction;
    }

    get size() {
        return this._size;
    }

    get positionX() {
        return this._positionX;
    }

    get positionY() {
        return this._positionY;
    }

    up() {
        this._direction = 'UP';
    }

    down() {
        this._direction = 'DOWN';
    }

    left() {
        this._direction = 'LEFT';
    }

    right() {
        this._direction = 'RIGHT';
    }

}