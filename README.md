# how-to-train-your-typer
Typing speed training app with OpenAI Integration

🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲

Welcome to the **How to Train Your Typer** project! This interactive web application helps users enhance their typing skills through engaging exercises based on various difficulty levels, with dynamically generated content.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)

## Features
- **Dynamic Prompts with OpenAI**: Incorporates OpenAI's API to generate prompts tailored to different difficulty levels. This allows users to practice typing on fresh, never-seen-before content every time they start a new exercise. Choose between Easy, Medium, or Hard difficulty, and the API will generate an appropriate prompt for practice.

- **Difficulty Levels**: In addition to OpenAI-generated content, users can select from predefined paragraphs categorized as Easy, Medium, or Hard. This dual approach ensures flexibility and freshness of content while providing structured learning.

- **Real-Time Typing Feedback**: The application provides immediate feedback on typing speed and accuracy.

- **Typing Metrics**: The app displays important metrics such as:
  - **Mistakes**: Tracks errors to help identify weak areas.
  - **Words Per Minute (WPM)** and **Characters Per Minute (CPM)**: Monitors typing speed and correct character inputs.

- **Progress Tracking & Reports**: Track progress over time, set personal goals, and generate detailed reports after each typing session. Reports include your typing speed, mistakes, and accuracy with both fixed texts and AI-generated prompts.

## Technologies Used
- **React**: For building an interactive, component-based UI.
- **CSS**: For styling and responsiveness.
- **React Hooks**: To manage state and application logic efficiently.
- **OpenAI API**: To dynamically generate typing prompts based on chosen difficulty levels.
- **JavaScript**: Core functionality and handling interactions.

## Usage
1. **Select a Difficulty Level**: Choose from Easy, Medium, or Hard. The app uses the OpenAI API to generate a unique typing prompt for each session based on your selection.

2. **Start Typing**: The input field will display the generated text. Begin typing to receive instant feedback.

3. **Generate a Report**: Use the "Print Report" button to view a detailed breakdown of your typing performance. This report highlights:
   - Typed text, with visual indicators for mistakes.
   - Typing metrics such as WPM, CPM, and total mistakes.
   - Interpretative insights to guide self-improvement.

4. **Track Progress**: Use built-in tools to monitor your typing development, engage with new prompts, and set personal improvement goals.

## How It Works
- **OpenAI API Integration**: When a difficulty level is selected, the app sends a request to OpenAI's API, specifying the desired difficulty (Easy, Medium, or Hard). The API returns a text prompt based on complexity, designed to align with the user's selection.
- **React Components**: Manage and display the user interface, typing area, feedback, and reports.
- **Real-Time Feedback**: Tracks each keystroke for accuracy, providing immediate visual and numerical feedback on WPM, CPM, and mistakes.

## Contributing
Feel free to fork the repository and submit a pull request for any feature suggestions, enhancements, or bug fixes. Contributions of all types are appreciated!

---

