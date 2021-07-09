import Phaser from 'phaser';

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    this.title = this.add.text(630, 30, 'GAME INSTRUCTIONS', {
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.objective1 = this.add.text(200, 60, '1. You should pick as many rupees as you can until de majoras mask appears', { fontSize: '18px', fill: '#fff' });
    this.objective2 = this.add.text(200, 90, '2. If the masks touch you two dragon would be summoned and you will have to fight them', { fontSize: '18px', fill: '#fff' });

    this.title = this.add.text(630, 260, 'GAME CONTROLS', {
      fontSize: 32,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.title = this.add.text(630, 290, 'World Scene(First Scene)', {
      fontSize: 24,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.control1 = this.add.text(200, 310, '1. Move Forward = Right Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.control2 = this.add.text(200, 340, '2. Move Backward = Left Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.control3 = this.add.text(200, 370, '3. Jump = Up Key (Keyboard)', { fontSize: '18px', fill: '#fff' });

    this.title = this.add.text(630, 400, 'Battle Scene(Second Scene)', {
      fontSize: 24,
      fontStyle: 'bold',
      color: 'white',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.battleControl1 = this.add.text(200, 430, '1. Select Dragon to Attack = Left Key (Keyboard)', { fontSize: '18px', fill: '#fff' });
    this.battleControl1 = this.add.text(200, 460, '1. To Attack = Space Bar (Keyboard)', { fontSize: '18px', fill: '#fff' });

    this.menuButton = this.add.sprite(650, 560, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });
  }
}