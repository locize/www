window.enableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").style.display = 'inline-flex';
  document.querySelector("[id-for-custom-script='watch-video-link']").style.display = 'none';
};
window.disableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").style.display = 'none';
  document.querySelector("[id-for-custom-script='watch-video-link']").style.display = 'inline-flex';
};

(function() {
  // to do
})();