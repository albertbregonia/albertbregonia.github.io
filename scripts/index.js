const clock = document.getElementById(`clock`);

((startup) => {
    clockHandler();
})();

function clockHandler() {
    const defaultTimeFormat = {
        weekday: `long`, 
        year: `numeric`, 
        month: `long`, 
        day: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        second: `2-digit`,
        timeZoneName: `short`
    };
    setInterval(() => {
        const now = new Date().toLocaleString(`en-US`, defaultTimeFormat),
        first = now.indexOf(`,`), last = now.lastIndexOf(`,`),
        day = now.substring(0, first),
        date = now.substring(first + 1, last),
        time = now.substring(last + 1);
        clock.innerHTML = time; //this is HTML so the white space doesn't matter
        clock.title = `${day}, ${date}`;
    }, 1000);
}