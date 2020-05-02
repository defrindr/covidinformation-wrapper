function timeConverter(UNIX_timestamp, withTime = false) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
        "Januari",
        "Februari",
        "Maret",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = "";

    if (withTime)
        time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    else
        time = date + ' ' + month + ' ' + year;
    return time;
}

export default timeConverter = timeConverter;
