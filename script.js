function openTab(tabName) {
    const tabBox = document.getElementById("climb");
    const tabButtonOne = document.getElementById("tab-button-one")
    const tabButtonTwo = document.getElementById("tab-button-two")

    if(tabName === 'tabOne'){
        tabBox.style.backgroundImage = "url('./assets/bot.jpg')";
        tabButtonOne.classList.add("tab__list-item--primary")
        tabButtonOne.classList.remove("tab__list-item--secondary")

        tabButtonTwo.classList.add("tab__list-item--secondary")
        tabButtonTwo.classList.remove("tab__list-item--primary")
    }else{
        tabBox.style.backgroundImage = "url('./assets/car2.jpg')";
        tabButtonOne.classList.add("tab__list-item--secondary")
        tabButtonOne.classList.remove("tab__list-item--primary")
        
        tabButtonTwo.classList.add("tab__list-item--primary")
        tabButtonTwo.classList.remove("tab__list-item--secondary")
    }
  }