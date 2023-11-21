import { _decorator, Component, Node, RichText } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BetGameControl")
export class BetGameControl extends Component {
  // Note: bet option will be 0, 1, 2 refer to 3 option of bet
  public betOption: number = 0;

  @property({
    tooltip: "Bet Option Text",
    type: RichText,
  })
  public betOptionInfo: RichText;

  start() {
    this.changeBetOptionInfo();
  }

  update(deltaTime: number) {}

  changeBetOptionInfo() {
    this.betOptionInfo.string = "Bet: " + (this.betOption + 1);
  }

  bet(betOption) {
    this.betOption = betOption;
    this.changeBetOptionInfo();
    console.log("GameControl", this.betOption);
  }
}
