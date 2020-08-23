


const timeConversion = str => {
    
    // split str in to array
    // extract AM and PM from the time
    const am_and_pm = str.substring(str.length -2, str.length);

    // extract the time form the string without am and pm
    // if str = 12:05:25am -> 12:05:25
    const militaryTime = str.substring(0, str.length -2);

    // split the time in to sperated pices in order to beable to modify it
    const time = militaryTime.split(':')

    // vlaue of the hour
    const hour = time[0];

    // 1. 0 <= hour <= 12 and am
    if ( hour > 0 && hour < 12 && am_and_pm == 'AM') {
        return militaryTime
    }

    // 2. 0 < hour < 12 and pm => add 12 to hour and print it
    if ( am_and_pm == 'PM' && hour > 0 && hour < 12 ) {
        time[0] = parseInt(hour) + 12
        return time.join(':')
    }

    // 3. if hour === 12 and am -> make hour to 00:00 and print it
    if ( am_and_pm == 'AM' && hour == 12 ) {
        time[0] = '00';
        return(time.join(':'))
    }

    // 4. IF HOUR === 12 AND PM -> print it in military format
    if ( am_and_pm == 'PM' && hour == 12 ) {
        return(militaryTime);
    }
}

console.log(timeConversion('07:05:45PM')) // should return 19:05:45
console.log(timeConversion('07:05:45AM')) // should return 07:05:45
console.log(timeConversion('12:05:45AM')) // should return 00:05:45
console.log(timeConversion('12:05:45PM')) // should return 12:05:45
console.log(timeConversion('11:05:45PM')) // should return 23:05:45

