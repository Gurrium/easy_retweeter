function removeClassFrom(node, className) {
  if (! node.classList.contains(className)) {
    return
  }

  node.classList.remove(className)
}

function callback(mutationList, observer) {
	mutationList.forEach((mutation) => {
		mutation.querySelectorAll('.margin-l--2').forEach((node) => {
			removeClassFrom(node, 'margin-l--2')
		})
	})
}

setTimeout(() => {
  document.querySelectorAll('.tweet-action > .margin-l--2').forEach((node) => {
    removeClassFrom(node, 'margin-l--2')
  })

  observer = new MutationObserver(callback);

  document.querySelectorAll('.chirp-container').forEach((node) => {
    observer.observe(node, { childList: true })
  })
}, 10000)
