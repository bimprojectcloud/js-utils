module.exports = function localize(localizable, language) {
    if (localizable === null || localizable === undefined) {
        return undefined;
    }
    if (Array.isArray(localizable)) {
        return localizable.find((localization) => localization.language === language)?.text;
    }
    if (typeof localizable === "object") {
        return localizable[language];
    }
    return localizable;
};
