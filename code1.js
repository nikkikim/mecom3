gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDNewSpriteObjects1= [];
gdjs.EndCode.GDNewSpriteObjects2= [];
gdjs.EndCode.GDEndScreenObjects1= [];
gdjs.EndCode.GDEndScreenObjects2= [];
gdjs.EndCode.GDrestartObjects1= [];
gdjs.EndCode.GDrestartObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EndScreen"), gdjs.EndCode.GDEndScreenObjects1);
{for(var i = 0, len = gdjs.EndCode.GDEndScreenObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDEndScreenObjects1[i].getBehavior("Text").setText("You've got" + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " " + "points!");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L1", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDEndScreenObjects1.length = 0;
gdjs.EndCode.GDEndScreenObjects2.length = 0;
gdjs.EndCode.GDrestartObjects1.length = 0;
gdjs.EndCode.GDrestartObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);

return;

}

gdjs['EndCode'] = gdjs.EndCode;
