var config = {
    type: Phaser.AUTO,
    width: 933.333,
    height: 700,

    scene: {
        preload:preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game (config);

var oFish;

function preload() {
this.load.image('background','assets/bg_areia.png');
this.load.image('logo','assets/logo-inteli_branco.png');
this.load.image('water','assets/WaterBottle.png');
this.load.image('crab','assets/peixes/Crab.png');
this.load.image('shell','assets/shell.png');
this.load.image('shell1','assets/shell1.png');



}

function create() {
this.add.image(400, 300, 'background').setScale(2);
this.add.image(470, 615, 'logo').setScale(0.8);
this.add.image(200,400,'water').setScale(0.5);
this.add.image(600,200,'shell').setScale(0.05);
this.add.image(700,600,'shell1').setScale(0.05);
oFish = this.add.image(460, 350, 'crab').setScale(0.1);



oFish.setFlip(true, false);


}

function update() {

    oFish.x = this.input.x;
    oFish.y = this.input.y;

}
