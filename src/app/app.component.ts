import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MainScene } from './main-scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  title = 'first-phaser3-game-demo';

  game: Phaser.Game;

  public readonly gameConfig: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 }
      }
    },
    parent: 'game-content',
  };

  ngOnInit() {
    this.game = new Phaser.Game(this.gameConfig);
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  ngAfterViewInit(): void {
    this.game.events.once('ready', () => {
      this.game.scene.add('MainScene', new MainScene(), true);
    });
  }

}
