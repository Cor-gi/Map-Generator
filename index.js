const canvas = document.getElementById('Canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Boundary {
    constructor({ position }) {
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle = 'orange'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const map = [
    [
    ['-', '-', ' ', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', '-', '-'],
    ['-', ' ', ' ', '-', ' ', '-', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', '-', ' ', '-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-']
    ]
]

const boundaries = []

mapped.forEach((array, n) => {
    array.forEach((row, i) => {
        row.forEach((symbol, j) => {
            switch (symbol) {
                case '-':
                    boundaries.push(new Boundary({
                        position: {
                            x: 40 * j + (150*n),
                            y: 40 * i
                        }
                    }))
                    console.log(n)
                    break;
            }
        })
    })
})


boundaries.forEach((boundary) => {
    boundary.draw()
})