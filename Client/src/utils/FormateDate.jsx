export const FormateDate = (date, config = {}) => {
    const defaultOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };

    const options = { ...defaultOptions, ...config };

    return new Date(date).toLocaleDateString("en-US", options);
}
