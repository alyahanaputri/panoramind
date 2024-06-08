function loadArticle(link) {
  fetch(link)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(".article").innerHTML = html;
    })
    .catch((error) => console.error("Error loading article:", error));
}

function toggleSidebar() {
  const body = document.body;
  const isCollapsed = body.classList.toggle("collapsed");
  const reopenButton = document.getElementById("reopen-sidebar-button");

  if (isCollapsed) {
    reopenButton.style.display = "block";
  } else {
    reopenButton.style.display = "none";
  }
}
