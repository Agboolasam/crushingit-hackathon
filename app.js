let alerts = document.getElementById("bell");
let alertBox = document.getElementById("alerts");
let profileMenu = document.getElementById("profile");
let user = document.getElementById("user");
let popUpmenu = document.getElementById("userTab");
let planAd1 = document.getElementById("planAd1");
let planAd2 = document.getElementById("planAd2");
let removeAd = document.getElementsByClassName("remove-ad");
let arrows = document.getElementsByClassName("arrows");
let progLabel = document.getElementById("label-for-progress");

//display the menu and alert interchangeably
alerts.addEventListener("click", () => {
  if (alertBox.style.display === "block") {
    alertBox.style.display = "none";
  } else {
    alertBox.style.display = "block";
    profileMenu.style.display = "none";
  }
});

user.addEventListener("click", () => {
  if (profileMenu.style.display === "block") {
    profileMenu.style.display = "none";
  } else {
    profileMenu.style.display = "block";
    profileMenu.firstElementChild.firstElementChild.nextElementSibling.focus();

    alertBox.style.display = "none";
  }
});

//remove the ad section
console.log(removeAd);
for (const item of removeAd) {
  item.addEventListener("click", () => {
    planAd1.style.display = "none";
    planAd2.style.display = "none";
  });
}

// TODO: relating the progress bar to the label
// let val = progress.value;
// progLabel.innerText = ` ${val}/5 completed`;

// add  event to arrows
console.log(arrows);
arrows[1].style.display = "none";
arrows[0].addEventListener("click", (e) => {
  arrows[0].style.display = "none";
  arrows[1].style.display = "block";
});
arrows[1].addEventListener("click", () => {
  arrows[1].style.display = "none";
  arrows[0].style.display = "block";
});
//TODO:add keyboard accessibility to the profilemenu

(function icons() {
  let progress = 0;

  let firstIcon = document.getElementsByClassName("first-icon");
  // const secondIcon = document.getElementsByClassName("second-icon");
  // const thirdIcon = document.getElementsByClassName("third-icon");
  let fourthIcon = document.getElementsByClassName("fourth-icon");

  console.log(firstIcon);

  // for icon animation
  for (item of firstIcon) {
    item.addEventListener("click", (e) => {
      setTimeout(() => {
        e.target.nextElementSibling.style.display = "block";
        e.target.style.display = "none";
      }, 100);

      setTimeout(() => {
        e.target.nextElementSibling.nextElementSibling.style.display = "block";
        e.target.nextElementSibling.style.display = "none";
      }, 300);

      setTimeout(() => {
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
          "block";
        e.target.nextElementSibling.nextElementSibling.style.display = "none";
      }, 600);

      progress += 1;
      console.log(progress);
    });
  }
  console.log(fourthIcon);
  // // for back transition
  // for (item of fourthIcon) {
  //   item.addEventListener("click", (e) => {
  //     item.style.display = "none";
  //     // item.firstOfType.style.display = "block";
  //   });
  // }
  for (let icon of fourthIcon) {
    icon.addEventListener("click", () => {
      icon.style.display = "none";
      icon.previousElementSibling.previousElementSibling.previousElementSibling.style.display =
        "block";
      progress -= 1;
      console.log(progress);
    });
  }
  progLabel.innerHTML = `${progress}/5 completed`;
})();
