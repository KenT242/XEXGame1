import { _decorator, Component, Node, KeyCode, EventKeyboard, input, Input } from "cc";
import { CharAnimation } from "./CharAnimation";
import { CharMovingType } from "./Enums/CharMoving";
import _ from "lodash-es";
const { ccclass, property } = _decorator;

@ccclass("DeathCharacter")
export class DeathCharacter extends Component {
  //NOTE: characterMovingType use for all character to handle animation, moving,...
  public characterMovingType: CharMovingType;

  public charAnimation: Component;

  onLoad() {
    this.charAnimation = this.getComponent("CharAnimation");

    this.initListener()
  }

  update(deltaTime: number) {}

  initListener() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        _.set(this.charAnimation, 'characterMovingType', CharMovingType.Walk)
        break;
    }
  }
}
