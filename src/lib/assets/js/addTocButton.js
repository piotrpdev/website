const showIcon =
    '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.8"><path d="M23.59 0h75.7a23.63 23.63 0 0 1 23.59 23.59v72.62a23.64 23.64 0 0 1-23.59 23.59h-75.7a23.53 23.53 0 0 1-16.67-6.93l-.38-.42A23.49 23.49 0 0 1 0 96.21V23.59A23.63 23.63 0 0 1 23.59 0Zm59.7 53.51a6.39 6.39 0 1 1 0 12.77h-43.7a6.39 6.39 0 1 1 0-12.77Zm16-40.74h-75.7a10.86 10.86 0 0 0-10.82 10.82v72.62a10.77 10.77 0 0 0 2.9 7.37l.28.26a10.76 10.76 0 0 0 7.64 3.16h75.7a10.87 10.87 0 0 0 10.82-10.82V23.59a10.86 10.86 0 0 0-10.82-10.82Z"/></svg>';

const hideIcon =
    '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.8"><path d="M23.59 0h75.7a23.63 23.63 0 0 1 23.59 23.59v72.62a23.64 23.64 0 0 1-23.59 23.59h-75.7a23.53 23.53 0 0 1-16.67-6.93l-.38-.42A23.49 23.49 0 0 1 0 96.21V23.59A23.63 23.63 0 0 1 23.59 0Zm31.47 38.05a6.38 6.38 0 1 1 12.76 0v15.46h15.47a6.39 6.39 0 1 1 0 12.77H67.82v15.47a6.38 6.38 0 0 1-12.76 0V66.28H39.59a6.39 6.39 0 1 1 0-12.77h15.47V38.05Zm44.23-25.28h-75.7a10.86 10.86 0 0 0-10.82 10.82v72.62a10.77 10.77 0 0 0 2.9 7.37l.28.26a10.76 10.76 0 0 0 7.64 3.16h75.7a10.87 10.87 0 0 0 10.82-10.82V23.59a10.86 10.86 0 0 0-10.82-10.82Z"/></svg>';

export default function addTocButton() {
    const toc = document.querySelector('.toc');
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('toc-toggle');
    button.innerHTML = showIcon;
    toc.prepend(button);
    button.addEventListener('click', () => {
        toc.classList.toggle('hide');
        button.classList.toggle('hide');
        if (button.classList.contains('hide')) {
            button.innerHTML = hideIcon;
        } else {
            button.innerHTML = showIcon;
        }
    });
}