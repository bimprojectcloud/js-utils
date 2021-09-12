function joinFilename(baseName, extension) {
    let filename = "";

    if (baseName) filename += baseName;
    if (extension) filename += `.${ extension }`;

    return filename;
}

function splitFilename(filename) {
    if (typeof filename !== "string" || filename.length === 0) throw new Error("Invalid filename");

    if (!filename.includes(".")) return [filename, undefined];
    if (filename.endsWith(".")) return [filename, undefined];

    const splitAt = filename.lastIndexOf(".");

    return [
        filename.substring(0, splitAt) || undefined,
        filename.substring(splitAt + 1) || undefined,
    ];
}

module.exports = {
    joinFilename,
    splitFilename,
};
