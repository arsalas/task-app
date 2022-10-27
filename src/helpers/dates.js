
/**
 * Descompone un timepo en segundos, minutos, horas y dias
 * @param {number} time 
 * @returns {{seconds:number, minutes:number, hours:number,days:number}}
 */
const getTimesFormat = (time) => {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24)
    return {
        seconds,
        minutes,
        hours,
        days
    }
}

/**
 * Convierte una fecha a formato relativo
 * @param {string} date 
 * @returns {string}
 */
export const formatRelativeTime = (date) => {
    let diff = Math.floor(new Date(date) - new Date());
    if (diff > 0) diff = 0
    const { seconds, minutes, hours, days } = getTimesFormat(diff);
    const formatter = new Intl.RelativeTimeFormat('es-ES', {
        numeric: 'auto',
    })
    if (seconds > -60) return formatter.format(seconds, 'seconds')
    if (minutes > -60) return formatter.format(minutes, 'minutes')
    if (hours > -24) return formatter.format(hours, 'hours')
    return formatter.format(days, 'days')
}