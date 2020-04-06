let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colorArray = [
    '#8DA4B2', '#679BB8', '#6BB2DA', '#A0CEE7', '#E3F1F8'
]

let score = 0;
let snow = 0;

// Mouse events

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', event => {
    mouse.x=event.x;
    mouse.y=event.y;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

// Collision detection

function getDistance (x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

}

// Snowflake objects

function Snowflake (x, y, dy, radius, color) {
    this.x = x,
    this.y = y,
    this.dy = dy, // velocity
    this.radius = radius,
    this.color = color
}

Snowflake.prototype.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath()
}

Snowflake.prototype.update = function () {
    this.draw();

    if (this.y + this.radius < innerHeight) {
        this.y += this.dy;
    } else {this.dy = 0};

    if (getDistance(gamer.x, gamer.y, this.x, this.y) < gamer.radius + this.radius) {

        score += Math.floor(this.radius * this.dy);
    
        this.radius = 0;
    };

    return score;
    
}

function snowdrift (nb, height, color) {
    let p = 1;
    for (let i=0; i<nb; i++) {
    c.beginPath();
    c.arc(innerWidth / (nb * 2) * p , innerHeight + 200, height, Math.PI, 0, false);    
    c.fillStyle = color;
    c.fill();
    c.closePath();
    p += 2;
    }
}

// Gamer object

function Gamer (x, y) {
    this.x = x,
    this.y = y,
    this.radius = 20,
    this.color = 'red',

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    },

    this.update = function () {
        this.draw();
    }

}

// Teddybear object

function Teddybear () {

    this.teddy = [
        [200, 210, 45, 45], // head
        [200, 105, 60, 80], // body
        [170, 240, 20, 20], // ears
        [230, 240, 20, 20],
        [150, 140, 25, 25], // hands
        [250, 140, 25, 25],
        [160, 35, 25, 25], // legs
        [240, 35, 25, 25],
    ],

    this.x = 200,
    this.dx = 0.5,
    
    this.draw = function () {
    for (let i=0; i < this.teddy.length; i++) {
        c.beginPath();
        c.ellipse(innerWidth - this.teddy[i][0], innerHeight - this.teddy[i][1], this.teddy[i][2], this.teddy[i][3], 0, Math.PI * 2, false);
        c.fillStyle = "#523626";
        c.fill();
        c.closePath();
        }
    },

    this.tail = function () {
        c.beginPath();
        c.ellipse(innerWidth - this.x, innerHeight - 60, 15, 15, 0, Math.PI * 2, false);
        c.fillStyle = "#F9F7F3";
        c.fill();
        c.closePath();
    },

    this.update = function () {
        if (this.x > 220 || this.x < 180) {
            this.dx = -this.dx
        };

        this.x += this.dx;
        
        this.draw();
        this.tail();
    }
    
    }

// Implementation

const backgroundGradient = c.createLinearGradient(0, 0, 0, innerHeight); // gradient from top to bottom
backgroundGradient.addColorStop(0, '#FFFFFF');
backgroundGradient.addColorStop(1, '#0F243C');

let counter = 0;
var snowflakes;
var gamer;
var bear;

function init () {
    snowflakes = [];
    gamer = new Gamer(undefined, undefined);
    bear = new Teddybear();
}

// Animation loop

function animate () {
    if (score < 5000) {
    requestAnimationFrame(animate);
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, innerWidth, innerHeight);

    snowdrift(1, innerWidth * 0.37, "#DCE3F1");
    snowdrift(2, innerWidth * 0.33, "#F9EEF3");
    snowdrift(3, innerWidth * 0.27, "#E2EBF2");


    snowflakes.forEach(snowflake => {
        snowflake.update();
    });

    counter++;

    if (counter % 25 == 0) {
        for (let i=0; i<5; i++) {

            var radius = Math.random() * 30 + 1;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = radius - 50;
            var dy = Math.random() * 4 + 1; 
    
            snowflakes.push(new Snowflake(x, y, dy, radius, colorArray[Math.floor(Math.random()*colorArray.length)]))
        }
    };

    gamer.x = mouse.x;
    gamer.y = mouse.y;
    gamer.update();

    bear.update();

    c.font = '30px Quicksand';
    c.fillStyle = '#0F243C';
    c.textAlign = 'center';
    c.fillText('Score ' + score, innerWidth - 200, 70);

    } else {
        
    c.font = '50px Quicksand';
    c.fillStyle = '#0F243C';
    c.textAlign = 'center';
    c.fillText('YOU WON! ', innerWidth - 200, innerHeight - 300);
    location.href = '../html/cv.html';
    
    }
}

    init();
    animate();