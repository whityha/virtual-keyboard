'use stict'
const keyz = [
    ['Backquote', 'Digit1', 'Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
    ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete'],
    ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
    ['ShiftLeft','IntlBackslash','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'],
    ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ControlRight','ArrowLeft','ArrowDown','ArrowRight']
];

class Keyboard {
    constructor() {
        this.properties = {
            CapsLock: false, 
            ShiftLeft: false, 
            ShiftRight: false,
            Language: window.localStorage.getItem('language') || 'EN'
        },
        this.keys = { 
            Backquote: {
                EN: '`',
                RU: 'ё', 
                functional: false, 
                size: 'regular', 
                code: 'Backquote',
                shiftRU: null,
                shiftEN: '~'
            },
            Digit1: {
                EN: '1',
                RU: '1', 
                functional: false, 
                size: 'regular', 
                code: 'Digit1',
                shiftRU: '!',
                shiftEN: '!'
            },
            Digit2: {
                EN: '2',
                RU: '2',
                functional: false,
                size: 'regular',
                code: 'Digit2',
                shiftRU: '"',
                shiftEN: '@'
            },
            Digit3: {
                EN: '3',
                RU: '3',
                functional: false,
                size: 'regular',
                code: 'Digit3',
                shiftRU: '№',
                shiftEN: '#'
            },
            Digit4: {
                EN: '4',
                RU: '4',
                functional: false,
                size: 'regular',
                code: 'Digit4',
                shiftRU: ';',
                shiftEN: '$'
            },
            Digit5: {
                EN: '5',
                RU: '5',
                functional: false,
                size: 'regular',
                code: 'Digit5',
                shiftRU: '%',
                shiftEN: '%'
            },
            Digit6: {
                EN: '6',
                RU: '6',
                functional: false,
                size: 'regular',
                code: 'Digit6',
                shiftRU: ':',
                shiftEN: '^'
            },
            Digit7: {
                EN: '7',
                RU: '7',
                functional: false,
                size: 'regular',
                code: 'Digit7',
                shiftRU: '?',
                shiftEN: '&'
            },
            Digit8: {
                EN: '8',
                RU: '8',
                functional: false,
                size: 'regular',
                code: 'Digit8',
                shiftRU: '*',
                shiftEN: '*'
            },
            Digit9: {
                EN: '9',
                RU: '9',
                functional: false,
                size: 'regular',
                code: 'Digit9',
                shiftRU: '(',
                shiftEN: '('
            },
            Digit0: {
                EN: '0',
                RU: '0',
                functional: false,
                size: 'regular',
                code: 'Digit0',
                shiftRU: ')',
                shiftEN: ')'
            },
            Minus: {
                EN: '-',
                RU: '-',
                functional: false,
                size: 'regular',
                code: 'Minus',
                shiftRU: '_',
                shiftEN: '_'
            },
            Equal: {
                EN: '=',
                RU: '=',
                functional: false,
                size: 'regular',
                code: 'Equal',
                shiftRU: '+',
                shiftEN: '+'
            },
            Backspace: {
                EN: 'Backspace',
                RU: 'Backspace',
                functional: true,
                size: 'double',
                code: 'Backspace',
                shiftRU: null,
                shiftEN: null
            },
            Tab: {
                EN: 'Tab',
                RU: 'Tab',
                functional: true,
                size: 'regular',
                code: 'Tab',
                shiftRU: null,
                shiftEN: null
            },
            KeyQ: {
                EN: 'q',
                RU: 'й',
                functional: false,
                size: 'regular',
                code: 'KeyQ',
                shiftRU: null,
                shiftEN: null
            },
            KeyW: {
                EN: 'w',
                RU: 'ц',
                functional: false,
                size: 'regular',
                code: 'KeyW',
                shiftRU: null,
                shiftEN: null
            },
            KeyE: {
                EN: 'e',
                RU: 'у',
                functional: false,
                size: 'regular',
                code: 'KeyE',
                shiftRU: null,
                shiftEN: null
            },
            KeyR: {
                EN: 'r',
                RU: 'к',
                functional: false,
                size: 'regular',
                code: 'KeyR',
                shiftRU: null,
                shiftEN: null
            },
            KeyT: {
                EN: 't',
                RU: 'е',
                functional: false,
                size: 'regular',
                code: 'KeyT',
                shiftRU: null,
                shiftEN: null
            },
            KeyY: {
                EN: 'y',
                RU: 'н',
                functional: false,
                size: 'regular',
                code: 'KeyY',
                shiftRU: null,
                shiftEN: null
            },
            KeyU: {
                EN: 'u',
                RU: 'г',
                functional: false,
                size: 'regular',
                code: 'KeyU',
                shiftRU: null,
                shiftEN: null
            },
            KeyI: {
                EN: 'i',
                RU: 'ш',
                functional: false,
                size: 'regular',
                code: 'KeyI',
                shiftRU: null,
                shiftEN: null
            },
            KeyO: {
                EN: 'o',
                RU: 'щ',
                functional: false,
                size: 'regular',
                code: 'KeyO',
                shiftRU: null,
                shiftEN: null
            },
            KeyP: {
                EN: 'p',
                RU: 'з',
                functional: false,
                size: 'regular',
                code: 'KeyP',
                shiftRU: null,
                shiftEN: null
            },
            BracketLeft: {
                EN: '[',
                RU: 'х',
                functional: false,
                size: 'regular',
                code: 'BracketLeft',
                shiftRU: null,
                shiftEN: '{'
            },
            BracketRight: {
                EN: ']',
                RU: 'ъ',
                functional: false,
                size: 'regular',
                code: 'BracketRight',
                shiftRU: null,
                shiftEN: '}'
            },
            Delete: {
                EN: 'Del',
                RU: 'Del',
                functional: true,
                size: 'regular',
                code: 'Delete'
            },
            CapsLock: {
                EN: 'CapsLock',
                RU: 'CapsLock',
                functional: true,
                size: 'double',
                code: 'CapsLock',
                shiftRU: null,
                shiftEN: null
            },
            KeyA: {
                EN: 'a',
                RU: 'ф',
                functional: false,
                size: 'regular',
                code: 'KeyA',
                shiftRU: null,
                shiftEN: null
            },
            KeyS: {
                EN: 's',
                RU: 'ы',
                functional: false,
                size: 'regular',
                code: 'KeyS',
                shiftRU: null,
                shiftEN: null
            },
            KeyD: {
                EN: 'd',
                RU: 'в',
                functional: false,
                size: 'regular',
                code: 'KeyD',
                shiftRU: null,
                shiftEN: null
            },
            KeyF: {
                EN: 'f',
                RU: 'а',
                functional: false,
                size: 'regular',
                code: 'KeyF',
                shiftRU: null,
                shiftEN: null
            },
            KeyG: {
                EN: 'g',
                RU: 'п',
                functional: false,
                size: 'regular',
                code: 'KeyG',
                shiftRU: null,
                shiftEN: null
            },
            KeyH: {
                EN: 'h',
                RU: 'р',
                functional: false,
                size: 'regular',
                code: 'KeyH',
                shiftRU: null,
                shiftEN: null
            },
            KeyJ: {
                EN: 'j',
                RU: 'о',
                functional: false,
                size: 'regular',
                code: 'KeyJ',
                shiftRU: null,
                shiftEN: null
            },
            KeyK: {
                EN: 'k',
                RU: 'л',
                functional: false,
                size: 'regular',
                code: 'KeyK',
                shiftRU: null,
                shiftEN: null
            },
            KeyP: {
                EN: 'p',
                RU: 'з',
                functional: false,
                size: 'regular',
                code: 'KeyP',
                shiftRU: null,
                shiftEN: null
            },
            KeyL: {
                EN: 'l',
                RU: 'д',
                functional: false,
                size: 'regular',
                code: 'KeyL',
                shiftRU: null,
                shiftEN: null
            },
            Semicolon: {
                EN: ';',
                RU: 'ж',
                functional: false,
                size: 'regular',
                code: 'Semicolon',
                shiftRU: null,
                shiftEN: ':'
            },
            Quote: {
                EN: `'`,
                RU: 'э',
                functional: false,
                size: 'regular',
                code: 'Quote',
                shiftRU: null,
                shiftEN: '"'
            },
            Enter: {
                EN: 'Enter',
                RU: 'Enter',
                functional: true,
                size: 'double',
                code: 'Enter',
                shiftRU: null,
                shiftEN: null
            },
            ShiftLeft: {
                EN: 'Shift',
                RU: 'Shift',
                functional: true,
                size: 'double',
                code: 'ShiftLeft',
                shiftRU: null,
                shiftEN: null
            },
            ShiftRight: {
                EN: 'Shift',
                RU: 'Shift',
                functional: true,
                size: 'regular',
                code: 'ShiftRight',
                shiftRU: null,
                shiftEN: null
            },
            IntlBackslash: {
                EN: '/',
                RU: '/',
                functional: false,
                size: 'regular',
                code: 'IntlBackslash',
                shiftRU: null,
                shiftEN: null
            },
            Backslash: {
                EN: '\\',
                RU: '\\',
                functional: false,
                size: 'regular',
                code: 'Backslash',
                shiftRU: '/',
                shiftEN: '|'
            },
            Slash: {
                EN: '/',
                RU: '.',
                functional: false,
                size: 'regular',
                code: 'Slash',
                shiftRU: ',',
                shiftEN: '?'
            },
            KeyZ: {
                EN: 'z',
                RU: 'я',
                functional: false,
                size: 'regular',
                code: 'KeyZ',
                shiftRU: null,
                shiftEN: null
            },
            KeyX: {
                EN: 'x',
                RU: 'ч',
                functional: false,
                size: 'regular',
                code: 'KeyX',
                shiftRU: null,
                shiftEN: null
            },
            KeyC: {
                EN: 'c',
                RU: 'с',
                functional: false,
                size: 'regular',
                code: 'KeyC',
                shiftRU: null,
                shiftEN: null
            },
            KeyV: {
                EN: 'v',
                RU: 'м',
                functional: false,
                size: 'regular',
                code: 'KeyV',
                shiftRU: null,
                shiftEN: null
            },
            KeyB: {
                EN: 'b',
                RU: 'и',
                functional: false,
                size: 'regular',
                code: 'KeyB',
                shiftRU: null,
                shiftEN: null
            },
            KeyN: {
                EN: 'n',
                RU: 'т',
                functional: false,
                size: 'regular',
                code: 'KeyN',
                shiftRU: null,
                shiftEN: null
            },
            KeyM: {
                EN: 'm',
                RU: 'ь',
                functional: false,
                size: 'regular',
                code: 'KeyM',
                shiftRU: null,
                shiftEN: null
            },
            Comma: {
                EN: ',',
                RU: 'б',
                functional: false,
                size: 'regular',
                code: 'Comma',
                shiftRU: null,
                shiftEN: '<'
            },
            Period: {
                EN: '.',
                RU: 'ю',
                functional: false,
                size: 'regular',
                code: 'Period',
                shiftRU: null,
                shiftEN: '>'
            },
            ArrowUp: {
                EN: '&#x2191;',
                RU: '&#x2191;',
                functional: true,
                size: 'regular',
                code: 'ArrowUp',
                shiftRU: null,
                shiftEN: null,
                arrow: true
            },
            ControlLeft: {
                EN: 'Ctrl',
                RU: 'Ctrl',
                functional: true,
                size: 'regular',
                code: 'ControlLeft',
                shiftRU: null,
                shiftEN: null
            },
            ControlRight: {
                EN: 'Ctrl',
                RU: 'Ctrl',
                functional: true,
                size: 'regular',
                code: 'ControlRight',
                shiftRU: null,
                shiftEN: null
            },
            MetaLeft: {
                EN: 'Win',
                RU: 'Win',
                functional: true,
                size: 'regular',
                code: 'MetaLeft',
                shiftRU: null,
                shiftEN: null
            },
            AltLeft: {
                EN: 'Alt',
                RU: 'Alt',
                functional: true,
                size: 'regular',
                code: 'AltLeft',
                shiftRU: null,
                shiftEN: null
            },
            AltRight: {
                EN: 'Alt',
                RU: 'Alt',
                functional: true,
                size: 'regular',
                code: 'AltRight',
                shiftRU: null,
                shiftEN: null
            },
            ArrowDown: {
                EN: '&#x2193;',
                RU: '&#x2193;',
                functional: true,
                size: 'regular',
                code: 'ArrowDown',
                shiftRU: null,
                shiftEN: null,
                arrow: true
            },
            ArrowLeft: {
                EN: '&#x2190;',
                RU: '&#x2190;',
                functional: true,
                size: 'regular',
                code: 'ArrowLeft',
                shiftRU: null,
                shiftEN: null,
                arrow: true
            },
            ArrowRight: {
                EN: '&#x2192;',
                RU: '&#x2192;',
                functional: true,
                size: 'regular',
                code: 'ArrowRight',
                shiftRU: null,
                shiftEN: null,
                arrow: true
            },
            Space: {
                EN: 'English',
                RU: 'Русский',
                functional: false,
                size: 'space',
                code: 'Space',
                shiftRU: null,
                shiftEN: null
            }
        }
    }   

    init(keys) {
        const wrapper = document.querySelector('.wrapper');
        const keyboard = document.createElement('div');
        const textarea = document.querySelector('textarea');
        keyboard.classList.add('keyboard');
        for(let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.classList.add('line', `line-${i}`);
            for(let key of keys [i]) {
                const btn = document.createElement('div'); 
                btn.classList.add(this.keys[key]['size'], 'btn');
                btn.innerHTML = this.capsBtns(key);
                btn.setAttribute('data-code',this.keys[key]['code']);
                if(this.keys[key]['code'] === 'CapsLock' && this.properties['CapsLock']) { 
                    btn.style.backgroundColor = 'red';
                } else if(this.keys[key]['code'] === 'ShiftLeft' && this.properties['ShiftLeft']) {
                    btn.style.backgroundColor = 'red';
                } else if(this.keys[key] ['code'] === 'ShiftRight' && this.properties['ShiftRight']) {
                    btn.style.backgroundColor = 'red';
                }
                if(this.keys[key] ['functional']) btn.classList.add('functional');
                line.append(btn);
            }
            keyboard.append(line);
        }
        const currentKeyboard = document.querySelector('.keyboard');
        if(currentKeyboard) currentKeyboard.remove();
        wrapper.append(keyboard);
        this.textarea = textarea;
        window.localStorage.setItem('language', this.properties.Language)
    }    
    capsBtns(key) {
        if((this.properties.ShiftLeft || this.properties.ShiftRight) && !this.keys[key].functional && this.keys[key].code != 'Space' && !this.properties.CapsLock) {  //условие, работы клавиатуры, если нажат Shift и не нажат CapsLock      
            if(this.properties.Language == 'EN' && this.keys[key]['shiftEN']) return this.keys[key]['shiftEN'] //условие отображения альтернативных значений на англ расскалдке при нажатом shift
            else if (this.properties.Language == 'RU' && this.keys[key]['shiftRU']) return this.keys[key]['shiftRU'] //условие отображения альтернативных значений на русской расскалдке при нажатом shift
            else return this.keys[key][this.properties.Language].toUpperCase(); //выводит большие буквы, при нажатии на shift
        } else if(this.properties.CapsLock && !this.keys[key].functional && this.keys[key].code != 'Space' && !(this.properties.ShiftLeft || this.properties.ShiftRight)) { //условия работы при включенном CapsLock и не включенных Shift`ах
            return this.keys[key][this.properties.Language].toUpperCase();
        } else if(this.properties.CapsLock && (this.properties.ShiftLeft || this.properties.ShiftRight)) { //условие для нажатых и CapsLock и Shift
            if(this.properties.Language == 'EN' && this.keys[key]['shiftEN']) return this.keys[key]['shiftEN'] //условие отображения альтернативных значений на англ расскалдке при нажатом shift
            else if (this.properties.Language == 'RU' && this.keys[key]['shiftRU']) return this.keys[key]['shiftRU'] //условие отображения альтернативных значений на русской расскалдке при нажатом shift
            else return this.keys[key][this.properties.Language]
        } else {            
            return this.keys[key][this.properties.Language] //возвращается просто меленькие буквы
        } 
    }
    addEventClickOnKeys() {        
        document.querySelector('.wrapper').addEventListener('click', (e) => { //навешиваем обработчики событий на кнопки            
            if(e.target.classList.contains('btn')) {    
                if(e.target.dataset.code == 'Tab') { //рабоата кнопки Tab
                    document.querySelector('textarea').value += '\t';
                } else if(e.target.dataset.code == 'CapsLock') { //включение/выключение кнопки CapsLock
                    this.properties['CapsLock'] = !this.properties['CapsLock']; 
                    this.init(keyz);                    
                } else if(e.target.dataset.code == 'ShiftRight') { //включение выключение правого шифта
                    this.properties['ShiftRight'] = !this.properties['ShiftRight']; 
                    this.init(keyz);                    
                } else if(e.target.dataset.code == 'ShiftLeft') { //включение выключение левого шифта
                    this.properties['ShiftLeft'] = !this.properties['ShiftLeft'];
                    this.init(keyz);                    
                } else if((e.target.dataset.code == 'AltLeft' || e.target.dataset.code == 'AltRight') && 
                (this.properties['ShiftLeft'] || this.properties['ShiftRight'])) { //переключение языка при нажатом Shift
                    if(this.properties.Language == 'RU') {
                        this.properties.Language = 'EN';
                        this.properties.ShiftLeft = false;
                        this.properties.ShiftRight = false;
                        this.init(keyz);
                        console.log(this.properties.ShiftLeft)
                    } else {
                        this.properties.Language = 'RU';
                        this.properties.ShiftLeft = false;
                        this.properties.ShiftRight = false;
                        this.init(keyz);
                    }                    
                } else if(!this.keys[e.target.dataset.code].functional && !e.target.dataset.data == 'Space' && (this.properties['ShiftRight'] || this.properties['ShiftLeft'])) {
                    document.querySelector('textarea').value += e.target.innerHTML
                    this.properties.ShiftLeft = false;
                    this.properties.ShiftRight = false;
                    this.init(keyz)                    
                } else if(e.target.dataset.code == 'Space') {
                    document.querySelector('textarea').value += ' ';                    
                } else if(e.target.dataset.code == 'Enter') {
                    document.querySelector('textarea').value += '\n';                    
                } else if(e.target.dataset.code == 'Backspace') {                    
                    const i = this.textarea.selectionStart
                    const j = this.textarea.selectionEnd
                    if(i === j) { //удаление одного символа
                        this.textarea.value = this.textarea.value.substring(0, i - 1) + this.textarea.value.substring(i)
                        this.textarea.selectionStart = i - 1;
                        this.textarea.selectionEnd = i - 1;
                    } else { //удаление выделенного набора символов
                        this.textarea.value = this.textarea.value.substring(0, i) + this.textarea.value.substring(j)
                        this.textarea.selectionStart = i;
                        this.textarea.selectionEnd = i;
                    }                    
                } else if(e.target.dataset.code == 'Delete') {
                    const i = this.textarea.selectionStart
                    const j = this.textarea.selectionEnd
                    if(i === j) { //удаление одного символа
                        this.textarea.value = this.textarea.value.substring(0, i) + this.textarea.value.substring(i+1)
                        this.textarea.selectionStart = i;
                        this.textarea.selectionEnd = i;
                    } else { //удаление выделенного набора символов
                        this.textarea.value = this.textarea.value.substring(0, i) + this.textarea.value.substring(j)
                        this.textarea.selectionStart = i;
                        this.textarea.selectionEnd = i;
                    }   
                } else if(this.keys[e.target.dataset.code].arrow) { // функционал для отображения стрелочек
                    document.querySelector('textarea').value += e.target.innerText;
                } else if(!this.keys[e.target.dataset.code].functional) {
                    document.querySelector('textarea').value += e.target.innerText;
                    if(keyboard.properties.ShiftLeft == true || keyboard.properties.ShiftRight == true) {
                        keyboard.properties.ShiftLeft = false;
                        keyboard.properties.ShiftRight = false;
                        keyboard.init(keyz)
                    }
                } 
                this.textarea.focus()
            }     
                
        });
    }
}

startPage();
const keyboard = new Keyboard;
keyboard.init(keyz)
keyboard.addEventClickOnKeys();


document.body.addEventListener('keydown', (e) => {
    let condition =  keyz.some(item => item.includes(e.code))
   
    if(condition) {   
        const btn = document.querySelector(`[data-code=${e.code}]`);
        btn.style.backgroundColor = 'red';

        if(keyboard.keys[e.code]['code'] == 'Tab' || keyboard.keys[e.code]['EN'] == 'Alt') e.preventDefault();

        if(e.altKey && e.shiftKey) {
            keyboard.properties.Language == 'RU' ? keyboard.properties.Language = 'EN' : keyboard.properties.Language = 'RU';        
            keyboard.init(keyz)
        }

        if(e.code == 'ShiftLeft') {
            if(keyboard.properties.ShiftLeft) {
                e.preventDefault()
            } else {
                keyboard.properties.ShiftLeft = true
                keyboard.init(keyz)
            }
        }    
        if(e.code == 'ShiftRight') {   
            if(keyboard.properties.ShiftRight) {
                e.preventDefault()
            } else {
                keyboard.properties.ShiftRight = true
                keyboard.init(keyz)
            }         
            
        }    
    }
});

document.body.addEventListener('keyup', (e) => {
    let condition =  keyz.some(item => item.includes(e.code))
    if(condition) {     
        if(keyboard.keys[e.code]['code'] === 'Tab') {
            e.preventDefault();
            keyboard.textarea.value += '\t'
        }
        if(keyboard.keys[e.code]['code'] != 'ShiftLeft' && keyboard.keys[e.code]['code'] != 'ShiftRight') {
            document.querySelector(`[data-code=${e.code}]`).style = null;            
        }

        if(keyboard.keys[e.code]['code'] === 'CapsLock') {
            keyboard.properties['CapsLock'] = !keyboard.properties['CapsLock'];
            keyboard.init(keyz);
        }

        if(e.code == 'ShiftLeft') {            
            keyboard.properties.ShiftLeft = false
            keyboard.init(keyz)
        }
        
        if(e.code == 'ShiftRight') {            
            keyboard.properties.ShiftRight = false
            keyboard.init(keyz);
        }   
    }
});

function startPage() {
    const wrapper = document.createElement('div');
    const textarea = document.createElement('textarea');
    const keyboard = document.createElement('div');
    const title_text = document.createElement('h1');
    const switch_language = document.createElement('p');
    wrapper.classList.add('wrapper');
    textarea.autofocus = true;
    textarea.setAttribute('rows', 15);
    textarea.classList.add('text');
    keyboard.classList.add('keyboard');
    title_text.innerHTML = 'RSS Virtual Keyboard'
    switch_language.innerHTML = `
        <p>Смена языка осуществляется комбинацией клавиш левый Shift + левый Alt как на виртуальной клавиатуре, так и на физической</p>
        <p>Включение Shift - однократное нажатие на кнопку Shift на виртуальной клавиатуре</p>
        <p>Включение CapsLock - однократное нажатие на кнопку CapsLock на физической, либо виртуальной клавиатуре</p>
        <p>Если нажать на Shift при уже включенном CapsLock - буквы становятся маленькими, но другие символы такие же, как при включенном Shift</p>
    `
    wrapper.append(title_text, textarea, switch_language, keyboard);
    document.querySelector('body').prepend(wrapper)
}