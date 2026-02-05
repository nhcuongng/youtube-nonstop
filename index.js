let count = 0;

let buttonConfirm = null;

let timer = null;

const config =  { attributes: true, childList: true };

const handlePressButton = () => {
  if (!buttonConfirm) {
    buttonConfirm = document.querySelector("#confirm-button > yt-button-shape > button > yt-touch-feedback-shape");
    console.log('buttonConfirm', buttonConfirm);
  }
  
  if (buttonConfirm) {
      buttonConfirm.click();
      console.log('continue', count);
      count += 1;
      observer.disconnect();
  }
}

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  timer = setTimeout(handlePressButton, 500);
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(
  document.getElementsByTagName("ytd-popup-container")[0],
  config,
);
