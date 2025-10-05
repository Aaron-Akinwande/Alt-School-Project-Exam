# Alt-School-Project-Exam

# Stopwatch Web Application

This is a responsive and fully functional **Stopwatch** built using **HTML**, **CSS**, and **JavaScript**. The project demonstrates a strong understanding of webpage structure, styling, and interactivity through JavaScript logic. It includes essential stopwatch features such as start, stop, reset, and lap recording, along with additional enhancements like milliseconds tracking, an About button, and a copyright footer.

---

## Features

### **Core Stopwatch Functions**

- **Start / Stop Button:** Begins and pauses the timer using `setInterval()` and `clearInterval()`.
- **Reset Button:** Stops the timer and resets all values to zero (`00:00:00.000`).
- **Lap Button:** Records split times dynamically and displays them in a list below the timer.
- **Milliseconds:** The timer now tracks milliseconds with an accuracy of 10 milliseconds.

---

### **User Interface **

- **Centered Layout:** The stopwatch is centered on the page both vertically and horizontally.
- **Responsive Design:** The layout adapts to various screen sizes, making it mobile-friendly.

---

## Technologies Used

- **HTML5:** For structuring the stopwatch layout and defining UI elements.
- **CSS3:** For styling, positioning, and responsive layout using Flexbox.
- **JavaScript (ES6):** For stopwatch functionality, event handling, and lap recording logic.

---

## How It Works

1. The **Start** button initiates the timer using `setInterval()` to update time every 10 milliseconds.
2. The **Stop** button pauses the interval without resetting the values.
3. The **Reset** button stops the timer, clears all laps, and resets the display to zero.
4. The **Lap** button logs the current time and appends it to a visible list.
5. The **About** button opens a message box with details about the stopwatch.
