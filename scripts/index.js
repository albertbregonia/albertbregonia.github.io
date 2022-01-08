const myName = document.getElementById(`name`),
      clock = document.getElementById(`clock`);

((startup) => {
    myName.innerHTML = spaceOut(myName.textContent);
    clockHandler();
})();

function spaceOut(text) {
    const chars = text.split(``);
    for(let i=0; i<chars.length; i++) {
        if(i%2) {
            if(chars[i] == ` `)
                chars.splice(i, 1, `&emsp;`);
            else
                chars.splice(i, 0, `&ensp;`);
        }
    }
    console.log(chars);
    return chars.join(``);
}

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