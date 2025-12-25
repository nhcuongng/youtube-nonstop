// Select the node that will be observed for mutations
const targetNode = document.getElementsByTagName("ytd-popup-container")[0];

// Options for the observer (which mutations to observe)
const config = { childList: true };

let count = 0;

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  const buttonConfirm = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape");
  // for (const mutation of mutationList) {
      if (buttonConfirm) {
          buttonConfirm.click();
          observer.disconnect();
          observer.observe(buttonConfirm, { attributes: true });
          console.log('continue', count);
          count += 1;
      }
  // }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
