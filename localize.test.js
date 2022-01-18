const localize = require("./localize");

describe(
    "localize",
    () => {
        it(
            "handles null and undefined",
            () => {
                expect(localize(null, "en")).toBeUndefined();
                expect(localize(undefined, "en")).toBeUndefined();
            },
        );

        it(
            "passes string",
            () => {
                expect(localize("foo", "en")).toBe("foo");
                expect(localize("", "en")).toBe("");
            },
        );

        it(
            "passes number",
            () => {
                expect(localize(-1, "en")).toBe(-1);
                expect(localize(0, "en")).toBe(0);
                expect(localize(3.45, "en")).toBe(3.45);
            },
        );

        it(
            "localizes array of localizations",
            () => {
                const localizable = [
                    { language: "en", text: "foo" },
                    { language: "cs", text: "bar" },
                ];
                expect(localize(localizable, "en")).toBe("foo");
                expect(localize(localizable, "cs")).toBe("bar");
                expect(localize(localizable, "de")).toBeUndefined();
            },
        );

        it(
            "localizes object",
            () => {
                const localizable = {
                    en: "foo",
                    cs: "bar",
                };
                expect(localize(localizable, "en")).toBe("foo");
                expect(localize(localizable, "cs")).toBe("bar");
                expect(localize(localizable, "de")).toBeUndefined();
            },
        );
    },
);
