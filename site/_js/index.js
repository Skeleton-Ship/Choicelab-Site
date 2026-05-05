function getDownloadLink() {
  if (document.body.getAttribute("id") !== "home") return;
  fetch("https://releases.choicelab.xyz/latest/latest.json", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Add download button
      const link = document.getElementById("download-link");
      const downloadUrl = data.platforms["darwin-aarch64"].url;
      const downloadSignature = data.platforms["darwin-aarch64"].signature;
      if (downloadUrl !== "") {
        link.setAttribute("href", downloadUrl);
      }
      // Format date
      const info = document.getElementById("release-info");
      const date = new Date(data.pub_date).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      info.innerText = `for macOS 14+\nv${data.version} – ${date}`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getDownloadLink();
});
