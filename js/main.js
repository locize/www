window.enableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").display = 'inline-flex';
  document.querySelector("[id-for-custom-script='watch-video-link']").display = 'none';
};
window.disableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").display = 'none';
  document.querySelector("[id-for-custom-script='watch-video-link']").display = 'inline-flex';
};

(function() {
  // to do
})();