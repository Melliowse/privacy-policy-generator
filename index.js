let opts = {};

const checkboxFn = {
    example: (bool) => {
        return;
    },
};

function checkbox(e) {
    e.setAttribute("sel", e.getAttribute("sel") !== "true" ? "true : "false");
    if (Object.keys(checkboxFn).indexOf(e.id) !== -1) {
        checkboxFn[e.id].call(e, e.getAttribute("sel") === "true");
    }
};

function textbox(e) {
    // insert code here idk im gonna go work on other stuff
};
