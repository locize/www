window.enableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").setAttribute('href', '#')
};
window.disableYoutubeHook = function () {
  document.querySelector("[id-for-custom-script='watch-video']").setAttribute('href', 'https://youtu.be/TFV_vhJs5DY')
};

(function() {
  // to do
})();