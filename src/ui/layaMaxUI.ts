/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui.test {
    export class PartScene2UI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/PartScene2");
        }
    }
    export class TestSceneUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/TestScene");
        }
    }
}