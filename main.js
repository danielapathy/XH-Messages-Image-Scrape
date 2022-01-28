function between(str, start, end) {
    return str.substring(str.indexOf(start) + start.length, str.lastIndexOf(end));
}

function openwin(uri) {
    window.open(uri, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}

function clear_messages() {
    while(true) {
        var containers = document.getElementsByClassName('message');
        for(var i = 0; i < containers.length; i++) {
            if(i == 0) {
                console.log(containers[i]);
            } else {
                console.log(containers[i].parentNode);
                containers[i].parentNode.parentNode.removeChild(containers[i].parentNode);
            }
        }
        if(containers.length <= 1) break;
    }
}

function scrollToTop() {
    document.getElementsByClassName('message-list ps ps--theme_default ps--active-y')[0].scrollTo(0, 0);
}

function load() {
    document.getElementsByClassName('load-more')[0].click();
}

function check() {
    var containers = document.getElementsByClassName('thumb-container reset-cursor');
    for(var i = 0; i < containers.length; i++) {
        var uri = between(containers[i].getAttribute('style'), "(", ")");
        openwin(uri);
        console.log(uri);
    }
}

check();
clear_messages();
