import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Source directories
const userDownloadsDir = "C:\\Users\\vijay\\Downloads";
const targetPublicDir = path.join(process.cwd(), "public");

const downloadsToCopy = {
  "1.jpeg": path.join(userDownloadsDir, "1.jpeg"),
  "2.jpeg": path.join(userDownloadsDir, "2.jpeg"),
  "3.jpeg": path.join(userDownloadsDir, "3.jpeg"),
  "4.jpeg": path.join(userDownloadsDir, "4.jpeg"),
  "qr_code.png": "C:\\Users\\vijay\\.gemini\\antigravity-ide\\brain\\757bd02c-f6b3-49e8-9b72-310a4de39cb7\\qr_code_1781018663592.png"
};

function copyLatestLogo() {
  const brainDir = "C:\\Users\\vijay\\.gemini\\antigravity-ide\\brain\\757bd02c-f6b3-49e8-9b72-310a4de39cb7";
  try {
    if (fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir);
      const mediaFiles = files
        .filter(f => f.startsWith("media__") && f.endsWith(".png"))
        .map(f => {
          const match = f.match(/media__(\d+)\.png/);
          const timestamp = match ? parseInt(match[1]) : 0;
          return { name: f, timestamp };
        })
        .sort((a, b) => b.timestamp - a.timestamp);

      // Filter out non-logo images (e.g. the Syndicate HQ screenshot at timestamp 1781019452606)
      const logoFiles = mediaFiles.filter(f => f.timestamp > 1781019500000);
      
      if (logoFiles.length > 0) {
        const latestLogo = logoFiles[0];
        const srcPath = path.join(brainDir, latestLogo.name);
        const destPath = path.join(targetPublicDir, "logo.png");
        fs.copyFileSync(srcPath, destPath);
        console.log(`Dynamically copied logo file ${latestLogo.name} to logo.png`);
        return;
      }
    }
  } catch (err) {
    console.error("Error copying latest logo dynamically:", err);
  }

  // Explicit Fallback
  const explicitSrc = "C:\\Users\\vijay\\.gemini\\antigravity-ide\\brain\\757bd02c-f6b3-49e8-9b72-310a4de39cb7\\media__1781020139047.png";
  const destPath = path.join(targetPublicDir, "logo.png");
  if (fs.existsSync(explicitSrc)) {
    try {
      fs.copyFileSync(explicitSrc, destPath);
      console.log("Copied fallback logo.png.");
    } catch (e) {
      console.error("Failed to copy explicit logo.png:", e);
    }
  }
}

export function setupAssets() {
  console.log("=== Setup Script Executing ===");

  // Clean up old app/favicon.ico to prevent Next.js from overriding favicon1.png
  const oldFavicon = path.join(process.cwd(), "app", "favicon.ico");
  if (fs.existsSync(oldFavicon)) {
    try {
      fs.unlinkSync(oldFavicon);
      console.log("Deleted old app/favicon.ico successfully.");
    } catch (e) {
      console.error("Error deleting old app/favicon.ico:", e);
    }
  }

  // Copy public/favicon1.png to app/icon.png so Next.js detects it automatically
  const favIconSrc = path.join(targetPublicDir, "favicon1.png");
  const favIconDest = path.join(process.cwd(), "app", "icon.png");
  if (fs.existsSync(favIconSrc)) {
    try {
      fs.copyFileSync(favIconSrc, favIconDest);
      console.log("Copied favicon1.png to app/icon.png.");
    } catch (e) {
      console.error("Error copying favicon1.png to app/icon.png:", e);
    }
  }

  // 1. Ensure public directory exists
  if (!fs.existsSync(targetPublicDir)) {
    fs.mkdirSync(targetPublicDir, { recursive: true });
  }

  // 2. Check and install dependencies dynamically if they are missing
  try {
    require.resolve("framer-motion");
    require.resolve("lucide-react");
    require.resolve("react-icons");
    console.log("Dependencies are already installed.");
  } catch (e) {
    console.log("Missing dependencies detected. Running npm install...");
    try {
      execSync("npm install --legacy-peer-deps", {
        cwd: process.cwd(),
        stdio: "inherit"
      });
      console.log("Dependencies successfully installed!");
    } catch (installErr) {
      console.error("Failed to automatically install dependencies:", installErr);
    }
  }

  // 3. Copy files from Downloads directory
  Object.entries(downloadsToCopy).forEach(([fileName, srcPath]) => {
    const destPath = path.join(targetPublicDir, fileName);

    // If source exists, copy it (overwriting if missing or different)
    if (fs.existsSync(srcPath)) {
      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${fileName} to public folder.`);
      } catch (copyErr) {
        console.error(`Error copying ${fileName}:`, copyErr);
      }
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  });

  // 4. Run latest logo dynamic copy
  copyLatestLogo();

  console.log("=== Setup Script Complete ===");
}
