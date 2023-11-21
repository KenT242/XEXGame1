import {
  _decorator,
  Button,
  Component,
  director,
  find,
  Node,
  RichText,
  sys,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("StartBet")
export class StartBet extends Component {
  @property({
    tooltip: "start bet button",
    type: Button,
  })
  public startBetButton: Button;

  public betGameControl;

  onLoad() {
    this.betGameControl = find("BetGameControl").getComponent("BetGameControl");
    this.startBetButton.node.on(Button.EventType.CLICK, this.startBet, this);
  }

  startBet() {
    console.log("start bet: ", this.betGameControl.betOption);

    sys.localStorage.setItem("betOption", this.betGameControl.betOption);

    // open scene result
    director.loadScene("Fighting");
  }
}
