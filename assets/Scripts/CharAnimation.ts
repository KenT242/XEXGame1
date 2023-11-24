import { _decorator, Component, Node, Animation, Enum } from 'cc';
import { CharMovingType } from './Enums/CharMoving';
const { ccclass, property } = _decorator;

@ccclass('CharAnimation')
export class CharAnimation extends Component {


    @property({
        type: Enum(CharMovingType)
    })
    public characterMovingType: CharMovingType

    public anim: Animation = null;

    onLoad() {
        this.anim = this.getComponent(Animation)
        this.anim.play('Idle');

    }

    update(deltaTime: number) {
        if(!this.anim.getState('Idle').isPlaying && this.characterMovingType == CharMovingType.Idle) {
            this.anim.play('Idle')
        }
        else if (!this.anim.getState('Walk').isPlaying && this.characterMovingType == CharMovingType.Walk) {
            this.anim.play('Walk')
        }
    }
}

