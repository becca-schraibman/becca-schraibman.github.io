document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "title-screen.png", actionRadius: 100, timeBetweenNPCs: 2500, npcCollisionRadius: 100, actionDuration:700, jumpHeight: 200, heroSpeed: 200});
});