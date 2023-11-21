import { _decorator, Button, Component, find, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BetButton")
export class BetButton extends Component {
  @property({
    tooltip: "bet button",
    type: Button,
  })
  public button: Button;

  // each button have a bet button type refer to option need bet
  @property({
    tooltip: "bet option type",
    type: Number,
  })
  public betOptionType: number;

  private betGameControl;

  onLoad() {
    this.betGameControl = find("BetGameControl").getComponent("BetGameControl");
    console.log(this.betGameControl);

    this.button.node.on(Button.EventType.CLICK, this.bet, this);
  }

  bet() {
    this.betGameControl.bet(this.betOptionType);
  }
}
