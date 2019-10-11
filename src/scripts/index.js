import "../css/styles";

/*
 * This is some js code to align #languages with #education. Not the most
 * elegant way to do this, I'll admit.
 */
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // check where #education starts
        let rightStart = 0;
        document.querySelectorAll("#showcase, #experience").forEach(el => {
            rightStart += el.clientHeight;
        });

        // check where #languages starts
        let leftStart = 0;
        document
            .querySelectorAll("#showcase, #contacts, #skills")
            .forEach(el => {
                leftStart += el.clientHeight;
            });

        // set #languages top padding, so it starts at #education
        const elLanguages = document.querySelector("#languages");
        elLanguages.style.paddingTop = `${rightStart - leftStart}px`;
    }, 200);
});
