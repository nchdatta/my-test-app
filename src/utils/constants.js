export const getEighteenYearsPrevDate = `${new Date().getFullYear() - 18}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;
export const getTodaysDate = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${(new Date().getDate()).toString().padStart(2, '0')}`;

export const formatTime = (time) => {
    let hour = parseInt(time.split(':')[0]);
    let minute = parseInt(time.split(':')[1]);
    let period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // convert to 12-hour format
    return `${hour}:${minute < 10 ? '0' + minute : minute} ${period}`;
}