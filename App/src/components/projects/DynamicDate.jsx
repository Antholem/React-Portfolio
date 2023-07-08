const getTimeDifference = (date) => {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 30) {
        if (days === 1) {
            return 'yesterday';
        }
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    if (months < 12) {
        if (months === 1) {
            return 'last month';
        }
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    }

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
    return `on ${formattedDate}`;
};

export default getTimeDifference;