const data = [
    {
        id: 1,
        question: "What is ReactJS?",
        answers: [
          {
            text: "A programming language",
            correct: false,
          },
          {
            text: "A JavaScript library for building user interfaces",
            correct: true,
          },
          {
            text: "A database management system",
            correct: false,
          },
          {
            text: "A styling framework",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question: "In Angular, what is a component?",
        answers: [
          {
            text: "A server-side script",
            correct: false,
          },
          {
            text: "A user interface element",
            correct: true,
          },
          {
            text: "A database table",
            correct: false,
          },
          {
            text: "A programming language",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "What does HTML stand for?",
        answers: [
          {
            text: "HyperText Markup Language",
            correct: true,
          },
          {
            text: "High-Level Text Language",
            correct: false,
          },
          {
            text: "Home Tool Markup Language",
            correct: false,
          },
          {
            text: "Hyper Transfer Markup Language",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "Which of the following is a valid CSS property for text alignment?",
        answers: [
          {
            text: "text-spacing",
            correct: false,
          },
          {
            text: "line-height",
            correct: false,
          },
          {
            text: "text-align",
            correct: true,
          },
          {
            text: "spacing-align",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "What does the 'JSX' stand for in ReactJS?",
        answers: [
          {
            text: "JavaScript XML",
            correct: true,
          },
          {
            text: "Java Syntax Extension",
            correct: false,
          },
          {
            text: "JSON and XML",
            correct: false,
          },
          {
            text: "JavaScript Extension",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "In ReactJS, what is the significance of the 'useEffect' hook?",
        answers: [
          {
            text: "It handles form validation",
            correct: false,
          },
          {
            text: "It performs side effects in function components",
            correct: true,
          },
          {
            text: "It defines the structure of a component",
            correct: false,
          },
          {
            text: "It manages state in class components",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "What is Angular CLI used for?",
        answers: [
          {
            text: "To create database schemas",
            correct: false,
          },
          {
            text: "To generate Angular components, services, and modules",
            correct: true,
          },
          {
            text: "To automate CSS styling",
            correct: false,
          },
          {
            text: "To debug JavaScript code",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
          {
            text: "It refers to the current HTML element",
            correct: false,
          },
          {
            text: "It represents the current object in a method or function",
            correct: true,
          },
          {
            text: "It is used to declare variables",
            correct: false,
          },
          {
            text: "It is a reserved keyword with no specific purpose",
            correct: false,
          },
        ],
      },
      {
        id: 9,
        question: "In CSS, what is the difference between 'margin' and 'padding'?",
        answers: [
          {
            text: "They are used interchangeably and have the same meaning",
            correct: false,
          },
          {
            text: "Margin is the space inside the border, while padding is the space outside the border",
            correct: false,
          },
          {
            text: "Margin is the space outside the border, while padding is the space inside the border",
            correct: true,
          },
          {
            text: "They both refer to the same concept and are redundant",
            correct: false,
          },
        ],
      },
      {
        id: 10,
        question: "What does the 'defer' attribute do when included in a script tag?",
        answers: [
          {
            text: "It forces the script to execute immediately",
            correct: false,
          },
          {
            text: "It delays the script execution until the HTML parsing is complete",
            correct: true,
          },
          {
            text: "It prevents the script from loading",
            correct: false,
          },
          {
            text: "It speeds up the script execution by skipping certain checks",
            correct: false,
          },
        ],
      },
      {
        id: 11,
        question: "Explain the concept of 'hoisting' in JavaScript and provide an example.",
        answers: [
          {
            text: "It refers to the visual representation of code in the browser",
            correct: false,
          },
          {
            text: "It is the process of moving all declarations to the top of the script or function",
            correct: true,
          },
          {
            text: "It is a feature in React for handling state changes",
            correct: false,
          },
          {
            text: "It is a technique in CSS for adjusting the layout",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "What are the key differences between class components and functional components in ReactJS?",
        answers: [
          {
            text: "There are no differences; they can be used interchangeably",
            correct: false,
          },
          {
            text: "Class components can have state, while functional components cannot",
            correct: false,
          },
          {
            text: "Functional components are stateless, while class components can manage state",
            correct: true,
          },
          {
            text: "Functional components are deprecated in favor of class components",
            correct: false,
          },
        ],
      },
      {
        id: 13,
        question: "Explain the concept of 'zone' in Angular and its significance.",
        answers: [
          {
            text: "It is a unit of time measurement in animations",
            correct: false,
          },
          {
            text: "It is a term used in CSS for styling elements",
            correct: false,
          },
          {
            text: "It is a runtime context that encapsulates the execution of asynchronous operations in Angular",
            correct: true,
          },
          {
            text: "It is a design pattern for managing state in Angular applications",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "What is the purpose of the 'box-sizing' property in CSS, and how does it affect layout?",
        answers: [
          {
            text: "It sets the background color of a box element",
            correct: false,
          },
          {
            text: "It defines the width and height of a box element",
            correct: false,
          },
          {
            text: "It determines how the total width and height of an element are calculated",
            correct: true,
          },
          {
            text: "It controls the spacing between inline elements",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "Explain the purpose of the 'dangerouslySetInnerHTML' prop in React and when it should be used.",
        answers: [
          {
            text: "It is used for handling events in React components",
            correct: false,
          },
          {
            text: "It allows setting HTML directly from React components but poses a security risk",
            correct: true,
          },
          {
            text: "It is a prop used for defining inline styles in React",
            correct: false,
          },
          {
            text: "It is a prop used for defining default values in React components",
            correct: false,
          },
        ],
      },
  ];
  
  export default data;
  