let intervalTimer = null;

let count = 0;

let buttonConfirm = null;

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  console.log('mutation', mutationList)
  intervalTimer = setInterval(() => {
    if (!buttonConfirm) {
      buttonConfirm = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape");
      console.log('buttonConfirm', buttonConfirm);
    }
    
    // for (const mutation of mutationList) {
    if (buttonConfirm) {
        buttonConfirm.click();
        clearInterval(intervalTimer);
        observer.disconnect();
        observerButtonAutoClick.observe(buttonConfirm, { attributes: true });
        console.log('continue', count);
        count += 1;
    }
    // }
  }, 200)
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(
  document.getElementsByTagName("ytd-popup-container")[0],
  { childList: true }
);

const buttonAutoClick = () => {
  buttonConfirm.click();
  console.log('button auto click');
}

const observerButtonAutoClick = new MutationObserver(buttonAutoClick);

