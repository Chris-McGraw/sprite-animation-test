var downMove0 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526911176/down-move-0_ixr4ka.png";
var downMove1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1527003049/down-move-1_gyghpk.png";
var downMove2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526913808/down-move-2_mvim2d.png";
var downMove3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1527003049/down-move-3_j9tni3.png";
var downMove4 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526913808/down-move-4_t9iq8b.png";

var rightMove0 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526269076/right-move-0_gbenfg.png";
var rightMove1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526269076/right-move-1_tsz08l.png";
var rightMove2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526269076/right-move-2_qhqeeu.png";
var rightMove3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526269076/right-move-3_kbzybv.png";
var rightMove4 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526269076/right-move-4_rypn6j.png";

var leftMove0 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526348605/left-move-0_c63rrs.png";
var leftMove1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526348605/left-move-1_xxzieo.png";
var leftMove2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526348605/left-move-2_qqyrrb.png";
var leftMove3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526348605/left-move-3_rzv4dv.png";
var leftMove4 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1526348605/left-move-4_v3qjkj.png";

$(document).ready(function() {

/* ------------------------- Variable Declarations ------------------------- */

  var $spriteImg = $("#sprite-img");

  var spritePositionX = 472;
  var spritePositionY = 136;

  var loopTimer = 0;
  var loopCount = 1;

/* ------------------------- Function Declarations ------------------------- */

  /* ----------------- Right Movement Functionality ----------------- */

  function moveZero() {
    setTimeout(function() {
      $spriteImg.attr("src", rightMove0);
    }, loopTimer);
  }

  function moveOne() {
    setTimeout(function() {
      $spriteImg.attr("src", rightMove1);
    }, loopTimer);
  }

  function moveTwo() {
    setTimeout(function() {
      $spriteImg.attr("src", rightMove2);
    }, loopTimer);
  }

  function moveThree() {
    setTimeout(function() {
      $spriteImg.attr("src", rightMove3);
    }, loopTimer);
  }

  function moveFour() {
    setTimeout(function() {
      $spriteImg.attr("src", rightMove4);
    }, loopTimer);
  }


  function walkLoop() {
    moveZero();
    loopTimer += 90;

    moveOne();
    loopTimer += 90;

    moveTwo();
    loopTimer += 90;

    moveOne();
    loopTimer += 90;

    moveZero();
    loopTimer += 90;

    moveThree();
    loopTimer += 90;

    moveFour();
    loopTimer += 90;

    moveThree();
    loopTimer += 90;

    loopCount++;

    if (loopCount <= 1) {
      walkLoop();
    }
    else {
      moveZero();
    }
  }


  /* ----------------- Left Movement Functionality ----------------- */

  function left_Move_Zero() {
    setTimeout(function() {
      $spriteImg.attr("src", leftMove0);
    }, loopTimer);
  }

  function left_Move_One() {
    setTimeout(function() {
      $spriteImg.attr("src", leftMove1);
    }, loopTimer);
  }

  function left_Move_Two() {
    setTimeout(function() {
      $spriteImg.attr("src", leftMove2);
    }, loopTimer);
  }

  function left_Move_Three() {
    setTimeout(function() {
      $spriteImg.attr("src", leftMove3);
    }, loopTimer);
  }

  function left_Move_Four() {
    setTimeout(function() {
      $spriteImg.attr("src", leftMove4);
    }, loopTimer);
  }


  function walk_Left_Loop() {
    left_Move_Zero();
    loopTimer += 90;

    left_Move_One();
    loopTimer += 90;

    left_Move_Two();
    loopTimer += 90;

    left_Move_One();
    loopTimer += 90;

    left_Move_Zero();
    loopTimer += 90;

    left_Move_Three();
    loopTimer += 90;

    left_Move_Four();
    loopTimer += 90;

    left_Move_Three();
    loopTimer += 90;

    loopCount++;

    if (loopCount <= 1) {
      walk_Left_Loop();
    }
    else {
      left_Move_Zero();
    }
  }


  /* ----------------- Down Movement Functionality ----------------- */

  function down_Move_Zero() {
    setTimeout(function() {
      $spriteImg.attr("src", downMove0);
    }, loopTimer);
  }

  function down_Move_One() {
    setTimeout(function() {
      $spriteImg.attr("src", downMove1);
    }, loopTimer);
  }

  function down_Move_Two() {
    setTimeout(function() {
      $spriteImg.attr("src", downMove2);
    }, loopTimer);
  }

  function down_Move_Three() {
    setTimeout(function() {
      $spriteImg.attr("src", downMove3);
    }, loopTimer);
  }

  function down_Move_Four() {
    setTimeout(function() {
      $spriteImg.attr("src", downMove4);
    }, loopTimer);
  }


  function walk_Down_Loop() {
    down_Move_Zero();
    loopTimer += 90;

    down_Move_One();
    loopTimer += 90;

    down_Move_Two();
    loopTimer += 90;

    down_Move_One();
    loopTimer += 90;

    down_Move_Zero();
    loopTimer += 90;

    down_Move_Three();
    loopTimer += 90;

    down_Move_Four();
    loopTimer += 90;

    down_Move_Three();
    loopTimer += 90;

    loopCount++;

    if (loopCount <= 1) {
      walk_Down_Loop();
    }
    else {
      down_Move_Zero();
    }
  }

/* ---------------------------- Event Handlers ---------------------------- */

  $(document).keydown(function(event) {
    if(loopCount <= 1) {
      if(event.which === 68 || event.which === 39) {
        if(spritePositionX < 936) {
          $spriteImg.addClass("move-right");
        }

        walkLoop();

        setTimeout(function() {
          loopTimer = 0;
          loopCount = 1;

          if(spritePositionX < 936) {
            spritePositionX += 58;
            $spriteImg.css("left", spritePositionX + "px");
            $spriteImg.removeClass("move-right");
          }
        }, 720);
      }

      if(event.which === 65 || event.which === 37) {
        if(spritePositionX > 8) {
          $spriteImg.addClass("move-left");
        }

        walk_Left_Loop();

        setTimeout(function() {
          loopTimer = 0;
          loopCount = 1;

          if(spritePositionX > 8) {
            spritePositionX -= 58;
            $spriteImg.css("left", spritePositionX + "px");
            $spriteImg.removeClass("move-left");
          }
        }, 720);
      }

      if(event.which === 83 || event.which === 40) {
        if(spritePositionY < 252) {
          $spriteImg.addClass("move-down");
        }

        walk_Down_Loop();

        setTimeout(function() {
          loopTimer = 0;
          loopCount = 1;

          if(spritePositionY < 252) {
            spritePositionY += 58;
            $spriteImg.css("top", spritePositionY + "px");
            $spriteImg.removeClass("move-down");
          }
        }, 720);
      }
    }
  });

});
