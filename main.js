function encrypt(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, (match) => rules[match]);
}

function decrypt(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.replace(/enter|imes|ai|ober|ufat/g, (match) => rules[match]);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado para a área de transferência');
    }).catch(err => {
        alert('Erro ao copiar o texto: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnEncrypt = document.getElementById('btnEncrypt');
    const btnDecrypt = document.getElementById('btnDecrypt');
    const textarea = document.getElementById('msgTextarea');
    const resultSection = document.getElementById('result');

    btnEncrypt.addEventListener('click', () => {
        const inputText = textarea.value;
        const encryptedText = encrypt(inputText);
        displayResult(encryptedText);
    });

    btnDecrypt.addEventListener('click', () => {
        const inputText = textarea.value;
        const decryptedText = decrypt(inputText);
        displayResult(decryptedText);
    });

    function displayResult(text) {
        resultSection.innerHTML = `
            <div class="msg-found fade-in">
                <textarea rows="3" cols="3">${text}</textarea>
                <button id="btnCopy" class="btn dark-blue unselectable">Copiar</button>
            </div>
        `;

        document.getElementById('btnCopy').addEventListener('click', () => {
            copyToClipboard(text);
        });
    }
});
