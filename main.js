function between(str, start, end) {
    return str.substring(str.indexOf(start) + start.length, str.lastIndexOf(end));
}

function openwin(uri) {
    window.open(uri, '_blank', 'location=yes,height=500,width=500,scrollbars=yes,status=yes');
}

function clear_messages() {
    while(true) {
        var containers = document.getElementsByClassName('message');
        for(var i = 0; i < containers.length; i++) {
            if(i == 0) {
                // console.log(containers[i]);
            } else {
                // console.log(containers[i].parentNode);
                containers[i].parentNode.parentNode.removeChild(containers[i].parentNode);
            }
        }
        if(containers.length <= 1) break;
    }
}

function scrollToTop() {
   document.getElementsByClassName('message-list')[0].scrollTo(0, 0);
}

function load() {
    document.getElementsByClassName('load-more')[0].click();
}

function check() {
    var containers = document.getElementsByClassName('thumb-container reset-cursor');
    for(var i = 0; i < containers.length; i++) {
        if(containers[i] != null && containers[i].getAttribute('style') != null) {
            var uri = between(containers[i].getAttribute('style'), "(", ")");
            openwin(uri);
            // console.log(uri);
        }
    }
}

var speed = 700;
setInterval(() => {
    /* Loop through messages and open and images */
    check();
    /* Scroll to the top of the chat */
    scrollToTop()
    /* Clear previously searched messages to prevent lag */
    /* [XH doesn't unload messages that are off-screen, removing the ones we've already searched should prevent lag] */
    /* [This function will skip over the last message at the top of the page, XH's message loading doesn't work without at least one message] */
    clear_messages();
    /* Simply click the load button */
    load();
}, speed);
