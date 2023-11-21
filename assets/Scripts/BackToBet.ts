import { _decorator, Button, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BackToBet")
export class BackToBet extends Component {
  @property({
    tooltip: "Back To Bet Button",
    type: Button,
  })
  public startBetButton: Button;

  onLoad() {
    this.startBetButton.node.on(
      Button.EventType.CLICK,
      this.backToBetScene,
      this
    );
  }

  backToBetScene() {
    // open scene result
    director.loadScene("Bet");
  }
}
