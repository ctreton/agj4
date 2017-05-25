
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'AGJ4', { preload: preload, create: create, update: update });

function preload() {
    game.load.atlas('puppy_dead', 'assets/sprites/dog/dead/dead.png', 'assets/sprites/dog/dead/dead.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_fall', 'assets/sprites/dog/fall/fall.png', 'assets/sprites/dog/fall/fall.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_hurt', 'assets/sprites/dog/hurt/hurt.png', 'assets/sprites/dog/hurt/hurt.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_idle', 'assets/sprites/dog/idle/idle.png', 'assets/sprites/dog/idle/idle.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_jump', 'assets/sprites/dog/jump/jump.png', 'assets/sprites/dog/jump/jump.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_run', 'assets/sprites/dog/run/run.png', 'assets/sprites/dog/run/run.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_slide', 'assets/sprites/dog/slide/slide.png', 'assets/sprites/dog/slide/slide.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('puppy_walk', 'assets/sprites/dog/walk/walk.png', 'assets/sprites/dog/walk/walk.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
}

var puppy_dying;
var puppy_falling;
var puppy_hurting;
var puppy_idle;
var puppy_jumping;
var puppy_running;
var puppy_sliding;
var puppy_walking;

function create() {

    game.stage.backgroundColor = '#1873CE';

    puppy_dying = game.add.sprite(100, 100, 'puppy_dead');
    puppy_dying.width = 100;
    puppy_dying.height = 88;
    puppy_dying.animations.add('puppy_dying');
    puppy_dying.animations.play('puppy_dying', 15, true);

    puppy_falling = game.add.sprite(250, 100, 'puppy_fall');
    puppy_falling.width = 100;
    puppy_falling.height = 88;
    puppy_falling.animations.add('puppy_falling');
    puppy_falling.animations.play('puppy_falling', 15, true);

    puppy_hurting = game.add.sprite(400, 100, 'puppy_hurt');
    puppy_hurting.width = 100;
    puppy_hurting.height = 88;
    puppy_hurting.animations.add('puppy_hurting');
    puppy_hurting.animations.play('puppy_hurting', 15, true);

    puppy_idle = game.add.sprite(550, 100, 'puppy_idle');
    puppy_idle.width = 100;
    puppy_idle.height = 88;
    puppy_idle.animations.add('puppy_idle');
    puppy_idle.animations.play('puppy_idle', 15, true);

    puppy_jumping = game.add.sprite(100, 250, 'puppy_jump');
    puppy_jumping.width = 100;
    puppy_jumping.height = 88;
    puppy_jumping.animations.add('puppy_jumping');
    puppy_jumping.animations.play('puppy_jumping', 15, true);

    puppy_sliding = game.add.sprite(400, 250, 'puppy_slide');
    puppy_sliding.width = 100;
    puppy_sliding.height = 88;
    puppy_sliding.animations.add('puppy_sliding');
    puppy_sliding.animations.play('puppy_sliding', 15, true);

    puppy_walking = game.add.sprite(100, 400, 'puppy_walk');
    puppy_walking.width = 100;
    puppy_walking.height = 88;
    puppy_walking.animations.add('puppy_walking');
    puppy_walking.animations.play('puppy_walking', 15, true);

    puppy_running = game.add.sprite(100, 500, 'puppy_run');
    puppy_running.width = 100;
    puppy_running.height = 88;
    puppy_running.animations.add('puppy_running');
    puppy_running.animations.play('puppy_running', 15, true);

}

function update() {

    puppy_walking.x = (puppy_walking.x + 1) % 800;
    puppy_running.x = (puppy_running.x + 2) % 800;

}