export function addToBrowserCookie(key, value) {
    console.log("addToBrowserCookie");
    console.log("key: " + key + "Value: " + value)
    $.cookie(key, value);
}

export function removeBrowserCookie(key) {
    console.log("removeBrowserCookie");
    $.removeCookie(key);
}

export function clearBrowserCookie() {
    removeBrowserCookie("selectedBlogId");
    clearAuthCookies();
}
export function getFromBrowserCookie(key) {
    console.log("getFromBrowserCookie");
    return $.cookie(key);
}

export function getSignedInUser() {
    console.log("getSignedInUser");
    return $.cookie("userId");
}