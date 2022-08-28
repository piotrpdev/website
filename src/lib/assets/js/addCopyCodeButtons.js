const checkIcon = '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 457.57"><path d="M0 220.57c100.43-1.33 121-5.2 191.79 81.5 54.29-90 114.62-167.9 179.92-235.86C436-.72 436.5-.89 512 .24 383.54 143 278.71 295.74 194.87 457.57 150 361.45 87.33 280.53 0 220.57Z" style="fill-rule:evenodd"/></svg>';

const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.07 122.88" style="enable-background:new 0 0 111.07 122.88" xml:space="preserve"><path d="m97.67 20.81.01.02c3.7.01 7.04 1.51 9.46 3.93 2.4 2.41 3.9 5.74 3.9 9.42h.02v75.31h-.02c-.01 3.68-1.51 7.03-3.93 9.46a13.32 13.32 0 0 1-9.42 3.9v.02H38.47v-.02c-3.69-.01-7.04-1.5-9.46-3.93a13.37 13.37 0 0 1-3.91-9.42V34.19h.02c.01-3.69 1.52-7.04 3.94-9.46 2.41-2.4 5.73-3.9 9.42-3.91v-.02h.02c19.72.01 39.45.01 59.17.01zM.02 75.38 0 13.39v-.01h.02a13.44 13.44 0 0 1 3.93-9.46C6.36 1.52 9.69.02 13.37.01V0h59.21c7.69 0 8.9 9.96.01 10.16H13.38v-.02c-.88 0-1.68.37-2.27.97-.59.58-.96 1.4-.96 2.27h.02v61.99c0 8.26-10.15 8.72-10.15.01zm100.89 34.11V34.18h.02c0-.87-.37-1.68-.97-2.27-.59-.58-1.4-.96-2.28-.96v.02H38.46v-.02c-.88 0-1.68.38-2.27.97-.59.58-.96 1.4-.96 2.27h.02v75.31h-.02c0 .88.38 1.68.97 2.27.59.59 1.4.96 2.27.96v-.02h59.22v.02c.87 0 1.68-.38 2.27-.97.59-.58.96-1.4.96-2.27h-.01z" style="fill-rule:evenodd;clip-rule:evenodd"/></svg>';


export default function addCopyCodeButtons() {
    const codeBlocks = document.querySelectorAll('pre > code');

    const copyCode = (elm) => {
        const but = elm.currentTarget;
        navigator.clipboard.writeText(but.parentNode.textContent);
        but.innerHTML = checkIcon;
        setTimeout(() => but.innerHTML = copyIcon, 500);
    };

    if (codeBlocks) {
        codeBlocks.forEach((elm) => {
            const copyCodeButton = document.createElement('button');
            copyCodeButton.type = 'button';
            copyCodeButton.innerHTML = copyIcon
            copyCodeButton.classList.add('copy-code-button');
            elm.parentNode.prepend(copyCodeButton);
            copyCodeButton.addEventListener('click', copyCode);
        });
    }
}