const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];




export function getCurrentTime() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12

        // Add leading zero to minutes if needed
        minutes = minutes < 10 ? "0" + minutes : minutes;

        return `${hours}:${minutes} ${ampm}`;
    }




export function getToday(spec_date){

        const now = new Date();

        const day = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        if(spec_date){
            let month = spec_date.substring(5,7);
            month = +month;
            month = months[month-1];

            let curr_date = spec_date.substring(8,10);
            return `${curr_date}, ${month}`;
        }

        return `${day}, ${date} ${month} ${year}`;
    }



export function formatTimeFromISO(isoString) {
        const now = new Date(isoString);

        const options = {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        };

        const formattedTime = now.toLocaleString("en-US", options);
        return formattedTime; 
}

export function getHourlyTime(isoString){
    const date = new Date(isoString);

    let hours = date.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    return `${hours} ${ampm}`;


}


export function getDaylightDuration(seconds){
    seconds = +seconds;
    seconds = Math.floor(seconds);
    let hrs = Math.floor(seconds/(60 * 60));
    let mns = seconds % (60 * 60);
    mns = Math.floor(mns/60);

    return `${hrs} h:${mns} m`;
}


export function getButtonDate(btn_date){
    let month = btn_date.substring(5,7);
    month = +month;
    month = months[month-1];
    month = month.substring(0,3);

    let curr_date = btn_date.substring(8,10);
    return `${curr_date}, ${month}`;
}