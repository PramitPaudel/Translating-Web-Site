// Function to start voice input
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser doesn't support speech recognition.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = getLanguageCode(document.getElementById('sourceLang').value);
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript;
        document.getElementById('inputText').value = speechResult;
        translateText(); // Automatically translate once speech is converted to text
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        console.log('Speech recognition service disconnected');
    };

    recognition.start();
}

// Function to translate text
function translateText() {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;

    const translatedText = performTranslation(inputText, sourceLang, targetLang);
    document.getElementById('translatedText').innerText = translatedText;
}

// Function to perform translation
function performTranslation(text, sourceLang, targetLang) {
    const dictionary = {
        english: {
            nepali: {
                'hello': 'नमस्ते',
                'house': 'घर',
                'dog': 'कुकुर',
                'cow': 'गाय',
                'yes': 'हो',
                'no': 'न',
                'thank you': 'धन्यवाद',
                'good luck': 'शुभकामना',
                'sorry': 'माफ गर्नुहोस्',
                'good night': 'शुभ रात्री',
                'good morning': 'सुप्रभात',
                'how are you?': 'कसरी हुनुहुन्छ?',
                'I need help': 'मलाई मद्दत चाहिन्छ',
                'cheap': 'सस्तो',
                'expensive': 'महंगो'
            },
            newari: {
                'hello': 'ल्हसा',
                'house': 'ज्याः',
                'dog': 'छ्वा',
                'cow': 'ग्या',
                'yes': 'थ्यो',
                'no': 'नि',
                'thank you': 'धन्यवाद',
                'good luck': 'शुभकामना',
                'sorry': 'माफ गर्नुहोस्',
                'good night': 'शुभ रात्री',
                'good morning': 'सुप्रभात',
                'how are you?': 'कसरी हुनुहुन्छ?',
                'I need help': 'मलाई मद्दत चाहिन्छ',
                'cheap': 'सस्तो',
                'expensive': 'महंगो'
            }
        },
        nepali: {
            english: {
                'नमस्ते': 'hello',
                'घर': 'house',
                'कुकुर': 'dog',
                'गाय': 'cow',
                'हो': 'yes',
                'न': 'no',
                'धन्यवाद': 'thank you',
                'शुभकामना': 'good luck',
                'माफ गर्नुहोस्': 'sorry',
                'शुभ रात्री': 'good night',
                'सुप्रभात': 'good morning',
                'कसरी हुनुहुन्छ?': 'how are you?',
                'मलाई मद्दत चाहिन्छ': 'I need help',
                'सस्तो': 'cheap',
                'महंगो': 'expensive'
            },
            newari: {
                'नमस्ते': 'ल्हसा',
                'घर': 'ज्याः',
                'कुकुर': 'छ्वा',
                'गाय': 'ग्या',
                'हो': 'थ्यो',
                'न': 'नि',
                'धन्यवाद': 'धन्यवाद',
                'शुभकामना': 'शुभकामना',
                'माफ गर्नुहोस्': 'माफ गर्नुहोस्',
                'शुभ रात्री': 'शुभ रात्री',
                'सुप्रभात': 'सुप्रभात',
                'कसरी हुनुहुन्छ?': 'कसरी हुनुहुन्छ?',
                'मलाई मद्दत चाहिन्छ': 'मलाई मद्दत चाहिन्छ',
                'सस्तो': 'सस्तो',
                'महंगो': 'महंगो'
            }
        },
        newari: {
            nepali: {
                'ल्हसा': 'नमस्ते',
                'ज्याः': 'घर',
                'छ्वा': 'कुकुर',
                'ग्या': 'गाय',
                'थ्यो': 'हो',
                'नि': 'न',
                'धन्यवाद': 'धन्यवाद',
                'शुभकामना': 'शुभकामना',
                'माफ गर्नुहोस्': 'माफ गर्नुहोस्',
                'शुभ रात्री': 'शुभ रात्री',
                'सुप्रभात': 'सुप्रभात',
                'कसरी हुनुहुन्छ?': 'कसरी हुनुहुन्छ?',
                'मलाई मद्दत चाहिन्छ': 'मलाई मद्दत चाहिन्छ',
                'सस्तो': 'सस्तो',
                'महंगो': 'महंगो'
            },
            english: {
                'ल्हसा': 'hello',
                'ज्याः': 'house',
                'छ्वा': 'dog',
                'ग्या': 'cow',
                'थ्यो': 'yes',
                'नि': 'no',
                'धन्यवाद': 'thank you',
                'शुभकामना': 'good luck',
                'माफ गर्नुहोस्': 'sorry',
                'शुभ रात्री': 'good night',
                'सुप्रभात': 'good morning',
                'कसरी हुनुहुन्छ?': 'how are you?',
                'मलाई मद्दत चाहिन्छ': 'I need help',
                'सस्तो': 'cheap',
                'महंगो': 'expensive'
            }
        }
    };

    return dictionary[sourceLang] && dictionary[sourceLang][targetLang] && dictionary[sourceLang][targetLang][text.toLowerCase()]
        ? dictionary[sourceLang][targetLang][text.toLowerCase()]
        : 'Translation not found';
}

// Function to speak text
function speakText() {
    const translatedText = document.getElementById('translatedText').innerText;
    const targetLang = document.getElementById('targetLang').value;
    const msg = new SpeechSynthesisUtterance(translatedText);
    msg.lang = getLanguageCode(targetLang);
    window.speechSynthesis.speak(msg);
}

// Function to get language code for speech synthesis
function getLanguageCode(lang) {
    const languageCodes = {
        nepali: 'ne-NP',
        newari: 'new-NP',
        english: 'en-US'
    };
    return languageCodes[lang] || 'en-US';
}
