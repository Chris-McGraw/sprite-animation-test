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
  var spritePosition = 100;
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
  }

/* ---------------------------- Event Handlers ---------------------------- */

  $(document).keydown(function(event) {
    if(loopCount <= 1) {
      if(event.which === 68) {
        $spriteImg.addClass("move-right");
        walkLoop();

        setTimeout(function() {
          loopTimer = 0;
          loopCount = 1;
          spritePosition = $spriteImg.position().left;
          $spriteImg.css("left", spritePosition + "px");
          $spriteImg.removeClass("move-right");
        }, 720);

        /* $(document).keyup(function(event) {
          moveZero();
        }); */
      }

      if(event.which === 65) {
        $spriteImg.addClass("move-left");
        walk_Left_Loop();

        setTimeout(function() {
          loopTimer = 0;
          loopCount = 1;
          spritePosition = $spriteImg.position().left;
          $spriteImg.css("left", spritePosition + "px");
          $spriteImg.removeClass("move-left");
        }, 720);

        /* $(document).keyup(function(event) {
          left_Move_Zero();
        }); */
      }
    }
  });

});
