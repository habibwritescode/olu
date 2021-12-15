(function () {
  "use strict";

  const toggleClass = function (otherElems, thisELem, className = "is-active") {
    for (const otherElem of otherElems) {
      otherElem.classList.remove(className);
    }
    thisELem.classList.add(className);
  };

  const toggleVerticalTabs = function (tabContainer, tabs, items, item) {
    item.onclick = function (e) {
      const currId = item.getAttribute("id");
      const tab = tabContainer.querySelector(
        '.ootb-tabcordion--tabs [aria-controls="' + currId + '"]'
      );
      toggleClass(tabs, tab);
      toggleClass(items, item);
    };
  };

  const toggleTabs = function (tabContainer) {
    const tabs = tabContainer.querySelectorAll(".ootb-tabcordion--tabs .tab");
    const items = tabContainer.querySelectorAll(".ootb-tabcordion--entry");
    for (const tab of tabs) {
      tab.onclick = function () {
        const target = tab.getAttribute("aria-controls");
        const content = document.getElementById(target);
        toggleClass(tabs, tab);
        toggleClass(items, content);
      };
    }
    for (const item of items) {
      toggleVerticalTabs(tabContainer, tabs, items, item);
    }
  };

  const modeSwitcher = function (tabContainer, containerWidth) {
    const tabs = tabContainer.querySelectorAll(".tab");
    const container = tabs[0].closest(".ootb-tabcordion");
    if (containerWidth <= 330) {
      container.classList.remove("has-tabs");
    } else {
      container.classList.add("has-tabs");
    }
  };

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      modeSwitcher(entry.target, entry.contentRect.width);
    }
  });

  const tabContainers = document.querySelectorAll(".ootb-tabcordion");
  for (const tabContainer of tabContainers) {
    const tabList = tabContainer.querySelector(".ootb-tabcordion--tabs");
    resizeObserver.observe(tabList);
    toggleTabs(tabContainer);
  }
})();
