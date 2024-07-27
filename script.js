// Dictionary for translations
const translations = {
    'en-ne': {
        'Hello': 'नमस्ते',
        'How are you?': 'तपाईंलाई कस्तो छ?',
        // Add more phrases here
    },
    'ne-en': {
        'नमस्ते': 'Hello',
        'तपाईंलाई कस्तो छ?': 'How are you?',
        // Add more phrases here
    },
    'en-nw': {
        'Hello': 'नमस्कार',
        'How are you?': 'तिमी कस्तो छस्?',
        // Add more phrases here
    },
    'nw-en': {
        'नमस्कार': 'Hello',
        'तिमी कस्तो छस्?': 'How are you?',
        // Add more phrases here
    }
};

// Function to perform translation
function performTranslation() {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
    const translatedText = document.getElementById('translatedText');

    const key = `${sourceLang}-${targetLang}`;
    const translation = translations[key] && translations[key][inputText] || 'Translation not found';

    translatedText.textContent = translation;
}

// Function to start voice input
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; // You can change this to match your source language
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('inputText').value = transcript;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}
