import { _decorator, Component, Node, Animation, Enum } from "cc";
import { CharMovingType } from "./Enums/CharMoving";
const { ccclass, property } = _decorator;

@ccclass("CharAnimation")
export class CharAnimation extends Component {
  @property({
    type: Enum(CharMovingType),
  })
  public characterMovingType: CharMovingType;

  public anim: Animation = null;

  onLoad() {
    this.anim = this.getComponent(Animation);
    this.anim.play("Idle");
  }

  update(deltaTime: number) {
    if (this.characterMovingType == CharMovingType.Bet) {
      if (!this.anim.getState("Card").isPlaying) this.anim.play("Card");
    } else if (
      this.characterMovingType == CharMovingType.Idle &&
      !this.anim.getState("Idle").isPlaying
    ) {
      this.anim.play("Idle");
    } else if (
      this.characterMovingType == CharMovingType.Walk &&
      !this.anim.getState("Walk").isPlaying
    ) {
      this.anim.play("Walk");
    }
  }
}
