function getOS() {
  const ua = navigator.userAgent;
  if (/Mac/.test(ua)) return "mac";
  if (/Win/.test(ua)) return "windows";
  return null;
}

const DOWNLOAD_TARGETS = [
  {
    id: "download-mac",
    match: (name) => name.includes("universal") && name.endsWith(".dmg"),
  },
  {
    id: "download-win-x64",
    match: (name) => name.includes("x64") && name.endsWith(".exe"),
  },
  {
    id: "download-win-arm",
    match: (name) => name.includes("aarch64") && name.endsWith(".exe"),
  },
];

function getDownloadLink() {
  if (document.body.getAttribute("id") !== "home") return;
  fetch("https://api.github.com/repos/Skeleton-Ship/Choicelab/releases/latest")
    .then((response) => response.json())
    .then((data) => {
      const os = getOS();
      if (os) {
        document.getElementById("download-links").dataset.os = os;
      }

      for (const target of DOWNLOAD_TARGETS) {
        const asset = data.assets.find((a) => target.match(a.name));
        if (asset) {
          document
            .getElementById(target.id)
            .setAttribute("href", asset.browser_download_url);
        }
      }
      const info = document.getElementById("release-info");
      const date = new Date(data.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      const version = data.tag_name.replace(/^choicelab-v/, "");
      info.innerText = `v${version} – ${date}`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getDownloadLink();
});
