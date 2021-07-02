var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["895c04eb-9e02-446e-b4c0-4981b76966b6","7e2c72fb-529d-49e5-819e-95ff00bc7976","e7985f31-bc6a-40d2-96c0-e4a917685f84","2bb2ad8a-9e86-4e4a-b197-601e0df4daee","ecf3a8d7-3fba-4269-a7cc-005a25ca23b7","27c1668d-9bff-4aba-868e-364f453b25dc","e8cc76b9-c34d-4b96-a825-f1cd45f00f7a","9e1efd02-175a-42c0-9cfd-8fc3cff42a59","10094b73-e413-4440-a168-c8f221ef4081","128ac5e9-9f07-4389-b8a1-858bc7505cf4","52eed744-2416-4509-8747-7be53079f9b5","0d5bccce-1385-40e4-809e-8315cb7cea0f","9f62e1b0-a5e1-470a-9d0b-7b872303ac88","d8ce904d-dbb2-4bc3-b9e3-cf78f312223e","d4459e2e-76a0-465a-8b8e-899c51792bb6"],"propsByKey":{"895c04eb-9e02-446e-b4c0-4981b76966b6":{"name":"RocketR","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/895c04eb-9e02-446e-b4c0-4981b76966b6.png","frameSize":{"x":59,"y":344},"frameCount":1,"looping":true,"frameDelay":4,"version":"hgirI5S2aRCc9DgKUXECtLaV45w_rLwT","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":344},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/895c04eb-9e02-446e-b4c0-4981b76966b6.png"},"7e2c72fb-529d-49e5-819e-95ff00bc7976":{"name":"RocketL","sourceUrl":null,"frameSize":{"x":58,"y":340},"frameCount":1,"looping":true,"frameDelay":12,"version":"A1NwPsjMlhSBTT5MGrsBqhaPpW1RKOD5","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":340},"rootRelativePath":"assets/7e2c72fb-529d-49e5-819e-95ff00bc7976.png"},"e7985f31-bc6a-40d2-96c0-e4a917685f84":{"name":"Core","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/e7985f31-bc6a-40d2-96c0-e4a917685f84.png","frameSize":{"x":59,"y":295},"frameCount":1,"looping":true,"frameDelay":4,"version":"GTdK96fPF_bmMtjCXbObY7XByihG3qTG","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":295},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/e7985f31-bc6a-40d2-96c0-e4a917685f84.png"},"2bb2ad8a-9e86-4e4a-b197-601e0df4daee":{"name":"WhatsApp Image 2021-06-25 at 20.18.33 (3).jpeg_1","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/2bb2ad8a-9e86-4e4a-b197-601e0df4daee.png","frameSize":{"x":712,"y":384},"frameCount":1,"looping":true,"frameDelay":4,"version":"THzUJJHBJZpOQNaJ9QbcAtQbwJkBGliO","loadedFromSource":true,"saved":true,"sourceSize":{"x":712,"y":384},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/2bb2ad8a-9e86-4e4a-b197-601e0df4daee.png"},"ecf3a8d7-3fba-4269-a7cc-005a25ca23b7":{"name":"Stage1btn","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/ecf3a8d7-3fba-4269-a7cc-005a25ca23b7.png","frameSize":{"x":120,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"2hQ03uOWx3qMW88SjDoL0N6rAfB8Xu_h","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":21},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/ecf3a8d7-3fba-4269-a7cc-005a25ca23b7.png"},"27c1668d-9bff-4aba-868e-364f453b25dc":{"name":"Stage2btn","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/27c1668d-9bff-4aba-868e-364f453b25dc.png","frameSize":{"x":120,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"cmcDExdnslju2zQ2lXKIcjWSIZBvH5zj","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":26},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/27c1668d-9bff-4aba-868e-364f453b25dc.png"},"e8cc76b9-c34d-4b96-a825-f1cd45f00f7a":{"name":"Stage3btn","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/e8cc76b9-c34d-4b96-a825-f1cd45f00f7a.png","frameSize":{"x":120,"y":28},"frameCount":1,"looping":true,"frameDelay":4,"version":"PslkXqpbqaAAHc1G1PGk3rtQ1FVbKxrV","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":28},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/e8cc76b9-c34d-4b96-a825-f1cd45f00f7a.png"},"9e1efd02-175a-42c0-9cfd-8fc3cff42a59":{"name":"Stage4btn","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/9e1efd02-175a-42c0-9cfd-8fc3cff42a59.png","frameSize":{"x":120,"y":28},"frameCount":1,"looping":true,"frameDelay":4,"version":"ctRSOZmvdov_en8kSazsUNS3FOiilONR","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":28},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/9e1efd02-175a-42c0-9cfd-8fc3cff42a59.png"},"10094b73-e413-4440-a168-c8f221ef4081":{"name":"payload2","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/10094b73-e413-4440-a168-c8f221ef4081.png","frameSize":{"x":845,"y":232},"frameCount":1,"looping":true,"frameDelay":4,"version":"wYPkkF2F48ZiobXx7CuKL5PZcgIMvmPX","loadedFromSource":true,"saved":true,"sourceSize":{"x":845,"y":232},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/10094b73-e413-4440-a168-c8f221ef4081.png"},"128ac5e9-9f07-4389-b8a1-858bc7505cf4":{"name":"lander","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/128ac5e9-9f07-4389-b8a1-858bc7505cf4.png","frameSize":{"x":180,"y":184},"frameCount":1,"looping":true,"frameDelay":4,"version":"gljGhrP4MsxEUdJMl.GDSeXsTxDKM8I9","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":184},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/128ac5e9-9f07-4389-b8a1-858bc7505cf4.png"},"52eed744-2416-4509-8747-7be53079f9b5":{"name":"moon","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/52eed744-2416-4509-8747-7be53079f9b5.png","frameSize":{"x":796,"y":223},"frameCount":1,"looping":true,"frameDelay":4,"version":"nCU4bDsg7cP7azx4jXThlIgpHI4jHy_a","loadedFromSource":true,"saved":true,"sourceSize":{"x":796,"y":223},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/52eed744-2416-4509-8747-7be53079f9b5.png"},"0d5bccce-1385-40e4-809e-8315cb7cea0f":{"name":"landed final","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/0d5bccce-1385-40e4-809e-8315cb7cea0f.png","frameSize":{"x":600,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZfHWiCOMFJiEYiG1s_SwNzH.msSA.VJr","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":451},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/0d5bccce-1385-40e4-809e-8315cb7cea0f.png"},"9f62e1b0-a5e1-470a-9d0b-7b872303ac88":{"name":"Launch_btn","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/9f62e1b0-a5e1-470a-9d0b-7b872303ac88.png","frameSize":{"x":300,"y":295},"frameCount":1,"looping":true,"frameDelay":4,"version":"_EU7T7pXEQO2UpacnUoZvQgqkBurGtN.","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":295},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/9f62e1b0-a5e1-470a-9d0b-7b872303ac88.png"},"d8ce904d-dbb2-4bc3-b9e3-cf78f312223e":{"name":"Upper","sourceUrl":null,"frameSize":{"x":65,"y":233},"frameCount":1,"looping":true,"frameDelay":12,"version":"0Ao490rGMsaa.FWfWYyyPqlVRWedpJ6d","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":233},"rootRelativePath":"assets/d8ce904d-dbb2-4bc3-b9e3-cf78f312223e.png"},"d4459e2e-76a0-465a-8b8e-899c51792bb6":{"name":"landing","sourceUrl":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/d4459e2e-76a0-465a-8b8e-899c51792bb6.png","frameSize":{"x":176,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"liUHNiPAl43uj_SZn6au7t9tO1d5KMdA","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":43},"rootRelativePath":"assets/v3/animations/97N3iao2PS-j6IpkwZoWsAtibOv952VzS7DqFRGlhsU/d4459e2e-76a0-465a-8b8e-899c51792bb6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//-------------PHASE I DECLARATIONS----------------------//
//Game States
var State = "Play";
// Create sprites for rocket parts
var RocketR = createSprite(100, 50);
var RocketL = createSprite(150, 50);
var corestage = createSprite(43, 74);
var upperstage = createSprite(206, 50);

var launch = createSprite(241, 370);
var launchpad = createSprite(100, 380, 180, 30);
//Set animation for rocket parts sprites
RocketR.setAnimation("RocketR");
RocketL.setAnimation("RocketL");
corestage.setAnimation("Core");
upperstage.setAnimation("Upper");

launch.setAnimation("Launch_btn");
//launch.setAnimation("Launch_btn");
//Scale the sprites as per screen
//launch.scale = 0.2;
RocketR.scale = 0.4;
RocketL.scale = 0.4;
corestage.scale = 0.5;
upperstage.scale = 0.6;
launch.scale=0.2;
//make launch sprites invisible
//Declare variables to check rocket sprites position
var part1position = 1;
var part2position = 1;
var part3position = 1;
var part4position = 1;

var lander = createSprite(200, 200);
var payloadinside = createSprite(194, 150);
var moon = createSprite(100, 350);
var landed = createSprite(200, 200);
var stage1 = createSprite(360,234);
var stage2 = createSprite(360, 264);
var stage3 = createSprite(360,294);
var stage4 = createSprite(360,324);
var stage5 = createSprite(339, 28);
stage1.setAnimation("Stage1btn");
stage2.setAnimation("Stage2btn");
stage3.setAnimation("Stage3btn");
stage4.setAnimation("Stage4btn");
lander.setAnimation("lander");
moon.setAnimation("moon");
landed.setAnimation("landed final");
payloadinside.setAnimation("payload2");
stage5.setAnimation("landing");
payloadinside.scale = 0.21;
lander.scale = 0.2;
stage1.visible = false;
stage2.visible = false;
stage3.visible = false;
stage4.visible = false;
stage5.visible = false;
lander.visible = false;
payloadinside.visible = false;
landed.visible = false;
moon.visible = false;


//-------------------------------------------------------//
//Function Draw
function draw() {
//-----------PHASE I CODE-------------------------------//
//Set backgroung white
if (stage1.visible == "true"){
  background("black");
}
background("white");

fill ("BLACK");
text ("LAUNCHPAD",12,350);

//When mouse is clicked on the sprite it takes correct position
//Corestage
if (mousePressedOver(corestage)) {
corestage.x = 130;
corestage.y = 290;
part1position = 0;
}
//Right and Left  solid rocket booster
if ((mousePressedOver(RocketR)||mousePressedOver(RocketL))&&part1position==0) {
//Right rocket booster
RocketR.x = 156;
RocketR.y = 290;
//Left rocket booster
RocketL.x = 105;
RocketL.y =290;
part2position = 0;
part3position=0;
}
//upperstage "Frozen Fuel" rocket booster 
if (mousePressedOver(upperstage)&& part1position==0&& part2position==0&& part3position==0) {
upperstage.x = 130;
upperstage.y =155;
part4position = 0;
}

if (mousePressedOver(launch)){
  upperstage.velocityY = -2;
  corestage.velocityY = -2;
}
if (mousePressedOver(launch)){
  RocketR.velocityY = -2;
  RocketL.velocityY = -2;
}

if (corestage.y < 0 && State=="Play"){
  background("black");
  launchpad.destroy();
  launch.destroy();
  upperstage.velocityY = 0;
  corestage.velocityY = 0;
  RocketR.velocityY = 0;
  RocketL.velocityY = 0;
  corestage.x = 130;
  corestage.y = 290;
  RocketR.x = 156;
  RocketR.y = 290;
  RocketL.x = 105;
  RocketL.y =290;
  upperstage.x = 130;
  upperstage.y =155;
  
  
}

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
