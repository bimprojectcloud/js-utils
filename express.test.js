const express = require("./express");

describe(
    "asyncF",
    () => {
        it(
            "to call next on error",
            async () => {
                const fn = jest.fn(
                    async () => {
                        throw new Error();
                    },
                );
                const wrapped = express.asyncF(fn);

                const next = jest.fn();
                await wrapped({}, {}, next);

                expect(fn).toHaveBeenCalledWith(
                    expect.anything(),
                    expect.anything(),
                    next,
                );
                expect(next).toHaveBeenCalledWith(
                    expect.any(Error),
                );
            },
        );
    },
);
