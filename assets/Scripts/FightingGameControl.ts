import {
  _decorator,
  Component,
  find,
  Node,
  randomRangeInt,
  RichText,
  sys,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("FightingGameControl")
export class FightingGameControl extends Component {
  // temp to show result
  @property({
    type: RichText,
  })
  public winText: RichText;

  getResult() {
    // get result from smart contract
    // FIXME: temp remove me later
    const result = randomRangeInt(0, 3);
    return result;
  }

  onLoad() {
    const betResult = this.getResult();
    const betOption = parseInt(sys.localStorage.getItem("betOption"));

    console.log("betOption: ", betOption);
    console.log("betResult: ", betResult);

    this.winText.string = `Bet: ${betOption + 1}\nWin: ${betResult + 1}`;
  }
}
