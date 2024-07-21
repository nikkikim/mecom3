gdjs.L1Code = {};
gdjs.L1Code.localVariables = [];
gdjs.L1Code.GDbackgroundObjects1= [];
gdjs.L1Code.GDbackgroundObjects2= [];
gdjs.L1Code.GDbackgroundObjects3= [];
gdjs.L1Code.GDplatformObjects1= [];
gdjs.L1Code.GDplatformObjects2= [];
gdjs.L1Code.GDplatformObjects3= [];
gdjs.L1Code.GDplayerObjects1= [];
gdjs.L1Code.GDplayerObjects2= [];
gdjs.L1Code.GDplayerObjects3= [];
gdjs.L1Code.GDcoinObjects1= [];
gdjs.L1Code.GDcoinObjects2= [];
gdjs.L1Code.GDcoinObjects3= [];
gdjs.L1Code.GDscore_9595imgObjects1= [];
gdjs.L1Code.GDscore_9595imgObjects2= [];
gdjs.L1Code.GDscore_9595imgObjects3= [];
gdjs.L1Code.GDscore_9595txtObjects1= [];
gdjs.L1Code.GDscore_9595txtObjects2= [];
gdjs.L1Code.GDscore_9595txtObjects3= [];
gdjs.L1Code.GDenemyObjects1= [];
gdjs.L1Code.GDenemyObjects2= [];
gdjs.L1Code.GDenemyObjects3= [];
gdjs.L1Code.GDendObjects1= [];
gdjs.L1Code.GDendObjects2= [];
gdjs.L1Code.GDendObjects3= [];
gdjs.L1Code.GDborderObjects1= [];
gdjs.L1Code.GDborderObjects2= [];
gdjs.L1Code.GDborderObjects3= [];


gdjs.L1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.L1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.L1Code.GDplayerObjects2[k] = gdjs.L1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10495236);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "508f226348f7531bedc7e87f5f4f8564043af9d89dc21cdb6b7aa1d3b7fadbbe_Walk_06.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.L1Code.GDplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.L1Code.GDplayerObjects2[k] = gdjs.L1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.L1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.L1Code.GDplayerObjects2[k] = gdjs.L1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.L1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.L1Code.GDplayerObjects2[k] = gdjs.L1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.L1Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDplayerObjects1[i].getY() > 1080 ) {
        isConditionTrue_0 = true;
        gdjs.L1Code.GDplayerObjects1[k] = gdjs.L1Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects1[i].setPosition(134,730);
}
}}

}


};gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.L1Code.GDplayerObjects1});
gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.L1Code.GDcoinObjects1});
gdjs.L1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.L1Code.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects, gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDcoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDcoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score_txt"), gdjs.L1Code.GDscore_9595txtObjects1);
{for(var i = 0, len = gdjs.L1Code.GDcoinObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "eab8dd1df0b12463a5485b89297978f23be83c72932c59920aa940dfe7819a17_Run_08.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.L1Code.GDscore_9595txtObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDscore_9595txtObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.L1Code.GDplayerObjects1});
gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.L1Code.GDenemyObjects1});
gdjs.L1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.L1Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects, gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDenemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.L1Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.L1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDplayerObjects1[i].setPosition(134,730);
}
}}

}


};gdjs.L1Code.eventsList3 = function(runtimeScene) {

};gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.L1Code.GDplayerObjects1});
gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.L1Code.GDendObjects1});
gdjs.L1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.L1Code.GDborderObjects1);
{for(var i = 0, len = gdjs.L1Code.GDborderObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDborderObjects1[i].hide();
}
}}

}


{


gdjs.L1Code.eventsList0(runtimeScene);
}


{


gdjs.L1Code.eventsList1(runtimeScene);
}


{


gdjs.L1Code.eventsList2(runtimeScene);
}


{


gdjs.L1Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.L1Code.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.L1Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDplayerObjects1Objects, gdjs.L1Code.mapOfGDgdjs_9546L1Code_9546GDendObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


};

gdjs.L1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.L1Code.GDbackgroundObjects1.length = 0;
gdjs.L1Code.GDbackgroundObjects2.length = 0;
gdjs.L1Code.GDbackgroundObjects3.length = 0;
gdjs.L1Code.GDplatformObjects1.length = 0;
gdjs.L1Code.GDplatformObjects2.length = 0;
gdjs.L1Code.GDplatformObjects3.length = 0;
gdjs.L1Code.GDplayerObjects1.length = 0;
gdjs.L1Code.GDplayerObjects2.length = 0;
gdjs.L1Code.GDplayerObjects3.length = 0;
gdjs.L1Code.GDcoinObjects1.length = 0;
gdjs.L1Code.GDcoinObjects2.length = 0;
gdjs.L1Code.GDcoinObjects3.length = 0;
gdjs.L1Code.GDscore_9595imgObjects1.length = 0;
gdjs.L1Code.GDscore_9595imgObjects2.length = 0;
gdjs.L1Code.GDscore_9595imgObjects3.length = 0;
gdjs.L1Code.GDscore_9595txtObjects1.length = 0;
gdjs.L1Code.GDscore_9595txtObjects2.length = 0;
gdjs.L1Code.GDscore_9595txtObjects3.length = 0;
gdjs.L1Code.GDenemyObjects1.length = 0;
gdjs.L1Code.GDenemyObjects2.length = 0;
gdjs.L1Code.GDenemyObjects3.length = 0;
gdjs.L1Code.GDendObjects1.length = 0;
gdjs.L1Code.GDendObjects2.length = 0;
gdjs.L1Code.GDendObjects3.length = 0;
gdjs.L1Code.GDborderObjects1.length = 0;
gdjs.L1Code.GDborderObjects2.length = 0;
gdjs.L1Code.GDborderObjects3.length = 0;

gdjs.L1Code.eventsList4(runtimeScene);

return;

}

gdjs['L1Code'] = gdjs.L1Code;
