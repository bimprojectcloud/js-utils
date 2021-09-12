const fs = require("./fs");

describe(
    "joinFilename",
    () => {
        it(
            "returns filename with base name and extension",
            () => {
                expect(fs.joinFilename("test", "txt")).toBe("test.txt");
                expect(fs.joinFilename("test", undefined)).toBe("test");
                expect(fs.joinFilename("test.", undefined)).toBe("test.");
                expect(fs.joinFilename("test.", "txt")).toBe("test..txt");
                expect(fs.joinFilename(undefined, "txt")).toBe(".txt");
            },
        );
    },
);

describe(
    "splitFilename",
    () => {
        it(
            "returns file base name and extension",
            () => {
                expect(fs.splitFilename("test.txt")).toEqual(["test", "txt"]);
                expect(fs.splitFilename("test")).toEqual(["test", undefined]);
                expect(fs.splitFilename("test.")).toEqual(["test.", undefined]);
                expect(fs.splitFilename("test..txt")).toEqual(["test.", "txt"]);
                expect(fs.splitFilename(".txt")).toEqual([undefined, "txt"]);
            },
        );
    },
);
