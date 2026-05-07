function getOS() {
  const ua = navigator.userAgent;
  if (/Mac/.test(ua)) return "mac";
  if (/Win/.test(ua)) return "windows";
  return null;
}

const targets = [
  {
    os: "mac",
    text: "Download for Mac",
    match: (name) => name.includes("universal") && name.endsWith(".dmg"),
  },
  {
    os: "windows",
    text: "Download for Windows (Intel)",
    match: (name) => name.includes("x64") && name.endsWith(".exe"),
  },
  {
    os: "windows",
    text: "Download for Windows (ARM64)",
    match: (name) => name.includes("arm64") && name.endsWith(".exe"),
  },
];

function createDownloadEl(target, asset) {
  const el = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", asset.browser_download_url);
  a.innerText = target.text;
  el.appendChild(a);
  return el;
}

function getDownloadLink() {
  if (document.body.getAttribute("id") !== "home") return;
  fetch("https://api.github.com/repos/Skeleton-Ship/Choicelab/releases/latest")
    .then((response) => response.json())
    .then((data) => {
      const os = getOS();
      const downloadEls = [];

      /* Find current OS target(s) */
      targets.forEach((target) => {
        if (os !== target.os) return;
        const asset = data.assets.find((a) => target.match(a.name));
        if (!asset) return;
        downloadEls.push(createDownloadEl(target, asset));
      });

      /* Find non-current-OS target(s) */
      targets.forEach((target) => {
        if (os === target.os) return;
        const asset = data.assets.find((a) => target.match(a.name));
        if (!asset) return;
        downloadEls.push(createDownloadEl(target, asset));
      });

      downloadEls.forEach((el) => {
        document.getElementById("download-links")?.appendChild(el);
      });

      /* Set version and date */
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
