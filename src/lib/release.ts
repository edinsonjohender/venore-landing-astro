// Single source of truth for the latest desktop release.
// On a new release, bump VERSION and WINDOWS_ASSET to match the GitHub asset name.
export const REPO_URL = "https://github.com/edinsonjohender/venore";

export const VERSION = "0.1.1";
const WINDOWS_ASSET = `Venore_${VERSION}_x64-setup.exe`;

// Direct download of the Windows installer (one click, no GitHub page).
export const WINDOWS_DOWNLOAD_URL = `${REPO_URL}/releases/download/v${VERSION}/${WINDOWS_ASSET}`;

// All releases (for users who want checksums, source, or other platforms later).
export const RELEASES_URL = `${REPO_URL}/releases`;
