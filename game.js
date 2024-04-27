const config = {
    type: Phaser.AUTO,
    width: '500',
    height: '400',
    parent: 'game-container',
    backgroundColor: '#FFF',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets here
    this.load.image('logo', 'assets/Logo.png');
    //this.load.image('background', 'assets/background.png');
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

}

function create() {

    window.addEventListener('resize', () => {
        // Update game size
  //      game.scale.resize(window.innerWidth, window.innerHeight);
    });


    // Create game objects here
    //this.add.image(400, 300, 'background');
    const logo = this.add.image(85, 34, 'logo');
    logo.setScale(0.5); // Adjust scale as needed

    // Create buttons
     // Create buttons
     const buttonHeight = 50; // Adjust button height as needed
     const margin = 4; // Margin between buttons
     const totalButtonHeight = buttonHeight * 4 + margin * 3;
     const startY = (config.height) / 2;
 
     // Dynamically position buttons
     const centerX = config.width / 2;
     for (let i = 0; i < 1; i++) {
         const buttonY = startY + (buttonHeight + margin) * i;
 
         const button = this.add.text(centerX, buttonY, 'Play Oscars 23', {
            fontFamily: 'Rog Fonts',
            fontSize: '20px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 255,
            fixedHeight: 50,
            backgroundColor: '#22B14C'
        }).setPadding(14).setOrigin(0.5);

        button.setInteractive({ useHandCursor: true });
        button.on('pointerdown', function (pointer) {            
            window.location.href = 'https://fredmarkes.github.io/QuickEmoji/';
        });
    }



}

function update() {
    // Update game logic here
}
