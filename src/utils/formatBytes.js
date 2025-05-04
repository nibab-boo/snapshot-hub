/**
 * Convert bytes to human-readable string
 * @params {number} bytes
 * @returns {string}
*/

export function formatBytes(bytes) {
    if (bytes == 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    let address = Math.floor(Math.log(bytes) / Math.log(k));
    const i = address <= 4 ? address : 4;
    return `${parseFloat((bytes/(k ** i)).toFixed(2))} ${sizes[i]}`;
}

