// Task 1: Quasi-Tagged Templates

const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

function localize(stringsArr, ...keys) {
  const language = "fr"; // language of translation
  const translation = translations[language];

  return stringsArr.reduce((result, str, i) => {
    return result + str + (translation[keys[i]] || "");
  }, "");
}

const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;
const localizedText = localize`${greeting}! ${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);
console.log(localizedText);

// Task 2: Advanced Tagged Template

function highlightKeywords(template, keywords) {
    return template.replace(/\${(\d+)}/g, (_, index) => {
        const keyword = keywords[index];
        if (keyword) {
            return `<span class='highlight'>${keyword}</span>`;
        }
        return '';
    });
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);

// Task 3: Multiline Tagged Template

function multiline(strings, ...values) {
    const formattedLines = strings.reduce((result, str, i) => {
        const lines = str.split('\n');
        let lineNumber = 1
        lines.forEach((line, index) => {
            if(line.trim() !== '') result.push(`${lineNumber++} ${line}`);
        });
        if (i < values.length) {
            result.push(values[i]);
        }
        return result;
    }, []);

    return formattedLines.join('\n');
}

const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);

//Task 4: Implementing Debounce Function

function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function debouncedSearch(query) {
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});

// Task 5: Implementing Throttle Function

function throttle(func, interval) {
    let lastExecution = 0;
    let timeoutId;

    return function throttled(...args) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastExecution;

        if (elapsedTime >= interval) {
            clearTimeout(timeoutId);

            func.apply(this, args);
            lastExecution = currentTime;
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecution = Date.now();
                timeoutId = null;
            }, interval - elapsedTime);
        }
    };
}

function onScroll(event) {
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);

// Task 6: Currying Function Implementation

function curry (func, arity) {
    return function curried(...args) {
        if(args.length >= arity ) {
            return func(...args)
        } else {
            return function (...remainingArgs){
                return curried(...args, ...remainingArgs)

            }
        }
        
    }
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); 
const step2 = step1(3); 
const result = step2(4);

console.log("Result:", result); 